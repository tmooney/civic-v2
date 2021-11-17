import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcDiseasePopoverComponent } from './cvc-disease-popover.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [CvcDiseasePopoverComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    NzTypographyModule,
    CvcLinkTagModule
  ],
  exports: [CvcDiseasePopoverComponent]
})
export class CvcDiseasePopoverModule { }
