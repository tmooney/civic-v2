import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { LoginButtonComponent } from './login-button/login-button.component';
import { AuthOptionsListComponent } from './auth-options-list/auth-options-list.component';
import { ViewerButtonComponent } from './viewer-button/viewer-button.component';

@NgModule({
  declarations: [
    LoginButtonComponent,
    AuthOptionsListComponent,
    ViewerButtonComponent,
  ],
  imports: [
    CommonModule,
    NzPopoverModule,
    NzButtonModule,
    NzListModule,
    NzModalModule,
    NzIconModule,
  ],
  exports: [
    LoginButtonComponent,
    AuthOptionsListComponent,
    ViewerButtonComponent,
  ]
})

export class LayoutComponentsModule { }
