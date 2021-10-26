
import { Pipe, PipeTransform } from '@angular/core';
import { EventAction } from '@app/generated/civic.apollo';

@Pipe({
  name: 'prepositionForSubject',
  pure: true
})
export class PrepositionForSubjectPipe implements PipeTransform {
  transform(action: EventAction) : string {
    switch (action) {
      case (EventAction.Commented):
        return 'to'
      case (EventAction.RevisionSuggested):
        return 'to'
      case (EventAction.RevisionAccepted):
        return 'to'
      case (EventAction.RevisionRejected):
        return 'to'
      case (EventAction.RevisionSuperseded):
        return 'to'
      case (EventAction.Flagged):
        return 'on'
      case (EventAction.FlagResolved):
        return 'on'
      case (EventAction.PublicationSuggested):
        return ''
      case (EventAction.CuratedSourceSuggestion):
        return ''
      case (EventAction.RejectedSourceSuggestion):
        return ''
      case (EventAction.RequeuedSourceSuggestion):
        return ''
      default:
        throw new Error('Not handling all event action types yet ' + action)
    }
  }
}