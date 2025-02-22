import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {TypeOption} from "@ngx-formly/core/lib/services/formly.config";

@Component({
  selector: 'cvc-variant-coordinates-card-type',
  templateUrl: './variant-coordinates-card.type.html',
  styleUrls: ['./variant-coordinates-card.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VariantCoordinatesCardType extends FieldType {
  defaultOptions = {
    templateOptions: {
      isFusionVariant: false
    }
  }
}

export const VariantCoordinatesCardTypeOption: TypeOption = {
  name: 'variant-coordinates-card',
  component: VariantCoordinatesCardType,
}
