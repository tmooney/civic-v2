import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'cvc-typeahead-selector',
  templateUrl: './typeahead-selector.component.html',
  styleUrls: ['./typeahead-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeaheadSelectorComponent extends FieldType implements AfterViewInit {
  formControl!: FormControl;
  selectedValue = null;
  listOfOption: Array<{ value: string; text: string }> = [];
  nzFilterOption = () => true;

  constructor(private httpClient: HttpClient) {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search',
        showArrow: false,
        onSearch: () => {},
        filterOption: () => { },
        options: []
      },
    };
  }

  ngAfterViewInit() {
    // super.ngAfterViewInit();
    this.to.filterOption = () => true;
    this.to.onSearch = (value: string): void => {
      this.httpClient
        .jsonp<{ result: Array<[string, string]> }>(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, 'callback')
        .subscribe(data => {
          const listOfOption: Array<{ value: string; text: string }> = [];
          data.result.forEach(item => {
            listOfOption.push({
              value: item[0],
              text: item[0]
            });
          });
          this.listOfOption = listOfOption;
        });
    }
  }
}

export const TypeaheadSelectorType = {
  name: 'typeahead-selector',
  component: TypeaheadSelectorComponent,
  wrappers: ['form-field'],
}
