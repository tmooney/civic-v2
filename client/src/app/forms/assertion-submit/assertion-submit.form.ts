import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AssertionClinicalSignificance, AssertionDirection, AssertionType, DrugInteraction, EvidenceItem, Maybe, NullableAmpLevelTypeInput, SourceSource, VariantOrigin } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { AssertionState } from '../config/states/assertion.state';
import { FormDisease, FormDrug, FormGene, FormPhenotype, FormVariant } from '../forms.interfaces';

interface FormModel {
  fields: {
    id: number
    description: string
    summary: string
    variant: FormVariant[]
    gene: FormGene[]
    variantOrigin: VariantOrigin
    evidenceType: AssertionType
    clinicalSignificance: AssertionClinicalSignificance
    disease: FormDisease[]
    evidenceDirection: AssertionDirection
    phenotypes: FormPhenotype[]
    drugs: FormDrug[]
    drugInteractionType: Maybe<DrugInteraction>
    ampLevel: Maybe<NullableAmpLevelTypeInput>
    evidenceItems: EvidenceItem[]
    nccnGuideline: Maybe<number>
    acmgCodeIds: number[]
    fdaCompanionTest: boolean
    fdaRegulatoryApproval: boolean
    comment: Maybe<string>
  }
}

@Component({
  selector: 'cvc-assertion-submit-form',
  templateUrl: './assertion-submit.form.html',
  styleUrls: ['./assertion-submit.form.less']
})
export class AssertionSubmitForm implements OnInit, OnDestroy {
  private destroy$!: Subject<void>;

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = { formState: new AssertionState() };

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number

  constructor() {

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-info'],
        templateOptions: {
          label: 'Add Evidence Item Form'
        },
        fieldGroup: [
          {
            key: 'gene',
            type: 'gene-array',
            templateOptions: {
              maxCount: 1,
              required: true
            }
          },
          {
            key: 'variant',
            type: 'variant-array',
            templateOptions: {
              required: true,
              maxCount: 1
            }
          },
          {
            key: 'variantOrigin',
            type: 'variant-origin-select',
            templateOptions: {
              required: true,
            }
          },
          {
            key: 'disease',
            type: 'disease-array',
            templateOptions: {}
          },
          {
            key: 'evidenceType',
            type: 'evidence-type-select',
            templateOptions: {
              label: 'Assertion Type',
              required: true,
            },
          },
          {
            key: 'evidenceDirection',
            type: 'evidence-direction-select',
            templateOptions: {
              label: 'Assertion Direction',
              required: true,
            },
          },
          {
            key: 'clinicalSignificance',
            type: 'clinical-significance-select',
            templateOptions: {
              required: true
            }
          },
          {
            key: 'drugs',
            type: 'drug-array',
          },
          {
            key: 'drugInteractionType',
            type: 'drug-interaction-select'
          },
          {
            key: 'ampLevel',
            type: 'input',
            templateOptions: {
              label: 'AMP Level',
            }
          },
          {
            key: 'acmgCodes',
            type: 'input',
            templateOptions: {
              label: 'ACMG/AMP Code(s)',
            }
          },
          {
            key: 'phenotypes',
            type: 'phenotype-array',
          },
          {
            key: 'nccnGuideline',
            type: 'input',
            templateOptions: {
              label: 'NCCN Guideline'
            }
          },
          {
            key: 'nccnGuidelineVersion',
            type: 'input',
            templateOptions: {
              label: 'NCCN Guideline Version'
            }
          },
          {
            key: 'fdaRegulatoryApproval',
            type: 'checkbox',
            templateOptions: {
              label: 'FDA Regulatory Approval?',
            }
          },
          {
            key: 'fdaCompanionTest',
            type: 'checkbox',
            templateOptions: {
              label: 'FDA Companion Test?',
            }
          },
          {
            key: 'summary',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Assertion Summary',
              helpText: 'A short, one sentence summary of this new assertion',
              placeholder: 'No description provided',
              required: true
            }
          },
          {
            key: 'description',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Assertion Statement',
              helpText: 'A complete, original description of this new assertion, limited to one paragraph',
              placeholder: 'No description provided',
              required: true
            }
          },
          {
            key: 'source',
            type: 'multi-field',
            templateOptions: {
              label: 'Source',
              helpText: 'CIViC accepts PubMed or ASCO Abstracts sources. Please provide the source of the support for your evidence here.',
              addText: 'Specify a Source',
              maxCount: 1,
            },
            fieldArray: {
              type: 'source-input',
              templateOptions: {
                required: true,
              },
            },
          },
          {
            key: 'comment',
            type: 'cvc-comment-textarea',
            templateOptions: {
              label: 'Comment',
              helpText: 'Please provide any additional comments you wish to make about this evidence item. This comment will appear as the first comment in this item\'s comment thread.',
              placeholder: 'Please enter a comment describing your revision.',
              required: true,
              minLength: 10
            },
          },
          {
            key: 'organization',
            type: 'org-submit-button',
            templateOptions: {
              submitLabel: 'Submit Evidence Item Revision',
              submitSize: 'large'
            }
          }
        ]
      }
    ];
  }

  submitAssertion = (model: FormModel):void => {
    console.log('Assertion Submitted!');
    console.log(model);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {  }

}
