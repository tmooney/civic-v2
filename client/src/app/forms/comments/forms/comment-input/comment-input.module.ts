import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';

import { CvcCommentInputForm } from './comment-input.form';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommentTextareaModule } from '../../types/comment-textarea/comment-textarea.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMentionModule } from 'ng-zorro-antd/mention';

@NgModule({
  declarations: [CvcCommentInputForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzCardModule,
    NzTabsModule,
    NzFormModule,
    NzSpinModule,
    NzMentionModule,
    FormsModule,
    CvcFormErrorsAlertModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormButtonsModule,
    CvcCommentBodyModule,
    CommentTextareaModule,
  ],
  exports: [CvcCommentInputForm]
})
export class CvcCommentInputModule { }
