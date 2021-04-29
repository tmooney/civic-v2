import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Data } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { pluck, map, tap, switchMap, startWith, distinctUntilChanged } from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesDetailService } from './genes-detail.service';
import {
  CommentableInput,
  CommentableEntities,
  Gene,
  User,
  Flag,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'genes-detail',
  templateUrl: './genes-detail.component.html',
  styleUrls: ['./genes-detail.component.less']
})

export class GenesDetailComponent implements OnInit {
  loading$: Observable<boolean>;
  gene$: Observable<Gene>;
  viewer$: Observable<Viewer>;
  commentsTotal$: Observable<number>;
  revisionsTotal$: Observable<number>;
  flagsTotal$: Observable<number>;

  subject!: CommentableInput;

  constructor(private service: GenesDetailService,
              private viewerService: ViewerService,
              private router: Router,
              private route: ActivatedRoute,
              private logger: NGXLogger) {

    const geneId: number = +this.route.snapshot.params['geneId'];
    const source$: Observable<any> = this.service.watchGeneDetail(geneId);

    this.loading$ = source$.pipe(
      pluck('data', 'loading'),
      startWith(true));

    this.gene$ = source$.pipe(
      pluck('data', 'gene'));

    this.commentsTotal$ = this.gene$.pipe(
      pluck('comments', 'filteredCount'));

    this.flagsTotal$ = this.gene$.pipe(
      pluck('flags', 'filteredCount'));

    this.revisionsTotal$ = this.gene$.pipe(
      pluck('revisions', 'filteredCount'));


    this.viewer$ = this.viewerService.viewer$;
  }

  ngOnInit(): void {
    this.logger.trace("GenesDetailComponent initialized.");
  }

  loadMoreComments(): void {
    this.logger.trace('loadMoreComments called.');
  }

  ngOnDestroy(): void {
  }
}
