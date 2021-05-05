import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';

import {
  Maybe,
  CommentableInput,
  CommentEdge,
  GeneCommentsQueryVariables
} from '@app/generated/civic.apollo';

import { ViewerService } from '@app/shared/services/viewer/viewer.service';

export interface CommentListService {
  subject: CommentableInput,
  queryRef: QueryRef<any, any>,
  result$: Observable<ApolloQueryResult<any>>,
  comments$: Maybe<Observable<CommentEdge[]>>,
  isLoading$: Observable<boolean>,
  queryErrors$: Observable<Maybe<ReadonlyArray<GraphQLError>>>;
  networkError$: Observable<Maybe<ApolloError>>;
  watch(vars: GeneCommentsQueryVariables): QueryRef<any, any>
}

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})

export class CommentListComponent implements OnInit {
  @Input() commentsService!: CommentListService;
  viewer: ViewerService;

  constructor(viewerService: ViewerService) {
    this.viewer = viewerService;
  }

  ngOnInit(): void {
  }
}
