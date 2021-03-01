import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';

import { IconsProviderModule } from '@app/icons-provider.module';

import { GenesRoutingModule } from './genes-routing.module';
import { GenesComponent } from './genes.component';


@NgModule({
  declarations: [GenesComponent],
  imports: [
    NzGridModule,
    NzTableModule,
    IconsProviderModule,
    CommonModule,
    GenesRoutingModule
  ]
})
export class GenesModule { }
