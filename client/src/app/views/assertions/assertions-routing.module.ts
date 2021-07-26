import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssertionsBrowseComponent } from '@app/components/shared/assertions-browse/assertions-browse.component';
import { AssertionsCommentsComponent } from './assertions-comments/assertions-comments.component';
import { AssertionsDetailComponent } from './assertions-detail/assertions-detail.component';
import { AssertionsFlagsComponent } from './assertions-flags/assertions-flags.component';
import { AssertionsSummaryComponent } from './assertions-summary/assertions-summary.component';

import { AssertionsComponent } from './assertions.component';

const routes: Routes = [
  {
    path: '',
    component: AssertionsComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: AssertionsBrowseComponent,
        data: {
          breadcrumb: 'Browse'
        }
      },
      {
        path: ':assertionId',
        component: AssertionsDetailComponent,
        data: {
          breadcrumb: 'GENERATE' // triggers label generation by getRouteLabel in section-navigation
        },
        children: [
          {path: '', redirectTo: 'summary', pathMatch: 'full'},
          {
            path: 'summary',
            component: AssertionsSummaryComponent,
            data: {
              breadcrumb: 'Summary'
            }
          },
          {
            path: 'comments',
            component: AssertionsCommentsComponent,
            data: {
              breadcrumb: 'Comments'
            }
          },
          // TODO needs revisions path/component
          {
            path: 'flags',
            component: AssertionsFlagsComponent,
            data: {
              breadcrumb: 'Flags'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssertionsRoutingModule { }
