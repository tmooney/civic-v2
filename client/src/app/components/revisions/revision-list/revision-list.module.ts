import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevisionListComponent } from './revision-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { CvcRevisionValueDiffModule } from '../revision-value-diff/revision-value-diff.module';
import { RevisionListDiffModule } from '../revision-list-diff/revision-list-diff.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TimeagoFormatter, TimeagoModule } from 'ngx-timeago';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcDrugTagModule } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.module';
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CivicTimeagoFormatter } from '@app/core/utilities/timeago-formatter';
import { CvcCommentInputFormModule } from '@app/forms/comment-input/comment-input.module';
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module';
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module';

@NgModule({
  declarations: [RevisionListComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzListModule,
    NzCardModule,
    NzSpaceModule,
    NzTagModule,
    NzTypographyModule,
    NzAvatarModule,
    NzEmptyModule,
    NzCheckboxModule,
    NzDividerModule,
    NzToolTipModule,
    NzListModule,
    NzPopoverModule,
    NzIconModule,
    NzInputModule,
    NzDescriptionsModule,
    NzDividerModule,
    FormsModule,
    TimeagoModule.forChild({ formatter: {useClass: CivicTimeagoFormatter, provide: TimeagoFormatter} }),
    CvcOrgSelectorBtnGroupModule,
    RevisionListDiffModule,
    CvcSourceTagModule,
    CvcRevisionValueDiffModule,
    CvcUserTagModule,
    CvcDiseaseTagModule,
    CvcDrugTagModule,
    CvcPhenotypeTagModule,
    CvcVariantTagModule,
    CvcEvidenceTagModule,
    CvcVariantTypeTagModule,
    CvcStatusTagModule,
    CvcCommentInputFormModule,
    CvcPipesModule,
    CvcCommentBodyModule,
    NzCollapseModule,
    NzButtonModule,
    NzAlertModule,
    ReactiveComponentModule
  ],
  exports: [RevisionListComponent]
})
export class RevisionListModule { }
