import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ApolloQueryResult, ApolloError, FetchMoreQueryOptions } from '@apollo/client/core';
import {
  Maybe,
  RevisionEdge,
  GeneRevisionsGQL,
  GeneRevisionsQuery,
  GeneRevisionsQueryVariables,
  RevisionConnection,
  PageInfo,
  Revision,
  RevisionFragment
} from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, pluck, shareReplay, startWith, takeUntil, tap } from 'rxjs/operators';

// logging, debugging
import { NGXLogger } from 'ngx-logger';
import { Spy } from 'rxjs-spy/cjs/spy-interface'; // debug
import { create } from "rxjs-spy"; // debug
import { tag } from "rxjs-spy/operators/tag"; // debug

export interface SelectableFieldName {
  id: number
  name: string
  displayName: string
}

export interface UniqueRevisor {
  id: number
  username: string
  profileImagePath?: string
}

@Injectable()
export class GenesRevisionsService implements OnDestroy {
  private spy: Spy;

  queryRef!: QueryRef<GeneRevisionsQuery, GeneRevisionsQueryVariables>;
  result$!: Observable<ApolloQueryResult<GeneRevisionsQuery>>;

  revisions$: Maybe<Observable<Maybe<Maybe<RevisionFragment>[]>>>;
  revisionFields$: Maybe<Observable<Maybe<SelectableFieldName[]>>>;
  uniqueRevisors$: Maybe<Observable<Maybe<UniqueRevisor[]>>>;

  isLoading$!: Observable<boolean>;
  queryErrors$!: Observable<Maybe<ReadonlyArray<GraphQLError>>>;
  networkError$!: Observable<Maybe<ApolloError>>;

  pageInfo$!: Observable<PageInfo>;
  pageInfo!: PageInfo;

  private initialFirst =  10;
  private fetchMoreSize = 10;
  private destroy$ = new Subject();
  protected initialQueryVars?: GeneRevisionsQueryVariables

  constructor(private gql: GeneRevisionsGQL, private log: NGXLogger) {
    this.spy = create(); // debug
  }

  createQuery(vars: GeneRevisionsQueryVariables): QueryRef<GeneRevisionsQuery, GeneRevisionsQueryVariables> {
    this.initialQueryVars = {
      geneId: vars.geneId,
      first: vars.first ? vars.first : this.initialFirst,
      before: vars.before ? vars.before : undefined,
      after: vars.after? vars.after: undefined
    }

    this.queryRef = this.gql.watch(this.initialQueryVars);
    this.result$ = this.queryRef.valueChanges;

    this.isLoading$ = this.result$
      .pipe(pluck('loading'), startWith(true));

    this.pageInfo$ = this.result$
      .pipe(pluck('data', 'gene', 'revisions', 'pageInfo'));

    // provide static local pageInfo
    this.pageInfo$
      .pipe(takeUntil(this.destroy$), shareReplay(1))
      .subscribe((info: PageInfo) => { this.pageInfo = info; });

    this.queryErrors$ = this.result$
      .pipe(pluck('errors'));

    this.networkError$ = this.result$
      .pipe(pluck('error'));

    this.spy.log('revisions$'); // debug
    this.revisions$ = this.result$
      .pipe(
        map(({ data }) => { return data.gene?.revisions?.edges.map(e => e.node) }),
        shareReplay(1));

    this.uniqueRevisors$ = this.result$
        .pipe(
          map(({data}) => { return data.gene?.revisions?.uniqueRevisors }),
          shareReplay(1)
        );
    
    this.revisionFields$ = this.result$.pipe(
      map(({ data }) => {
        return data.gene?.revisions?.revisedFieldNames.map((f, i) => {
          return { 
           ...f,
           id: i 
           };
        });
      }),
      shareReplay(1)
    );

    this.revisions$.pipe(takeUntil(this.destroy$),tag('revisions$')).subscribe(); // debug

    return this.queryRef;
  }

  fieldNameSelected(field: Maybe<SelectableFieldName>) {
    if (this.initialQueryVars) {
      this.queryRef.refetch({
        ...this.initialQueryVars,
        originatingUserId: this.currentVariables()?.originatingUserId,
        fieldName: field?.name
      })
    }
  }

  revisorSelected(u: Maybe<UniqueRevisor>) {
    if (this.initialQueryVars) {
      this.queryRef.refetch({
        ...this.initialQueryVars,
        fieldName: this.currentVariables()?.fieldName,
        originatingUserId: u?.id
      })
    }
  }

  //TOO test this with filtering in place
  fetchMore(): void {
    this.queryRef.fetchMore({
      variables: <GeneRevisionsQueryVariables>{
        ...this.currentVariables(),
        last: this.fetchMoreSize,
        before: this.pageInfo.startCursor
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.spy.teardown();
  }

  //TODO - Sigh, fix this when the new angular-apollo comes out
  private currentVariables(): GeneRevisionsQueryVariables {
    return this.queryRef['obsQuery'].variables as GeneRevisionsQueryVariables;
  }
}
