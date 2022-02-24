import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import {
  DrugInteraction,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  Maybe,
  Organization,
  SourceSource,
  SuggestEvidenceItemRevisionInput,
  VariantOrigin,
  EvidenceItemRevisableFieldsGQL,
  RevisableEvidenceFieldsFragment,
} from '@app/generated/civic.apollo';
import * as fmt from '@app/forms/shared/input-formatters';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { $enum } from 'ts-enum-util';
import { EvidenceItemReviseService } from './evidence-revise.service';
import * as fieldState from './evidence-revise.state';



interface FormSource {
  id?: number;
  sourceType?: SourceSource;
  citationId?: number;
  citation?: string;
}

interface FormDisease {
  id?: number;
  doid?: number;
  displayName?: string;
}

interface FormDrug {
  id?: number;
  ncitId?: string;
  name?: string;
}

interface FormPhenotype {
  id?: number;
  hpoId?: string;
  name?: string;
}

interface FormVariant {
  id?: number;
  name: string;
}

/* SuggestEvidenceItemRevisionInput
 *
 * description: NullableStringInput!
 * The Evidence Items's description/summary text.
 *
 * variantId: Int!
 * The ID of the Variant to which this EvidenceItem belongs
 *
 * variantOrigin: VariantOrigin!
 * The Variant Origin for this EvidenceItem.
 *
 * sourceId: Int!
 * The ID of the Source from which this EvidenceItem was curated.
 *
 * evidenceType: EvidenceType!
 * The Type of the EvidenceItem
 *
 * clinicalSignificance: EvidenceClinicalSignificance!
 * The Clinical Significance of the EvidenceItem
 *
 * diseaseId: NullableIntInput!
 * The ID of the disease (if applicable) for this EvidenceItem
 *
 * evidenceLevel: EvidenceLevel!
 * The evidence level of the EvidenceItem
 *
 * evidenceDirection: EvidenceDirection!
 * The evidence direction for this EvidenceItem.

 * phenotypeIds: [Int!]!
 * List of IDs of CIViC Phenotype entries for this EvidenceItem. An empty list indicates none.
 *
 * rating: Int!
 * The rating for this ceItem
 *
 * drugIds: [Int!]!
 * List of IDs of CIViC Drug entries for this EvidenceItem. An empty list indicates none.
 *
 * drugInteractionType: NullableDrugInteractionTypeInput!
 * Drug interaction type for cases where more than one drug ID is provided.
 *
 */

interface FormModel {
  id: number;
  fields: {
    clinicalSignificance: EvidenceClinicalSignificance;
    description: string;
    disease: FormDisease[];
    drugInteractionType: Maybe<DrugInteraction>;
    drugs: FormDrug[];
    evidenceDirection: EvidenceDirection;
    evidenceLevel: EvidenceLevel;
    evidenceType: EvidenceType;
    phenotypes: FormPhenotype[];
    evidenceRating: number;
    source: FormSource[];
    variant: FormVariant;
    variantOrigin: VariantOrigin;
    comment: string,
    organization: Maybe<Organization>
  };
}

@Component({
  selector: 'cvc-evidence-revise-form',
  templateUrl: './evidence-revise.form.html',
  styleUrls: ['./evidence-revise.form.less'],
})
export class EvidenceReviseForm implements OnInit, OnDestroy {
  @Input() evidenceId!: number;
  private destroy$ = new Subject();
  organizations!: Array<Organization>;
  mostRecentOrg!: Maybe<Organization>;

  evidenceRevisionInput!: SuggestEvidenceItemRevisionInput;

  submitError$: BehaviorSubject<string[]>;
  submitSuccess$: BehaviorSubject<boolean>;
  isSubmitting$: BehaviorSubject<boolean>;

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = {};

