import { Component, Input, OnInit } from '@angular/core';

export interface LinkableFlag {
  id: number,
  name: string,
  link: string,
}

export interface Subject {
  id: number,
  __typename: string
}

@Component({
  selector: 'cvc-flag-tag',
  templateUrl: './flag-tag.component.html',
  styleUrls: ['./flag-tag.component.less']
})
export class CvcFlagTagComponent implements OnInit {
  @Input() flag!: LinkableFlag
  @Input() subject?: Subject

  constructor() { }

  ngOnInit() {
    if (this.flag === undefined) {
      throw new Error('cvc-flag-tag requires LinkableFlag input, none supplied.')
    }
  }

}
