"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[9246],{392:(L,Z,a)=>{a.d(Z,{T:()=>N});var t=a(5e3),z=a(6715),m=a(9808),M=a(7469),T=a(4022),h=a(5749),A=a(8481),n=a(3610);function E(_,s){if(1&_&&(t.ynx(0),t._UZ(1,"cvc-drug-tag",7),t.BQk()),2&_){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("drug",i)}}function d(_,s){if(1&_&&(t.ynx(0),t._UZ(1,"cvc-disease-tag",8),t.BQk()),2&_){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("disease",i)}}function P(_,s){if(1&_&&(t.ynx(0),t._UZ(1,"cvc-organization-tag",9),t.BQk()),2&_){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("org",i)}}const x=function(_){return{"matched-tag":_}};function v(_,s){if(1&_&&(t.TgZ(0,"div",2),t.ynx(1,5),t.YNc(2,E,2,1,"ng-container",6),t.YNc(3,d,2,1,"ng-container",6),t.YNc(4,P,2,1,"ng-container",6),t.BQk(),t.qZA()),2&_){const i=s.$implicit,g=t.oxw();t.Q6J("ngClass",t.VKq(5,x,g.matchingText&&i.name.toLowerCase().includes(g.matchingText))),t.xp6(1),t.Q6J("ngSwitch",g.tagType),t.xp6(1),t.Q6J("ngSwitchCase","drug"),t.xp6(1),t.Q6J("ngSwitchCase","disease"),t.xp6(1),t.Q6J("ngSwitchCase","organization")}}function f(_,s){if(1&_&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&_){const i=t.oxw(2);t.xp6(1),t.hij("",i.matchedHiddenCount," of ")}}function C(_,s){if(1&_){const i=t.EpF();t.TgZ(0,"nz-tag",10),t.NdJ("click",function(){return t.CHM(i),t.oxw().onOverflowClicked()}),t._uU(1," +"),t.YNc(2,f,2,1,"span",11),t._uU(3),t.qZA()}if(2&_){const i=t.oxw(),g=t.MAs(5);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",g),t.xp6(2),t.Q6J("ngIf",i.matchedHiddenCount>0),t.xp6(1),t.hij("",i.hiddenCount," more ")}}function I(_,s){if(1&_&&(t.ynx(0),t._UZ(1,"cvc-drug-tag",7),t.BQk()),2&_){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("drug",i)}}function D(_,s){if(1&_&&(t.ynx(0),t._UZ(1,"cvc-disease-tag",8),t.BQk()),2&_){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("disease",i)}}function U(_,s){if(1&_&&(t.ynx(0),t._UZ(1,"cvc-organization-tag",9),t.BQk()),2&_){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("org",i)}}function Q(_,s){if(1&_&&(t.TgZ(0,"div",2),t.ynx(1,5),t.YNc(2,I,2,1,"ng-container",6),t.YNc(3,D,2,1,"ng-container",6),t.YNc(4,U,2,1,"ng-container",6),t.BQk(),t.qZA()),2&_){const i=s.$implicit,g=t.oxw(2);t.Q6J("ngClass",t.VKq(5,x,g.matchingText&&i.name.toLowerCase().includes(g.matchingText))),t.xp6(1),t.Q6J("ngSwitch",g.tagType),t.xp6(1),t.Q6J("ngSwitchCase","drug"),t.xp6(1),t.Q6J("ngSwitchCase","disease"),t.xp6(1),t.Q6J("ngSwitchCase","organization")}}function J(_,s){if(1&_&&(t.TgZ(0,"cvc-tag-list",0),t.YNc(1,Q,5,7,"div",1),t.qZA()),2&_){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.hiddenTags)}}let N=(()=>{class _{constructor(){this.maxDisplayCount=2,this.matchedHiddenCount=0}ngOnInit(){this.calculateDisplayedTags()}calculateDisplayedTags(){var i,g,O,y;if(this.displayedTags=null===(i=this.tags)||void 0===i?void 0:i.slice(0,this.maxDisplayCount),this.hiddenTags=null===(g=this.tags)||void 0===g?void 0:g.slice(this.maxDisplayCount),this.hiddenCount=null===(O=this.hiddenTags)||void 0===O?void 0:O.length,this.matchingText=null===(y=this.matchingText)||void 0===y?void 0:y.toLowerCase(),this.matchingText&&this.hiddenTags){let w=this.matchingText;this.hiddenTags.forEach(S=>{S.name.toLowerCase().includes(w)&&(this.matchedHiddenCount+=1)})}}onOverflowClicked(){var i;this.maxDisplayCount=(null===(i=this.tags)||void 0===i?void 0:i.length)||0,this.calculateDisplayedTags()}}return _.\u0275fac=function(i){return new(i||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["cvc-tag-overflow"]],inputs:{matchingText:"matchingText",tags:"tags",tagType:"tagType",maxDisplayCount:"maxDisplayCount"},decls:6,vars:5,consts:[["size","xs"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["class","overflow-tag","nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","click",4,"ngIf"],["additionalTagPopover",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"drug"],[3,"disease"],[3,"org"],["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",1,"overflow-tag",3,"nzPopoverMouseEnterDelay","nzPopoverContent","click"],[4,"ngIf"]],template:function(i,g){1&i&&(t.TgZ(0,"cvc-tag-list",0),t.YNc(1,v,5,7,"div",1),t.TgZ(2,"div",2),t.YNc(3,C,4,4,"nz-tag",3),t.qZA(),t.YNc(4,J,2,1,"ng-template",null,4,t.W1O),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngForOf",g.displayedTags),t.xp6(1),t.Q6J("ngClass",t.VKq(3,x,g.matchedHiddenCount>0)),t.xp6(1),t.Q6J("ngIf",g.hiddenCount&&g.hiddenCount>0))},directives:[z.$,m.sg,m.mk,m.RF,m.n9,M.u,T.n,h.m,m.O5,A.j,n.lU],styles:[".overflow-tag[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),_})()},6274:(L,Z,a)=>{a.d(Z,{S:()=>V});var t=a(712),z=a(3154),m=a(8929),M=a(4850),T=a(373),h=a(1059),A=a(13),n=a(5e3),E=a(9808),d=a(592),P=a(404),x=a(647),v=a(1047),f=a(4182),C=a(8664),I=a(3193),D=a(392),U=a(6949);function Q(o,l){if(1&o){const e=n.EpF();n.TgZ(0,"i",27),n.NdJ("click",function(){n.CHM(e);const c=n.oxw(3);return c.variantNameInput=void 0,c.onModelUpdated(void 0)}),n.qZA()}}function J(o,l){if(1&o&&n.YNc(0,Q,1,0,"i",26),2&o){const e=n.oxw(2);n.Q6J("ngIf",e.variantNameInput)}}function N(o,l){if(1&o){const e=n.EpF();n.TgZ(0,"i",27),n.NdJ("click",function(){n.CHM(e);const c=n.oxw(3);return c.variantAliasInput=void 0,c.onModelUpdated(void 0)}),n.qZA()}}function _(o,l){if(1&o&&n.YNc(0,N,1,0,"i",26),2&o){const e=n.oxw(2);n.Q6J("ngIf",e.variantAliasInput)}}function s(o,l){if(1&o){const e=n.EpF();n.TgZ(0,"i",27),n.NdJ("click",function(){n.CHM(e);const c=n.oxw(3);return c.geneSymbolInput=void 0,c.onModelUpdated(void 0)}),n.qZA()}}function i(o,l){if(1&o&&n.YNc(0,s,1,0,"i",26),2&o){const e=n.oxw(2);n.Q6J("ngIf",e.geneSymbolInput)}}function g(o,l){if(1&o){const e=n.EpF();n.TgZ(0,"i",27),n.NdJ("click",function(){n.CHM(e);const c=n.oxw(3);return c.diseaseNameInput=void 0,c.onModelUpdated(void 0)}),n.qZA()}}function O(o,l){if(1&o&&n.YNc(0,g,1,0,"i",26),2&o){const e=n.oxw(2);n.Q6J("ngIf",e.diseaseNameInput)}}function y(o,l){if(1&o){const e=n.EpF();n.TgZ(0,"i",27),n.NdJ("click",function(){n.CHM(e);const c=n.oxw(3);return c.drugNameInput=void 0,c.onModelUpdated(void 0)}),n.qZA()}}function w(o,l){if(1&o&&n.YNc(0,y,1,0,"i",26),2&o){const e=n.oxw(2);n.Q6J("ngIf",e.drugNameInput)}}function S(o,l){if(1&o&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&o){const e=l.$implicit,r=l.last;n.xp6(1),n.AsE(" ",e.name,"",r?"":", "," ")}}const K=function(o,l,e){return{id:o,name:l,link:e}};function W(o,l){if(1&o&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._UZ(2,"cvc-variant-tag",28),n.qZA(),n.TgZ(3,"td"),n.YNc(4,S,2,2,"span",25),n.qZA(),n.TgZ(5,"td"),n._UZ(6,"cvc-gene-tag",29),n.qZA(),n.TgZ(7,"td"),n._UZ(8,"cvc-tag-overflow",30),n.qZA(),n.TgZ(9,"td"),n._UZ(10,"cvc-tag-overflow",31),n.qZA(),n.TgZ(11,"td",32),n._uU(12),n.qZA(),n.TgZ(13,"td",32),n._uU(14),n.qZA(),n.TgZ(15,"td",32),n._uU(16),n.qZA(),n.qZA()),2&o){const e=l.$implicit,r=n.oxw(2);n.xp6(2),n.Q6J("variant",e),n.xp6(2),n.Q6J("ngForOf",e.aliases),n.xp6(2),n.Q6J("gene",n.kEZ(10,K,e.geneId,e.geneName,e.geneLink)),n.xp6(2),n.Q6J("tags",e.diseases)("matchingText",r.diseaseNameInput),n.xp6(2),n.Q6J("tags",e.drugs)("matchingText",r.drugNameInput),n.xp6(2),n.Oqu(e.evidenceScore),n.xp6(2),n.Oqu(e.evidenceItemCount),n.xp6(2),n.Oqu(e.assertionCount)}}function B(o,l){if(1&o){const e=n.EpF();n.ynx(0),n.TgZ(1,"nz-table",1,2),n.ALo(3,"ngrxPush"),n.ALo(4,"ngrxPush"),n.TgZ(5,"thead",3),n.NdJ("nzSortOrderChange",function(c){return n.CHM(e),n.oxw().onSortChanged(c)}),n.TgZ(6,"tr"),n.TgZ(7,"th",4),n._uU(8," Name "),n.qZA(),n.TgZ(9,"th",5),n._uU(10," Aliases "),n.qZA(),n.TgZ(11,"th",4),n._uU(12," Gene "),n.qZA(),n.TgZ(13,"th",6),n._uU(14," Diseases "),n.qZA(),n.TgZ(15,"th",6),n._uU(16," Drugs "),n.qZA(),n.TgZ(17,"th",7),n.TgZ(18,"div",8),n._UZ(19,"i",9),n._uU(20,"\xa0Score "),n.qZA(),n.qZA(),n.TgZ(21,"th",10),n._UZ(22,"i",11),n.qZA(),n.TgZ(23,"th",12),n._UZ(24,"i",13),n.qZA(),n.qZA(),n.TgZ(25,"tr"),n.TgZ(26,"th"),n.TgZ(27,"nz-input-group",14),n.TgZ(28,"input",15),n.NdJ("ngModelChange",function(c){return n.CHM(e),n.oxw().variantNameInput=c})("ngModelChange",function(c){return n.CHM(e),n.oxw().onModelUpdated(c)}),n.qZA(),n.qZA(),n.YNc(29,J,1,1,"ng-template",null,16,n.W1O),n.qZA(),n.TgZ(31,"th"),n.TgZ(32,"nz-input-group",14),n.TgZ(33,"input",17),n.NdJ("ngModelChange",function(c){return n.CHM(e),n.oxw().variantAliasInput=c})("ngModelChange",function(c){return n.CHM(e),n.oxw().onModelUpdated(c)}),n.qZA(),n.qZA(),n.YNc(34,_,1,1,"ng-template",null,18,n.W1O),n.qZA(),n.TgZ(36,"th"),n.TgZ(37,"nz-input-group",14),n.TgZ(38,"input",19),n.NdJ("ngModelChange",function(c){return n.CHM(e),n.oxw().geneSymbolInput=c})("ngModelChange",function(c){return n.CHM(e),n.oxw().onModelUpdated(c)}),n.qZA(),n.qZA(),n.YNc(39,i,1,1,"ng-template",null,20,n.W1O),n.qZA(),n.TgZ(41,"th"),n.TgZ(42,"nz-input-group",14),n.TgZ(43,"input",21),n.NdJ("ngModelChange",function(c){return n.CHM(e),n.oxw().diseaseNameInput=c})("ngModelChange",function(c){return n.CHM(e),n.oxw().onModelUpdated(c)}),n.qZA(),n.qZA(),n.YNc(44,O,1,1,"ng-template",null,22,n.W1O),n.qZA(),n.TgZ(46,"th"),n.TgZ(47,"nz-input-group",14),n.TgZ(48,"input",23),n.NdJ("ngModelChange",function(c){return n.CHM(e),n.oxw().drugNameInput=c})("ngModelChange",function(c){return n.CHM(e),n.oxw().onModelUpdated(c)}),n.qZA(),n.qZA(),n.YNc(49,w,1,1,"ng-template",null,24,n.W1O),n.qZA(),n._UZ(51,"th"),n._UZ(52,"th"),n._UZ(53,"th"),n.qZA(),n.qZA(),n.TgZ(54,"tbody"),n.YNc(55,W,17,14,"tr",25),n.qZA(),n.qZA(),n.BQk()}if(2&o){const e=n.MAs(2),r=n.MAs(30),c=n.MAs(35),p=n.MAs(40),b=n.MAs(45),F=n.MAs(50),u=n.oxw();n.xp6(1),n.Q6J("nzData",n.lcZ(3,25,u.variants$))("nzLoading",n.lcZ(4,27,u.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(6),n.Q6J("nzColumnKey",u.sortColumns.VariantName)("nzSortFn",!0),n.xp6(4),n.Q6J("nzColumnKey",u.sortColumns.EntrezSymbol)("nzSortFn",!0),n.xp6(6),n.Q6J("nzSortFn",!0)("nzColumnKey",u.sortColumns.EvidenceScore),n.xp6(4),n.Q6J("nzColumnKey",u.sortColumns.EvidenceItemCount)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",u.sortColumns.AssertionCount)("nzSortFn",!0),n.xp6(4),n.Q6J("nzSuffix",r),n.xp6(1),n.Q6J("ngModel",u.variantNameInput),n.xp6(4),n.Q6J("nzSuffix",c),n.xp6(1),n.Q6J("ngModel",u.variantAliasInput),n.xp6(4),n.Q6J("nzSuffix",p),n.xp6(1),n.Q6J("ngModel",u.geneSymbolInput),n.xp6(4),n.Q6J("nzSuffix",b),n.xp6(1),n.Q6J("ngModel",u.diseaseNameInput),n.xp6(4),n.Q6J("nzSuffix",F),n.xp6(1),n.Q6J("ngModel",u.drugNameInput),n.xp6(7),n.Q6J("ngForOf",e.data)}}const R=function(o){return{value:o}};let V=(()=>{class o{constructor(e){this.query=e,this.debouncedQuery=new m.xQ,this.initialPageSize=25,this.sortColumns=t.pP7}ngOnInit(){this.initialQueryArgs={first:this.initialPageSize,variantTypeId:this.variantTypeId,variantGroupId:this.variantGroupId},this.queryRef=this.query.watch(this.initialQueryArgs),this.data$=this.queryRef.valueChanges.pipe((0,M.U)(e=>({data:e.data,loading:e.loading,networkStatus:e.networkStatus}))),this.isLoading$=this.data$.pipe((0,T.j)("loading"),(0,h.O)(!0)),this.variants$=this.data$.pipe((0,T.j)("data","browseVariants","edges"),(0,M.U)(e=>e.map(r=>r.node))),this.pageInfo$=this.data$.pipe((0,T.j)("data","browseVariants","pageInfo")),this.totalCount$=this.data$.pipe((0,T.j)("data","browseVariants","totalCount"),(0,h.O)(0)),this.pageCount$=this.data$.pipe((0,T.j)("data","browseVariants","pageCount"),(0,h.O)(0)),this.debouncedQuery.pipe((0,A.b)(500)).subscribe(e=>{var r;null===(r=this.queryRef)||void 0===r||r.refetch({variantName:this.variantNameInput,entrezSymbol:this.geneSymbolInput,diseaseName:this.diseaseNameInput,drugName:this.drugNameInput,variantAlias:this.variantAliasInput})})}onSortChanged(e){var r;null===(r=this.queryRef)||void 0===r||r.refetch(Object.assign(Object.assign({},this.initialQueryArgs),{sortBy:(0,z._)(e)}))}onModelUpdated(e){this.debouncedQuery.next()}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(e){var r;null===(r=this.queryRef)||void 0===r||r.fetchMore({variables:{after:e}})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(t.Rdc))},o.\u0275cmp=n.Xpm({type:o,selectors:[["cvc-variants-table"]],inputs:{variantTypeId:"variantTypeId",variantGroupId:"variantGroupId"},decls:2,vars:5,consts:[[4,"ngIf"],[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["variantsTable",""],[3,"nzSortOrderChange"],["nzWidth","10%",3,"nzColumnKey","nzSortFn"],["nzWidth","10%"],["nzWidth","25%"],["nzWidth","3%","nzRight","","nz-tooltip","","nzTooltipTitle","Evidence Score",3,"nzSortFn","nzColumnKey"],[2,"min-width","60px","text-align","right"],["nz-icon","","nzType","civic:evidence"],["nzWidth","3%","nzRight","","nz-tooltip","","nzTooltipTitle","Evidence Count",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:evidence","nz-tooltip","","nzTooltipTitle","Evidence count"],["nzWidth","3%","nzRight","","nz-tooltip","","nzTooltipTitle","Assertion Count",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:assertion","nz-tooltip","","nzTooltipTitle","Assertion count"],[3,"nzSuffix"],["type","text","nz-input","","placeholder","Search name",3,"ngModel","ngModelChange"],["nameInputClearTpl",""],["type","text","nz-input","","placeholder","Search aliases",3,"ngModel","ngModelChange"],["variantAliasInputClearTpl",""],["type","text","nz-input","","placeholder","Search gene",3,"ngModel","ngModelChange"],["geneSymbolInputClearTpl",""],["type","text","nz-input","","placeholder","Search disease",3,"ngModel","ngModelChange"],["diseaseInputClearTpl",""],["type","text","nz-input","","placeholder","Search drug",3,"ngModel","ngModelChange"],["drugInputClearTpl",""],[4,"ngFor","ngForOf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],[3,"variant"],[3,"gene"],["tagType","disease",3,"tags","matchingText"],["tagType","drug",3,"tags","matchingText"],["nzRight",""]],template:function(e,r){1&e&&(n.YNc(0,B,56,29,"ng-container",0),n.ALo(1,"ngrxPush")),2&e&&n.Q6J("ngIf",n.VKq(3,R,n.lcZ(1,1,r.data$)))},directives:[E.O5,d.N8,d.Om,d.$Z,d.Uo,d._C,d.qD,d.qn,P.SY,x.Ls,v.gB,v.ke,v.Zp,f.Fj,f.JJ,f.On,d.p0,E.sg,C.I,I.H,D.T],pipes:[U.fM],styles:[""]}),o})()},3855:(L,Z,a)=>{a.d(Z,{H:()=>f});var t=a(9808),z=a(592),m=a(4546),M=a(1047),T=a(647),h=a(3618),A=a(4182),n=a(6949),E=a(7946),d=a(3309),P=a(4867),x=a(404),v=a(5e3);let f=(()=>{class C{}return C.\u0275fac=function(D){return new(D||C)},C.\u0275mod=v.oAB({type:C}),C.\u0275inj=v.cJS({imports:[[t.ez,A.u5,n.WG,z.HQ,m.U5,M.o7,T.PV,h.ZJ,x.cg,d.U,P.Q,E.x]]}),C})()}}]);