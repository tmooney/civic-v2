"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[681],{3220:(G,v,a)=>{a.d(v,{l:()=>z});var o=a(5e3),T=a(6715),n=a(9808),y=a(8481),m=a(3610);const h=function(g){return{"matched-tag":g}};function p(g,u){if(1&g&&(o.TgZ(0,"div",2),o.TgZ(1,"nz-tag"),o._uU(2),o.qZA(),o.qZA()),2&g){const c=u.$implicit,r=o.oxw();o.Q6J("ngClass",o.VKq(2,h,r.matchingText&&c.toLowerCase().includes(r.matchingText))),o.xp6(2),o.Oqu(c)}}function A(g,u){if(1&g&&(o.TgZ(0,"span"),o._uU(1),o.qZA()),2&g){const c=o.oxw(2);o.xp6(1),o.hij("",c.matchedHiddenCount," of ")}}function C(g,u){if(1&g){const c=o.EpF();o.TgZ(0,"nz-tag",5),o.NdJ("click",function(){return o.CHM(c),o.oxw().onOverflowClicked()}),o._uU(1," +"),o.YNc(2,A,2,1,"span",6),o._uU(3),o.qZA()}if(2&g){const c=o.oxw(),r=o.MAs(5);o.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",r),o.xp6(2),o.Q6J("ngIf",c.matchedHiddenCount>0),o.xp6(1),o.hij("",c.hiddenCount," more ")}}function x(g,u){if(1&g&&(o.TgZ(0,"div",2),o.TgZ(1,"nz-tag"),o._uU(2),o.qZA(),o.qZA()),2&g){const c=u.$implicit,r=o.oxw(2);o.Q6J("ngClass",o.VKq(2,h,r.matchingText&&c.toLowerCase().includes(r.matchingText))),o.xp6(2),o.Oqu(c)}}function P(g,u){if(1&g&&(o.TgZ(0,"cvc-tag-list",0),o.YNc(1,x,3,4,"div",1),o.qZA()),2&g){const c=o.oxw();o.xp6(1),o.Q6J("ngForOf",c.hiddenTags)}}let z=(()=>{class g{constructor(){this.maxDisplayCount=2,this.matchedHiddenCount=0}ngOnInit(){this.calculateDisplayedTags()}calculateDisplayedTags(){var c,r,f,Z;if(this.displayedTags=null===(c=this.tags)||void 0===c?void 0:c.slice(0,this.maxDisplayCount),this.hiddenTags=null===(r=this.tags)||void 0===r?void 0:r.slice(this.maxDisplayCount),this.hiddenCount=null===(f=this.hiddenTags)||void 0===f?void 0:f.length,this.matchingText=null===(Z=this.matchingText)||void 0===Z?void 0:Z.toLowerCase(),this.matchingText&&this.hiddenTags){let O=this.matchingText;this.hiddenTags.forEach(I=>{I.toLowerCase().includes(O)&&(this.matchedHiddenCount+=1)})}}onOverflowClicked(){var c;this.maxDisplayCount=(null===(c=this.tags)||void 0===c?void 0:c.length)||0,this.calculateDisplayedTags()}}return g.\u0275fac=function(c){return new(c||g)},g.\u0275cmp=o.Xpm({type:g,selectors:[["cvc-plain-tag-overflow"]],inputs:{matchingText:"matchingText",tags:"tags",maxDisplayCount:"maxDisplayCount"},decls:6,vars:5,consts:[["size","xs"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["class","overflow-tag","nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","click",4,"ngIf"],["additionalTagPopover",""],["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",1,"overflow-tag",3,"nzPopoverMouseEnterDelay","nzPopoverContent","click"],[4,"ngIf"]],template:function(c,r){1&c&&(o.TgZ(0,"cvc-tag-list",0),o.YNc(1,p,3,4,"div",1),o.TgZ(2,"div",2),o.YNc(3,C,4,4,"nz-tag",3),o.qZA(),o.YNc(4,P,2,1,"ng-template",null,4,o.W1O),o.qZA()),2&c&&(o.xp6(1),o.Q6J("ngForOf",r.displayedTags),o.xp6(1),o.Q6J("ngClass",o.VKq(3,h,r.matchedHiddenCount>0)),o.xp6(1),o.Q6J("ngIf",r.hiddenCount&&r.hiddenCount>0))},directives:[T.$,n.sg,n.mk,y.j,n.O5,m.lU],styles:[".matched-tag[_ngcontent-%COMP%]{font-weight:700}"]}),g})()},3968:(G,v,a)=>{a.d(v,{T:()=>h});var o=a(9808),T=a(897),n=a(8481),y=a(3610),m=a(5e3);let h=(()=>{class p{}return p.\u0275fac=function(C){return new(C||p)},p.\u0275mod=m.oAB({type:p}),p.\u0275inj=m.cJS({imports:[[o.ez,n.X,y.$6,T.$]]}),p})()},681:(G,v,a)=>{a.r(v),a.d(v,{GenesModule:()=>Tn});var o=a(9808),T=a(325),n=a(5e3);let y=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-genes"]],decls:1,vars:0,template:function(e,i){1&e&&n._UZ(0,"router-outlet")},directives:[T.lC],styles:[""]}),t})();var m=a(1945),h=a(1894),p=a(1132),A=a(4546),C=a(1047),x=a(647),P=a(3618),z=a(4182),g=a(6949),u=a(3309),c=a(7946),r=a(3968),f=a(6042),Z=a(7484),O=a(404);let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[o.ez,z.u5,g.WG,p.HQ,A.U5,C.o7,x.PV,P.ZJ,Z.vh,f.sL,O.cg,u.U,c.x,r.T]]}),t})();var b=a(5630);let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[o.ez,b.D,I,x.PV,m.KJ,h.Jb]]}),t})();var S=a(8992),N=a(8929),J=a(4850),M=a(373),U=a(1059),D=a(2986),w=a(13),Q=a(712),F=a(3154),L=a(2683),H=a(3193),Y=a(3220),B=a(392),W=a(2643);function $(t,l){if(1&t){const e=n.EpF();n.TgZ(0,"i",28),n.NdJ("click",function(){n.CHM(e);const s=n.oxw(3);return s.nameInput=void 0,s.onModelUpdated(void 0)}),n.qZA()}}function K(t,l){if(1&t&&n.YNc(0,$,1,0,"i",27),2&t){const e=n.oxw(2);n.Q6J("ngIf",e.nameInput)}}function R(t,l){if(1&t){const e=n.EpF();n.TgZ(0,"i",28),n.NdJ("click",function(){n.CHM(e);const s=n.oxw(3);return s.aliasInput=void 0,s.onModelUpdated(void 0)}),n.qZA()}}function j(t,l){if(1&t&&n.YNc(0,R,1,0,"i",27),2&t){const e=n.oxw(2);n.Q6J("ngIf",e.aliasInput)}}function q(t,l){if(1&t){const e=n.EpF();n.TgZ(0,"i",28),n.NdJ("click",function(){n.CHM(e);const s=n.oxw(3);return s.diseaseInput=void 0,s.onModelUpdated(void 0)}),n.qZA()}}function V(t,l){if(1&t&&n.YNc(0,q,1,0,"i",27),2&t){const e=n.oxw(2);n.Q6J("ngIf",e.diseaseInput)}}function X(t,l){if(1&t){const e=n.EpF();n.TgZ(0,"i",28),n.NdJ("click",function(){n.CHM(e);const s=n.oxw(3);return s.drugInput=void 0,s.onModelUpdated(void 0)}),n.qZA()}}function k(t,l){if(1&t&&n.YNc(0,X,1,0,"i",27),2&t){const e=n.oxw(2);n.Q6J("ngIf",e.drugInput)}}function nn(t,l){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._UZ(2,"cvc-gene-tag",29),n.qZA(),n.TgZ(3,"td"),n._UZ(4,"cvc-plain-tag-overflow",30),n.qZA(),n.TgZ(5,"td"),n._UZ(6,"cvc-tag-overflow",31),n.qZA(),n.TgZ(7,"td"),n._UZ(8,"cvc-tag-overflow",32),n.qZA(),n.TgZ(9,"td",33),n._uU(10),n.qZA(),n.TgZ(11,"td",33),n._uU(12),n.qZA(),n.TgZ(13,"td",33),n._uU(14),n.qZA(),n.qZA()),2&t){const e=l.$implicit,i=n.oxw(2);n.xp6(2),n.Q6J("gene",e),n.xp6(2),n.Q6J("tags",e.geneAliases)("matchingText",i.aliasInput),n.xp6(2),n.Q6J("tags",e.diseases)("matchingText",i.diseaseInput),n.xp6(2),n.Q6J("tags",e.drugs)("matchingText",i.drugInput),n.xp6(2),n.Oqu(e.variantCount),n.xp6(2),n.Oqu(e.evidenceItemCount),n.xp6(2),n.Oqu(e.assertionCount)}}function tn(t,l){if(1&t){const e=n.EpF();n.TgZ(0,"button",36),n.NdJ("click",function(){n.CHM(e);const s=n.oxw(2).ngrxLet;return n.oxw(2).loadMore(s.endCursor)}),n._uU(1),n.qZA()}if(2&t){const e=n.oxw(4);n.xp6(1),n.hij("Load ",e.fetchMorePageSize," More")}}function en(t,l){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"td",34),n.YNc(2,tn,2,1,"button",35),n.qZA(),n.qZA()),2&t){const e=n.oxw().ngrxLet;n.xp6(2),n.Q6J("ngIf",e.hasNextPage)}}function on(t,l){if(1&t&&(n.ynx(0),n.YNc(1,en,3,1,"tr",1),n.BQk()),2&t){const e=l.ngrxLet;n.xp6(1),n.Q6J("ngIf",e.hasNextPage)}}function an(t,l){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"nz-table",4,5),n.ALo(3,"ngrxPush"),n.ALo(4,"ngrxPush"),n.TgZ(5,"thead",6),n.NdJ("nzSortOrderChange",function(s){return n.CHM(e),n.oxw().onSortChanged(s)}),n.TgZ(6,"tr"),n.TgZ(7,"th",7),n._uU(8," Name "),n.qZA(),n.TgZ(9,"th",8),n._uU(10," Aliases "),n.qZA(),n.TgZ(11,"th",9),n._uU(12," Diseases "),n.qZA(),n.TgZ(13,"th",9),n._uU(14," Drugs "),n.qZA(),n.TgZ(15,"th",10),n._UZ(16,"i",11),n.qZA(),n.TgZ(17,"th",12),n._UZ(18,"i",13),n.qZA(),n.TgZ(19,"th",14),n._UZ(20,"i",15),n.qZA(),n.qZA(),n.TgZ(21,"tr"),n.TgZ(22,"th"),n.TgZ(23,"nz-input-group",16),n.TgZ(24,"input",17),n.NdJ("ngModelChange",function(s){return n.CHM(e),n.oxw().nameInput=s})("ngModelChange",function(s){return n.CHM(e),n.oxw().onModelUpdated(s)}),n.qZA(),n.qZA(),n.YNc(25,K,1,1,"ng-template",null,18,n.W1O),n.qZA(),n.TgZ(27,"th"),n.TgZ(28,"nz-input-group",16),n.TgZ(29,"input",19),n.NdJ("ngModelChange",function(s){return n.CHM(e),n.oxw().aliasInput=s})("ngModelChange",function(s){return n.CHM(e),n.oxw().onModelUpdated(s)}),n.qZA(),n.qZA(),n.YNc(30,j,1,1,"ng-template",null,20,n.W1O),n.qZA(),n.TgZ(32,"th"),n.TgZ(33,"nz-input-group",16),n.TgZ(34,"input",21),n.NdJ("ngModelChange",function(s){return n.CHM(e),n.oxw().diseaseInput=s})("ngModelChange",function(s){return n.CHM(e),n.oxw().onModelUpdated(s)}),n.qZA(),n.qZA(),n.YNc(35,V,1,1,"ng-template",null,22,n.W1O),n.qZA(),n.TgZ(37,"th"),n.TgZ(38,"nz-input-group",16),n.TgZ(39,"input",23),n.NdJ("ngModelChange",function(s){return n.CHM(e),n.oxw().drugInput=s})("ngModelChange",function(s){return n.CHM(e),n.oxw().onModelUpdated(s)}),n.qZA(),n.qZA(),n.YNc(40,k,1,1,"ng-template",null,24,n.W1O),n.qZA(),n._UZ(42,"th"),n._UZ(43,"th"),n._UZ(44,"th"),n.qZA(),n.qZA(),n.TgZ(45,"tbody"),n.YNc(46,nn,15,10,"tr",25),n.YNc(47,on,2,1,"ng-container",26),n.qZA(),n.qZA(),n.BQk()}if(2&t){const e=n.MAs(2),i=n.MAs(26),s=n.MAs(31),d=n.MAs(36),fn=n.MAs(41),_=n.oxw();n.xp6(1),n.Q6J("nzData",n.lcZ(3,22,_.genes$))("nzLoading",n.lcZ(4,24,_.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(6),n.Q6J("nzColumnKey",_.sortColumns.EntrezSymbol)("nzSortFn",!0),n.xp6(8),n.Q6J("nzColumnKey",_.sortColumns.VariantCount)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",_.sortColumns.EvidenceItemCount)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",_.sortColumns.AssertionCount)("nzSortFn",!0),n.xp6(4),n.Q6J("nzSuffix",i),n.xp6(1),n.Q6J("ngModel",_.nameInput),n.xp6(4),n.Q6J("nzSuffix",s),n.xp6(1),n.Q6J("ngModel",_.aliasInput),n.xp6(4),n.Q6J("nzSuffix",d),n.xp6(1),n.Q6J("ngModel",_.diseaseInput),n.xp6(4),n.Q6J("nzSuffix",fn),n.xp6(1),n.Q6J("ngModel",_.drugInput),n.xp6(7),n.Q6J("ngForOf",e.data),n.xp6(1),n.Q6J("ngrxLet",_.pageInfo$)}}function ln(t,l){1&t&&n._UZ(0,"i",37)}function sn(t,l){}function cn(t,l){if(1&t&&(n.ynx(0),n.YNc(1,sn,0,0,"ng-template",41),n.BQk()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngTemplateOutlet",e.cvcTitleTemplate)}}function gn(t,l){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=n.oxw(2);n.xp6(1),n.hij(" ",e.cvcTitle," ")}}function rn(t,l){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&t){const e=n.oxw().ngIf;n.xp6(1),n.hij(" of ",e," filtered")}}function pn(t,l){if(1&t&&(n.TgZ(0,"span",42),n._uU(1),n.YNc(2,rn,2,1,"span",1),n._uU(3,") "),n.qZA()),2&t){const e=l.ngIf,i=n.oxw(2);n.xp6(1),n.AsE(" (",i.totalCount," total, showing ",i.visibleCount,""),n.xp6(1),n.Q6J("ngIf",i.totalCount&&e<i.totalCount)}}function dn(t,l){1&t&&(n.TgZ(0,"span",42),n._uU(1," (0 total) "),n.qZA())}function un(t,l){if(1&t&&(n._UZ(0,"i",38),n.YNc(1,cn,2,1,"ng-container",1),n.YNc(2,gn,2,1,"ng-container",1),n.YNc(3,pn,4,3,"span",39),n.ALo(4,"ngrxPush"),n.YNc(5,dn,2,0,"ng-template",null,40,n.W1O)),2&t){const e=n.MAs(6),i=n.oxw();n.xp6(1),n.Q6J("ngIf",i.cvcTitleTemplate),n.xp6(1),n.Q6J("ngIf",i.cvcTitle),n.xp6(1),n.Q6J("ngIf",n.lcZ(4,4,i.filteredCount$))("ngIfElse",e)}}const _n=function(t){return{value:t}};let mn=(()=>{class t{constructor(e){this.query=e,this.debouncedQuery=new N.xQ,this.sortColumns=Q.Fvz,this.initialPageSize=25,this.fetchMorePageSize=25,this.visibleCount=this.initialPageSize,this.loadedPages=1}ngOnInit(){this.initialQueryArgs={first:this.initialPageSize},this.queryRef=this.query.watch(this.initialQueryArgs),this.data$=this.queryRef.valueChanges.pipe((0,J.U)(e=>({data:e.data,loading:e.loading,networkStatus:e.networkStatus}))),this.isLoading$=this.data$.pipe((0,M.j)("loading"),(0,U.O)(!0)),this.genes$=this.data$.pipe((0,M.j)("data","browseGenes","edges"),(0,J.U)(e=>e.map(i=>i.node))),this.pageInfo$=this.data$.pipe((0,M.j)("data","browseGenes","pageInfo")),this.filteredCount$=this.data$.pipe((0,M.j)("data","browseGenes","filteredCount")),this.data$.pipe((0,M.j)("data","browseGenes","totalCount")).pipe((0,D.q)(1)).subscribe(e=>this.totalCount=e),this.filteredCount$.subscribe(e=>{e<this.initialPageSize?this.visibleCount=e:(this.visibleCount=this.initialPageSize+this.fetchMorePageSize*(this.loadedPages-1),this.visibleCount>e&&(this.visibleCount=e))}),this.pageCount$=this.data$.pipe((0,M.j)("data","browseGenes","pageCount"),(0,U.O)(0)),this.debouncedQuery.pipe((0,w.b)(500)).subscribe(e=>{var i;this.loadedPages=1,null===(i=this.queryRef)||void 0===i||i.refetch({entrezSymbol:this.nameInput,geneAlias:this.aliasInput,diseaseName:this.diseaseInput,drugName:this.drugInput})})}loadMore(e){var i;null===(i=this.queryRef)||void 0===i||i.fetchMore({variables:{first:this.fetchMorePageSize,after:e}}),this.loadedPages+=1}onSortChanged(e){var i;this.loadedPages=1,null===(i=this.queryRef)||void 0===i||i.refetch(Object.assign(Object.assign({},this.initialQueryArgs),{sortBy:(0,F._)(e)}))}onModelUpdated(e){this.debouncedQuery.next()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(Q.q8c))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-genes-table"]],inputs:{cvcTitleTemplate:"cvcTitleTemplate",cvcTitle:"cvcTitle"},decls:7,vars:6,consts:[[3,"nzTitle"],[4,"ngIf"],["loadingTemplate",""],["titleTemplate",""],[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["genesTable",""],[3,"nzSortOrderChange"],["nzWidth","10%",3,"nzColumnKey","nzSortFn"],["nzWidth","20%"],["nzWidth","25%"],["nzWidth","3%","nzRight","","nz-tooltip","","nzTooltipTitle","Variant Count",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:variant"],["nzWidth","3%","nzRight","","nz-tooltip","","nzTooltipTitle","Evidence Count",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:evidence"],["nzWidth","3%","nzRight","","nz-tooltip","","nzTooltipTitle","Assertion Count",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:assertion"],[3,"nzSuffix"],["type","text","nz-input","","placeholder","Search name",3,"ngModel","ngModelChange"],["nameInputClearTpl",""],["type","text","nz-input","","placeholder","Search alias",3,"ngModel","ngModelChange"],["aliasInputClearTpl",""],["type","text","nz-input","","placeholder","Search disease",3,"ngModel","ngModelChange"],["diseaseInputClearTpl",""],["type","text","nz-input","","placeholder","Search drug",3,"ngModel","ngModelChange"],["drugInputClearTpl",""],[4,"ngFor","ngForOf"],[4,"ngrxLet"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],[3,"gene"],[3,"tags","matchingText"],["tagType","disease",3,"tags","matchingText"],["tagType","drug",3,"tags","matchingText"],["nzRight",""],["colspan","7"],["nz-button","","nzBlock","",3,"click",4,"ngIf"],["nz-button","","nzBlock","",3,"click"],["nz-icon","","nzType","loading"],["nz-icon","","nzType","civic:gene"],["nz-typography","","nzType","secondary",4,"ngIf","ngIfElse"],["noData",""],[3,"ngTemplateOutlet"],["nz-typography","","nzType","secondary"]],template:function(e,i){if(1&e&&(n.TgZ(0,"nz-card",0),n.YNc(1,an,48,26,"ng-container",1),n.ALo(2,"ngrxPush"),n.YNc(3,ln,1,0,"ng-template",null,2,n.W1O),n.qZA(),n.YNc(5,un,7,6,"ng-template",null,3,n.W1O)),2&e){const s=n.MAs(6);n.Q6J("nzTitle",s),n.xp6(1),n.Q6J("ngIf",n.VKq(4,_n,n.lcZ(2,2,i.data$)))}},directives:[Z.bd,o.O5,p.N8,p.Om,p.$Z,p.Uo,p._C,p.qD,p.qn,O.SY,x.Ls,L.w,C.gB,C.ke,C.Zp,z.Fj,z.JJ,z.On,p.p0,o.sg,H.H,Y.l,B.T,g.eJ,f.ix,W.dQ,o.tP,P.ZU],pipes:[g.fM],styles:[""]}),t})();const hn=[{path:"",component:y,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-genes-home"]],decls:10,vars:1,consts:[[1,"site-page-header"],["nz-icon","","nzType","civic:gene"],[3,"nzSpan"],[1,"content"],["cvcTitle","Browse Genes"]],template:function(e,i){1&e&&(n._UZ(0,"cvc-section-navigation"),n.TgZ(1,"nz-page-header",0),n.TgZ(2,"nz-page-header-title"),n._UZ(3,"i",1),n._uU(4," Genes "),n.qZA(),n.TgZ(5,"nz-page-header-content"),n.TgZ(6,"nz-row"),n.TgZ(7,"nz-col",2),n.TgZ(8,"div",3),n._UZ(9,"cvc-genes-table",4),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(7),n.Q6J("nzSpan",24))},directives:[S.I,m.$O,m.u9,x.Ls,m.u5,h.SK,h.t3,mn],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})(),data:{breadcrumb:"Home"}},{path:":geneId",data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",loadChildren:()=>Promise.all([a.e(6256),a.e(1753),a.e(9001),a.e(2826),a.e(1679),a.e(2738),a.e(55),a.e(4292),a.e(2043),a.e(3482),a.e(5787),a.e(7259)]).then(a.bind(a,8252)).then(t=>t.GenesDetailModule)},{path:"revise",loadChildren:()=>Promise.all([a.e(6256),a.e(3021),a.e(8592),a.e(8868)]).then(a.bind(a,3179)).then(t=>t.GenesReviseModule),data:{breadcrumb:"Revise"}}]}]}];let Cn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[T.Bz.forChild(hn),E],T.Bz]}),t})(),Tn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[o.ez,Cn]]}),t})()}}]);