import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { SourceListItemModule } from '@app/components/sources/source-list-item/source-list-item.module';
import { SourceInputComponent, SourceInputType } from './source-input.type';
import { SourceSelectorModule } from '@app/forms/components/source-selector/source-selector.module';

const formlyConfig = {
  types: [SourceInputType]
}

@NgModule({
  declarations: [SourceInputComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild(formlyConfig),
    SourceListItemModule,
    SourceSelectorModule,
  ],
  exports: [SourceInputComponent],
})
export class SourceInputModule { }
