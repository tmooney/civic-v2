import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

import {
  Maybe,
  Source,
  SourceSource,
  CitationExistenceCheckGQL,
  CitationTypeaheadGQL,
  SourceTypeaheadResultFragment
} from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-typeahead-selector',
  templateUrl: './typeahead-selector.component.html',
  styleUrls: ['./typeahead-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeaheadSelectorComponent extends FieldType implements AfterViewInit {
  formControl!: FormControl;
  selectedValue = null;
  nzFilterOption = () => true;

  constructor(
    private httpClient: HttpClient,
    private sourceTypeaheadQuery: CitationTypeaheadGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
    this.defaultOptions = {
      templateOptions: {
        placeholder: 'Search',
        sourceType: undefined,
        showArrow: false,
        onSearch: () => { },
        filterOption: () => { },
        modelChange: () => { },
        minLengthSearch: 1,
        // selector component doesn't update field value until it's valid
        // storing its value and length (for various UI conditionals) here
        fieldLength: 0,
        fieldValue: '',
        optionList: [] as Array<{ value: string; label: string; source: any}>
      },
    };
  }

  ngAfterViewInit() {
    // super.ngAfterViewInit();
    this.to.filterOption = () => true;
    this.to.modelChange = (e: any): void => {
      // update form model with selected source's id & citation
      const { source }= this.to.optionList.find((opt: any) => opt.value === +e);
      this.form.patchValue({ citation: source.citation, id: source.id });
    }
    this.to.onSearch = (value: string): void => {
      this.to.fieldValue = value;
      this.to.fieldLength = value.length;
      if(value.length < this.to.minLengthSearch || value.length > this.to.maxLength!) { return }
      this.sourceTypeaheadQuery
        .fetch({
          sourceType: this.to.sourceType,
          partialCitationId: +value
        })
        .subscribe(({ data: { sourceTypeahead } }) => {
          this.to.optionList = sourceTypeahead.map(s => {
            return { value: s.citationId, label: s.citationId, source: s }
          })
          // TODO implement this search as an observable to avoid detectChanges
          this.changeDetectorRef.detectChanges();
        })
    }
  }
}

export const TypeaheadSelectorType = {
  name: 'typeahead-selector',
  component: TypeaheadSelectorComponent,
  wrappers: ['form-field'],
}
