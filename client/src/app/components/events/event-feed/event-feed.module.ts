import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEventFeedComponent } from './event-feed.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcEventTimelineModule } from '../event-timeline/event-timeline.module';

@NgModule({
  declarations: [CvcEventFeedComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzCardModule,
    NzIconModule,
    NzFormModule,
    NzSelectModule,
    NzSwitchModule,
    NzGridModule,
    CvcEventTimelineModule,
  ],
  exports: [CvcEventFeedComponent]
})
export class CvcEventFeedModule { }