  constructor(
    private revisionService: EvidenceItemReviseService,
    private viewerService: ViewerService,
    private revisableFieldsGQL: EvidenceItemRevisableFieldsGQL
  ) {
    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations;
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.submitError$ = this.revisionService.submitError$;
    this.isSubmitting$ = this.revisionService.isSubmitting$;
    this.submitSuccess$ = this.revisionService.submitSuccess$;

    this.formFields = [
      {
        key: 'fields',
        wrappers: ['form-info'],
        templateOptions: {
          label: 'Suggest Evidence Item Revision Form'
        },
        fieldGroup: [
          {
            key: 'id',
            type: 'input',
            hide: true
          },
          {
            key: 'variantOrigin',
            type: 'select',
            templateOptions: {
              label: 'Variant Origin',
              required: true,
              options: $enum(VariantOrigin)
                .map((value, key) => {
                  return { value: value, label: formatEvidenceEnum(value) }
                })
            }
          },
          {
            key: 'description',
            type: 'textarea',
            templateOptions: {
              label: 'Description',
              placeholder: 'Enter a description for this evidence item.',
              required: false
            }
          },
          {
            key: 'source',
            type: 'multi-field',
            templateOptions: {
              label: 'Source',
              addText: 'Add another Source',
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
            key: 'evidenceType',
            type: 'select',
            templateOptions: {
              label: 'Evidence Type',
              required: true,
              options: $enum(EvidenceType)
                .map((value, key) => {
                  return { value: value, label: formatEvidenceEnum(value) }
                })
            },
          },
          {
            key: 'clinicalSignificance',
            type: 'select',
            templateOptions: {
              label: 'Clinical Signficance',
              required: true,
              options: $enum(EvidenceClinicalSignificance)
                .map((value, key) => {
                  return { value: value, label: formatEvidenceEnum(value) }
                })
            },
            expressionProperties: {
              'templateOptions.options': (model: any) => {
                return fieldState.getSignificanceOptions(model.evidenceType)
                  .map(
                    (value) => {
                      return {
                        value: value,
                        label: formatEvidenceEnum(value)
                      }
                    })
              }
            }
          },
          {
            key: 'disease',
            type: 'multi-field',
            templateOptions: {
              label: 'Disease',
              addText: 'Add a Disease',
              minLength: 1,
              maxCount: 1,
            },
            fieldArray: {
              type: 'disease-input',
              templateOptions: {}
            },
          },
          {
            key: 'description',
            type: 'textarea',
            templateOptions: {
              label: 'Evidence Statement',
              placeholder: 'Please enter statement describing this evidence item.',
              required: false
            }
          },
          {
            key: 'evidenceLevel',
            type: 'select',
            templateOptions: {
              label: 'Evidence Level',
              required: true,
              options: $enum(EvidenceLevel)
                .map((value, key) => {
                  return { value: value, label: key }
                })
            }
          },
          {
            key: 'evidenceDirection',
            type: 'select',
            templateOptions: {
              label: 'Evidence Direction',
              placeholder: 'Please select an Evidence Direction',
              required: true,
              options: $enum(EvidenceDirection)
                .map((value, key) => {
                  return { value: value, label: formatEvidenceEnum(value) }
                })
            }
          },
          {
            key: 'drugs',
            type: 'multi-field',
            templateOptions: {
              label: 'Drug(s)',
              addText: 'Add a Drug',
              hidden: false,
            },
            fieldArray: {
              type: 'drug-input',
              templateOptions: {
              },
            },
            hideExpression: (model: any, formState: any, field?: FormlyFieldConfig) => {
              // TODO why isn't the main model provided for this field? instead of accessing the main model directly, we have to get to it via field.parent.model. b/c it's a fieldArray type intead of fieldType?
              const evidenceType = field?.parent?.model.evidenceType;
              if(evidenceType) {
                const requiresDrug = fieldState.requiresDrug(evidenceType);
                console.log(`${evidenceType} requiresDrug: ${requiresDrug}`);
                console.log(`hide drugs field: ${!requiresDrug}`);
                return !fieldState.requiresDrug(evidenceType);
              } else {
                return false;
              }
            },
          },
          {
            key: 'drugInteractionType',
            type: 'select',
            templateOptions: {
              label: 'Drug InteractionType',
              required: false,
              placeholder: 'Please select a Drug Interaction Type',
              options: $enum(DrugInteraction)
                .map((value, key) => {
                  return { value: value, label: key }
                })
            }
          },
          {
            key: 'phenotypes',
            type: 'multi-field',
            templateOptions: {
              label: 'Associated Phenotypes',
              addText: 'Add a Phenoype'
            },
            fieldArray: {
              type: 'phenotype-input',
              templateOptions: {
              }
            }
          },
          {
            key: 'evidenceRating',
            type: 'rating-input',
            templateOptions: {
              label: 'Rating',
            },
          },
          {
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
              label: 'Comment',
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

  ngOnInit(): void {
    // fetch latest revisable field values, update form fields
    this.revisableFieldsGQL.fetch({ evidenceId: this.evidenceId })
      .subscribe(        // response
        ({ data: { evidenceItem } }) => {
          if (evidenceItem) {
            this.formModel = this.toFormModel(evidenceItem);
          }
          if (this.formOptions.updateInitialValue) {
            this.formOptions.updateInitialValue();
          }
        },
        // error
        (error) => {
          console.error('Error retrieving evidenceItem.');
          console.error(error);
        },
        // complete
        () => {
          // prompt fields to display any errors that exist in loaded evidenceItem
          this.formGroup.markAllAsTouched();
          // mark comment field as untouched, we don't want to show an error before the user interacts with the field
          const commentFc: AbstractControl | null = this.formGroup.get('fields.comment');
          if (commentFc) { commentFc.markAsUntouched() }
        });
  }

  toFormModel(evidence: RevisableEvidenceFieldsFragment): FormModel {
    return <FormModel>{
      id: evidence.id,
      fields: {
        ...evidence,
        source: [evidence.source], // wrapping an array so multi-field will display source properly until we write a single-source option
        drugs: evidence.drugs.length > 0 ? evidence.drugs : [],
        disease: [evidence.disease],
        comment: this.formModel.fields.comment,
        organization: this.formModel.fields.organization
      },
    }
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitRevision(formModel: FormModel): void {
    this.revisionService
      .suggest(this.toRevisionInput(formModel));
  }

  toRevisionInput(model: FormModel): SuggestEvidenceItemRevisionInput {
    const fields = model.fields;
    return <SuggestEvidenceItemRevisionInput>{
      ...model,
      fields: {
        variantOrigin: fields.variantOrigin,
        description: fmt.toNullableString(fields.description),
        variantId: fields.variant.id,
        sourceId: fields.source[0].id,
        evidenceType: fields.evidenceType,
        evidenceDirection: fields.evidenceDirection,
        clinicalSignificance: fields.clinicalSignificance,
        diseaseId: fmt.toNullableInput(fields.disease[0].id),
        evidenceLevel: fields.evidenceLevel,
        phenotypeIds: fields.phenotypes.map((ph: FormPhenotype) => { return ph.id }),
        rating: +fields.evidenceRating,
        drugIds: fields.drugs.map((dr: FormDrug) => { return dr.id }),
        drugInteractionType: fmt.toNullableInput(fields.drugInteractionType)
      },
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id

    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.revisionService.cleanup();
  }
}
