import { InjectionToken, NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition, ThemeType } from '@ant-design/icons-angular';

import { camelToKebab } from '@app/shared/utilities/camel-to-kebab';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';

// NZ icons used in base app components
const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline
];

// all civic custom icons
import {
  civicAdminFullcolor,
  civicAssertionFullcolor,
  civicCommentFullcolor,
  civicCoordinatesystemFullcolor,
  civicDiseaseFullcolor,
  civicEditorFullcolor,
  civicEvidenceFullcolor,
  civicFlagFullcolor,
  civicGeneFullcolor,
  civicInterventionFullcolor,
  civicMolecularprofileFullcolor,
  civicOrganizationFullcolor,
  civicPhenotypeFullcolor,
  civicRevisionFullcolor,
  civicSourceFullcolor,
  civicVariant,
  civicVariantgroupFullcolor,
  civicAdminOutline,
  civicAssertionOutline,
  civicCommentOutline,
  civicCoordinatesystemOutline,
  civicCuratorOutline,
  civicDiseaseOutline,
  civicEditorOutline,
  civicEvidenceOutline,
  civicFlagOutline,
  civicGeneOutline,
  civicInterventionOutline,
  civicMolecularprofileOutline,
  civicOrganizationOutline,
  civicPhenotypeOutline,
  civicRevisionOutline,
  civicSourceOutline,
  civicVariantgroupOutline,
  civicVariantOutline,
  civicAdminTwotone,
  civicAssertionTwotone,
  civicCommentTwotone,
  civicCoordinatesystemTwotone,
  civicCuratorTwotone,
  civicDiseaseTwotone,
  civicEditorTwotone,
  civicEvidenceTwotone,
  civicFlagTwotone,
  civicGeneTwotone,
  civicInterventionTwotone,
  civicMolecularprofileTwotone,
  civicOrganizationTwotone,
  civicPhenotypeTwotone,
  civicRevisionTwotone,
  civicSourceTwotone,
  civicVariantTwotone,
  civicVariantgroupTwotone,
  CivicIconLiteral
} from '@app/generated/civic.icons';

const iconLiterals = [
  civicAdminOutline,
  civicAssertionOutline,
  civicCommentOutline,
  civicCoordinatesystemOutline,
  civicCuratorOutline,
  civicDiseaseOutline,
  civicEditorOutline,
  civicEvidenceOutline,
  civicFlagOutline,
  civicGeneOutline,
  civicInterventionOutline,
  civicMolecularprofileOutline,
  civicOrganizationOutline,
  civicPhenotypeOutline,
  civicRevisionOutline,
  civicSourceOutline,
  civicVariantgroupOutline,
  civicVariantOutline,
  civicAdminTwotone,
  civicAssertionTwotone,
  civicCommentTwotone,
  civicCoordinatesystemTwotone,
  civicCuratorTwotone,
  civicDiseaseTwotone,
  civicEditorTwotone,
  civicEvidenceTwotone,
  civicFlagTwotone,
  civicGeneTwotone,
  civicInterventionTwotone,
  civicMolecularprofileTwotone,
  civicOrganizationTwotone,
  civicPhenotypeTwotone,
  civicRevisionTwotone,
  civicSourceTwotone,
  civicVariantTwotone,
  civicVariantgroupTwotone,
];

export const fullColorIcons: CivicIconLiteral[] = [
  civicAdminFullcolor,
  civicAssertionFullcolor,
  civicCommentFullcolor,
  civicCoordinatesystemFullcolor,
  civicDiseaseFullcolor,
  civicEditorFullcolor,
  civicEvidenceFullcolor,
  civicFlagFullcolor,
  civicGeneFullcolor,
  civicInterventionFullcolor,
  civicMolecularprofileFullcolor,
  civicOrganizationFullcolor,
  civicPhenotypeFullcolor,
  civicRevisionFullcolor,
  civicSourceFullcolor,
  civicVariant,
  civicVariantgroupFullcolor,
];

export const civicIcons: IconDefinition[] = toIconDefs(iconLiterals);

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
  ]
})

export class IconsProviderModule { }

export function toIconDefs(icons: CivicIconLiteral[]): IconDefinition[] {
  const defs: any[] = [];
  icons.forEach((icon: CivicIconLiteral): void => {
    const def: IconDefinition = {
      name: getName(icon.name),
      theme: getTheme(icon.name),
      icon: icon.data
    }
    defs.push(def);
  });
  return defs;
}

// remove theme, prepend namespace
export function getName(name: string): string {
  const regex = /Outline|Fill|TwoTone/i;
  return 'civic-' + camelToKebab(name.replace(regex, ''));
}

export function getTheme(name: string): ThemeType | undefined {
  if (name.includes('Twotone')) {
    return 'twotone';
  } else if (name.includes('Outline')) {
    return 'outline';
  } else if (name.includes('Fill')){
    return 'fill';
  } else {
    return
  }
}
