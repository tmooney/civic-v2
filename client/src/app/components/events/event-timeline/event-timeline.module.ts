import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEventTimelineComponent } from './event-timeline.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcPipesModule } from '@app/pipes/pipes.module';
import { CvcCommentTagModule } from '@app/components/comments/comment-tag/comment-tag.module';
import { CvcFlagTagModule } from '@app/components/flags/flag-tag/flag-tag.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module';
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { TimeagoModule } from 'ngx-timeago';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module';

@NgModule({
  declarations: [CvcEventTimelineComponent],
  imports: [
    CommonModule,
    NzIconModule,
    NzToolTipModule,
    NzTypographyModule,
    NzTimelineModule,
    NzGridModule,
    TimeagoModule.forChild(),
    CvcRevisionTagModule,
    CvcUserTagModule,
    CvcPipesModule,
    CvcCommentTagModule,
    CvcFlagTagModule,
    CvcGeneTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcOrganizationTagModule,
  ],
  exports: [CvcEventTimelineComponent]
})
export class CvcEventTimelineModule { }
