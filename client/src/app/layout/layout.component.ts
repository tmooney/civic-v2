import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '@app/generated/civic.apollo';
import { ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'cvc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  isCollapsed = false;
  data$!: Observable<any>;
  viewer$!: Observable<User>;
  signedIn$!: Observable<boolean>;
  signedOut$!: Observable<boolean>;
  canCurate$!: Observable<boolean>;
  canModerate$!: Observable<boolean>;

  constructor(private viewerService: ViewerService,) {}

  ngOnInit(): void {
    this.data$ = this.viewerService.data$;
    this.viewer$ = this.viewerService.viewer$;
    this.signedIn$ = this.viewerService.signedIn$;
    this.signedOut$ = this.viewerService.signedOut$;
    this.canCurate$ = this.viewerService.canCurate$;
    this.canModerate$ = this.viewerService.canModerate$;
  }

}
