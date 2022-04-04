import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantReviseForm } from './variant-revise.form';
import { CvcSourceInputTypeModule } from '@app/forms/config/types/source-input/source-input.module';
import { CvcMultiFieldTypeModule } from '@app/forms/config/types/multi-field/multi-field.module';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { VariantReviseService } from './variant-revise.service';
import { CvcVariantTypeInputTypeModule } from '@app/forms/config/types/variant-type-input/variant-type-input.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSubmitButtonTypeModule } from '@app/forms/config/types/submit-button/submit-button.module';
import { CvcFormInfoWrapperModule } from '@app/forms/config/wrappers/form-info/form-info.module';
import { CvcVariantCoordinatesCardTypeModule } from '@app/forms/config/types/variant-coordinates-card/variant-coordinates-card.module';
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';
import { CvcEnsemblInputTypeModule } from '../config/types/ensembl-input/ensembl-input.module';
import { CvcTextareaBaseTypeModule } from '../config/types/textarea-base/textarea-base.module';
import { CvcCancelButtonModule } from '../config/types/cancel-button/cancel-button.module';

@NgModule({
  declarations: [VariantReviseForm],
  providers: [VariantReviseService],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    FormlyModule,
    NgxJsonViewerModule,
    NzButtonModule,
    NzCardModule,
    NzCollapseModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    NzSwitchModule,
    CvcSubmitButtonTypeModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormInfoWrapperModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcVariantCoordinatesCardTypeModule,
    CvcCommentTextareaTypeModule,
    CvcMultiFieldTypeModule,
    CvcSourceInputTypeModule,
    CvcVariantTypeInputTypeModule,
    CvcEnsemblInputTypeModule,
    CvcTextareaBaseTypeModule,
    CvcCancelButtonModule,
    NgxJsonViewerModule,
  ],
  exports: [VariantReviseForm],
})
export class CvcVariantReviseFormModule { }
