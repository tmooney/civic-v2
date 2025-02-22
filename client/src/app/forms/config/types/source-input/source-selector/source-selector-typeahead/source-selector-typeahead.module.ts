import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SourceSelectorTypeaheadType, SourceSelectorTypeaheadTypeOption } from './source-selector-typeahead.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SourceSelectorLoaderModule } from '../source-selector-loader/source-selector-loader.module';

@NgModule({
  declarations: [SourceSelectorTypeaheadType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({ types: [SourceSelectorTypeaheadTypeOption] }),
    NzSelectModule,
    SourceSelectorLoaderModule,
  ]
})
export class CvcSourceSelectorTypeaheadTypeModule { }
