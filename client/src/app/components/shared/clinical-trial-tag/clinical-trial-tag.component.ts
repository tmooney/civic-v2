import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableClinicalTrial {
  id: number,
  nctId: string,
}

@Component({
  selector: 'cvc-clinical-trial-tag',
  templateUrl: './clinical-trial-tag.component.html',
  styleUrls: ['./clinical-trial-tag.component.less']
})
export class ClinicalTrialTagComponent implements OnInit {
  @Input() clinicalTrial!: LinkableClinicalTrial
  @Input() linked: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.clinicalTrial === undefined) {
      throw new Error('cvc-clinical-trial-tag requires LinkableClinicalTrial input, none supplied.')
    }
  }

}
