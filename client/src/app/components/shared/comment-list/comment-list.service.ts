import { Injectable, OnDestroy } from '@angular/core';
import { ApolloQueryResult, ApolloError} from '@apollo/client/core';
import {
  Maybe,
  CommentableInput,
  CommentEdge,
  PageInfo,
  User,
  CommentableEntities
} from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import  * as Apollo from 'apollo-angular';
import { GraphQLError } from 'graphql';
import { Observable, Subject } from 'rxjs';
import { map, pluck, shareReplay, startWith, takeUntil } from 'rxjs/operators';

export interface CommentQueryVars {
  id: number
  first?: number
  last?: number
  before?: string
  after?: string,
  userId?: number
}

export interface CommentsParticipant {
    id: number
    username: string
    profileImagePath: Maybe<string>
}

@Injectable()
export abstract class GenericCommentsService<CommentsQuery> implements OnDestroy {
  subject!: CommentableInput;
  queryRef!: QueryRef<CommentsQuery, CommentQueryVars>;
  result$!: Observable<ApolloQueryResult<CommentsQuery>>;

  comments$: Maybe<Observable<CommentEdge[]>>;
  commenters$: Maybe<Observable<CommentsParticipant[]>>
  isLoading$!: Observable<boolean>;
  queryErrors$!: Observable<Maybe<ReadonlyArray<GraphQLError>>>;
  networkError$!: Observable<Maybe<ApolloError>>;

  pageInfo$!: Observable<PageInfo>;
  pageInfo!: PageInfo;

  private fetchMoreSize = 5;
  protected initialListSize = 5;
  private destroy$ = new Subject();

  abstract extractCommentEdges(q: CommentsQuery): CommentEdge[]
  abstract extractCommenters(q: CommentsQuery): CommentsParticipant[]
  abstract commentableEntity: CommentableEntities
  abstract pageInfoPath: string[]

  constructor(private gql: Apollo.Query<CommentsQuery, CommentQueryVars> ) { 
  }

  watch(vars: CommentQueryVars): QueryRef<CommentsQuery, CommentQueryVars> {
    const initialQueryVars = {
      id: vars.id,
      last: vars.last ? vars.last : this.initialListSize,
      before: vars.before ? vars.before : undefined
    }

    this.queryRef = this.gql.watch(initialQueryVars);
    this.result$ = this.queryRef.valueChanges;

    this.isLoading$ = this.result$
      .pipe(pluck('loading'), startWith(true));

    this.pageInfo$ = this.result$
      .pipe(pluck(...this.pageInfoPath));

    // provide static local pageInfo
    this.pageInfo$
      .pipe(takeUntil(this.destroy$), shareReplay(1))
      .subscribe((info: PageInfo) => { this.pageInfo = info; });

    this.queryErrors$ = this.result$
      .pipe(pluck('errors'));

    this.networkError$ = this.result$
      .pipe(pluck('error'));

    this.comments$ = this.result$
      .pipe(
        map(({data}) => this.extractCommentEdges(data)),
        shareReplay(1));

    this.commenters$ = this.result$
        .pipe(map(({data}) => this.extractCommenters(data)),
        shareReplay(1));

    this.subject = { id: vars.id, entityType: this.commentableEntity };

    return this.queryRef;
  }

  fetchMore(): void {
    this.queryRef.fetchMore({
      variables: <CommentQueryVars> {
        last: this.fetchMoreSize,
        before: this.pageInfo.startCursor
      },
    });
  }

  userFilterSelected(u: Maybe<CommentsParticipant>): void {
    this.queryRef.refetch({
      id: this.subject.id,
      last: this.initialListSize,
      userId: u?.id
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}