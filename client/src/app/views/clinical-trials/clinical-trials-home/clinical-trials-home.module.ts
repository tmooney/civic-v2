import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicalTrialsHomePage } from './clinical-trials-home.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcClinicalTrialsTableModule } from '@app/components/clinical-trials/clinical-trials-table/clinical-trials-table.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [ClinicalTrialsHomePage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzPageHeaderModule,
    NzIconModule,
    NzButtonModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcClinicalTrialsTableModule,
    CvcSectionNavigationModule,
  ],
  exports: [ClinicalTrialsHomePage]
})
export class ClinicalTrialsHomeModule { }
