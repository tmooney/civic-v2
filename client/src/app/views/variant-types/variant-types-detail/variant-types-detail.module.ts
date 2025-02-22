import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantTypesDetailComponent } from './variant-types-detail.component';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';

@NgModule({
  declarations: [VariantTypesDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcLinkTagModule,
    CvcSectionNavigationModule,
  ]
})
export class VariantTypesDetailModule { }
