import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-evidence-flags',
  templateUrl: './evidence-flags.component.html',
  styleUrls: ['./evidence-flags.component.less']
})


export class EvidenceFlagsComponent {

  flaggable: FlaggableInput

  constructor( private route: ActivatedRoute) {
    const evidenceId: number = +this.route.snapshot.params['evidenceId']; 
    
    this.flaggable = {
      entityType: FlaggableEntities.EvidenceItem,
      id: evidenceId
    }
    
  }
}
