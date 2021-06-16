import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Maybe, VariantDetailFieldsFragment, VariantDetailGQL, VariantDetailQueryVariables } from "@app/generated/civic.apollo";
import { Viewer, ViewerService } from "@app/shared/services/viewer/viewer.service";
import { QueryRef } from "apollo-angular";
import {
    VariantDetailQuery
  } from '@app/generated/civic.apollo'
import { pluck, startWith } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
    selector: 'variants-detail',
    templateUrl: './variants-detail.component.html',
    styleUrls: ['./variants-detail.component.less']
})

export class VariantsDetailComponent {
    queryRef: QueryRef<VariantDetailQuery, VariantDetailQueryVariables>;

    variant$: Observable<Maybe<VariantDetailFieldsFragment>>;
    loading$: Observable<boolean>;
    commentsTotal$: Observable<number>;
    flagsTotal$: Observable<number>;
    revisionsTotal$: Observable<number>;
    viewer$: Observable<Viewer>;

    constructor(private gql: VariantDetailGQL, private viewerService: ViewerService, private route: ActivatedRoute) {

        const variantId: number = +this.route.snapshot.params['variantId'];

        this.queryRef = this.gql.watch({variantId: variantId});

        let observable = this.queryRef.valueChanges

        this.loading$ = observable.pipe(
            pluck('loading'),
            startWith(true));
      
        this.variant$ = observable.pipe(
        pluck('data', 'variant'));
    
        this.commentsTotal$ = this.variant$.pipe(
        pluck('comments', 'totalCount'));
    
        this.flagsTotal$ = this.variant$.pipe(
        pluck('flags', 'totalCount'));
    
        this.revisionsTotal$ = this.variant$.pipe(
        pluck('revisions', 'totalCount'));
    
        this.viewer$ = this.viewerService.viewer$;
    }
}