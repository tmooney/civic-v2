"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[233],{4805:(y,h,s)=>{s.d(h,{_:()=>f});var i=s(5e3),r=s(7484);const c=["*"];let f=(()=>{class e{constructor(){this.cvcTitle=void 0}ngOnInit(){}}return e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["cvc-entity-table-card"]],inputs:{cvcTitle:"cvcTitle"},ngContentSelectors:c,decls:3,vars:1,consts:[[3,"nzTitle"],[1,"card-content"]],template:function(p,l){1&p&&(i.F$t(),i.TgZ(0,"nz-card",0),i.TgZ(1,"div",1),i.Hsn(2),i.qZA(),i.qZA()),2&p&&i.Q6J("nzTitle",l.cvcTitle)},directives:[r.bd],styles:["[_nghost-%COMP%]{display:block}.card-content[_ngcontent-%COMP%]{margin:-11px -12px -13px}"]}),e})()},316:(y,h,s)=>{s.d(h,{C:()=>f});var i=s(9808),r=s(7484),c=s(5e3);let f=(()=>{class e{}return e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.ez,r.vh]]}),e})()},233:(y,h,s)=>{s.r(h),s.d(h,{DiseasesModule:()=>ce});var i=s(9808),r=s(325),c=s(373),f=s(1059),e=s(5e3),g=s(712),p=s(8992),l=s(1945),C=s(647),Z=s(6550),T=s(3098),z=s(6949);function x(t,o){if(1&t&&(e.TgZ(0,"nz-page-header-extra"),e.TgZ(1,"cvc-link-tag",7),e._uU(2),e.qZA(),e.qZA()),2&t){const n=e.oxw().ngIf;e.xp6(1),e.Q6J("href",n.diseaseUrl),e.xp6(1),e.hij(" ","DOID:"+n.doid," ")}}function I(t,o){if(1&t&&(e.TgZ(0,"nz-descriptions-item",8),e._uU(1),e.qZA()),2&t){const n=e.oxw().ngIf;e.xp6(1),e.hij(" ",n.diseaseAliases.join(", ")," ")}}function O(t,o){if(1&t&&(e.ynx(0),e._UZ(1,"cvc-section-navigation",1),e.TgZ(2,"nz-page-header",2),e.TgZ(3,"nz-page-header-title"),e._UZ(4,"i",3),e._uU(5),e.qZA(),e.YNc(6,x,3,2,"nz-page-header-extra",0),e.TgZ(7,"nz-page-header-content"),e.TgZ(8,"div",4),e.TgZ(9,"nz-descriptions",5),e.YNc(10,I,2,1,"nz-descriptions-item",6),e.qZA(),e._UZ(11,"router-outlet"),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&t){const n=o.ngIf;e.xp6(1),e.Q6J("displayName",n.name),e.xp6(4),e.hij(" ",n.name," "),e.xp6(1),e.Q6J("ngIf",n.doid),e.xp6(3),e.Q6J("nzColumn",1),e.xp6(1),e.Q6J("ngIf",n.diseaseAliases.length>0)}}let S=(()=>{class t{constructor(n,a){this.route=n,this.gql=a,this.routeSub=this.route.params.subscribe(m=>{this.diseaseId=+m.diseaseId,this.queryRef=this.gql.watch({diseaseId:this.diseaseId});let d=this.queryRef.valueChanges;this.loading$=d.pipe((0,c.j)("loading"),(0,f.O)(!0)),this.disease$=d.pipe((0,c.j)("data","disease"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.gz),e.Y36(g.wg3))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-diseases-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nz-icon","","nzType","civic:disease"],[1,"content"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["tooltip","View on disease-ontology.org",3,"href"],["nzTitle","Aliases","nzSpan","2"]],template:function(n,a){1&n&&(e.YNc(0,O,12,5,"ng-container",0),e.ALo(1,"ngrxPush")),2&n&&e.Q6J("ngIf",e.lcZ(1,1,a.disease$))},directives:[i.O5,p.I,l.$O,l.u9,C.Ls,l.Jp,Z.l,l.u5,T.R7,T.uj,r.lC],pipes:[z.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var _=s(1894),P=s(3154),U=s(8929),D=s(4850),J=s(13),u=s(592),b=s(404),Q=s(2166),N=s(4022);function E(t,o){if(1&t&&(e.TgZ(0,"cvc-link-tag",18),e._uU(1),e.qZA()),2&t){const n=e.oxw().$implicit;e.Q6J("href",n.diseaseUrl),e.xp6(1),e.hij(" ","DOID:"+n.doid," ")}}function F(t,o){1&t&&e._uU(0," -- ")}function q(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=o.$implicit,a=o.last;e.xp6(1),e.AsE(" ",n,"",a?"":", "," ")}}function j(t,o){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._UZ(2,"cvc-disease-tag",14),e.qZA(),e.TgZ(3,"td"),e.YNc(4,E,2,2,"cvc-link-tag",15),e.YNc(5,F,1,0,"ng-template",null,16,e.W1O),e.qZA(),e.TgZ(7,"td"),e.TgZ(8,"p",17),e.YNc(9,q,2,2,"span",13),e.qZA(),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.qZA()),2&t){const n=o.$implicit,a=e.MAs(6);e.xp6(2),e.Q6J("disease",n),e.xp6(2),e.Q6J("ngIf",n.doid)("ngIfElse",a),e.xp6(5),e.Q6J("ngForOf",n.geneNames),e.xp6(2),e.hij(" ",n.geneCount," "),e.xp6(2),e.hij(" ",n.variantCount," "),e.xp6(2),e.hij(" ",n.evidenceItemCount," "),e.xp6(2),e.hij(" ",n.assertionCount," ")}}let $=(()=>{class t{constructor(n){this.gql=n,this.debouncedQuery=new U.xQ,this.pageSize=25,this.sortColumns=g.R8w}ngOnInit(){this.queryRef=this.gql.watch({first:this.pageSize}),this.data$=this.queryRef.valueChanges.pipe((0,D.U)(n=>({data:n.data,loading:n.loading,networkStatus:n.networkStatus}))),this.isLoading$=this.data$.pipe((0,c.j)("loading"),(0,f.O)(!0)),this.diseases$=this.data$.pipe((0,c.j)("data","browseDiseases","edges"),(0,D.U)(n=>n.map(a=>a.node))),this.pageInfo$=this.data$.pipe((0,c.j)("data","browseDiseases","pageInfo")),this.debouncedQuery.pipe((0,J.b)(500)).subscribe(n=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}refresh(){var n;null===(n=this.queryRef)||void 0===n||n.refetch({name:this.nameInput,geneNames:this.geneNameInput,doid:this.doidInput})}onSortChanged(n){var a;null===(a=this.queryRef)||void 0===a||a.refetch({sortBy:(0,P._)(n)})}onModelChanged(){this.debouncedQuery.next()}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(n){var a;null===(a=this.queryRef)||void 0===a||a.fetchMore({variables:{first:this.pageSize,after:n}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(g.Tq1))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-diseases-table"]],decls:33,vars:27,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["diseasesTable",""],[3,"nzSortOrderChange"],["nzWidth","20%",3,"nzColumnKey","nzSortFn"],["nzWidth","30%"],["nzWidth","8%",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:gene","nz-tooltip","","nzTooltipTitle","Gene Count"],["nz-icon","","nzType","civic:variant","nz-tooltip","","nzTooltipTitle","Variant Count"],["nz-icon","","nzType","civic:evidence","nz-tooltip","","nzTooltipTitle","Evidence Count"],["nz-icon","","nzType","civic:assertion","nz-tooltip","","nzTooltipTitle","Assertion Count"],["placeholderText","Name",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","DOID",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Gene Name",3,"inputModel","onInputChanged","inputModelChange"],[4,"ngFor","ngForOf"],[3,"disease"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["noDoid",""],["nz-typography",""],["tooltip","View on disease-ontology.org",3,"href"]],template:function(n,a){if(1&n&&(e.TgZ(0,"nz-table",0,1),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.TgZ(4,"thead",2),e.NdJ("nzSortOrderChange",function(d){return a.onSortChanged(d)}),e.TgZ(5,"tr"),e.TgZ(6,"th",3),e._uU(7," Name "),e.qZA(),e.TgZ(8,"th",3),e._uU(9," DOID "),e.qZA(),e.TgZ(10,"th",4),e._uU(11," Genes "),e.qZA(),e.TgZ(12,"th",5),e._UZ(13,"i",6),e.qZA(),e.TgZ(14,"th",5),e._UZ(15,"i",7),e.qZA(),e.TgZ(16,"th",5),e._UZ(17,"i",8),e.qZA(),e.TgZ(18,"th",5),e._UZ(19,"i",9),e.qZA(),e.qZA(),e.TgZ(20,"tr"),e.TgZ(21,"th"),e.TgZ(22,"cvc-clearable-input-filter",10),e.NdJ("inputModelChange",function(d){return a.nameInput=d}),e.qZA(),e.qZA(),e.TgZ(23,"th"),e.TgZ(24,"cvc-clearable-input-filter",11),e.NdJ("inputModelChange",function(d){return a.doidInput=d}),e.qZA(),e.qZA(),e.TgZ(25,"th"),e.TgZ(26,"cvc-clearable-input-filter",12),e.NdJ("inputModelChange",function(d){return a.geneNameInput=d}),e.qZA(),e.qZA(),e._UZ(27,"th"),e._UZ(28,"th"),e._UZ(29,"th"),e._UZ(30,"th"),e.qZA(),e.qZA(),e.TgZ(31,"tbody"),e.YNc(32,j,18,8,"tr",13),e.qZA(),e.qZA()),2&n){const m=e.MAs(1);e.Q6J("nzData",e.lcZ(2,23,a.diseases$))("nzLoading",e.lcZ(3,25,a.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),e.xp6(6),e.Q6J("nzColumnKey",a.sortColumns.Name)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.Doid)("nzSortFn",!0),e.xp6(4),e.Q6J("nzColumnKey",a.sortColumns.GeneCount)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.VariantCount)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.EvidenceItemCount)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",a.sortColumns.AssertionCount)("nzSortFn",!0),e.xp6(4),e.Q6J("inputModel",a.nameInput)("onInputChanged",a.textInputCallback),e.xp6(2),e.Q6J("inputModel",a.doidInput)("onInputChanged",a.textInputCallback),e.xp6(2),e.Q6J("inputModel",a.geneNameInput)("onInputChanged",a.textInputCallback),e.xp6(6),e.Q6J("ngForOf",m.data)}},directives:[u.N8,u.Om,u.$Z,u.Uo,u._C,u.qD,C.Ls,b.SY,Q.p,u.p0,i.sg,N.n,i.O5,Z.l],pipes:[z.fM],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),B=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["diseases-home"]],decls:10,vars:1,consts:[[1,"site-page-header"],["nz-icon","","nzType","civic:disease"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"]],template:function(n,a){1&n&&(e._UZ(0,"cvc-section-navigation"),e.TgZ(1,"nz-page-header",0),e.TgZ(2,"nz-page-header-title"),e._UZ(3,"i",1),e._uU(4," Diseases "),e.qZA(),e.TgZ(5,"nz-page-header-content"),e.TgZ(6,"div",2),e.TgZ(7,"div",3),e.TgZ(8,"div",4),e._UZ(9,"cvc-diseases-table"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(7),e.Q6J("nzSpan",24))},directives:[p.I,l.$O,l.u9,C.Ls,l.u5,_.SK,_.t3,$],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var v=s(8144),Y=s(4805),L=s(3756),R=s(8965);function K(t,o){1&t&&(e._UZ(0,"i",6),e._uU(1," Disease Assertions "))}function W(t,o){if(1&t&&(e.TgZ(0,"span"),e.TgZ(1,"cvc-entity-table-card",3),e._UZ(2,"cvc-assertions-table",4),e.qZA(),e.YNc(3,K,2,0,"ng-template",null,5,e.W1O),e.qZA()),2&t){const n=e.MAs(4),a=e.oxw(2);e.xp6(1),e.Q6J("cvcTitle",n),e.xp6(1),e.Q6J("diseaseId",a.diseaseId)}}function H(t,o){1&t&&(e._UZ(0,"i",6),e._uU(1," Disease Evidence "))}function w(t,o){if(1&t&&(e.TgZ(0,"span"),e.TgZ(1,"cvc-entity-table-card",3),e._UZ(2,"cvc-evidence-table",4),e.qZA(),e.YNc(3,H,2,0,"ng-template",null,7,e.W1O),e.qZA()),2&t){const n=e.MAs(4),a=e.oxw(2);e.xp6(1),e.Q6J("cvcTitle",n),e.xp6(1),e.Q6J("diseaseId",a.diseaseId)}}function V(t,o){1&t&&(e.TgZ(0,"nz-space",1),e.YNc(1,W,5,2,"span",2),e.YNc(2,w,5,2,"span",2),e.qZA())}const X=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-diseases"]],decls:1,vars:0,template:function(n,a){1&n&&e._UZ(0,"router-outlet")},directives:[r.lC],styles:[""]}),t})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:B,data:{breadcrumb:"Home"}},{path:":diseaseId",component:S,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class t{constructor(n){this.route=n,this.routeSub=this.route.params.subscribe(a=>{this.diseaseId=+a.diseaseId})}ngOnDestroy(){this.routeSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-diseases-summary"]],decls:1,vars:1,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[4,"nzSpaceItem"],[3,"cvcTitle"],[3,"diseaseId"],["assertionsCardTitle",""],["nz-icon","","nzType","civic:disease"],["evidenceCardTitle",""]],template:function(n,a){1&n&&e.YNc(0,V,3,0,"nz-space",0),2&n&&e.Q6J("ngIf",a.diseaseId)},directives:[i.O5,v.NU,v.$1,Y._,L.x,R.a],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),data:{breadcrumb:"Summary"}}]}]}];let G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.Bz.forChild(X)],r.Bz]}),t})();var M=s(5630),A=s(3630),k=s(3618);let ee=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,r.Bz,z.WG,C.PV,k.ZJ,l.KJ,T.q6,v.zf,A.X,M.D]]}),t})();var te=s(316),ne=s(767),ae=s(9441);let se=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,v.zf,te.C,ne.Q,ae.s]]}),t})();var oe=s(4125),ie=s(3580);let re=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,z.WG,C.PV,b.cg,u.HQ,oe.k,A.X,ie.Q]]}),t})(),le=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,C.PV,l.KJ,_.Jb,M.D,re]]}),t})(),ce=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[i.ez,r.Bz,G,le,ee,se]]}),t})()}}]);