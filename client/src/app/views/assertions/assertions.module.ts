import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssertionsRoutingModule } from './assertions-routing.module';
import { AssertionsComponent } from './assertions.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { CvcFormsModule } from '@app/forms/forms.module';
import { IconsProviderModule } from '@app/icons-provider.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TimeagoModule } from 'ngx-timeago';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AssertionsDetailComponent } from './assertions-detail/assertions-detail.component';
import { AssertionsSummaryComponent } from './assertions-summary/assertions-summary.component';
import { AssertionsCommentsComponent } from './assertions-comments/assertions-comments.component';
import { AssertionsFlagsComponent } from './assertions-flags/assertions-flags.component';
import { EvidenceModule } from '../evidence/evidence.module';
import { AssertionsBrowseComponent } from './assertions-browse/assertions-browse.component';

@NgModule({
  declarations: [
    AssertionsComponent,
    AssertionsDetailComponent,
    AssertionsSummaryComponent,
    AssertionsCommentsComponent,
    AssertionsFlagsComponent,
    AssertionsBrowseComponent
  ],
  imports: [
    CommonModule,
    AssertionsRoutingModule,
    CvcFormsModule,
    SharedComponentsModule,
    IconsProviderModule,
    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzFormModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzGridModule,
    NzListModule,
    NzPageHeaderModule,
    NzPopoverModule,
    NzSpaceModule,
    NzSpinModule,
    NzSkeletonModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    ReactiveComponentModule,
    TimeagoModule.forChild(),
    NzInputModule,
    FormsModule,
    SharedComponentsModule,
    NzSelectModule,
    EvidenceModule
  ],
  exports: [
    AssertionsComponent,
    AssertionsDetailComponent,
    AssertionsSummaryComponent,
    AssertionsFlagsComponent,
    AssertionsCommentsComponent,
    AssertionsBrowseComponent
  ]
})
export class AssertionsModule { }
