import { Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  BrowseVariantsGQL,
  BrowseVariantsQuery,
  Maybe,
  PageInfo,
  QueryBrowseVariantsArgs,
  VariantsSortColumns,
} from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent, WithName } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, pluck, startWith, debounceTime, take } from 'rxjs/operators';

export interface VariantTableRow {
  id: number;
  name: string;
  geneName: string;
  evidenceScore: number;
  evidenceItemCount: number;
  assertionCount: number;
  diseases: WithName[];
  drugs: WithName[];
  aliases: WithName[];
}

@Component({
  selector: 'cvc-variants-table',
  templateUrl: './variants-table.component.html',
  styleUrls: ['./variants-table.component.less'],
})
export class CvcVariantsTableComponent implements OnDestroy, OnInit {
  @Input() variantTypeId: Maybe<number>
  @Input() variantGroupId: Maybe<number>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  private initialQueryArgs?: QueryBrowseVariantsArgs;
  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseVariantsQuery, QueryBrowseVariantsArgs>;
  data$?: Observable<ApolloQueryResult<BrowseVariantsQuery>>;
  isLoading$?: Observable<boolean>;
  variants$?: Observable<Maybe<VariantTableRow>[]>;
  filteredCount$?: Observable<number>;
  pageCount$?: Observable<number>;
  pageInfo$?: Observable<PageInfo>;

  variantNameInput: Maybe<string>;
  geneSymbolInput: Maybe<string>;
  diseaseNameInput: Maybe<string>;
  drugNameInput: Maybe<string>;
  variantAliasInput: Maybe<string>;

  initialPageSize = 25;
  sortColumns: typeof VariantsSortColumns = VariantsSortColumns;

  totalCount?: number
  visibleCount: number = this.initialPageSize
  loadedPages: number = 1

  constructor(private query: BrowseVariantsGQL) {}

  ngOnInit () {
    this.initialQueryArgs = {
      first: this.initialPageSize,
      variantTypeId: this.variantTypeId,
      variantGroupId: this.variantGroupId
    };

    this.queryRef = this.query.watch(this.initialQueryArgs);

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus,
        };
      })
    );

    this.isLoading$ = this.data$.pipe(pluck('loading'), startWith(true));

    this.variants$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node);
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'pageInfo')
    );

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'filteredCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize * this.loadedPages
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      }
    )

    this.pageCount$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'pageCount'),
      startWith(0)
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => {
        this.loadedPages = 1
        this.queryRef?.refetch({
          variantName: this.variantNameInput,
          entrezSymbol: this.geneSymbolInput,
          diseaseName: this.diseaseNameInput,
          drugName: this.drugNameInput,
          variantAlias: this.variantAliasInput
        });
      });
  }

  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
    this.queryRef?.refetch({
      ...this.initialQueryArgs,
      sortBy: buildSortParams(e),
    });
  }

  onModelUpdated(_: Maybe<string>) {
    this.debouncedQuery.next();
  }

  ngOnDestroy() {
    this.debouncedQuery.unsubscribe();
  }

  loadMore(cursor: Maybe<string>) {
    this.queryRef?.fetchMore({variables: {
      after: cursor
    }})

    this.loadedPages += 1
  }
}
