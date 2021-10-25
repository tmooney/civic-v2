import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { DrugInputComponent, DrugInputType } from './drug-input.type';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';

const formlyConfig = {
  types: [DrugInputType],
};

@NgModule({
  declarations: [DrugInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(formlyConfig),
    NzSelectModule,
    CvcDrugTagModule,
  ],
})
export class DrugInputModule {}
