import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

import { BrowseGenesGQL,
         Gene,
         GenesSortColumns,
         SortDirection,
         PageInfo
       } from '@app/generated/civic.apollo';

@Component({
  selector: 'genes-browse',
  templateUrl: './genes-browse.component.html',
  styleUrls: ['./genes-browse.component.less'],
})
export class GenesBrowseComponent implements OnInit {
  genesBrowseQuery: QueryRef<any>;
  genes$: Observable<any>;
  pageInfo!: PageInfo;
  pageSize = 25;

  constructor(private query: BrowseGenesGQL, private logger: NGXLogger) {
    this.genesBrowseQuery = this.query.watch({
      first: this.pageSize
    },
    { fetchPolicy: 'network-only' });

    this.genes$ = this.genesBrowseQuery.valueChanges.pipe(
      tap(result => {
        this.pageInfo = result.data.browseGenes.pageInfo;
      }),
      map((result) => {
        return result.data.browseGenes.nodes
      })
    );
    // this.genes$ = source$.pipe(pluck('data', 'browseGenes', 'nodes'));
  }

  loadMore():void {
    this.genesBrowseQuery.fetchMore({
      variables: {
        first: this.pageSize,
        after: this.pageInfo.endCursor
      }
    });
  }

  ngOnInit(): void {
    this.logger.trace('GenesBrowseComponent initialized.');
  }
}
