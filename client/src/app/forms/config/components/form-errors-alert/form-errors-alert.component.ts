import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cvc-form-errors-alert',
  templateUrl: './form-errors-alert.component.html',
  styleUrls: ['./form-errors-alert.component.less']
})
export class CvcFormErrorsAlertComponent implements OnInit {
  @Input() errors!: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
