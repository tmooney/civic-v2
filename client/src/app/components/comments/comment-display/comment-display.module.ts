import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcCommentDisplayComponent } from './comment-display.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';
import { CvcCommentBodyModule } from '../comment-body/comment-body.module';

@NgModule({
  declarations: [CvcCommentDisplayComponent],
  imports: [
    CommonModule,
    NzCommentModule,
    NzAvatarModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
    CvcCommentBodyModule
  ],
  exports: [CvcCommentDisplayComponent]
})
export class CvcCommentDisplayModule { }
