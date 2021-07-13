import { Component, Input, OnInit } from "@angular/core";
import { OrganizationGroupsFieldsFragment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-organization-card',
    templateUrl: './organization-card.component.html',
    styleUrls: ['./organization-card.component.less']
})
export class OrganizationCardComponent implements OnInit {
    @Input() organization!: OrganizationGroupsFieldsFragment;

    ngOnInit(){
        if(this.organization == undefined) {
            throw new Error("Must pass a organization into organization card");
        }
    }
}