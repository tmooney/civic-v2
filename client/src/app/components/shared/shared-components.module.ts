import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ReactiveComponentModule } from '@ngrx/component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { TimeagoModule } from 'ngx-timeago';

import { CommentAddComponent } from './comment-add/comment-add.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { FlaggableComponent } from './flaggable/flaggable.component';
import { FlaggableOptionsDirective } from './flaggable/flaggable-options.directive';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { FormErrorsAlertComponent } from './form-errors-alert/form-errors-alert.component';
import { LifecycleActionsComponent } from './lifecycle-actions/lifecycle-actions.component';
import { OrgSelectorBtnDirective } from './org-selector-btn-group/org-selector-btn.directive';
import { OrgSelectorBtnGroupComponent } from './org-selector-btn-group/org-selector-btn-group.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { EventFeedComponent } from './event-feed/event-feed.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserHovercardComponent } from './user-hovercard/user-hovercard.component';
import { UserPillComponent } from './user-pill/user-pill.component'
import { OrganizationPillComponent } from './organization-pill/organization-pill.component'
import { OrganizationHovercardComponent } from './organization-hovercard/organization-hovercard.component'
import { CommentDisplayComponent } from './comment-display/comment-display.component';
import { FlagEntityComponent } from './flag-add/flag-entity.component';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { GenesComponentsModule } from '../genes/genes-components.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { VariantsMenuComponent } from './variants-menu/variants-menu.component';
import { FlagListComponent } from './flag-list/flag-list.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ResolveFlagComponent } from './resolve-flag/resolve-flag.component';
import { VariantsComponentsModule } from '../variants/variants-components.module';
import { ClearableTextComponentFilter } from './clearable-text-filter/clearable-text-filter.component';
import { AssertionsBrowseComponent } from './assertions-browse/assertions-browse.component';
import { EvidenceBrowseComponent } from './evidence-browse/evidence-browse.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { QuicksearchComponent } from './quicksearch/quicksearch-component';
import { UserCardComponent } from './user-card/user-card.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { EvidenceCardComponent } from './evidence-card/evidence-card.component';
import { AssertionCardComponent } from './assertion-card/assertion-card.component';
import { OrganizationCardComponent } from './organization-card/organization-card.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzImageModule } from 'ng-zorro-antd/image';
import { OrganizationAvatarComponent } from './organization-avatar/organization-avatar.component';
import { OrganizationsBrowseComponent } from './organizations-browse/organizations-browse.component';
import { UserTagComponent } from './user-tag/user-tag.component';
import { GeneTagComponent } from './gene-tag/gene-tag.component';
import { OrgTagComponent } from './org-tag/org-tag.component';
import { RevisionTagComponent } from './revision-tag/revision-tag.component';
import { EventTimelineComponent } from './event-timeline/event-timeline.component';
import { CommentTagComponent } from './comment-tag/comment-tag.component';
import { EvidenceTagComponent } from './evidence-tag/evidence-tag.component';
import { AssertionTagComponent } from './assertion-tag/assertion-tag.component';
import { FlagTagComponent } from './flag-tag/flag-tag.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { OrgPopoverComponent } from './org-popover/org-popover.component';
import { GenePopoverComponent } from './gene-popover/gene-popover.component';
import { VariantsBrowseComponent } from './variants-browse/variants-browse.component';
import { EvidencePopoverComponent } from './evidence-popover/evidence-popover.component';

@NgModule({
  declarations: [
    CommentListComponent,
    CommentAddComponent,
    OrgSelectorBtnGroupComponent,
    OrgSelectorBtnDirective,
    FormErrorsAlertComponent,
    FormButtonsComponent,
    FlaggableComponent,
    LifecycleActionsComponent,
    FlaggableOptionsDirective,
    ParticipantListComponent,
    EventFeedComponent,
    UserAvatarComponent,
    UserHovercardComponent,
    UserPillComponent,
    OrganizationPillComponent,
    OrganizationHovercardComponent,
    CommentDisplayComponent,
    VariantsMenuComponent,
    FlagEntityComponent,
    FlagListComponent,
    ResolveFlagComponent,
    ClearableTextComponentFilter,
    AssertionsBrowseComponent,
    EvidenceBrowseComponent,
    QuicksearchComponent,
    UserCardComponent,
    EvidenceCardComponent,
    AssertionCardComponent,
    OrganizationCardComponent,
    OrganizationAvatarComponent,
    OrganizationsBrowseComponent,
    UserTagComponent,
    GeneTagComponent,
    OrgTagComponent,
    RevisionTagComponent,
    EventTimelineComponent,
    CommentTagComponent,
    EvidenceTagComponent,
    AssertionTagComponent,
    FlagTagComponent,
    TagListComponent,
    OrgPopoverComponent,
    GenePopoverComponent,
    VariantsBrowseComponent,
    EvidencePopoverComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    RouterModule,
    NzAlertModule,
    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule,
    NzCommentModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzMenuModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzListModule,
    NzRadioModule,
    NzSpaceModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    TimeagoModule.forChild(),
    NgxJsonViewerModule,
    NzSkeletonModule,
    NzTimelineModule,
    NzDividerModule,
    NzAvatarModule,
    NzPopoverModule,
    GenesComponentsModule,
    FormlyNgZorroAntdModule,
    FormlyModule.forChild(),
    NzSelectModule,
    NzModalModule,
    VariantsComponentsModule,
    NzSelectModule,
    NzPageHeaderModule,
    NzTableModule,
    NzAutocompleteModule,
    NzInputModule,
    NzSwitchModule,
    NzStatisticModule,
    NzImageModule,
  ],
  exports: [
    CommentAddComponent,
    CommentListComponent,
    FlaggableComponent,
    FlaggableOptionsDirective,
    FormButtonsComponent,
    FormErrorsAlertComponent,
    LifecycleActionsComponent,
    OrgSelectorBtnDirective,
    OrgSelectorBtnGroupComponent,
    ParticipantListComponent,
    EventFeedComponent,
    UserAvatarComponent,
    UserHovercardComponent,
    UserPillComponent,
    OrganizationPillComponent,
    OrganizationHovercardComponent,
    VariantsMenuComponent,
    FlagEntityComponent,
    FlagListComponent,
    ResolveFlagComponent,
    ClearableTextComponentFilter,
    AssertionsBrowseComponent,
    EvidenceBrowseComponent,
    QuicksearchComponent,
    UserCardComponent,
    EvidenceCardComponent,
    AssertionCardComponent,
    OrganizationCardComponent,
    OrganizationAvatarComponent,
    OrganizationsBrowseComponent,
    UserTagComponent,
    GeneTagComponent,
    OrgTagComponent,
    RevisionTagComponent,
    EventTimelineComponent,
    CommentTagComponent,
    EvidenceTagComponent,
    AssertionTagComponent,
    FlagTagComponent,
    TagListComponent,
    OrgPopoverComponent,
    GenePopoverComponent,
    VariantsBrowseComponent,
    EvidencePopoverComponent
  ]
})

export class SharedComponentsModule { }
