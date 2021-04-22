import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map, tap, withLatestFrom, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesSummaryService } from '@app/views/genes/genes-summary/genes-summary.service';
import {
  CommentableInput,
  CommentableEntities,
  Gene,
  Revision,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';
import { Maybe } from 'graphql/jsutils/Maybe';


@Component({
  selector: 'cvc-genes-summary',
  templateUrl: './genes-summary.component.html',
  styleUrls: ['./genes-summary.component.less']
})
export class GenesSummaryComponent implements OnInit {
  gene$!: Observable<Gene>;
  subject$!: Observable<any>;
  data$!: Observable<Data>;
  loading$!: Observable<boolean>
  myGeneInfo$!: Observable<any>;
  viewer$: Observable<Viewer>;
  comments$!: Observable<any>;
  revisions$!: Observable<Revision[]>;

  constructor(private service: GenesSummaryService,
    private viewerService: ViewerService,
    private route: ActivatedRoute) {

    this.viewer$ = this.viewerService.viewer$;
    this.route.params.subscribe(params => {
      const geneId: number = +params['geneId'];
      this.data$ = this.service.watchGenesSummary(geneId);
      this.gene$ = this.data$.pipe(
        pluck('data', 'gene'),
      );

      this.loading$ = this.data$
        .pipe(pluck('loading'));

      this.subject$ = this.gene$.pipe(
        map(gene => {
          return {
            id: +gene.id,
            entityType: CommentableEntities[gene.__typename]
          } as CommentableInput;
        }));

      this.myGeneInfo$ = this.gene$.pipe(
        pluck('myGeneInfoDetails'),
        map(info => JSON.parse(info)));

      this.comments$ = this.gene$
        .pipe(pluck('comments', 'edges'));

      this.revisions$ = this.gene$
        .pipe(pluck('revisions', 'edges'));
    });
  }

  ngOnInit(): void {
  }

}
