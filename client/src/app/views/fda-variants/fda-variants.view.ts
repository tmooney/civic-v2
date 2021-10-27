import { Component, HostListener } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';

interface AssertionItem {
  id: number;
  fdaLevel: number;
  gene: {
    id: number;
    name: string;
  };
  variant: {
    id: number;
    name: string;
  };
  disease: {
    id: number;
    doid: number;
    name: string;
  };
}

interface AssertionResponse {
  [index: string]: AssertionItem;
}

interface ColumnItem {
  name: string;
  width: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'fda-variants',
  templateUrl: './fda-variants.view.html',
  styleUrls: ['./fda-variants.view.less'],
})
export class FdaVariantsView {
  @HostListener('window:beforeunload')
  canDeactivate() {
    const modalRef = this.modal.confirm({
      nzTitle: 'You are now leaving the FDA-recognized section of the knowledgebase.',
      nzIconType: 'exclamation-circle',
      nzClosable: false,
      nzOnOk: () => true,
    });

    return modalRef.afterClose;
  }
  constructor(private modal: NzModalService) {}

  assertionResponse: AssertionResponse = {
    assertion1: {
      id: 2,
      fdaLevel: 2,
      gene: {
        id: 20,
        name: 'ERBB2',
      },
      variant: {
        id: 18,
        name: 'AMPLIFICATION',
      },
      disease: {
        id: 368,
        doid: 60079,
        name: 'Her2-receptor Positive Breast Cancer',
      },
    },
    assertion5: {
      id: 5,
      fdaLevel: 2,
      gene: {
        id: 19,
        name: 'EGFR',
      },
      variant: {
        id: 33,
        name: 'L858R',
      },
      disease: {
        id: 8,
        doid: 3908,
        name: 'Lung Non-small Cell Carcinoma',
      },
    },
    assertion6: {
      id: 6,
      fdaLevel: 2,
      gene: {
        id: 19,
        name: 'EGFR',
      },
      variant: {
        id: 33,
        name: 'L858R',
      },
      disease: {
        id: 8,
        doid: 3908,
        name: 'Lung Non-small Cell Carcinoma',
      },
    },
    assertion7: {
      id: 7,
      fdaLevel: 2,
      gene: {
        id: 5,
        name: 'BRAF',
      },
      variant: {
        id: 12,
        name: 'V600E',
      },
      disease: {
        id: 7,
        doid: 1909,
        name: 'Melanoma',
      },
    },
    assertion8: {
      id: 8,
      fdaLevel: 2,
      gene: {
        id: 3983,
        name: 'NTRK1',
      },
      variant: {
        id: 419,
        name: 'NTRK1 FUSIONS',
      },
      disease: {
        id: 216,
        doid: 162,
        name: 'Cancer',
      },
    },
    assertion10: {
      id: 10,
      fdaLevel: 2,
      gene: {
        id: 5,
        name: 'BRAF',
      },
      variant: {
        id: 12,
        name: 'V600E',
      },
      disease: {
        id: 7,
        doid: 1909,
        name: 'Melanoma',
      },
    },
    assertion11: {
      id: 11,
      fdaLevel: 2,
      gene: {
        id: 5,
        name: 'BRAF',
      },
      variant: {
        id: 563,
        name: 'V600K',
      },
      disease: {
        id: 7,
        doid: 1909,
        name: 'Melanoma',
      },
    },
    assertion13: {
      id: 13,
      fdaLevel: 2,
      gene: {
        id: 5,
        name: 'BRAF',
      },
      variant: {
        id: 563,
        name: 'V600K',
      },
      disease: {
        id: 7,
        doid: 1909,
        name: 'Melanoma',
      },
    },
    assertion20: {
      id: 20,
      fdaLevel: 2,
      gene: {
        id: 5,
        name: 'BRAF',
      },
      variant: {
        id: 12,
        name: 'V600E',
      },
      disease: {
        id: 11,
        doid: 9256,
        name: 'Colorectal Cancer',
      },
    },
    assertion9: {
      id: 9,
      fdaLevel: 3,
      gene: {
        id: 154,
        name: 'ACVR1',
      },
      variant: {
        id: 1686,
        name: 'G328V',
      },
      disease: {
        id: 2950,
        doid: 80684,
        name: 'Diffuse Intrinsic Pontine Glioma',
      },
    },
    assertion34: {
      id: 34,
      fdaLevel: 3,
      gene: {
        id: 1,
        name: 'ALK',
      },
      variant: {
        id: 499,
        name: 'ALK FUSIONS',
      },
      disease: {
        id: 8,
        doid: 3908,
        name: 'Lung Non-small Cell Carcinoma',
      },
    },
    assertion38: {
      id: 38,
      fdaLevel: 3,
      gene: {
        id: 24,
        name: 'FLT3',
      },
      variant: {
        id: 55,
        name: 'ITD',
      },
      disease: {
        id: 3,
        doid: 9119,
        name: 'Acute Myeloid Leukemia',
      },
    },
    assertion39: {
      id: 39,
      fdaLevel: 3,
      gene: {
        id: 3985,
        name: 'NTRK3',
      },
      variant: {
        id: 801,
        name: 'ETV6-NTRK3',
      },
      disease: {
        id: 2953,
        doid: 80146,
        name: 'Childhood B-cell Acute Lymphoblastic Leukemia',
      },
    },
    assertion43: {
      id: 43,
      fdaLevel: 3,
      gene: {
        id: 4,
        name: 'ABL1',
      },
      variant: {
        id: 2678,
        name: 'SNX2-ABL1',
      },
      disease: {
        id: 2953,
        doid: 80146,
        name: 'B-lymphoblastic Leukemia/lymphoma, BCR-ABL1–like',
      },
    },
  };

  assertionList: AssertionItem[] = Object.keys(this.assertionResponse).map(
    (attr) => {
      return <AssertionItem>this.assertionResponse[attr];
    }
  );

  listOfColumns: ColumnItem[] = [
    {
      name: 'Level',
      width: '10%',
      sortOrder: null,
      sortFn: (a: AssertionItem, b: AssertionItem) => a.fdaLevel - b.fdaLevel,
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Level 2', value: 2 },
        { text: 'Level 3', value: 3 },
      ],
      filterFn: (list: number[], item: AssertionItem) => {
        return list.some((l) => item.fdaLevel == l);
      },
    },
    {
      name: 'Gene',
      width: '25%',
      sortOrder: 'descend',
      sortFn: (a: AssertionItem, b: AssertionItem) =>
        a.gene.name.localeCompare(b.gene.name),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: (list: string[], item: AssertionItem) =>
        list.some((name) => item.gene.name.indexOf(name) !== -1),
      filterMultiple: true,
    },
    {
      name: 'Variant',
      width: '35%',
      sortOrder: 'descend',
      sortFn: (a: AssertionItem, b: AssertionItem) =>
        a.variant.name.localeCompare(b.variant.name),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Disease',
      width: '45%',
      sortOrder: 'descend',
      sortFn: (a: AssertionItem, b: AssertionItem) =>
        a.disease.name.localeCompare(b.disease.name),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
  ];
}
