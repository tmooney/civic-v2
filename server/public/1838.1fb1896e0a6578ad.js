"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[1838],{1838:(tn,f,i)=>{i.r(f),i.d(f,{ClinicalTrialsModule:()=>nn});var p=i(9808),d=i(325),g=i(373),z=i(1059),n=i(5e3),m=i(712),v=i(8992),r=i(1945),h=i(647),Z=i(6550),u=i(6949);function b(t,e){if(1&t&&(n.ynx(0),n._UZ(1,"cvc-section-navigation",1),n.TgZ(2,"nz-page-header",2),n.TgZ(3,"nz-page-header-title"),n._UZ(4,"i",3),n._uU(5),n.qZA(),n.TgZ(6,"nz-page-header-extra"),n.TgZ(7,"cvc-link-tag",4),n._uU(8),n.qZA(),n.qZA(),n.TgZ(9,"nz-page-header-content"),n.TgZ(10,"div",5),n._uU(11),n._UZ(12,"router-outlet"),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&t){const a=e.ngIf;n.xp6(1),n.Q6J("displayName",a.nctId),n.xp6(4),n.hij(" ",a.name," "),n.xp6(2),n.Q6J("href",a.url),n.xp6(1),n.hij(" ",a.nctId," "),n.xp6(3),n.hij(" ",a.description," ")}}let M=(()=>{class t{constructor(a,l){this.route=a,this.gql=l,this.routeSub=this.route.params.subscribe(s=>{this.clinicalTrialId=+s.clinicalTrialId,this.queryRef=this.gql.watch({clinicalTrialId:this.clinicalTrialId});let o=this.queryRef.valueChanges;this.loading$=o.pipe((0,g.j)("loading"),(0,z.O)(!0)),this.clinicalTrial$=o.pipe((0,g.j)("data","clinicalTrial"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}return t.\u0275fac=function(a){return new(a||t)(n.Y36(d.gz),n.Y36(m.cMj))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-clinical-trials-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nz-icon","","nzType","audit"],["tooltip","View on clinicaltrials.gov",3,"href"],[1,"content"]],template:function(a,l){1&a&&(n.YNc(0,b,13,5,"ng-container",0),n.ALo(1,"ngrxPush")),2&a&&n.Q6J("ngIf",n.lcZ(1,1,l.clinicalTrial$))},directives:[p.O5,v.I,r.$O,r.u9,h.Ls,r.Jp,Z.l,r.u5,d.lC],pipes:[u.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var C=i(1894),x=i(3154),S=i(8929),A=i(4850),O=i(13),c=i(592),I=i(2166),P=i(4049);function _(t,e){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._UZ(2,"cvc-clinical-trial-tag",11),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.qZA()),2&t){const a=e.$implicit;n.xp6(2),n.Q6J("clinicalTrial",a),n.xp6(2),n.hij(" ",a.name," "),n.xp6(2),n.hij(" ",a.sourceCount," "),n.xp6(2),n.hij(" ",a.evidenceCount," ")}}let J=(()=>{class t{constructor(a){this.gql=a,this.initialPageSize=25,this.debouncedQuery=new S.xQ,this.sortColumns=m.E8d,this.queryRef=this.gql.watch({first:this.initialPageSize});let l=this.queryRef.valueChanges;this.clinicalTrials$=l.pipe((0,g.j)("data","clinicalTrials","edges"),(0,A.U)(s=>s.map(o=>o.node))),this.isLoading$=l.pipe((0,g.j)("loading"),(0,z.O)(!0)),this.totalCount$=l.pipe((0,g.j)("data","clinicalTrials","totalCount")),this.pageInfo$=l.pipe((0,g.j)("data","clinicalTrials","pageInfo")),this.debouncedQuery.pipe((0,O.b)(500)).subscribe(s=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}onModelChanged(){this.debouncedQuery.next()}onSortChanged(a){this.queryRef.refetch({sortBy:(0,x._)(a)})}refresh(){this.queryRef.refetch({name:this.nameFilter,nctId:this.nctIdFilter})}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(a){this.queryRef.fetchMore({variables:{after:a}})}}return t.\u0275fac=function(a){return new(a||t)(n.Y36(m.P_b))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-clinical-trials-table"]],decls:23,vars:21,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["clinicalTrialsTable",""],[3,"nzSortOrderChange"],["nzWidth","15%",3,"nzColumnKey","nzSortFn"],["nzWidth","65%",3,"nzColumnKey","nzSortFn"],["nzWidth","10%","nzRight","",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:source","nz-tooltip","","nzTooltipTitle","Source count"],["nz-icon","","nzType","civic:evidence","nz-tooltip","","nzTooltipTitle","Evidence count"],["placeholderText","Search Name",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search NCT ID",3,"inputModel","onInputChanged","inputModelChange"],[4,"ngFor","ngForOf"],[3,"clinicalTrial"]],template:function(a,l){if(1&a&&(n.TgZ(0,"nz-table",0,1),n.ALo(2,"ngrxPush"),n.ALo(3,"ngrxPush"),n.TgZ(4,"thead",2),n.NdJ("nzSortOrderChange",function(o){return l.onSortChanged(o)}),n.TgZ(5,"tr"),n.TgZ(6,"th",3),n._uU(7," NCT ID "),n.qZA(),n.TgZ(8,"th",4),n._uU(9," Name "),n.qZA(),n.TgZ(10,"th",5),n._UZ(11,"i",6),n.qZA(),n.TgZ(12,"th",5),n._UZ(13,"i",7),n.qZA(),n.qZA(),n.TgZ(14,"tr"),n.TgZ(15,"th"),n.TgZ(16,"cvc-clearable-input-filter",8),n.NdJ("inputModelChange",function(o){return l.nameFilter=o}),n.qZA(),n.qZA(),n.TgZ(17,"th"),n.TgZ(18,"cvc-clearable-input-filter",9),n.NdJ("inputModelChange",function(o){return l.nctIdFilter=o}),n.qZA(),n.qZA(),n._UZ(19,"th"),n._UZ(20,"th"),n.qZA(),n.qZA(),n.TgZ(21,"tbody"),n.YNc(22,_,9,4,"tr",10),n.qZA(),n.qZA()),2&a){const s=n.MAs(1);n.Q6J("nzData",n.lcZ(2,17,l.clinicalTrials$))("nzLoading",n.lcZ(3,19,l.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(6),n.Q6J("nzColumnKey",l.sortColumns.NctId)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",l.sortColumns.Name)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",l.sortColumns.SourceCount)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",l.sortColumns.EvidenceItemCount)("nzSortFn",!0),n.xp6(4),n.Q6J("inputModel",l.nameFilter)("onInputChanged",l.textInputCallback),n.xp6(2),n.Q6J("inputModel",l.nctIdFilter)("onInputChanged",l.textInputCallback),n.xp6(4),n.Q6J("ngForOf",s.data)}},directives:[c.N8,c.Om,c.$Z,c.Uo,c._C,c.qD,c.qn,I.p,c.p0,p.sg,P.G],pipes:[u.fM],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),U=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["clinical-trials-home"]],decls:10,vars:1,consts:[[1,"site-page-header"],["nz-icon","","nzType","audit"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"]],template:function(a,l){1&a&&(n._UZ(0,"cvc-section-navigation"),n.TgZ(1,"nz-page-header",0),n.TgZ(2,"nz-page-header-title"),n._UZ(3,"i",1),n._uU(4," Clinical Trials "),n.qZA(),n.TgZ(5,"nz-page-header-content"),n.TgZ(6,"div",2),n.TgZ(7,"div",3),n.TgZ(8,"div",4),n._UZ(9,"cvc-clinical-trials-table"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&a&&(n.xp6(7),n.Q6J("nzSpan",24))},directives:[v.I,r.$O,r.u9,h.Ls,r.u5,C.SK,C.t3,J],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var T=i(8144),F=i(4805),Q=i(3575),N=i(8965);function D(t,e){1&t&&(n._UZ(0,"i",6),n._uU(1," Clinical Trial Sources "))}function j(t,e){if(1&t&&(n.TgZ(0,"span"),n.TgZ(1,"cvc-entity-table-card",3),n._UZ(2,"cvc-sources-table",4),n.qZA(),n.YNc(3,D,2,0,"ng-template",null,5,n.W1O),n.qZA()),2&t){const a=n.MAs(4),l=n.oxw(2);n.xp6(1),n.Q6J("cvcTitle",a),n.xp6(1),n.Q6J("clinicalTrialId",l.clinicalTrialId)}}function q(t,e){1&t&&(n._UZ(0,"i",8),n._uU(1," Clinical Trial Evidence "))}function $(t,e){if(1&t&&(n.TgZ(0,"span"),n.TgZ(1,"cvc-entity-table-card",3),n._UZ(2,"cvc-evidence-table",4),n.qZA(),n.YNc(3,q,2,0,"ng-template",null,7,n.W1O),n.qZA()),2&t){const a=n.MAs(4),l=n.oxw(2);n.xp6(1),n.Q6J("cvcTitle",a),n.xp6(1),n.Q6J("clinicalTrialId",l.clinicalTrialId)}}function Y(t,e){1&t&&(n.TgZ(0,"nz-space",1),n.YNc(1,j,5,2,"span",2),n.YNc(2,$,5,2,"span",2),n.qZA())}const B=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-clinical-trials"]],decls:1,vars:0,template:function(a,l){1&a&&n._UZ(0,"router-outlet")},directives:[d.lC],styles:[""]}),t})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:U,data:{breadcrumb:"Home"}},{path:":clinicalTrialId",component:M,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class t{constructor(a){this.route=a,this.routeSub=this.route.params.subscribe(l=>{this.clinicalTrialId=+l.clinicalTrialId})}ngOnDestroy(){this.routeSub.unsubscribe()}}return t.\u0275fac=function(a){return new(a||t)(n.Y36(d.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-clinical-trials-summary"]],decls:1,vars:1,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[4,"nzSpaceItem"],[3,"cvcTitle"],[3,"clinicalTrialId"],["sourcesCardTitle",""],["nz-icon","","nzType","audit"],["evidenceCardTitle",""],["nz-icon","","nzType","civic:evidence"]],template:function(a,l){1&a&&n.YNc(0,Y,3,0,"nz-space",0),2&a&&n.Q6J("ngIf",l.clinicalTrialId)},directives:[p.O5,T.NU,T.$1,F._,Q.d,N.a],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),data:{breadcrumb:"Summary"}}]}]}];let R=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.Bz.forChild(B)],d.Bz]}),t})();var K=i(4125),L=i(5453);let H=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[p.ez,u.WG,c.HQ,K.k,L.N]]}),t})();var y=i(5630);let W=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[p.ez,u.WG,C.Jb,r.KJ,h.PV,H,y.D]]}),t})();var X=i(3630);let E=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[p.ez,d.Bz,u.WG,r.KJ,h.PV,X.X,y.D]]}),t})();var G=i(316),V=i(767),w=i(7279);let k=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[p.ez,T.zf,G.C,V.Q,w.h]]}),t})(),nn=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[p.ez,R,W,E,k]]}),t})()}}]);