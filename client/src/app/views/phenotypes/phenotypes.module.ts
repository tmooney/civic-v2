import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhenotypesRoutingModule } from './phenotypes-routing.module';
import { PhenotypesComponent } from './phenotypes.component';
import { PhenotypesDetailComponent } from './phenotypes-detail/phenotypes-detail.component';
import { PhenotypesSummaryComponent } from './phenotypes-summary/phenotypes-summary.component';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { PhenotypesHomeModule } from './phenotypes-home/phenotypes-home.module';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';

@NgModule({
  declarations: [
    PhenotypesComponent,
    PhenotypesDetailComponent,
    PhenotypesSummaryComponent,
  ],
  imports: [
    CommonModule,
    PhenotypesHomeModule,
    CvcAssertionsTableModule,
    CvcEvidenceTableModule,
    CvcEntityTableCardModule,
    CvcLinkTagModule,
    SectionNavigationModule,
    PhenotypesRoutingModule,
    NzIconModule,
    NzTableModule,

    NzPageHeaderModule,
    ReactiveComponentModule,
    NzGridModule,
    NzToolTipModule,
    NzSpaceModule,
  ],
})
export class PhenotypesModule {}
