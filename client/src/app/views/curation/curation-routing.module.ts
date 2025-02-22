import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurationActivityView } from './curation-activity/curation-activity.view';
import { CurationQueuesView } from './curation-queues/curation-queues.view';
import { CurationView } from './curation.view';

const routes: Routes = [
  {
    path: '',
    component: CurationView,
    children: [
      { path: '', redirectTo: 'activity', pathMatch: 'full' },
      {
        path: 'activity',
        component: CurationActivityView,
        loadChildren: () => import('@app/views/curation/curation-activity/curation-activity.module').then((m) => m.CurationActivityModule),
        data: {
          breadcrumb: 'Activity'
        },
      },
      {
        path: 'queues',
        component: CurationQueuesView,
        loadChildren: () => import('@app/views/curation/curation-queues/curation-queues.module').then((m) => m.CurationQueuesModule),
        data: {
          breadcrumb: 'Queues'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurationRoutingModule { }
