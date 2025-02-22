import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CvcUserTagComponent } from './user-tag.component';
import { CvcUserPopoverModule } from '../user-popover/user-popover.module';

@NgModule({
  declarations: [CvcUserTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    CvcUserPopoverModule,
    NzPopoverModule,
    NzTagModule,
    NzIconModule,
  ],
  exports: [CvcUserTagComponent]
})
export class CvcUserTagModule { }
