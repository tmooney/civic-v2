import { AbstractControl } from '@angular/forms';
import { Maybe } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { EntityState, EntityType } from '../../states/entity.state';

export const fdaApprovalCheckboxTypeOption: TypeOption = {
  name: 'fda-approval-checkbox',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'FDA Regulatory Approval?',
      helpText: "Select yes if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",
      placeholder: 'None Specified',
      options: [
        { value: true, label: 'Yes' },
        { value: false, label: 'No' },
      ],
    },
    hooks: {
      onInit: (ffc?: FormlyFieldConfig): void => {
        if(ffc) {
          const to: Maybe<FormlyTemplateOptions> = ffc.templateOptions;
          const nccnCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
          const st: EntityState = ffc?.options?.formState;
          if(!nccnCtrl) { return; }
          if(!to) { return; }
          to.ncSub = nccnCtrl.valueChanges
            .subscribe((et: Maybe<EntityType>) => {
              if(et && st.allowsFdaApproval(et)) {
                to.hidden = false
                to.required = true;
              } else {
                ffc.model[ffc.key as string] = false
                to.hidden = true
              }
            })
        }
      },
      onDestroy: (ffc?: FormlyFieldConfig): void =>  {
        if (ffc) {
          const to: Maybe<FormlyTemplateOptions> = ffc.templateOptions;
          to?.ncSub?.unsubscribe();

        }
      }
    }
  },
}
