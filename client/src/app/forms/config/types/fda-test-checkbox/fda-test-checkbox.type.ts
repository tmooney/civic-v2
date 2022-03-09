import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

export const fdaTestCheckboxTypeOption: TypeOption = {
  name: 'fda-test-checkbox',
  extends: 'checkbox',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'FDA Companion Test?'
    },
    defaultValue: false,
  },
}
