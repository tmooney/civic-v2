import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { SourcesSummaryPage } from './sources-summary.page';

@NgModule({
  declarations: [SourcesSummaryPage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzSpaceModule,
    NzGridModule,
    NzIconModule,
    CvcEntityTableCardModule,
    CvcEvidenceTableModule,
    CvcSourceSuggestionsTableModule,
    CvcClinicalTrialTagModule,
  ]
})
export class SourcesSummaryModule { }
