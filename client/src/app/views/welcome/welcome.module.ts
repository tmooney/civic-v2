import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcSiteStatsCardModule } from '@app/components/shared/site-stats-card/site-stats-card.module';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzGridModule,
    NzCarouselModule,
    NzCardModule,
    NzListModule,
    NzRadioModule,
    NzSpaceModule,
    NzStatisticModule,
    NzTypographyModule,
    WelcomeRoutingModule,
    CvcSiteStatsCardModule,
    CvcEventFeedModule,
    NgxJsonViewerModule,
  ],
  declarations: [
    WelcomeComponent
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
