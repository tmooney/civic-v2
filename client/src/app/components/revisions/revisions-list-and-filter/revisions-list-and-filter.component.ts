import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RevisionsGQL, RevisionsQuery, RevisionsQueryVariables, Maybe, Organization, RevisionFragment, ModeratedEntities } from '@app/generated/civic.apollo';
import { Observable, Subscription } from 'rxjs';
import { QueryRef } from 'apollo-angular';
import { map, pluck } from 'rxjs/operators';

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

@Component({
  selector: 'cvc-revisions-list-and-filter',
  templateUrl: './revisions-list-and-filter.component.html',
  styleUrls: ['./revisions-list-and-filter.component.less']
})
export class RevisionsListAndFilterComponent implements OnDestroy, OnInit {
  @Input() id!: number
  @Input() entityType!: ModeratedEntities

  revisions$?: Observable<Maybe<RevisionFragment>[]>
  revisionFields$: Maybe<Observable<Maybe<SelectableFieldName[]>>>;
  uniqueRevisors$: Maybe<Observable<Maybe<UniqueRevisor[]>>>

  queryRef!: QueryRef<RevisionsQuery, RevisionsQueryVariables>

  routeSub?: Subscription

  constructor(
    private gql: RevisionsGQL,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({
        subject: {id: this.id, entityType: this.entityType}
      })
      let observable = this.queryRef.valueChanges
      this.revisions$ = observable.pipe(
        pluck('data', 'revisions', 'edges'),
        map((edges) => {
          return edges.map((e) => e.node)
        })
      );
      this.uniqueRevisors$ = observable.pipe(
        map(({data}) => { return data.revisions?.uniqueRevisors })
      );
  
      this.revisionFields$ = observable.pipe(
        map(({ data }) => {
          return data.revisions?.revisedFieldNames.map((f, i) => {
            return { 
              ...f,
              id: i 
            };
          });
        })
      );

    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  onFieldNameSelected(field: SelectableFieldName) {
    this.queryRef.refetch({
      subject: {id: this.id, entityType: this.entityType},
      fieldName: field ? field.name : undefined
    })
  }

  onRevisorSelected(user: UniqueRevisor) {
    this.queryRef.refetch({
      subject: {id: this.id, entityType: this.entityType},
      originatingUserId: user ? user.id : undefined
    })
  }
}