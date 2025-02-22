import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsDetailView } from './variants-detail.view';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { VariantsDetailRoutingModule } from './variants-detail-routing.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module';
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module';

@NgModule({
  declarations: [VariantsDetailView],
  imports: [
    CommonModule,
    VariantsDetailRoutingModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzGridModule,
    CvcContributorAvatarsModule,
    CvcTabNavigationModule,
    CvcFlaggableModule,
    CvcGeneTagModule,
    CvcSectionNavigationModule,
    CvcEntitySubscriptionButtonModule
  ],
})
export class VariantsDetailModule { }
