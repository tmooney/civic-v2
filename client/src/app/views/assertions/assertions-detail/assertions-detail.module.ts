import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssertionsDetailComponent } from './assertions-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { CvcDetailsNavigationModule } from '@app/components/shared/details-navigation/details-navigation.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module';
import { CvcRevertEntityButtonModule } from '@app/components/shared/revert-entity-button/revert-entity-button.module';
import { CvcModerateEntityButtonsModule } from '@app/components/shared/moderate-entity-buttons/moderate-entity-button.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module';

@NgModule({
  declarations: [AssertionsDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzSpaceModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    NzAlertModule,
    NzGridModule,
    CvcSectionNavigationModule,
    CvcGeneTagModule,
    CvcFlaggableModule,
    CvcDetailsNavigationModule,
    CvcVariantTagModule,
    CvcEntitySubscriptionButtonModule,
    CvcRevertEntityButtonModule,
    CvcModerateEntityButtonsModule,
    CvcTabNavigationModule,
    CvcContributorAvatarsModule,
  ],
  exports: [AssertionsDetailComponent]
})
export class AssertionsDetailModule { }
