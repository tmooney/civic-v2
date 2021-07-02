import { Component, Input, OnInit } from "@angular/core";
import {
  EventAction,
  EventFeedGQL,
  EventFeedNodeFragment,
  EventFeedQuery,
  EventFeedQueryVariables,
  Maybe,
  PageInfo,
  SubscribableEntities,
  SubscribableInput
} from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { ApolloQueryResult } from "@apollo/client/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LinkableUser } from "../user-pill/user-pill.component";
import { LinkableOrganization } from "../organization-pill/organization-pill.component";

@Component({
  selector: 'cvc-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.less'],
})
export class EventFeedComponent implements OnInit {
  @Input() subscribable?: SubscribableInput;
  @Input() subscribableName?: string;

  private queryRef!: QueryRef<EventFeedQuery, EventFeedQueryVariables>;
  private results$!: Observable<ApolloQueryResult<EventFeedQuery>>;

  private initialQueryVars?: EventFeedQueryVariables;
  private pageSize = 5;

  events$?: Observable<Maybe<EventFeedNodeFragment>[]>;
  pageInfo$?: Observable<PageInfo>;
  participants$?: Observable<LinkableUser[]>;
  organizations$?: Observable<LinkableOrganization[]>;

  constructor(private gql: EventFeedGQL) { }

  ngOnInit() {
    this.initialQueryVars = {
      subject: this.subscribable,
      first: this.pageSize,
    }

    this.queryRef = this.gql.watch(this.initialQueryVars, { fetchPolicy: 'cache-and-network' });
    this.results$ = this.queryRef.valueChanges;

    this.pageInfo$ = this.results$.pipe(
      map(({ data }) => data.events.pageInfo)
    )

    this.events$ = this.results$.pipe(
      map(({ data }) => {
        return data.events.edges.map(e => e.node)
      })
    )

    this.participants$ = this.results$.pipe(
      map(({ data }) => data.events.uniqueParticipants)
    )

    this.organizations$ = this.results$.pipe(
      map(({ data }) => data.events.participatingOrganizations)
    )
  }

  fetchMore(endCursor: string) {
    this.queryRef.fetchMore({
      variables: {
        first: this.pageSize,
        after: endCursor
      }
    })
  }

  onParticipantSelected(u: Maybe<LinkableUser>) {
    this.queryRef.refetch({
      ...this.initialQueryVars,
      organizationId: this.currentVariables()?.organizationId,
      originatingUserId: u?.id
    })
  }

  onOrganizationSelected(o: Maybe<LinkableOrganization>) {
    this.queryRef.refetch({
      ...this.initialQueryVars,
      originatingUserId: this.currentVariables().originatingUserId,
      organizationId: o?.id
    })
  }

  iconColorForEventAction(a: EventAction): string {
    // returns status colors for entities that have statuses
    switch (a) {
      case (EventAction.RevisionSuggested):
        return 'orange'
      case (EventAction.RevisionAccepted):
        return 'green'
      case (EventAction.RevisionRejected):
        return 'red'
      case (EventAction.RevisionSuperseded):
        return 'grey'
      case (EventAction.Flagged):
        return 'red'
      case (EventAction.FlagResolved):
        return 'green'
      case (EventAction.AssertionSubmitted):
        return 'orange'
      case (EventAction.AssertionAccepted):
        return 'green'
      case (EventAction.AssertionRejected):
        return 'red'
      case (EventAction.Submitted):
        return 'orange'
      case (EventAction.Accepted):
        return 'green'
      case (EventAction.Rejected):
        return 'red'
      default:
        return 'default'
    }
  }

  iconNameForEventAction(a: EventAction): string {
    switch (a) {
      case (EventAction.Commented):
        return 'civic-comment'
      case (EventAction.RevisionSuggested):
        return 'civic-revision'
      case (EventAction.RevisionAccepted):
        return 'civic-revision'
      case (EventAction.RevisionRejected):
        return 'civic-revision'
      case (EventAction.RevisionSuperseded):
        return 'clear'
      case (EventAction.Flagged):
        return 'flag'
      case (EventAction.FlagResolved):
        return 'flag'
      case (EventAction.AssertionSubmitted):
        return 'plus'
      case (EventAction.AssertionAccepted):
        return 'check-circle'
      case (EventAction.AssertionRejected):
        return 'close-circle'
      case (EventAction.Submitted):
        return 'plus'
      case (EventAction.Accepted):
        return 'check-circle'
      case (EventAction.Rejected):
        return 'close-circle'
      default:
        throw new Error('Not handling all event action types yet')

    }
  }

  iconNameForSubscribableEntity(e: SubscribableEntities): string {
    switch(e) {
      case (SubscribableEntities.Assertion):
        return 'civic:assertion'
      case (SubscribableEntities.EvidenceItem):
        return 'civic:evidence'
      case(SubscribableEntities.Gene):
        return 'civic:gene'
      case (SubscribableEntities.Revision):
        return 'civic:revision'
      case(SubscribableEntities.Variant):
        return 'civic:variant'
      default:
        throw new Error('No icon name found for ' + e);
    }
  }

  verbiageForEvent(e: EventFeedNodeFragment): string {
    switch (e.action) {
      case (EventAction.Commented):
        return 'commented on'
      case (EventAction.RevisionSuggested):
        return 'suggested a revision to'
      case (EventAction.RevisionAccepted):
        return 'accepted a revision to'
      case (EventAction.RevisionRejected):
        return 'rejected a revision to'
      case (EventAction.RevisionSuperseded):
        return 'accepted a a superseding revision to'
      case (EventAction.Flagged):
        return 'opened a new flag on'
      case (EventAction.FlagResolved):
        return 'resolved a flag on'
      case (EventAction.AssertionSubmitted):
        return 'submitted assertion'
      case (EventAction.AssertionAccepted):
        return 'accepted assertion'
      case (EventAction.AssertionRejected):
        return 'rejected assertion'
      case (EventAction.Submitted):
        return 'submited evidence item'
      case (EventAction.Accepted):
        return 'accepted evience item'
      case (EventAction.Rejected):
        return 'rejected evidence item'
      default:
        throw new Error('Not handling all event action types yet')
    }
  }

  commentForFlagEvent(e: EventFeedNodeFragment): string {
    switch (e.originatingObject?.__typename) {
      case ('Flag'):
        if (e.action === EventAction.FlagResolved) {
          if (e.originatingObject.resolutionComment) {
            return e.originatingObject.resolutionComment?.comment
          }
          else {
            return ""
          }
        } else if (e.action === EventAction.Flagged) {
          return e.originatingObject.openComment.comment
        }
        else {
          throw new Error('Event action does not match originating object type')
        }
      default:
        throw new Error('Not handling all event originating object type yet')
    }
  }

  //TODO - Sigh, fix this when the new angular-apollo comes out
  private currentVariables(): EventFeedQueryVariables {
    return this.queryRef['obsQuery'].variables as EventFeedQueryVariables;
  }
}
