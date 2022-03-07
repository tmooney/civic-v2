import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssertionsCommentsPage } from './assertions-detail/assertions-comments/assertions-comments.page';
import { AssertionsDetailView } from './assertions-detail/assertions-detail.view';
import { AssertionsFlagsPage } from './assertions-detail/assertions-flags/assertions-flags.page';
import { AssertionsHomePage } from './assertions-home/assertions-home.page';
import { AssertionsRevisionsPage } from './assertions-detail/assertions-revisions/assertions-revisions.page';
import { AssertionsSummaryPage } from './assertions-detail/assertions-summary/assertions-summary.page';

import { AssertionsView } from './assertions.view';

const routes: Routes = [
  {
    path: '',
    component: AssertionsView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: AssertionsHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: 'add',
        loadChildren: () =>
          import('@app/views/assertions/assertion-add/assertion-add.module').then(
            (m) => m.AssertionAddModule
          ),
        data: { breadcrumb: 'Add' }
      },
      {
        path: ':assertionId',
        component: AssertionsDetailView,
        data: {
          breadcrumb: 'DISPLAYNAME' // triggers label generation by getRouteLabel in section-navigation
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: AssertionsSummaryPage,
            data: {
              breadcrumb: 'Summary'
            }
          },
          {
            path: 'comments',
            component: AssertionsCommentsPage,
            data: {
              breadcrumb: 'Comments'
            }
          },
          {
            path: 'revisions',
            component: AssertionsRevisionsPage,
            data: {
              breadcrumb: 'Revisions'
            }
          },
          {
            path: 'flags',
            component: AssertionsFlagsPage,
            data: {
              breadcrumb: 'Flags'
            }
          }
        ]
      }
    ]
  },
  { path: 'add', loadChildren: () => import('./assertion-add/assertion-add.module').then(m => m.AssertionAddModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssertionsRoutingModule { }
