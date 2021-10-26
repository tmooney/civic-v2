import { Component, OnInit, Input } from '@angular/core';
import {
  EventAction,
  EventFeedNodeFragment,
} from '@app/generated/civic.apollo';
import { EventDisplayOption } from '../event-feed/event-feed.component';

@Component({
  selector: 'cvc-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.less']
})
export class CvcEventTimelineComponent implements OnInit {
  @Input() events?: EventFeedNodeFragment[];
  @Input() tagDisplay: EventDisplayOption = "displayAll"
  constructor() { }

  ngOnInit(): void {
    if (this.events === undefined) {
      throw new Error('cvc-feed-item component requires array of EventFeedNodeFragment input.')
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
        return 'civic-revision'
      case (EventAction.Flagged):
        return 'civic-flag'
      case (EventAction.FlagResolved):
        return 'civic-flag'
      case (EventAction.AssertionSubmitted):
        return 'civic-assertion'
      case (EventAction.AssertionAccepted):
        return 'civic-assertion'
      case (EventAction.AssertionRejected):
        return 'civic-assertion'
      case (EventAction.Submitted):
        return 'civic-evidence'
      case (EventAction.Accepted):
        return 'civic-evidence'
      case (EventAction.Rejected):
        return 'civic-evidence'
      case (EventAction.PublicationSuggested):
        return 'file-add'
      case (EventAction.CuratedSourceSuggestion):
        return 'file-add'
      case (EventAction.RejectedSourceSuggestion):
        return 'file-add'
      case (EventAction.RequeuedSourceSuggestion):
        return 'file-add'
      default:
        throw new Error('Not handling all event action types yet')

    }
  }
}
