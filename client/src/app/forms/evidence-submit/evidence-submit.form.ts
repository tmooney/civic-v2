import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { EvidenceState } from '@app/forms/config/states/evidence.state';
import * as fmt from '@app/forms/config/utilities/input-formatters';
import {
  DrugInteraction,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  Maybe,
  Organization,
  SubmitEvidenceItemGQL,
  SubmitEvidenceItemInput,
  SubmitEvidenceItemMutation,
  SubmitEvidenceItemMutationVariables,
  VariantOrigin
} from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormDisease, FormDrug, FormGene, FormPhenotype, FormSource, FormVariant } from '../forms.interfaces';

interface FormModel {
  fields: {
    id: number

    description: string
    source: FormSource[]

    gene: number,
    genes: number[],
    variant: FormVariant[]

    variantOrigin: VariantOrigin
    disease: FormDisease[]
    drugs: FormDrug[]
    drugInteractionType: Maybe<DrugInteraction>

    clinicalSignificance: EvidenceClinicalSignificance
    evidenceDirection: EvidenceDirection
    evidenceLevel: EvidenceLevel
    evidenceType: EvidenceType
    evidenceRating: number

    phenotypes: FormPhenotype[]

    comment?: string
    organization?: Maybe<Organization>
  }
}

@Component({
  selector: 'cvc-evidence-submit-form',
  templateUrl: './evidence-submit.form.html',
  styleUrls: ['./evidence-submit.form.less'],
})
export class EvidenceSubmitForm implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject();

  formModel!: FormModel;
  formGroup: FormGroup = new FormGroup({});
  formFields: FormlyFieldConfig[];
  formOptions: FormlyFormOptions = { formState: new EvidenceState() };

  submitEvidenceMutator: MutatorWithState<SubmitEvidenceItemGQL, SubmitEvidenceItemMutation, SubmitEvidenceItemMutationVariables>

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false
  newId?: number

  constructor(
    private submitEvidenceGQL: SubmitEvidenceItemGQL,
    private networkErrorService: NetworkErrorsService,
  ) {

    this.submitEvidenceMutator = new MutatorWithState(networkErrorService);

    this.formFields = [
      {
        key: 'fields',
        templateOptions: {
          label: 'Add Evidence Item Form'
        },
        fieldGroup: [
          {
            key: 'gene',
            type: 'gene-select-tag',
            templateOptions: {
              required: true
            }
          },
          // {
          //   key: 'genes',
          //   type: 'field-list',
          //   templateOptions: {
          //     display: 'block',
          //   },
          //   fieldArray: {
          //     key: 'gene-select-tag',
          //     templateOptions: {

          //     }
          //   }
          // }
        ]
      }
    ];
  }

  ngOnInit(): void {
  }

  submitEvidence(formModel: Maybe<FormModel>): void {
    let input = this.toSubmitInput(formModel);
    if (input) {
      let state = this.submitEvidenceMutator.mutate(this.submitEvidenceGQL, {
        input: input
      },
        (data) => {
          this.newId = data.submitEvidence.evidenceItem.id;
        })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.success = true
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  toSubmitInput(model: Maybe<FormModel>): Maybe<SubmitEvidenceItemInput> {
    if (model) {
      const fields = model.fields;
      return {
        fields: {
          variantOrigin: fields.variantOrigin,
          description: fmt.toNullableString(fields.description),
          variantId: fields.variant[0].id!,
          sourceId: fields.source[0].id!,
          evidenceType: fields.evidenceType,
          evidenceDirection: fields.evidenceDirection,
          clinicalSignificance: fields.clinicalSignificance,
          diseaseId: fmt.toNullableInput(fields.disease[0]?.id),
          evidenceLevel: fields.evidenceLevel,
          phenotypeIds: fields.phenotypes.map((ph: FormPhenotype) => { return ph.id }),
          rating: +fields.evidenceRating,
          drugIds: fields.drugs.map((dr: FormDrug) => { return dr.id! }),
          drugInteractionType: fmt.toNullableInput(fields.drugInteractionType)
        },
        comment: fields.comment,
        organizationId: model?.fields.organization?.id
      }

    }
    return undefined
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
