"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[1398],{1398:(Oe,Z,a)=>{a.r(Z),a.d(Z,{DiseasesModule:()=>Ie});var l=a(9808),c=a(325),h=a(373),T=a(1059),e=a(5e3),z=a(712),r=a(1945),u=a(8144),g=a(647),y=a(2683),D=a(6550),v=a(3098),m=a(6949);function M(t,o){1&t&&e._UZ(0,"i",7)}function I(t,o){if(1&t&&(e.TgZ(0,"nz-page-header-extra"),e.TgZ(1,"cvc-link-tag",8),e._uU(2),e.qZA(),e.qZA()),2&t){const n=e.oxw().ngIf;e.xp6(1),e.Q6J("href",n.diseaseUrl),e.xp6(1),e.hij(" ","DOID:"+n.doid," ")}}function O(t,o){if(1&t&&(e.TgZ(0,"nz-descriptions-item",9),e._uU(1),e.qZA()),2&t){const n=e.oxw().ngIf;e.xp6(1),e.hij(" ",n.diseaseAliases.join(", ")," ")}}function S(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"nz-page-header",1),e.TgZ(2,"nz-page-header-title"),e.TgZ(3,"nz-space",2),e.YNc(4,M,1,0,"i",3),e._uU(5),e.qZA(),e.qZA(),e.YNc(6,I,3,2,"nz-page-header-extra",0),e.TgZ(7,"nz-page-header-content"),e.TgZ(8,"div",4),e.TgZ(9,"nz-descriptions",5),e.YNc(10,O,2,1,"nz-descriptions-item",6),e.qZA(),e._UZ(11,"router-outlet"),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&t){const n=o.ngIf;e.xp6(5),e.hij(" ",n.name," "),e.xp6(1),e.Q6J("ngIf",n.doid),e.xp6(3),e.Q6J("nzColumn",1),e.xp6(1),e.Q6J("ngIf",n.diseaseAliases.length>0)}}let _=(()=>{class t{constructor(n,s){this.route=n,this.gql=s,this.routeSub=this.route.params.subscribe(p=>{this.diseaseId=+p.diseaseId,this.queryRef=this.gql.watch({diseaseId:this.diseaseId});let i=this.queryRef.valueChanges;this.loading$=i.pipe((0,h.j)("loading"),(0,T.O)(!0)),this.disease$=i.pipe((0,h.j)("data","disease"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.gz),e.Y36(z.wg3))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-diseases-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"site-page-header"],["nzDirection","horizontal"],["nz-icon","","nzType","civic:disease",4,"nzSpaceItem"],[1,"content"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nz-icon","","nzType","civic:disease"],["tooltip","View on disease-ontology.org",3,"href"],["nzTitle","Aliases","nzSpan","2"]],template:function(n,s){1&n&&(e.YNc(0,S,12,4,"ng-container",0),e.ALo(1,"ngrxPush")),2&n&&e.Q6J("ngIf",e.lcZ(1,1,s.disease$))},directives:[l.O5,r.$O,r.u9,u.NU,u.$1,g.Ls,y.w,r.Jp,D.l,r.u5,v.R7,v.uj,c.lC],pipes:[m.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var f=a(1894),P=a(3154),U=a(8929),x=a(4850),J=a(13),d=a(592),C=a(404),Q=a(2166),N=a(4022);function F(t,o){if(1&t&&(e.TgZ(0,"cvc-link-tag",18),e._uU(1),e.qZA()),2&t){const n=e.oxw().$implicit;e.Q6J("href",n.diseaseUrl),e.xp6(1),e.hij(" ","DOID:"+n.doid," ")}}function $(t,o){1&t&&e._uU(0," -- ")}function j(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=o.$implicit,s=o.last;e.xp6(1),e.AsE(" ",n,"",s?"":", "," ")}}function Y(t,o){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._UZ(2,"cvc-disease-tag",14),e.qZA(),e.TgZ(3,"td"),e.YNc(4,F,2,2,"cvc-link-tag",15),e.YNc(5,$,1,0,"ng-template",null,16,e.W1O),e.qZA(),e.TgZ(7,"td"),e.TgZ(8,"p",17),e.YNc(9,j,2,2,"span",13),e.qZA(),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.qZA()),2&t){const n=o.$implicit,s=e.MAs(6);e.xp6(2),e.Q6J("disease",n),e.xp6(2),e.Q6J("ngIf",n.doid)("ngIfElse",s),e.xp6(5),e.Q6J("ngForOf",n.geneNames),e.xp6(2),e.hij(" ",n.geneCount," "),e.xp6(2),e.hij(" ",n.variantCount," "),e.xp6(2),e.hij(" ",n.evidenceItemCount," "),e.xp6(2),e.hij(" ",n.assertionCount," ")}}let L=(()=>{class t{constructor(n){this.gql=n,this.debouncedQuery=new U.xQ,this.pageSize=25,this.sortColumns=z.R8w}ngOnInit(){this.queryRef=this.gql.watch({first:this.pageSize}),this.data$=this.queryRef.valueChanges.pipe((0,x.U)(n=>({data:n.data,loading:n.loading,networkStatus:n.networkStatus}))),this.isLoading$=this.data$.pipe((0,h.j)("loading"),(0,T.O)(!0)),this.diseases$=this.data$.pipe((0,h.j)("data","browseDiseases","edges"),(0,x.U)(n=>n.map(s=>s.node))),this.pageInfo$=this.data$.pipe((0,h.j)("data","browseDiseases","pageInfo")),this.debouncedQuery.pipe((0,J.b)(500)).subscribe(n=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}refresh(){var n;null===(n=this.queryRef)||void 0===n||n.refetch({name:this.nameInput,geneNames:this.geneNameInput,doid:this.doidInput})}onSortChanged(n){var s;null===(s=this.queryRef)||void 0===s||s.refetch({sortBy:(0,P._)(n)})}onModelChanged(){this.debouncedQuery.next()}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(n){var s;null===(s=this.queryRef)||void 0===s||s.fetchMore({variables:{first:this.pageSize,after:n}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(z.Tq1))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-diseases-table"]],decls:33,vars:27,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["diseasesTable",""],[3,"nzSortOrderChange"],["nzWidth","20%",3,"nzColumnKey","nzSortFn"],["nzWidth","30%"],["nzWidth","8%",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:gene","nz-tooltip","","nzTooltipTitle","Gene Count"],["nz-icon","","nzType","civic:variant","nz-tooltip","","nzTooltipTitle","Variant Count"],["nz-icon","","nzType","civic:evidence","nz-tooltip","","nzTooltipTitle","Evidence Count"],["nz-icon","","nzType","civic:assertion","nz-tooltip","","nzTooltipTitle","Assertion Count"],["placeholderText","Name",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","DOID",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Gene Name",3,"inputModel","onInputChanged","inputModelChange"],[4,"ngFor","ngForOf"],[3,"disease"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["noDoid",""],["nz-typography",""],["tooltip","View on disease-ontology.org",3,"href"]],template:function(n,s){if(1&n&&(e.TgZ(0,"nz-table",0,1),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.TgZ(4,"thead",2),e.NdJ("nzSortOrderChange",function(i){return s.onSortChanged(i)}),e.TgZ(5,"tr"),e.TgZ(6,"th",3),e._uU(7," Name "),e.qZA(),e.TgZ(8,"th",3),e._uU(9," DOID "),e.qZA(),e.TgZ(10,"th",4),e._uU(11," Genes "),e.qZA(),e.TgZ(12,"th",5),e._UZ(13,"i",6),e.qZA(),e.TgZ(14,"th",5),e._UZ(15,"i",7),e.qZA(),e.TgZ(16,"th",5),e._UZ(17,"i",8),e.qZA(),e.TgZ(18,"th",5),e._UZ(19,"i",9),e.qZA(),e.qZA(),e.TgZ(20,"tr"),e.TgZ(21,"th"),e.TgZ(22,"cvc-clearable-input-filter",10),e.NdJ("inputModelChange",function(i){return s.nameInput=i}),e.qZA(),e.qZA(),e.TgZ(23,"th"),e.TgZ(24,"cvc-clearable-input-filter",11),e.NdJ("inputModelChange",function(i){return s.doidInput=i}),e.qZA(),e.qZA(),e.TgZ(25,"th"),e.TgZ(26,"cvc-clearable-input-filter",12),e.NdJ("inputModelChange",function(i){return s.geneNameInput=i}),e.qZA(),e.qZA(),e._UZ(27,"th"),e._UZ(28,"th"),e._UZ(29,"th"),e._UZ(30,"th"),e.qZA(),e.qZA(),e.TgZ(31,"tbody"),e.YNc(32,Y,18,8,"tr",13),e.qZA(),e.qZA()),2&n){const p=e.MAs(1);e.Q6J("nzData",e.lcZ(2,23,s.diseases$))("nzLoading",e.lcZ(3,25,s.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),e.xp6(6),e.Q6J("nzColumnKey",s.sortColumns.Name)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",s.sortColumns.Doid)("nzSortFn",!0),e.xp6(4),e.Q6J("nzColumnKey",s.sortColumns.GeneCount)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",s.sortColumns.VariantCount)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",s.sortColumns.EvidenceItemCount)("nzSortFn",!0),e.xp6(2),e.Q6J("nzColumnKey",s.sortColumns.AssertionCount)("nzSortFn",!0),e.xp6(4),e.Q6J("inputModel",s.nameInput)("onInputChanged",s.textInputCallback),e.xp6(2),e.Q6J("inputModel",s.doidInput)("onInputChanged",s.textInputCallback),e.xp6(2),e.Q6J("inputModel",s.geneNameInput)("onInputChanged",s.textInputCallback),e.xp6(6),e.Q6J("ngForOf",p.data)}},directives:[d.N8,d.Om,d.$Z,d.Uo,d._C,d.qD,g.Ls,C.SY,Q.p,d.p0,l.sg,N.n,l.O5,D.l],pipes:[m.fM],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),R=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["diseases-home"]],decls:9,vars:1,consts:[[1,"site-page-header"],["nz-icon","","nzType","civic:disease"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"]],template:function(n,s){1&n&&(e.TgZ(0,"nz-page-header",0),e.TgZ(1,"nz-page-header-title"),e._UZ(2,"i",1),e._uU(3," Diseases "),e.qZA(),e.TgZ(4,"nz-page-header-content"),e.TgZ(5,"div",2),e.TgZ(6,"div",3),e.TgZ(7,"div",4),e._UZ(8,"cvc-diseases-table"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(6),e.Q6J("nzSpan",24))},directives:[r.$O,r.u9,g.Ls,r.u5,f.SK,f.t3,L],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var K=a(4805),H=a(3756),B=a(8965);function W(t,o){1&t&&(e._UZ(0,"i",6),e._uU(1," Disease Assertions "))}function q(t,o){if(1&t&&(e.TgZ(0,"span"),e.TgZ(1,"cvc-entity-table-card",3),e._UZ(2,"cvc-assertions-table",4),e.qZA(),e.YNc(3,W,2,0,"ng-template",null,5,e.W1O),e.qZA()),2&t){const n=e.MAs(4),s=e.oxw(2);e.xp6(1),e.Q6J("cvcTitle",n),e.xp6(1),e.Q6J("diseaseId",s.diseaseId)}}function E(t,o){1&t&&(e._UZ(0,"i",6),e._uU(1," Disease Evidence "))}function V(t,o){if(1&t&&(e.TgZ(0,"span"),e.TgZ(1,"cvc-entity-table-card",3),e._UZ(2,"cvc-evidence-table",4),e.qZA(),e.YNc(3,E,2,0,"ng-template",null,7,e.W1O),e.qZA()),2&t){const n=e.MAs(4),s=e.oxw(2);e.xp6(1),e.Q6J("cvcTitle",n),e.xp6(1),e.Q6J("diseaseId",s.diseaseId)}}function X(t,o){1&t&&(e.TgZ(0,"nz-space",1),e.YNc(1,q,5,2,"span",2),e.YNc(2,V,5,2,"span",2),e.qZA())}const G=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-diseases"]],decls:1,vars:0,template:function(n,s){1&n&&e._UZ(0,"router-outlet")},directives:[c.lC],styles:[""]}),t})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:R,data:{breadcrumb:"Home"}},{path:":diseaseId",component:_,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class t{constructor(n){this.route=n,this.routeSub=this.route.params.subscribe(s=>{this.diseaseId=+s.diseaseId})}ngOnDestroy(){this.routeSub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-diseases-summary"]],decls:1,vars:1,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[4,"nzSpaceItem"],[3,"cvcTitle"],[3,"diseaseId"],["assertionsCardTitle",""],["nz-icon","","nzType","civic:disease"],["evidenceCardTitle",""]],template:function(n,s){1&n&&e.YNc(0,X,3,0,"nz-space",0),2&n&&e.Q6J("ngIf",s.diseaseId)},directives:[l.O5,u.NU,u.$1,K._,H.x,g.Ls,y.w,B.a],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),data:{breadcrumb:"Summary"}}]}]}];let w=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(G)],c.Bz]}),t})();var k=a(4182),ee=a(4618),te=a(6699),ne=a(4401),ae=a(6042),se=a(7484),oe=a(1344),ie=a(3677),re=a(4546),de=a(1047),le=a(3762),pe=a(3610),ce=a(8054),ge=a(6559),he=a(7525),ue=a(868),me=a(8481),fe=a(3618),A=a(8625),ze=a(7727),ve=a(4702),Ce=a(4053),Ze=a(4125),b=a(3630),Te=a(3580);let ye=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,m.WG,g.PV,C.cg,d.HQ,Ze.k,b.X,Te.Q]]}),t})(),De=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,g.PV,r.KJ,f.Jb,ye]]}),t})();var xe=a(9441),Ae=a(767),be=a(316),Me=a(7026);let Ie=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[w,De,xe.s,Ae.Q,be.C,b.X,l.ez,ve.d,Ce.x,ee.ve,te.Rt,ne.mS,ae.sL,se.vh,oe.YM,re.U5,v.q6,ie.b1,f.Jb,le.Ph,r.KJ,pe.$6,u.zf,he.j,ge.H0,d.HQ,ue.we,me.X,C.cg,fe.ZJ,m.WG,A.$L.forChild({formatter:{useClass:Me.x,provide:A.KP}}),de.o7,k.u5,ze.EvidenceModule,ce.LV]]}),t})()}}]);