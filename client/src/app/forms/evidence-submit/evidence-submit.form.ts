import { Component, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';
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
} from '@app/generated/civic.apollo';
import * as fmt from '@app/forms/config/utilities/input-formatters';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EvidenceItemSubmitService } from './evidence-submit.service';
import { EvidenceState } from '@app/forms/config/states/evidence.state';

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

interface FormGene {
  id?: number;
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
  fields: {
    id: number;
    clinicalSignificance: EvidenceClinicalSignificance;
    description: string;
    disease: FormDisease[];
    drugInteractionType: Maybe<DrugInteraction>;
    drugs: FormDrug[];
    evidenceDirection: EvidenceDirection;
    evidenceLevel: EvidenceLevel;
    evidenceType: EvidenceType;
    gene: FormGene[],
    phenotypes: FormPhenotype[];
    evidenceRating: number;
    source: FormSource[];
    variant: FormVariant[];
    variantOrigin: VariantOrigin;
    comment?: string,
    organization?: Maybe<Organization>
  };
}

@Component({
  selector: 'cvc-evidence-submit-form',
  templateUrl: './evidence-submit.form.html',
  styleUrls: ['./evidence-submit.form.less'],
})
export class EvidenceSubmitForm implements AfterViewInit, OnDestroy {
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
  formOptions: FormlyFormOptions = { formState: new EvidenceState() };

  constructor(
    private submitService: EvidenceItemSubmitService,
    private viewerService: ViewerService,
  ) {
    // subscribing to viewer$ and setting local org, mostRecentOrg
    // so that mostRecentOrg can be updated by org-selector's selectOrg events
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$))
      .subscribe((v: Viewer) => {
        this.organizations = v.organizations;
        this.mostRecentOrg = v.mostRecentOrg;
      });

    this.submitError$ = this.submitService.submitError$;
    this.isSubmitting$ = this.submitService.isSubmitting$;
    this.submitSuccess$ = this.submitService.submitSuccess$;

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
            type: 'multi-field',
            templateOptions: {
              label: 'Gene',
              addText: 'Specify a Gene',
              maxCount: 1,
            },
            fieldArray: {
              type: 'cvc-gene-input',
              templateOptions: {
                required: true,
              },
            },
            defaultValue: []
          },
          {
            key: 'variant',
            type: 'multi-field',
            templateOptions: {
              label: 'Variant',
              addText: 'Specify a Variant',
              maxCount: 1,
            },
            fieldArray: {
              type: 'variant-input',
              templateOptions: {
                required: true,
              },
            },
            defaultValue: []
          },
          {
            key: 'description',
            type: 'cvc-textarea',
            templateOptions: {
              label: 'Evidence Statement',
              helpText: 'Your original description of evidence from published literature detailing the association or lack of association between a variant and its predictive, prognostic, diagnostic, predisposing, functional or oncogenic value. Data constituting personal or identifying information should not be entered (e.g. <a href="https://www.hipaajournal.com/what-is-protected-health-information/" target="_blank">protected health information (PHI) as defined by HIPAA</a> in the U.S. and/or comparable laws in your jurisdiction).',
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
              required: true
            },
            fieldArray: {
              type: 'source-input',
              templateOptions: {
                required: true,
              },
            },
            defaultValue: []
          },
          {
            key: 'variantOrigin',
            type: 'variant-origin-select',
            templateOptions: {
              required: true,
            }
          },
          {
            key: 'evidenceType',
            type: 'evidence-type-select',
            templateOptions: {
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
            key: 'disease',
            type: 'disease-array',
            templateOptions: {}
          },
          {
            key: 'evidenceLevel',
            type: 'evidence-level-select',
            templateOptions: {
              required: true,
            }
          },
          {
            key: 'evidenceDirection',
            type: 'evidence-direction-select',
            templateOptions: {
              required: true,
            },
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
            key: 'phenotypes',
            type: 'phenotype-array',
          },
          {
            key: 'evidenceRating',
            type: 'rating-input',
            templateOptions: {
              label: 'Rating',
              helpText: 'Please rate your evidence on a scale of one to five stars. Use the star rating descriptions for guidance.',
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

  ngAfterViewInit(): void {
  }

  selectOrg(org: Organization): void {
    this.mostRecentOrg = org;
  }

  submitEvidence(formModel: FormModel): void {
    this.submitService
      .submit(this.toSubmitInput(formModel));
  }

  toSubmitInput(model: FormModel): SuggestEvidenceItemRevisionInput {
    const fields = model.fields;
    return <SuggestEvidenceItemRevisionInput>{
      ...model,
      fields: {
        variantOrigin: fields.variantOrigin,
        description: fmt.toNullableString(fields.description),
        geneId: fields.gene[0].id,
        variantId: fields.variant[0].id,
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
      id: fields.id,
      comment: fields.comment,
      organizationId: this.mostRecentOrg === undefined ? undefined : this.mostRecentOrg.id
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.submitService.cleanup();
  }
}
