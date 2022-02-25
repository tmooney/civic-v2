import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ConfigOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';
import { HasFocusExtension, } from './shared/extensions/has-focus.extension';
import { TypeaheadSelectorType } from './sources/types/source-input/source-selector/source-selector-typeahead/source-selector-typeahead.type';
import { VariantTypeInputType } from './variant-types/types/variant-type-input/variant-type-input.type';
import { VariantInputType } from './variants/types/variant-input/variant-input.type';

export const defaultValidationMessages: ValidationMessageOption[] = [
  {
    name: 'required',
    message: 'This field is required.'
  },
  {
    name: 'minlength',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a minimum length of ${field.templateOptions?.minLength}.`;
    }
  },
  {
    name: 'maxlength',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a maximum length of ${field.templateOptions?.maxLength}.`;
    }
  },
  {
    name: 'min',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a minimum value of ${field.templateOptions?.min}.`;
    }
  },
  {
    name: 'max',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a maximum value of ${field.templateOptions?.max}.`;
    }
  },
  {
    name: 'pattern',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field's value must fit the pattern ${field.templateOptions?.pattern}.`;
    }
  },
  {
    name: 'ensembl',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `${field.formControl?.value} is not a valid version of Ensembl. Must be an number between 76 and the latest version of Ensembl.`;
    }
  },
  {
    name: 'integer',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `${field.formControl?.value} is not a valid integer. Must be either a number or empty`;
    }
  },

];

export const additionalValidators: ValidatorOption[] = [
  {
    name: 'ensembl',
    validation: (c: AbstractControl, f: FormlyFieldConfig): ValidationErrors | null => {
      if (c.value === undefined) {
        return null;
      } else {
        let versionNum = +c.value;
        if (versionNum < 76 || versionNum > 150) {
          return { ensembl: true };
        }
        return null;
      }
    },
  },
  {
    name: 'integer',
    validation: (c: AbstractControl, f: FormlyFieldConfig): ValidationErrors | null => {
      if (c.value === '' || c.value === undefined) {
        return null;
      } else {
        return /^\d+$/.test(c.value) ? null : { 'integer': true }
      }
    },
  },
];

export const CvcFormlyConfig: ConfigOption = {
  types: [
    TypeaheadSelectorType,
    VariantInputType,
    VariantTypeInputType,
  ],
  extras: { immutable: true },
  validationMessages: defaultValidationMessages,
  validators: additionalValidators,
  extensions: [HasFocusExtension],
}
