import {
  Component,
  EventEmitter,
  OnDestroy,
  Output
} from '@angular/core';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { Maybe, UpdateCoiGQL, UpdateCoiInput, UpdateCoiMutation, UpdateCoiMutationVariables } from '@app/generated/civic.apollo';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: `cvc-update-coi`,
  templateUrl: './coi-update.form.html',
  styleUrls: ['./coi-update.form.less'],
})
export class CvcCoiUpdateForm implements OnDestroy {
  @Output() coiUpdatedEvent = new EventEmitter<void>();

  coiText: Maybe<string> = undefined
  coiStatus: string = "noCoi"
  foo: boolean = false

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  private destroy$ = new Subject();

  updateCoiMutator: MutatorWithState<UpdateCoiGQL, UpdateCoiMutation, UpdateCoiMutationVariables>

  constructor(
    private updateCoiGql: UpdateCoiGQL,
    networkErrorService: NetworkErrorsService
  ){
    this.updateCoiMutator = new MutatorWithState(networkErrorService);
  }

  updateCoi() {
    if((this.coiStatus === "coiPresent" && this.coiText) || this.coiStatus === "noCoi") {
      this.errorMessages = [];
      let coiInput: UpdateCoiInput = {
        coiPresent: this.coiStatus === "coiPresent" ? true : false,
        statement: this.coiText
      };

      let state = this.updateCoiMutator.mutate(this.updateCoiGql, {input: coiInput});

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if(res) {
          this.resetForm();
          this.success = true;
          this.coiUpdatedEvent.emit();
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if(errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$.pipe(takeUntil(this.destroy$)).subscribe((loading) => {
        this.loading = loading
      })
    }
  }

  resetForm() {
    this.coiStatus = "noCoi";
    this.coiText = undefined;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}