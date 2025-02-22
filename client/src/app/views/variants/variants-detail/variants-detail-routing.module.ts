import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantsDetailView } from './variants-detail.view';
import { VariantsCommentsModule } from './variants-comments/variants-comments.module';
import { VariantsCommentsPage } from './variants-comments/variants-comments.page';
import { VariantsFlagsModule } from './variants-flags/variants-flags.module';
import { VariantsFlagsPage } from './variants-flags/variants-flags.page';
import { VariantsRevisionsModule } from './variants-revisions/variants-revisions.module';
import { VariantsRevisionsPage } from './variants-revisions/variants-revisions.page';
import { VariantsSummaryModule } from './variants-summary/variants-summary.module';
import { VariantsSummaryPage } from './variants-summary/variants-summary.page';
import { VariantsEventsPage } from './variants-events/variants-events.page';
import { VariantsEventsModule } from './variants-events/variants-events.module';

const routes: Routes = [
  {
    path: '',
    component: VariantsDetailView,
    data: { breadcrumb: 'DISPLAYNAME' },
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        component: VariantsSummaryPage,
        data: {
          breadcrumb: 'Summary',
        },
      },
      {
        path: 'comments',
        component: VariantsCommentsPage,
        data: {
          breadcrumb: 'Comments',
        },
      },
      {
        path: 'revisions',
        component: VariantsRevisionsPage,
        data: {
          breadcrumb: 'Revisions',
        },
      },
      {
        path: 'flags',
        component: VariantsFlagsPage,
        data: {
          breadcrumb: 'Flags',
        },
      },
      {
        path: 'events',
        component: VariantsEventsPage,
        data: {
          breadcrumb: 'Events',
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    VariantsSummaryModule,
    VariantsCommentsModule,
    VariantsRevisionsModule,
    VariantsFlagsModule,
    VariantsEventsModule,
  ],
  exports: [RouterModule],
})
export class VariantsDetailRoutingModule {}
