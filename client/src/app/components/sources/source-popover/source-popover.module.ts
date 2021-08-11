import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcSourcePopoverComponent } from './source-popover.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcTagListModule } from '@app/components/shared/cvc-tag-list/cvc-tag-list.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcSourcePopoverComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzIconModule,
    NzCardModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    CvcTagListModule,
    CvcClinicalTrialTagModule
  ],
  exports: [CvcSourcePopoverComponent]
})
export class CvcSourcePopoverModule { }
