import { Component, Input, OnInit } from "@angular/core";
import { GenePopoverFragment, GenePopoverGQL, Maybe } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-gene-popover',
  templateUrl: './gene-popover.component.html',
  styleUrls: ['./gene-popover.component.less']
})
export class CvcGenePopoverComponent implements OnInit {
  @Input() geneId!: number;

  gene$?: Observable<Maybe<GenePopoverFragment>>

  constructor(private gql: GenePopoverGQL) { }

  ngOnInit() {
    if (this.geneId == undefined) {
      throw new Error("cvc-gene-popover requires valid geneId input.");
    }
    this.gene$ = this.gql.watch({ geneId: this.geneId })
      .valueChanges
      .pipe(map(({ data }) => data.gene))
  }
}
