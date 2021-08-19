import {
  Component,
  Input,
  OnChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cvc-gene-description-revision',
  templateUrl: './gene-description-revision.component.html',
  styleUrls: ['./gene-description-revision.component.less'],
  encapsulation: ViewEncapsulation.None // no encapsulation b/c diff html provided by server
})

export class CvcGeneDescriptionRevisionComponent implements OnChanges {
  @Input() revision!: any;
  insertionsHtml!: string;
  deletionsHtml!: string;

  constructor() { }

  ngOnChanges(): void {
   // extract insertions, deletions HTML from linkoutData diff
    if(this.revision) {
      const diffDom = new DOMParser().parseFromString(this.revision.linkoutData.diffValue.value, "text/html")
      const ins = diffDom.querySelector('ins');
      if(ins) { this.insertionsHtml = ins.outerHTML; }
      const del = diffDom.querySelector('del');
      if(del) { this.deletionsHtml = del.outerHTML; }
    }
  }

}
