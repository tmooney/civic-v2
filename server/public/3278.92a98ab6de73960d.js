"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3278],{9814:(B,N,e)=>{e.d(N,{O:()=>fn});var C=e(712),t=e(3154),T=e(8929),S=e(4850),h=e(373),A=e(1059),U=e(13),n=e(5e3),y=e(9350),Z=e(9169),x=e(6949),z=e(592),f=e(9808),p=e(8054),v=e(4182),d=e(2166),Q=e(647),J=e(2683),b=e(404),Y=e(125),E=e(6906),$=e(3193),L=e(8664),R=e(4022),O=e(6042),V=e(2643),j=e(3610),I=e(7625),w=e(6123),W=e(7484),_=e(8144),F=e(2359),P=e(822),H=e(1047),D=e(7525),G=e(9180),K=e(8227),X=e(1793);function q(a,l){if(1&a){const o=n.EpF();n.TgZ(0,"nz-alert",6),n.NdJ("nzOnClose",function(){return n.CHM(o),n.oxw().onSuccessBannerClose()}),n.qZA()}}function k(a,l){if(1&a&&n._UZ(0,"cvc-form-errors-alert",7),2&a){const o=n.oxw();n.Q6J("errors",o.errorMessages)}}function r(a,l){if(1&a){const o=n.EpF();n.TgZ(0,"textarea",8),n.NdJ("ngModelChange",function(i){return n.CHM(o),n.oxw().reason=i}),n.qZA()}if(2&a){const o=n.oxw();n.Q6J("ngModel",o.reason)}}function g(a,l){1&a&&n._UZ(0,"nz-option",13)}function s(a,l){1&a&&n._UZ(0,"nz-option",14)}function m(a,l){1&a&&n._UZ(0,"nz-option",15)}function M(a,l){if(1&a){const o=n.EpF();n.TgZ(0,"nz-select",9),n.NdJ("ngModelChange",function(i){return n.CHM(o),n.oxw().newStatus=i}),n.YNc(1,g,1,0,"nz-option",10),n.YNc(2,s,1,0,"nz-option",11),n.YNc(3,m,1,0,"nz-option",12),n.qZA()}if(2&a){const o=n.oxw();n.Q6J("ngModel",o.newStatus),n.xp6(1),n.Q6J("ngIf","NEW"==o.currentStatus),n.xp6(1),n.Q6J("ngIf","NEW"!=o.currentStatus),n.xp6(1),n.Q6J("ngIf","NEW"==o.currentStatus)}}function nn(a,l){if(1&a){const o=n.EpF();n.TgZ(0,"nz-spin",16),n.TgZ(1,"cvc-form-buttons"),n.TgZ(2,"cvc-org-selector-btn-group",17),n.NdJ("selectedOrgChange",function(i){return n.CHM(o),n.oxw().mostRecentOrg=i}),n.TgZ(3,"button",18),n.NdJ("click",function(){return n.CHM(o),n.oxw().updateSourceSuggestionStatus()}),n._uU(4," Update Source Suggestion status "),n.qZA(),n.qZA(),n.qZA(),n.qZA()}if(2&a){const o=n.oxw();n.Q6J("nzSpinning",o.loading),n.xp6(2),n.Q6J("selectedOrg",o.mostRecentOrg),n.xp6(1),n.Q6J("disabled",o.loading)}}let tn=(()=>{class a{constructor(o,c,i){this.viewerService=o,this.networkErrorService=c,this.updateSuggestionStatusGql=i,this.commentAddedEvent=new n.vpe,this.destroy$=new T.xQ,this.success=!1,this.errorMessages=[],this.loading=!1,this.viewerService.viewer$.pipe((0,I.R)(this.destroy$)).subscribe(u=>{this.organizations=u.organizations,this.mostRecentOrg=u.mostRecentOrg}),this.sourceSuggestionStatusMutator=new w.U(c)}selectOrg(o){this.mostRecentOrg=o}updateSourceSuggestionStatus(){var o;if(this.newStatus){let c=this.sourceSuggestionStatusMutator.mutate(this.updateSuggestionStatusGql,{input:{id:this.sourceSuggestionId,newStatus:this.newStatus,reason:this.reason,organizationId:null===(o=this.mostRecentOrg)||void 0===o?void 0:o.id}});c.submitSuccess$.pipe((0,I.R)(this.destroy$)).subscribe(i=>{this.resetForm(),this.success=!0}),c.submitError$.pipe((0,I.R)(this.destroy$)).subscribe(i=>{i&&(this.errorMessages=i)}),c.isSubmitting$.pipe((0,I.R)(this.destroy$)).subscribe(i=>{this.loading=i})}}resetForm(){this.commentText=""}onSuccessBannerClose(){this.resetForm()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(o){return new(o||a)(n.Y36(y.a),n.Y36(Z.Y),n.Y36(C.wRZ))},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-update-source-suggestion-form"]],inputs:{sourceSuggestionId:"sourceSuggestionId",currentStatus:"currentStatus"},outputs:{commentAddedEvent:"commentAddedEvent"},decls:7,vars:2,consts:[["nzDirection","vertical"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose",4,"ngIf"],[3,"errors",4,"ngIf"],["rows","4","nz-input","",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange",4,"nzSpaceItem"],["nzTip","Submitting",3,"nzSpinning",4,"nzSpaceItem"],["nzBanner","","nzMessage","Status Updated","nzType","success","nzCloseable","",3,"nzOnClose"],[3,"errors"],["rows","4","nz-input","",3,"ngModel","ngModelChange"],["nzPlaceHolder","New Status","required","true",3,"ngModel","ngModelChange"],["nzValue","CURATED","nzLabel","Curated",4,"ngIf"],["nzValue","NEW","nzLabel","New",4,"ngIf"],["nzValue","REJECTED","nzLabel","Rejected",4,"ngIf"],["nzValue","CURATED","nzLabel","Curated"],["nzValue","NEW","nzLabel","New"],["nzValue","REJECTED","nzLabel","Rejected"],["nzTip","Submitting",3,"nzSpinning"],[3,"selectedOrg","selectedOrgChange"],["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","small",3,"disabled","click"]],template:function(o,c){1&o&&(n.TgZ(0,"nz-card"),n.TgZ(1,"nz-space",0),n.YNc(2,q,1,0,"nz-alert",1),n.YNc(3,k,1,1,"cvc-form-errors-alert",2),n.YNc(4,r,1,1,"textarea",3),n.YNc(5,M,4,4,"nz-select",4),n.YNc(6,nn,5,3,"nz-spin",5),n.qZA(),n.qZA()),2&o&&(n.xp6(2),n.Q6J("ngIf",c.success),n.xp6(1),n.Q6J("ngIf",c.errorMessages.length))},directives:[W.bd,_.NU,f.O5,F.r,P.V,_.$1,H.Zp,v.Fj,v.JJ,v.On,p.Vq,v.Q7,p.Ip,D.W,G.Z,K.q,O.ix,V.dQ,X.m,J.w],styles:[""],encapsulation:2}),a})();function en(a,l){1&a&&(n.TgZ(0,"th",23),n._uU(1," Actions "),n.qZA())}function on(a,l){if(1&a){const o=n.EpF();n.TgZ(0,"cvc-clearable-input-filter",24),n.NdJ("inputModelChange",function(i){return n.CHM(o),n.oxw(2).submitterInput=i}),n.qZA()}if(2&a){const o=n.oxw(2);n.Q6J("inputModel",o.submitterInput)("onInputChanged",o.textInputCallback)}}function an(a,l){1&a&&n._UZ(0,"th")}function rn(a,l){if(1&a&&n._UZ(0,"i",31),2&a){const o=n.oxw().$implicit;n.Q6J("nzTooltipTitle",o.reason)}}function sn(a,l){if(1&a&&n._UZ(0,"cvc-user-tag",32),2&a){const o=n.oxw().$implicit;n.Q6J("user",o.user)}}function cn(a,l){if(1&a&&(n.ynx(0),n._uU(1),n.BQk()),2&a){const o=n.oxw().$implicit;n.xp6(1),n.hij(" ",o.source.displayType," ")}}function gn(a,l){if(1&a&&(n.ynx(0),n._uU(1),n.BQk()),2&a){const o=n.oxw().$implicit;n.xp6(1),n.hij(" ",o.source.citationId," ")}}function ln(a,l){if(1&a&&n._UZ(0,"cvc-source-tag",33),2&a){const o=n.oxw().$implicit;n.Q6J("source",o.source)}}function un(a,l){if(1&a&&n._UZ(0,"cvc-gene-tag",34),2&a){const o=n.oxw().$implicit;n.Q6J("gene",o.gene)}}function pn(a,l){if(1&a&&n._UZ(0,"cvc-variant-tag",35),2&a){const o=n.oxw().$implicit;n.Q6J("variant",o.variant)}}function dn(a,l){if(1&a&&n._UZ(0,"cvc-disease-tag",36),2&a){const o=n.oxw().$implicit;n.Q6J("disease",o.disease)}}function mn(a,l){if(1&a){const o=n.EpF();n.TgZ(0,"td"),n.TgZ(1,"nz-button-group"),n.TgZ(2,"button",37),n._UZ(3,"i",38),n.qZA(),n.TgZ(4,"button",39),n.NdJ("click",function(){n.CHM(o);const i=n.oxw().$implicit;return n.oxw(2).setFormInputs(i.id,i.status)}),n._UZ(5,"i",40),n.qZA(),n.qZA(),n.qZA()}if(2&a){const o=n.oxw().$implicit;n.oxw();const c=n.MAs(53),i=n.oxw();n.xp6(2),n.Q6J("disabled",o.status!=i.status.New),n.xp6(2),n.Q6J("nzPopoverContent",c)}}function vn(a,l){if(1&a&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._uU(2),n.ALo(3,"lowercase"),n.YNc(4,rn,1,1,"i",25),n.qZA(),n.TgZ(5,"td"),n.YNc(6,sn,1,1,"cvc-user-tag",26),n.qZA(),n.TgZ(7,"td"),n.YNc(8,cn,2,1,"ng-container",20),n.qZA(),n.TgZ(9,"td"),n.YNc(10,gn,2,1,"ng-container",20),n.qZA(),n.TgZ(11,"td"),n.YNc(12,ln,1,1,"cvc-source-tag",27),n.qZA(),n.TgZ(13,"td"),n.YNc(14,un,1,1,"cvc-gene-tag",28),n.qZA(),n.TgZ(15,"td"),n.YNc(16,pn,1,1,"cvc-variant-tag",29),n.qZA(),n.TgZ(17,"td"),n.YNc(18,dn,1,1,"cvc-disease-tag",30),n.qZA(),n.TgZ(19,"td"),n._uU(20),n.qZA(),n.YNc(21,mn,6,2,"td",20),n.qZA()),2&a){const o=l.$implicit,c=n.oxw().ngrxLet;n.xp6(2),n.hij(" ",n.lcZ(3,11,o.status)," "),n.xp6(2),n.Q6J("ngIf",o.reason&&""!=o.reason),n.xp6(2),n.Q6J("ngIf",o.user),n.xp6(2),n.Q6J("ngIf",o.source),n.xp6(2),n.Q6J("ngIf",o.source),n.xp6(2),n.Q6J("ngIf",o.source),n.xp6(2),n.Q6J("ngIf",o.gene),n.xp6(2),n.Q6J("ngIf",o.variant),n.xp6(2),n.Q6J("ngIf",o.disease),n.xp6(2),n.hij(" ",o.initialComment," "),n.xp6(1),n.Q6J("ngIf",c.signedIn)}}function _n(a,l){if(1&a&&n._UZ(0,"cvc-update-source-suggestion-form",42),2&a){const o=n.oxw(3);n.Q6J("currentStatus",o.selectedStatus)("sourceSuggestionId",o.selectedSourceId)}}function Cn(a,l){if(1&a&&n.YNc(0,_n,1,2,"cvc-update-source-suggestion-form",41),2&a){const o=n.oxw(2);n.Q6J("ngIf",o.selectedSourceId&&o.selectedStatus)}}function zn(a,l){if(1&a){const o=n.EpF();n.ynx(0),n.TgZ(1,"nz-table",1,2),n.ALo(3,"ngrxPush"),n.ALo(4,"ngrxPush"),n.TgZ(5,"thead",3),n.NdJ("nzSortOrderChange",function(i){return n.CHM(o),n.oxw().onSortChanged(i)}),n.TgZ(6,"tr"),n.TgZ(7,"th"),n._uU(8," Status "),n.qZA(),n.TgZ(9,"th",4),n._uU(10," Submitter "),n.qZA(),n.TgZ(11,"th",5),n._uU(12," Source Type "),n.qZA(),n.TgZ(13,"th",5),n._uU(14," Citation ID "),n.qZA(),n.TgZ(15,"th",6),n._uU(16," Citation "),n.qZA(),n.TgZ(17,"th",5),n._uU(18," Gene "),n.qZA(),n.TgZ(19,"th",5),n._uU(20," Variant "),n.qZA(),n.TgZ(21,"th",5),n._uU(22," Disease "),n.qZA(),n.TgZ(23,"th"),n._uU(24," Comment "),n.qZA(),n.YNc(25,en,2,0,"th",7),n.qZA(),n.TgZ(26,"tr"),n.TgZ(27,"th"),n.TgZ(28,"nz-select",8),n.NdJ("ngModelChange",function(){return n.CHM(o),n.oxw().onModelChanged()})("ngModelChange",function(i){return n.CHM(o),n.oxw().statusInput=i}),n._UZ(29,"nz-option",9),n._UZ(30,"nz-option",10),n._UZ(31,"nz-option",11),n.qZA(),n.qZA(),n.TgZ(32,"th"),n.YNc(33,on,1,2,"cvc-clearable-input-filter",12),n.qZA(),n.TgZ(34,"th"),n.TgZ(35,"nz-select",8),n.NdJ("ngModelChange",function(){return n.CHM(o),n.oxw().onModelChanged()})("ngModelChange",function(i){return n.CHM(o),n.oxw().sourceTypeInput=i}),n._UZ(36,"nz-option",13),n._UZ(37,"nz-option",14),n.qZA(),n.qZA(),n.TgZ(38,"th"),n.TgZ(39,"cvc-clearable-input-filter",15),n.NdJ("inputModelChange",function(i){return n.CHM(o),n.oxw().citationIdInput=i}),n.qZA(),n.qZA(),n.TgZ(40,"th"),n.TgZ(41,"cvc-clearable-input-filter",16),n.NdJ("inputModelChange",function(i){return n.CHM(o),n.oxw().citationInput=i}),n.qZA(),n.qZA(),n.TgZ(42,"th"),n.TgZ(43,"cvc-clearable-input-filter",17),n.NdJ("inputModelChange",function(i){return n.CHM(o),n.oxw().geneNameInput=i}),n.qZA(),n.qZA(),n.TgZ(44,"th"),n.TgZ(45,"cvc-clearable-input-filter",18),n.NdJ("inputModelChange",function(i){return n.CHM(o),n.oxw().variantNameInput=i}),n.qZA(),n.qZA(),n.TgZ(46,"th"),n.TgZ(47,"cvc-clearable-input-filter",19),n.NdJ("inputModelChange",function(i){return n.CHM(o),n.oxw().diseaseNameInput=i}),n.qZA(),n.qZA(),n._UZ(48,"th"),n.YNc(49,an,1,0,"th",20),n.qZA(),n.qZA(),n.TgZ(50,"tbody"),n.YNc(51,vn,22,13,"tr",21),n.qZA(),n.qZA(),n.YNc(52,Cn,1,1,"ng-template",null,22,n.W1O),n.BQk()}if(2&a){const o=l.ngrxLet,c=n.MAs(2),i=n.oxw();n.xp6(1),n.Q6J("nzData",n.lcZ(3,34,i.sourceSuggestions$))("nzLoading",n.lcZ(4,36,i.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(8),n.Q6J("nzColumnKey",i.sortColumns.Submitter)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",i.sortColumns.SourceType)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",i.sortColumns.CitationId)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",i.sortColumns.Citation)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",i.sortColumns.GeneName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",i.sortColumns.VariantName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",i.sortColumns.DiseaseName)("nzSortFn",!0),n.xp6(4),n.Q6J("ngIf",o.signedIn),n.xp6(3),n.Q6J("ngModel",i.statusInput),n.xp6(5),n.Q6J("ngIf",!i.submitterId),n.xp6(2),n.Q6J("ngModel",i.sourceTypeInput),n.xp6(4),n.Q6J("inputModel",i.citationIdInput)("onInputChanged",i.textInputCallback),n.xp6(2),n.Q6J("inputModel",i.citationInput)("onInputChanged",i.textInputCallback),n.xp6(2),n.Q6J("inputModel",i.geneNameInput)("onInputChanged",i.textInputCallback),n.xp6(2),n.Q6J("inputModel",i.variantNameInput)("onInputChanged",i.textInputCallback),n.xp6(2),n.Q6J("inputModel",i.diseaseNameInput)("onInputChanged",i.textInputCallback),n.xp6(2),n.Q6J("ngIf",o.signedIn),n.xp6(2),n.Q6J("ngForOf",c.data)}}let fn=(()=>{class a{constructor(o,c,i){this.gql=o,this.viewerService=c,this.networkErrorService=i,this.debouncedQuery=new T.xQ,this.statusInput=C.F3s.New,this.pageSize=25,this.sortColumns=C.jw9,this.status=C.F3s,this.showManageForm=!1}ngOnInit(){this.queryRef=this.gql.watch({first:this.pageSize,sourceId:this.sourceId,submitterId:this.submitterId,status:this.status.New}),this.viewer$=this.viewerService.viewer$,this.data$=this.queryRef.valueChanges.pipe((0,S.U)(o=>({data:o.data,loading:o.loading,networkStatus:o.networkStatus}))),this.isLoading$=this.data$.pipe((0,h.j)("loading"),(0,A.O)(!0)),this.sourceSuggestions$=this.data$.pipe((0,h.j)("data","sourceSuggestions","edges"),(0,S.U)(o=>o.map(c=>c.node))),this.pageInfo$=this.data$.pipe((0,h.j)("data","sourceSuggestions","pageInfo")),this.debouncedQuery.pipe((0,U.b)(500)).subscribe(o=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}refresh(){var o;null===(o=this.queryRef)||void 0===o||o.refetch({citationId:this.citationIdInput?+this.citationIdInput:void 0,sourceType:this.sourceTypeInput?this.sourceTypeInput:void 0,sourceId:this.sourceIdInput?+this.sourceIdInput:void 0,geneName:this.geneNameInput,variantName:this.variantNameInput,diseaseName:this.diseaseNameInput,comment:this.commentInput,submitter:this.submitterInput,citation:this.citationInput,status:this.statusInput?this.statusInput:void 0})}onSortChanged(o){var c;null===(c=this.queryRef)||void 0===c||c.refetch({sortBy:(0,t._)(o)})}onModelChanged(){this.debouncedQuery.next()}ngOnDestroy(){this.debouncedQuery.unsubscribe()}setFormInputs(o,c){this.selectedSourceId=o,this.selectedStatus=c,this.showManageForm=!0}closePopover(){this.showManageForm=!1}loadMore(o){var c;null===(c=this.queryRef)||void 0===c||c.fetchMore({variables:{first:this.pageSize,after:o}})}}return a.\u0275fac=function(o){return new(o||a)(n.Y36(C.WRV),n.Y36(y.a),n.Y36(Z.Y))},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-source-suggestions-table"]],inputs:{sourceId:"sourceId",submitterId:"submitterId"},decls:1,vars:1,consts:[[4,"ngrxLet"],[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["sourceSuggestionsTable",""],[3,"nzSortOrderChange"],["nzWidth","15%",3,"nzColumnKey","nzSortFn"],[3,"nzColumnKey","nzSortFn"],["nzWidth","25%",3,"nzColumnKey","nzSortFn"],["nzWidth","5%",4,"ngIf"],["nzAllowClear","","nzPlaceHolder","Choose",3,"ngModel","ngModelChange"],["nzValue","NEW","nzLabel","new"],["nzValue","CURATED","nzLabel","curated"],["nzValue","REJECTED","nzLabel","rejected"],["placeholderText","Submitter",3,"inputModel","onInputChanged","inputModelChange",4,"ngIf"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["placeholderText","ID",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Citation",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Gene",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Variant",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Disease",3,"inputModel","onInputChanged","inputModelChange"],[4,"ngIf"],[4,"ngFor","ngForOf"],["manageSuggestionTemplate",""],["nzWidth","5%"],["placeholderText","Submitter",3,"inputModel","onInputChanged","inputModelChange"],["nz-icon","","nz-tooltip","","nzType","info-circle",3,"nzTooltipTitle",4,"ngIf"],[3,"user",4,"ngIf"],[3,"source",4,"ngIf"],[3,"gene",4,"ngIf"],[3,"variant",4,"ngIf"],[3,"disease",4,"ngIf"],["nz-icon","","nz-tooltip","","nzType","info-circle",3,"nzTooltipTitle"],[3,"user"],[3,"source"],[3,"gene"],[3,"variant"],[3,"disease"],["nz-button","","nzSize","small","nz-tooltip","","nzTooltipTitle","Curate an Evidence Item from this Source Suggestion",3,"disabled"],["nz-icon","","nzType","plus"],["nz-button","","nzSize","small","nz-popover","","nzPopoverTitle","Manage Source Suggestion","nzPopoverPlacement","left","nzPopoverTrigger","click",3,"nzPopoverContent","click"],["nz-icon","","nzType","edit"],[3,"currentStatus","sourceSuggestionId",4,"ngIf"],[3,"currentStatus","sourceSuggestionId"]],template:function(o,c){1&o&&n.YNc(0,zn,54,38,"ng-container",0),2&o&&n.Q6J("ngrxLet",c.viewer$)},directives:[x.eJ,z.N8,z.Om,z.$Z,z.Uo,z._C,z.qD,f.O5,p.Vq,v.JJ,v.On,p.Ip,d.p,z.p0,f.sg,Q.Ls,J.w,b.SY,Y.I,E.T,$.H,L.I,R.n,O.fY,O.ix,V.dQ,j.lU,tn],pipes:[x.fM,f.i8],styles:["[_nghost-%COMP%]{display:block}"]}),a})()},2832:(B,N,e)=>{e.d(N,{W:()=>W});var C=e(9808),t=e(592),T=e(8054),S=e(4125),h=e(4182),A=e(6949),U=e(7345),n=e(9779),y=e(3309),Z=e(4867),x=e(3580),z=e(647),f=e(6042),p=e(404),v=e(7008),d=e(3610),Q=e(8776),J=e(7484),b=e(4546),Y=e(1825),E=e(4375),$=e(868),L=e(7525),R=e(2359),O=e(1047),V=e(4509),j=e(8144),I=e(5e3);let w=(()=>{class _{}return _.\u0275fac=function(P){return new(P||_)},_.\u0275mod=I.oAB({type:_}),_.\u0275inj=I.cJS({imports:[[C.ez,h.UX,A.WG,f.sL,J.vh,$.we,b.U5,L.j,R.L,O.o7,T.LV,j.zf,h.u5,Q.X0,v.B,Y.A,E.R,V.w]]}),_})(),W=(()=>{class _{}return _.\u0275fac=function(P){return new(P||_)},_.\u0275mod=I.oAB({type:_}),_.\u0275inj=I.cJS({imports:[[C.ez,h.u5,A.WG,t.HQ,T.LV,p.cg,z.PV,f.sL,d.$6,S.k,U.W,n.s,y.U,Z.Q,x.Q,v.B,w]]}),_})()},7677:(B,N,e)=>{e.d(N,{G:()=>f});var C=e(9808),t=e(325),T=e(3610),S=e(8481),h=e(647),A=e(9779),U=e(4867),n=e(7484),y=e(3098),Z=e(6949),x=e(5e3);let z=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=x.oAB({type:p}),p.\u0275inj=x.cJS({imports:[[C.ez,Z.WG,n.vh,y.q6,A.s,U.Q]]}),p})(),f=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=x.oAB({type:p}),p.\u0275inj=x.cJS({imports:[[C.ez,t.Bz,T.$6,S.X,h.PV,z]]}),p})()},8664:(B,N,e)=>{e.d(N,{I:()=>k});var C=e(6654),t=e(5e3),T=e(9808),S=e(325),h=e(8481),A=e(3610),U=e(4850),n=e(712),y=e(7484),Z=e(647),x=e(3193),z=e(3098),f=e(6550),p=e(1894),v=e(8144),d=e(6949);function Q(r,g){if(1&r&&(t._UZ(0,"i",13),t._uU(1)),2&r){const s=t.oxw().ngIf;t.xp6(1),t.hij(" ",s.name," ")}}function J(r,g){if(1&r&&t._UZ(0,"cvc-gene-tag",14),2&r){const s=t.oxw().ngIf;t.Q6J("enablePopover",!1)("gene",s.gene)}}function b(r,g){1&r&&(t.TgZ(0,"span"),t._uU(1,",\xa0"),t.qZA())}function Y(r,g){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.YNc(2,b,2,0,"span",1),t.qZA()),2&r){const s=g.$implicit,m=g.last;t.xp6(1),t.hij(" ",s,""),t.xp6(1),t.Q6J("ngIf",!m)}}function E(r,g){if(1&r&&(t.TgZ(0,"nz-descriptions-item",15),t.YNc(1,Y,3,2,"span",16),t.qZA()),2&r){const s=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",s.variantAliases)}}function $(r,g){if(1&r&&(t.TgZ(0,"nz-descriptions-item",17),t.TgZ(1,"cvc-link-tag",18),t._uU(2),t.qZA(),t.qZA()),2&r){const s=t.oxw().ngIf;t.xp6(1),t.MGl("href","https://reg.genome.network/allele/",s.alleleRegistryId,".html"),t.xp6(1),t.hij(" ",s.alleleRegistryId," ")}}function L(r,g){if(1&r&&(t.TgZ(0,"a",19),t.TgZ(1,"nz-tag",20),t._UZ(2,"i",21),t._uU(3),t.qZA(),t.qZA()),2&r){const s=t.oxw().ngIf;t.MGl("routerLink","/variants/",s.id,"/flags"),t.xp6(3),t.hij(" Flags (",s.flags.totalCount,") ")}}function R(r,g){if(1&r&&(t.TgZ(0,"a",19),t.TgZ(1,"nz-tag",22),t._UZ(2,"i",23),t._uU(3),t.qZA(),t.qZA()),2&r){const s=t.oxw().ngIf;t.MGl("routerLink","/variants/",s.id,"/revisions"),t.xp6(3),t.hij(" Revisions (",s.revisions.totalCount,") ")}}function O(r,g){if(1&r&&(t.TgZ(0,"a",19),t.TgZ(1,"nz-tag",24),t._UZ(2,"i",25),t._uU(3),t.qZA(),t.qZA()),2&r){const s=t.oxw().ngIf;t.MGl("routerLink","/variants/",s.id,"/comments"),t.xp6(3),t.hij(" Comments (",s.comments.totalCount,") ")}}function V(r,g){if(1&r&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,Q,2,1,"ng-template",null,3,t.W1O),t.YNc(4,J,1,2,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5),t.YNc(7,E,2,1,"nz-descriptions-item",6),t.YNc(8,$,3,2,"nz-descriptions-item",7),t.TgZ(9,"nz-descriptions-item",8),t._uU(10),t.qZA(),t.qZA(),t.TgZ(11,"nz-row",9),t.TgZ(12,"nz-col",10),t.TgZ(13,"nz-space",11),t.YNc(14,L,4,2,"a",12),t.YNc(15,R,4,2,"a",12),t.YNc(16,O,4,2,"a",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&r){const s=g.ngIf,m=t.MAs(3),M=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",m)("nzExtra",M),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",s.variantAliases.length>0),t.xp6(1),t.Q6J("ngIf",s.alleleRegistryId),t.xp6(2),t.hij(" ",s.evidenceItems.totalCount," ")}}let j=(()=>{class r{constructor(s){this.gql=s}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,U.U)(({data:s})=>s.variant))}}return r.\u0275fac=function(s){return new(s||r)(t.Y36(n.ZYZ))},r.\u0275cmp=t.Xpm({type:r,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Evidence Items","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:variant"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(s,m){1&s&&(t.TgZ(0,"div",0),t.YNc(1,V,17,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,m.variant$)))},directives:[T.O5,y.bd,Z.Ls,x.H,z.R7,z.uj,T.sg,f.l,p.SK,p.t3,v.NU,v.$1,S.yS,h.j],pipes:[d.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),r})();function I(r,g){}function w(r,g){if(1&r&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,I,0,0,"ng-template",6),t.qZA(),t.BQk()),2&r){const s=t.oxw(),m=t.MAs(2);t.xp6(1),t.Q6J("routerLink",s.variant.link),t.xp6(1),t.Q6J("ngTemplateOutlet",m)}}function W(r,g){}function _(r,g){if(1&r){const s=t.EpF();t.TgZ(0,"nz-tag",9),t.NdJ("nzOnClose",function(M){return t.CHM(s),t.oxw(2).itemClosed(M)}),t.YNc(1,W,0,0,"ng-template",6),t.qZA()}if(2&r){t.oxw();const s=t.MAs(2),m=t.oxw(),M=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",m.onCloseClicked?0:.5)("nzPopoverContent",s)("nzMode",m.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",M)}}function F(r,g){if(1&r&&t._UZ(0,"cvc-variant-popover",11),2&r){const s=t.oxw(3);t.Q6J("variantId",s.variant.id)}}function P(r,g){if(1&r&&t.YNc(0,F,1,1,"cvc-variant-popover",10),2&r){const s=t.oxw(2);t.Q6J("ngIf",s.enablePopover)}}function H(r,g){if(1&r&&(t.YNc(0,_,2,4,"nz-tag",7),t.YNc(1,P,1,1,"ng-template",null,8,t.W1O)),2&r){const s=t.oxw(),m=t.MAs(4);t.Q6J("ngIf",s.enablePopover)("ngIfElse",m)}}function D(r,g){}function G(r,g){if(1&r){const s=t.EpF();t.TgZ(0,"nz-tag",12),t.NdJ("nzOnClose",function(M){return t.CHM(s),t.oxw().itemClosed(M)}),t.YNc(1,D,0,0,"ng-template",6),t.qZA()}if(2&r){const s=t.oxw(),m=t.MAs(8);t.Q6J("nzMode",s.onCloseClicked?"closeable":"default"),t.xp6(1),t.Q6J("ngTemplateOutlet",m)}}function K(r,g){}function X(r,g){if(1&r&&t.YNc(0,K,0,0,"ng-template",6),2&r){t.oxw();const s=t.MAs(2);t.Q6J("ngTemplateOutlet",s)}}function q(r,g){if(1&r&&(t._UZ(0,"i",13),t._uU(1)),2&r){const s=t.oxw();t.xp6(1),t.hij(" ",s.variant.name,"\n")}}let k=(()=>{class r extends C.a{constructor(){super(),this.enablePopover=!0}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover"},features:[t.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-variant","nzTheme","twotone","nzTwotoneColor","#33B358"]],template:function(s,m){if(1&s&&(t.YNc(0,w,3,2,"ng-container",0),t.YNc(1,H,3,2,"ng-template",null,1,t.W1O),t.YNc(3,G,2,2,"ng-template",null,2,t.W1O),t.YNc(5,X,1,1,"ng-template",null,3,t.W1O),t.YNc(7,q,2,1,"ng-template",null,4,t.W1O)),2&s){const M=t.MAs(6);t.Q6J("ngIf",m.linked)("ngIfElse",M)}},directives:[T.O5,S.yS,T.tP,h.j,A.lU,j,Z.Ls],styles:[""]}),r})()},4867:(B,N,e)=>{e.d(N,{Q:()=>v});var C=e(9808),t=e(325),T=e(8481),S=e(647),h=e(3610),A=e(6949),U=e(7484),n=e(1894),y=e(3098),Z=e(8144),x=e(3309),z=e(3630),f=e(5e3);let p=(()=>{class d{}return d.\u0275fac=function(J){return new(J||d)},d.\u0275mod=f.oAB({type:d}),d.\u0275inj=f.cJS({imports:[[C.ez,t.Bz,A.WG,U.vh,n.Jb,y.q6,T.X,S.PV,Z.zf,x.U,z.X]]}),d})(),v=(()=>{class d{}return d.\u0275fac=function(J){return new(J||d)},d.\u0275mod=f.oAB({type:d}),d.\u0275inj=f.cJS({imports:[[C.ez,t.Bz,T.X,h.$6,S.PV,p]]}),d})()}}]);