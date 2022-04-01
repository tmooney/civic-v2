import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcDrugsTableComponent } from './drugs-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcDrugTagModule } from '../cvc-drug-tag/cvc-drug-tag.module';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [CvcDrugsTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    CvcDrugTagModule,
    CvcLinkTagModule,
    CvcClearableInputFilterModule
  ],
  exports: [CvcDrugsTableComponent]
})
export class CvcDrugsTableModule { }
