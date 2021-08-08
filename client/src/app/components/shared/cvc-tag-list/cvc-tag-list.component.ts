import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';
/**
 * Wraps a set of <cvc-[entity]-tag> elements to apply styles that ensure
 * internal margins between tag rows, and appropriate padding with its parent
 */

@Component({
  selector: 'cvc-tag-list-r',
  templateUrl: './cvc-tag-list.component.html',
  styleUrls: ['./cvc-tag-list.component.less'],
  host: { '[class.xs]': 'size === "xs" || !size', '[class.sm]': 'size === "sm"' }
})
export class CvcTagListComponent implements OnInit {
  @Input() size!: Maybe<'xs' | 'sm'>;
  constructor() { }

  ngOnInit(): void {
  }
}
