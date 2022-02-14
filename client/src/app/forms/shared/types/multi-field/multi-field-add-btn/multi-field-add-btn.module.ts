import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiFieldAddBtnComponent, MultiFieldAddBtnType } from './multi-field-add-btn.type';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [MultiFieldAddBtnComponent],
  imports: [
    CommonModule,
    FormlyModule.forChild({ types: [MultiFieldAddBtnType] }),
    FormlyNgZorroAntdModule,
    NzFormModule,
    NzButtonModule,
  ],
  exports: [MultiFieldAddBtnComponent]
})
export class MultiFieldAddBtnModule { }
