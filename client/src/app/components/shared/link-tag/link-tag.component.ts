import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-link-tag',
  templateUrl: './link-tag.component.html',
  styleUrls: ['./link-tag.component.less']
})
export class CvcLinkTagComponent implements OnInit {
  @Input() href!: string;
  @Input() tooltip: Maybe<string>;
  @Input() iconName: Maybe<string>

  constructor() { }

  ngOnInit() {
    if (this.href === undefined) {
      throw new Error(
        'cvc-link-tag requires href string input, none supplied.'
      );
    }
  }

}
