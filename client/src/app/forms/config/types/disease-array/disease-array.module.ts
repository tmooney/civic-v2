import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNzFormFieldModule } from '@forms/config/ng-zorro-antd/form-field';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcDiseaseInputTypeModule } from '../disease-input/disease-input.module';
import { CvcMultiFieldTypeModule } from '../multi-field/multi-field.module';
import { diseaseArrayTypeOption } from './disease-array.type';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    FormlyNzFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({types: [diseaseArrayTypeOption]}),
    CvcDiseaseInputTypeModule,
    CvcMultiFieldTypeModule,
  ]
})
export class CvcDiseaseArrayTypeModule { }
