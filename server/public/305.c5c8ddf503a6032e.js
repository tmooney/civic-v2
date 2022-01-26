"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[305],{8965:(f,v,t)=>{t.d(v,{a:()=>w});var a=t(712),z=t(3154),C=t(8929),s=t(373),E=t(1059),r=t(4850),m=t(13),n=t(5e3),c=t(592),d=t(404),u=t(9808),g=t(2166),h=t(8054),I=t(3075),A=t(9001),O=t(3193),D=t(8664),U=t(4022),P=t(3618),L=t(6715),M=t(7469),b=t(2683),T=t(647),Z=t(6949),y=t(6042),N=t(2643),S=t(4110);function R(i,p){if(1&i&&(n.TgZ(0,"th",65),n._uU(1," Gene "),n.qZA()),2&i){const e=n.oxw();n.Q6J("nzColumnKey",e.sortColumns.GeneSymbol)("nzSortFn",!0)}}function x(i,p){if(1&i&&(n.TgZ(0,"th",66),n._uU(1," Variant "),n.qZA()),2&i){const e=n.oxw();n.Q6J("nzColumnKey",e.sortColumns.VariantName)("nzSortFn",!0)}}function W(i,p){if(1&i){const e=n.EpF();n.TgZ(0,"th"),n.TgZ(1,"cvc-clearable-input-filter",14),n.NdJ("inputModelChange",function(_){return n.CHM(e),n.oxw().geneSymbolInput=_}),n.qZA(),n.qZA()}if(2&i){const e=n.oxw();n.xp6(1),n.Q6J("inputModel",e.geneSymbolInput)("onInputChanged",e.textInputCallback)}}function K(i,p){if(1&i){const e=n.EpF();n.TgZ(0,"th"),n.TgZ(1,"cvc-clearable-input-filter",14),n.NdJ("inputModelChange",function(_){return n.CHM(e),n.oxw().variantNameInput=_}),n.qZA(),n.qZA()}if(2&i){const e=n.oxw();n.xp6(1),n.Q6J("inputModel",e.variantNameInput)("onInputChanged",e.textInputCallback)}}function V(i,p){if(1&i&&(n.TgZ(0,"td"),n._UZ(1,"cvc-gene-tag",75),n.qZA()),2&i){const e=n.oxw().$implicit;n.xp6(1),n.Q6J("gene",e.gene)}}function J(i,p){if(1&i&&(n.TgZ(0,"td"),n._UZ(1,"cvc-variant-tag",76),n.qZA()),2&i){const e=n.oxw().$implicit;n.xp6(1),n.Q6J("variant",e.variant)}}function Q(i,p){if(1&i&&(n.ynx(0),n._UZ(1,"cvc-disease-tag",77),n.BQk()),2&i){const e=n.oxw().$implicit;n.xp6(1),n.Q6J("disease",e.disease)}}function B(i,p){1&i&&(n.TgZ(0,"i"),n._uU(1,"N/A"),n.qZA())}function F(i,p){if(1&i&&(n.TgZ(0,"span"),n._UZ(1,"cvc-drug-tag",79),n.qZA()),2&i){const e=p.$implicit;n.xp6(1),n.Q6J("drug",e)}}function G(i,p){if(1&i&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"titlecase"),n.qZA()),2&i){const e=n.oxw(2).$implicit;n.xp6(1),n.hij(" (",n.lcZ(2,1,e.drugInteractionType),") ")}}function q(i,p){if(1&i&&(n.TgZ(0,"p",78),n.TgZ(1,"cvc-tag-list"),n.YNc(2,F,2,1,"span",63),n.qZA(),n.YNc(3,G,3,3,"span",15),n.qZA()),2&i){const e=n.oxw().$implicit;n.xp6(2),n.Q6J("ngForOf",e.drugs),n.xp6(1),n.Q6J("ngIf",e.drugs.length>1)}}function Y(i,p){1&i&&(n.TgZ(0,"i"),n._uU(1,"N/A"),n.qZA())}function $(i,p){if(1&i&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._UZ(2,"cvc-evidence-tag",67),n.qZA(),n.YNc(3,V,2,1,"td",15),n.YNc(4,J,2,1,"td",15),n.TgZ(5,"td"),n.YNc(6,Q,2,1,"ng-container",68),n.YNc(7,B,2,0,"ng-template",null,69,n.W1O),n.qZA(),n.TgZ(9,"td"),n.YNc(10,q,4,2,"p",70),n.YNc(11,Y,2,0,"ng-template",null,71,n.W1O),n.qZA(),n.TgZ(13,"td",16),n._UZ(14,"i",72),n.qZA(),n.TgZ(15,"td",16),n._uU(16),n.qZA(),n.TgZ(17,"td",16),n._UZ(18,"i",73),n.ALo(19,"evidenceEnumDisplay"),n.ALo(20,"evidenceEnumDisplay"),n.qZA(),n.TgZ(21,"td",16),n._UZ(22,"i",73),n.ALo(23,"evidenceEnumDisplay"),n.ALo(24,"evidenceEnumDisplay"),n.qZA(),n.TgZ(25,"td",16),n._UZ(26,"i",73),n.ALo(27,"evidenceEnumDisplay"),n.ALo(28,"evidenceEnumDisplay"),n.qZA(),n.TgZ(29,"td",16),n._UZ(30,"i",73),n.ALo(31,"evidenceEnumDisplay"),n.ALo(32,"evidenceEnumDisplay"),n.qZA(),n.TgZ(33,"td",16),n._uU(34),n._UZ(35,"i",74),n.qZA(),n.qZA()),2&i){const e=p.$implicit,o=n.MAs(8),_=n.MAs(12),l=n.oxw();n.xp6(2),n.Q6J("evidence",e),n.xp6(1),n.Q6J("ngIf",l.displayGeneAndVariant),n.xp6(1),n.Q6J("ngIf",l.displayGeneAndVariant),n.xp6(2),n.Q6J("ngIf",e.disease)("ngIfElse",o),n.xp6(4),n.Q6J("ngIf",e.drugs.length>0)("ngIfElse",_),n.xp6(4),n.Q6J("nzTooltipTitle",e.description),n.xp6(2),n.hij(" ",e.evidenceLevel," "),n.xp6(2),n.Q6J("nzType",n.xi3(19,18,e.evidenceType,"icon-name"))("nzTooltipTitle",n.lcZ(20,21,e.evidenceType)),n.xp6(4),n.Q6J("nzType",n.xi3(23,23,e.evidenceDirection,"icon-name"))("nzTooltipTitle",n.lcZ(24,26,e.evidenceDirection)),n.xp6(4),n.Q6J("nzType",n.xi3(27,28,e.clinicalSignificance,"icon-name"))("nzTooltipTitle",n.lcZ(28,31,e.clinicalSignificance)),n.xp6(4),n.Q6J("nzType",n.xi3(31,33,e.variantOrigin,"icon-name"))("nzTooltipTitle",n.lcZ(32,36,e.variantOrigin)),n.xp6(4),n.hij(" ",e.evidenceRating," ")}}function j(i,p){if(1&i){const e=n.EpF();n.TgZ(0,"button",82),n.NdJ("click",function(){n.CHM(e);const _=n.oxw(2).ngrxLet;return n.oxw().loadMore(_.endCursor)}),n._uU(1,"Load More"),n.qZA()}}function H(i,p){if(1&i&&(n.TgZ(0,"tr"),n.TgZ(1,"td",80),n.YNc(2,j,2,0,"button",81),n.qZA(),n.qZA()),2&i){const e=n.oxw().ngrxLet;n.xp6(2),n.Q6J("ngIf",e.hasNextPage)}}function X(i,p){if(1&i&&(n.ynx(0),n.YNc(1,H,3,1,"tr",15),n.BQk()),2&i){const e=p.ngrxLet;n.xp6(1),n.Q6J("ngIf",e.hasNextPage)}}let w=(()=>{class i{constructor(e){this.gql=e,this.displayGeneAndVariant=!0,this.initialPageSize=25,this.debouncedQuery=new C.xQ,this.tableView=!0,this.fetchMorePageSize=25,this.sortColumns=a.Cp0}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize,variantId:this.variantId,assertionId:this.assertionId,organizationId:this.organizationId,userId:this.userId,phenotypeId:this.phenotypeId,diseaseId:this.diseaseId,drugId:this.drugId,sourceId:this.sourceId,clinicalTrialId:this.clinicalTrialId,cardView:!this.tableView});let e=this.queryRef.valueChanges;this.isLoading$=e.pipe((0,s.j)("loading"),(0,E.O)(!0)),this.evidence$=e.pipe((0,s.j)("data","evidenceItems","edges"),(0,r.U)(o=>o.map(_=>_.node))),this.totalCount$=e.pipe((0,s.j)("data","evidenceItems","totalCount")),this.pageInfo$=e.pipe((0,s.j)("data","evidenceItems","pageInfo")),this.debouncedQuery.pipe((0,m.b)(500)).subscribe(o=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}loadMore(e){this.queryRef.fetchMore({variables:{first:this.fetchMorePageSize,after:e}})}refresh(){var e;e=this.eidInput?this.eidInput.toUpperCase().startsWith("EID")?+this.eidInput.toUpperCase().replace("EID",""):+this.eidInput:void 0,this.queryRef.refetch({id:e,diseaseName:this.diseaseNameInput,drugName:this.drugNameInput,description:this.descriptionInput,evidenceLevel:this.evidenceLevelInput?this.evidenceLevelInput:void 0,evidenceType:this.evidenceTypeInput?this.evidenceTypeInput:void 0,evidenceDirection:this.evidenceDirectionInput?this.evidenceDirectionInput:void 0,clinicalSignificance:this.clinicalSignificanceInput?this.clinicalSignificanceInput:void 0,variantOrigin:this.variantOriginInput?this.variantOriginInput:void 0,rating:this.evidenceRatingInput?this.evidenceRatingInput:void 0,geneSymbol:this.geneSymbolInput?this.geneSymbolInput:void 0,variantName:this.variantNameInput?this.variantNameInput:void 0,cardView:!this.tableView})}onModelChanged(){this.debouncedQuery.next()}onSortChanged(e){this.queryRef.refetch({sortBy:(0,z._)(e),cardView:!this.tableView})}ngOnDestroy(){this.debouncedQuery.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(a.eY8))},i.\u0275cmp=n.Xpm({type:i,selectors:[["cvc-evidence-table"]],inputs:{variantId:"variantId",assertionId:"assertionId",organizationId:"organizationId",userId:"userId",phenotypeId:"phenotypeId",diseaseId:"diseaseId",drugId:"drugId",sourceId:"sourceId",clinicalTrialId:"clinicalTrialId",displayGeneAndVariant:"displayGeneAndVariant"},decls:108,vars:60,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["evidenceTable",""],[3,"nzSortOrderChange"],["nzWidth","5%","nz-tooltip","","nzTooltipTitle","Evidence ID",3,"nzColumnKey","nzSortFn"],["nzWidth","10%","nz-tooltip","","nzTooltipTitle","Entrez Gene Symbol",3,"nzColumnKey","nzSortFn",4,"ngIf"],["nzWidth","10%","nz-tooltip","","nzTooltipTitle","Variant Name",3,"nzColumnKey","nzSortFn",4,"ngIf"],["nzWidth","20%",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Evidence Level",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Evidence Type",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Evidence Direction",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Clinical Significance",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Variant Origin",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Rating",3,"nzColumnKey","nzSortFn"],[3,"inputModel","onInputChanged","inputModelChange"],[4,"ngIf"],["nzAlign","center"],["nzAllowClear","","nzPlaceHolder","All",3,"nzDropdownMatchSelectWidth","ngModel","ngModelChange"],["nzValue","A","nzLabel","A"],["nzValue","B","nzLabel","B"],["nzValue","C","nzLabel","C"],["nzValue","D","nzLabel","D"],["nzValue","E","nzLabel","E"],["nzValue","PREDICTIVE","nzLabel","Predictive"],["nzValue","PROGNOSTIC","nzLabel","Prognostic"],["nzValue","DIAGNOSTIC","nzLabel","Diagnostic"],["nzValue","PREDISPOSING","nzLabel","Predisposing"],["nzValue","ONCOGENIC","nzLabel","Oncogenic"],["nzValue","FUNCTIONAL","nzLabel","Functional"],["nzValue","SUPPORTS","nzLabel","Supports"],["nzValue","DOES_NOT_SUPPORT","nzLabel","Does not Support"],["nzValue","NA","nzLabel","N/A"],["nzWidth","5%","nzAlign","center"],["nzLabel","Predictive"],["nzValue","SENSITIVITYRESPONSE","nzLabel","Sensitivity/Response"],["nzValue","RESISTANCE","nzLabel","Resistance"],["nzValue","ADVERSE_RESPONSE","nzLabel","Adverse Response"],["nzValue","REDUCED SENSITIVITY","nzLabel","Reduced Sensitivity"],["nzLabel","Prognostic"],["nzValue","BETTER_OUTCOME","nzLabel","Better Outcome"],["nzValue","POOR_OUTCOME","nzLabel","Poor Outcome"],["nzLabel","Diagnostic"],["nzValue","POSITIVE","nzLabel","Positive"],["nzValue","NEGATIVE","nzLabel","Negative"],["nzLabel","Predisposing"],["nzLabel","Oncogenic"],["nzLabel","Functional"],["nzValue","GAIN_OF_FUNCTION","nzLabel","Gain of Function"],["nzValue","LOSS_OF_FUNCTION","nzLabel","Loss of Function"],["nzValue","UNALTERED_FUNCTION","nzLabel","Unaltered Function"],["nzValue","NEOMORPHIC","nzLabel","Neomorphic"],["nzValue","DOMINANT_NEGATIVE","nzLabel","Dominant Negative"],["nzValue","UNKNOWN","nzLabel","Unknown"],["nzValue","SOMATIC","nzLabel","Somatic"],["nzValue","RARE_GERMLINE","nzLabel","Rare Germline"],["nzValue","COMMON_GERMLINE","nzLabel","Common Germline"],["nzValue","UNKNOWN","nzLabel","Unkown"],["nzValue","GERMLINE_OR_SOMATIC","nzLabel","Germline or Somatic"],["nzLabel","1",3,"nzValue"],["nzLabel","2",3,"nzValue"],["nzLabel","3",3,"nzValue"],["nzLabel","4",3,"nzValue"],["nzLabel","5",3,"nzValue"],[4,"ngFor","ngForOf"],[4,"ngrxLet"],["nzWidth","10%","nz-tooltip","","nzTooltipTitle","Entrez Gene Symbol",3,"nzColumnKey","nzSortFn"],["nzWidth","10%","nz-tooltip","","nzTooltipTitle","Variant Name",3,"nzColumnKey","nzSortFn"],[3,"evidence"],[4,"ngIf","ngIfElse"],["diseaseElse",""],["nz-typography","",4,"ngIf","ngIfElse"],["drugsElse",""],["nz-icon","","nzType","align-left","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle"],["nz-icon","","nz-tooltip","","nzTooltipPlacement","top",3,"nzType","nzTooltipTitle"],["nz-icon","","nzType","star","nzTheme","fill","nz-tooltip","","nzTooltipPlacement","top"],[3,"gene"],[3,"variant"],[3,"disease"],["nz-typography",""],[3,"drug"],["colspan","20"],["nz-button","","nzBlock","",3,"click",4,"ngIf"],["nz-button","","nzBlock","",3,"click"]],template:function(e,o){if(1&e&&(n.TgZ(0,"nz-table",0,1),n.ALo(2,"ngrxPush"),n.ALo(3,"ngrxPush"),n.TgZ(4,"thead",2),n.NdJ("nzSortOrderChange",function(l){return o.onSortChanged(l)}),n.TgZ(5,"tr"),n.TgZ(6,"th",3),n._uU(7," EID "),n.qZA(),n.YNc(8,R,2,2,"th",4),n.YNc(9,x,2,2,"th",5),n.TgZ(10,"th",6),n._uU(11," Diseases "),n.qZA(),n.TgZ(12,"th",6),n._uU(13," Drugs "),n.qZA(),n.TgZ(14,"th",7),n._uU(15," Description "),n.qZA(),n.TgZ(16,"th",8),n._uU(17," EL "),n.qZA(),n.TgZ(18,"th",9),n._uU(19," ET "),n.qZA(),n.TgZ(20,"th",10),n._uU(21," ED "),n.qZA(),n.TgZ(22,"th",11),n._uU(23," CS "),n.qZA(),n.TgZ(24,"th",12),n._uU(25," VO "),n.qZA(),n.TgZ(26,"th",13),n._uU(27," R "),n.qZA(),n.qZA(),n.TgZ(28,"tr"),n.TgZ(29,"th"),n.TgZ(30,"cvc-clearable-input-filter",14),n.NdJ("inputModelChange",function(l){return o.eidInput=l}),n.qZA(),n.qZA(),n.YNc(31,W,2,2,"th",15),n.YNc(32,K,2,2,"th",15),n.TgZ(33,"th"),n.TgZ(34,"cvc-clearable-input-filter",14),n.NdJ("inputModelChange",function(l){return o.diseaseNameInput=l}),n.qZA(),n.qZA(),n.TgZ(35,"th"),n.TgZ(36,"cvc-clearable-input-filter",14),n.NdJ("inputModelChange",function(l){return o.drugNameInput=l}),n.qZA(),n.qZA(),n.TgZ(37,"th",16),n.TgZ(38,"cvc-clearable-input-filter",14),n.NdJ("inputModelChange",function(l){return o.descriptionInput=l}),n.qZA(),n.qZA(),n.TgZ(39,"th",16),n.TgZ(40,"nz-select",17),n.NdJ("ngModelChange",function(){return o.onModelChanged()})("ngModelChange",function(l){return o.evidenceLevelInput=l}),n._UZ(41,"nz-option",18),n._UZ(42,"nz-option",19),n._UZ(43,"nz-option",20),n._UZ(44,"nz-option",21),n._UZ(45,"nz-option",22),n.qZA(),n.qZA(),n.TgZ(46,"th",16),n.TgZ(47,"nz-select",17),n.NdJ("ngModelChange",function(){return o.onModelChanged()})("ngModelChange",function(l){return o.evidenceTypeInput=l}),n._UZ(48,"nz-option",23),n._UZ(49,"nz-option",24),n._UZ(50,"nz-option",25),n._UZ(51,"nz-option",26),n._UZ(52,"nz-option",27),n._UZ(53,"nz-option",28),n.qZA(),n.qZA(),n.TgZ(54,"th",16),n.TgZ(55,"nz-select",17),n.NdJ("ngModelChange",function(){return o.onModelChanged()})("ngModelChange",function(l){return o.evidenceDirectionInput=l}),n._UZ(56,"nz-option",29),n._UZ(57,"nz-option",30),n._UZ(58,"nz-option",31),n.qZA(),n.qZA(),n.TgZ(59,"th",32),n.TgZ(60,"nz-select",17),n.NdJ("ngModelChange",function(){return o.onModelChanged()})("ngModelChange",function(l){return o.clinicalSignificanceInput=l}),n.TgZ(61,"nz-option-group",33),n._UZ(62,"nz-option",34),n._UZ(63,"nz-option",35),n._UZ(64,"nz-option",36),n._UZ(65,"nz-option",37),n._UZ(66,"nz-option",31),n.qZA(),n.TgZ(67,"nz-option-group",38),n._UZ(68,"nz-option",39),n._UZ(69,"nz-option",40),n._UZ(70,"nz-option",31),n.qZA(),n.TgZ(71,"nz-option-group",41),n._UZ(72,"nz-option",42),n._UZ(73,"nz-option",43),n.qZA(),n.TgZ(74,"nz-option-group",44),n._UZ(75,"nz-option",31),n.qZA(),n.TgZ(76,"nz-option-group",45),n._UZ(77,"nz-option",31),n.qZA(),n.TgZ(78,"nz-option-group",46),n._UZ(79,"nz-option",47),n._uU(80,", "),n._UZ(81,"nz-option",48),n._uU(82,", "),n._UZ(83,"nz-option",49),n._uU(84,", "),n._UZ(85,"nz-option",50),n._uU(86,", "),n._UZ(87,"nz-option",51),n._uU(88,", "),n._UZ(89,"nz-option",52),n.qZA(),n.qZA(),n.qZA(),n.TgZ(90,"th",32),n.TgZ(91,"nz-select",17),n.NdJ("ngModelChange",function(){return o.onModelChanged()})("ngModelChange",function(l){return o.variantOriginInput=l}),n._UZ(92,"nz-option",53),n._UZ(93,"nz-option",54),n._UZ(94,"nz-option",55),n._UZ(95,"nz-option",56),n._UZ(96,"nz-option",31),n._UZ(97,"nz-option",57),n.qZA(),n.qZA(),n.TgZ(98,"th",32),n.TgZ(99,"nz-select",17),n.NdJ("ngModelChange",function(){return o.onModelChanged()})("ngModelChange",function(l){return o.evidenceRatingInput=l}),n._UZ(100,"nz-option",58),n._UZ(101,"nz-option",59),n._UZ(102,"nz-option",60),n._UZ(103,"nz-option",61),n._UZ(104,"nz-option",62),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(105,"tbody"),n.YNc(106,$,36,38,"tr",63),n.YNc(107,X,2,1,"ng-container",64),n.qZA(),n.qZA()),2&e){const _=n.MAs(1);n.Q6J("nzData",n.lcZ(2,56,o.evidence$))("nzLoading",n.lcZ(3,58,o.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(6),n.Q6J("nzColumnKey",o.sortColumns.Id)("nzSortFn",!0),n.xp6(2),n.Q6J("ngIf",o.displayGeneAndVariant),n.xp6(1),n.Q6J("ngIf",o.displayGeneAndVariant),n.xp6(1),n.Q6J("nzColumnKey",o.sortColumns.DiseaseName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",o.sortColumns.DrugName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",o.sortColumns.Description)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",o.sortColumns.EvidenceLevel)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",o.sortColumns.EvidenceType)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",o.sortColumns.EvidenceDirection)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",o.sortColumns.ClinicalSignificance)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",o.sortColumns.VariantOrigin)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",o.sortColumns.EvidenceRating)("nzSortFn",!0),n.xp6(4),n.Q6J("inputModel",o.eidInput)("onInputChanged",o.textInputCallback),n.xp6(1),n.Q6J("ngIf",o.displayGeneAndVariant),n.xp6(1),n.Q6J("ngIf",o.displayGeneAndVariant),n.xp6(2),n.Q6J("inputModel",o.diseaseNameInput)("onInputChanged",o.textInputCallback),n.xp6(2),n.Q6J("inputModel",o.drugNameInput)("onInputChanged",o.textInputCallback),n.xp6(2),n.Q6J("inputModel",o.descriptionInput)("onInputChanged",o.textInputCallback),n.xp6(2),n.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",o.evidenceLevelInput),n.xp6(7),n.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",o.evidenceTypeInput),n.xp6(8),n.Q6J("nzDropdownMatchSelectWidth",!1)("nzDropdownMatchSelectWidth",!1)("ngModel",o.evidenceDirectionInput),n.xp6(5),n.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",o.clinicalSignificanceInput),n.xp6(31),n.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",o.variantOriginInput),n.xp6(8),n.Q6J("nzDropdownMatchSelectWidth",!1)("ngModel",o.evidenceRatingInput),n.xp6(1),n.Q6J("nzValue",1),n.xp6(1),n.Q6J("nzValue",2),n.xp6(1),n.Q6J("nzValue",3),n.xp6(1),n.Q6J("nzValue",4),n.xp6(1),n.Q6J("nzValue",5),n.xp6(2),n.Q6J("ngForOf",_.data),n.xp6(1),n.Q6J("ngrxLet",o.pageInfo$)}},directives:[c.N8,c.Om,c.$Z,c.Uo,c._C,c.qD,d.SY,u.O5,c.UX,g.p,h.Vq,I.JJ,I.On,h.Ip,h.Yy,c.p0,u.sg,A.O,O.H,D.I,U.n,P.ZU,L.$,M.u,b.w,T.Ls,Z.eJ,y.ix,N.dQ],pipes:[Z.fM,u.rS,S.D],styles:["[_nghost-%COMP%]{display:block}"]}),i})()},767:(f,v,t)=>{t.d(v,{Q:()=>b});var a=t(9808),z=t(592),C=t(4546),s=t(1047),E=t(647),r=t(3618),m=t(3075),n=t(6949),c=t(1844),d=t(3309),u=t(404),g=t(4867),h=t(3580),I=t(8018),A=t(209),O=t(8054),D=t(4125),U=t(9444),P=t(6042),L=t(897),M=t(5e3);let b=(()=>{class T{}return T.\u0275fac=function(y){return new(y||T)},T.\u0275mod=M.oAB({type:T}),T.\u0275inj=M.cJS({imports:[[a.ez,m.u5,n.WG,P.sL,z.HQ,C.U5,s.o7,E.PV,r.ZJ,u.cg,O.LV,U.s,d.U,g.Q,h.Q,I.e,A.i,L.$,c.x,D.k]]}),T})()},2166:(f,v,t)=>{t.d(v,{p:()=>m});var a=t(5e3),z=t(1047),C=t(3075),s=t(9808);function E(n,c){if(1&n){const d=a.EpF();a.TgZ(0,"i",4),a.NdJ("click",function(){a.CHM(d);const g=a.oxw(2);return g.inputVal=void 0,g.onModelUpdated()}),a.qZA()}}function r(n,c){if(1&n&&a.YNc(0,E,1,0,"i",3),2&n){const d=a.oxw();a.Q6J("ngIf",d.inputVal)}}let m=(()=>{class n{constructor(){this.inputModelChange=new a.vpe}onModelUpdated(){this.inputModelChange.emit(this.inputVal?this.inputVal:void 0),this.onInputChanged&&this.onInputChanged()}}return n.\u0275fac=function(d){return new(d||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["cvc-clearable-input-filter"]],inputs:{placeholderText:"placeholderText",onInputChanged:"onInputChanged",inputModel:"inputModel"},outputs:{inputModelChange:"inputModelChange"},decls:4,vars:3,consts:[[3,"nzSuffix"],["type","text","nz-input","",3,"placeholder","ngModel","ngModelChange"],["clearTmpl",""],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"]],template:function(d,u){if(1&d&&(a.TgZ(0,"nz-input-group",0),a.TgZ(1,"input",1),a.NdJ("ngModelChange",function(h){return u.inputVal=h})("ngModelChange",function(){return u.onModelUpdated()}),a.qZA(),a.qZA(),a.YNc(2,r,1,1,"ng-template",null,2,a.W1O)),2&d){const g=a.MAs(3);a.Q6J("nzSuffix",g),a.xp6(1),a.Q6J("placeholder",u.placeholderText?u.placeholderText:"")("ngModel",u.inputVal)}},directives:[z.gB,z.ke,z.Zp,C.Fj,C.JJ,C.On,s.O5],styles:["[_nghost-%COMP%]{display:block}"]}),n})()},4125:(f,v,t)=>{t.d(v,{k:()=>E});var a=t(9808),z=t(1047),C=t(3075),s=t(5e3);let E=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[a.ez,C.u5,z.o7]]}),r})()}}]);