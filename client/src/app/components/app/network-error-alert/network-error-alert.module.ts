import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcNetworkErrorAlertComponent } from './network-error-alert.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [CvcNetworkErrorAlertComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzAlertModule,
    NzButtonModule,
    NzModalModule,
    NzTypographyModule,
  ],
  exports: [CvcNetworkErrorAlertComponent]
})
export class CvcNetworkErrorAlertModule { }
