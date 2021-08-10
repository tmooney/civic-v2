import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantTypesHomePage } from './variant-types-home.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcVariantTypesTableModule } from '@app/components/variant-types/variant-types-table/variant-types-table.module';

@NgModule({
  declarations: [VariantTypesHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    CvcVariantTypesTableModule,
  ],
  exports: [VariantTypesHomePage]
})
export class VariantTypesHomeModule { }
