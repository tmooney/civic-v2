"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[8978],{8369:(N,Z,e)=>{e.d(Z,{W:()=>u});var n=e(9808),g=e(325),h=e(8481),P=e(3610),t=e(647),x=e(7484),O=e(3098),m=e(3309),f=e(4867),M=e(6286),C=e(8018),b=e(6949),y=e(9444),T=e(1894),S=e(8144),l=e(3580),z=e(5e3);let _=(()=>{class d{}return d.\u0275fac=function(Q){return new(Q||d)},d.\u0275mod=z.oAB({type:d}),d.\u0275inj=z.cJS({imports:[[n.ez,g.Bz,b.WG,x.vh,O.q6,t.PV,T.Jb,S.zf,h.X,m.U,l.Q,f.Q,M.y,C.e,y.s]]}),d})(),u=(()=>{class d{}return d.\u0275fac=function(Q){return new(Q||d)},d.\u0275mod=z.oAB({type:d}),d.\u0275inj=z.cJS({imports:[[n.ez,g.Bz,h.X,P.$6,t.PV,_,y.s]]}),d})()},8664:(N,Z,e)=>{e.d(Z,{I:()=>K});var n=e(5e3),g=e(9808),h=e(325),P=e(8481),t=e(3610),x=e(4850),O=e(712),m=e(7484),f=e(647),M=e(3193),C=e(3098),b=e(6550),y=e(1894),T=e(8144),S=e(6949);function l(a,c){if(1&a&&(n._UZ(0,"i",13),n._uU(1)),2&a){const r=n.oxw().ngIf;n.xp6(1),n.hij(" ",r.name," ")}}function z(a,c){if(1&a&&n._UZ(0,"cvc-gene-tag",14),2&a){const r=n.oxw().ngIf;n.Q6J("enablePopover",!1)("gene",r.gene)}}function _(a,c){1&a&&(n.TgZ(0,"span"),n._uU(1,",\xa0"),n.qZA())}function u(a,c){if(1&a&&(n.TgZ(0,"span"),n._uU(1),n.YNc(2,_,2,0,"span",1),n.qZA()),2&a){const r=c.$implicit,v=c.last;n.xp6(1),n.hij(" ",r,""),n.xp6(1),n.Q6J("ngIf",!v)}}function d(a,c){if(1&a&&(n.TgZ(0,"nz-descriptions-item",15),n.YNc(1,u,3,2,"span",16),n.qZA()),2&a){const r=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",r.variantAliases)}}function J(a,c){if(1&a&&(n.TgZ(0,"nz-descriptions-item",17),n.TgZ(1,"cvc-link-tag",18),n._uU(2),n.qZA(),n.qZA()),2&a){const r=n.oxw().ngIf;n.xp6(1),n.MGl("href","https://reg.genome.network/allele/",r.alleleRegistryId,".html"),n.xp6(1),n.hij(" ",r.alleleRegistryId," ")}}function Q(a,c){if(1&a&&(n.TgZ(0,"a",19),n.TgZ(1,"nz-tag",20),n._UZ(2,"i",21),n._uU(3),n.qZA(),n.qZA()),2&a){const r=n.oxw().ngIf;n.MGl("routerLink","/variants/",r.id,"/flags"),n.xp6(3),n.hij(" Flags (",r.flags.totalCount,") ")}}function Y(a,c){if(1&a&&(n.TgZ(0,"a",19),n.TgZ(1,"nz-tag",22),n._UZ(2,"i",23),n._uU(3),n.qZA(),n.qZA()),2&a){const r=n.oxw().ngIf;n.MGl("routerLink","/variants/",r.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",r.revisions.totalCount,") ")}}function F(a,c){if(1&a&&(n.TgZ(0,"a",19),n.TgZ(1,"nz-tag",24),n._UZ(2,"i",25),n._uU(3),n.qZA(),n.qZA()),2&a){const r=n.oxw().ngIf;n.MGl("routerLink","/variants/",r.id,"/comments"),n.xp6(3),n.hij(" Comments (",r.comments.totalCount,") ")}}function j(a,c){if(1&a&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,l,2,1,"ng-template",null,3,n.W1O),n.YNc(4,z,1,2,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.YNc(7,d,2,1,"nz-descriptions-item",6),n.YNc(8,J,3,2,"nz-descriptions-item",7),n.TgZ(9,"nz-descriptions-item",8),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"nz-row",9),n.TgZ(12,"nz-col",10),n.TgZ(13,"nz-space",11),n.YNc(14,Q,4,2,"a",12),n.YNc(15,Y,4,2,"a",12),n.YNc(16,F,4,2,"a",12),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&a){const r=c.ngIf,v=n.MAs(3),U=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",v)("nzExtra",U),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",r.variantAliases.length>0),n.xp6(1),n.Q6J("ngIf",r.alleleRegistryId),n.xp6(2),n.hij(" ",r.evidenceItems.totalCount," ")}}let D=(()=>{class a{constructor(r){this.gql=r}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,x.U)(({data:r})=>r.variant))}}return a.\u0275fac=function(r){return new(r||a)(n.Y36(O.ZYZ))},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Evidence Items","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:variant"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(r,v){1&r&&(n.TgZ(0,"div",0),n.YNc(1,j,17,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&r&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,v.variant$)))},directives:[g.O5,m.bd,f.Ls,M.H,C.R7,C.uj,g.sg,b.l,y.SK,y.t3,T.NU,T.$1,h.yS,P.j],pipes:[S.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),a})();function V(a,c){}function L(a,c){if(1&a&&(n.ynx(0),n.TgZ(1,"a",5),n.YNc(2,V,0,0,"ng-template",6),n.qZA(),n.BQk()),2&a){const r=n.oxw(),v=n.MAs(2);n.xp6(1),n.MGl("routerLink","/variants/",r.variant.id,""),n.xp6(1),n.Q6J("ngTemplateOutlet",v)}}function B(a,c){}function $(a,c){if(1&a&&(n.TgZ(0,"nz-tag",9),n.YNc(1,B,0,0,"ng-template",6),n.qZA()),2&a){n.oxw();const r=n.MAs(2);n.oxw();const v=n.MAs(8);n.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",r),n.xp6(1),n.Q6J("ngTemplateOutlet",v)}}function R(a,c){if(1&a&&n._UZ(0,"cvc-variant-popover",11),2&a){const r=n.oxw(3);n.Q6J("variantId",r.variant.id)}}function W(a,c){if(1&a&&n.YNc(0,R,1,1,"cvc-variant-popover",10),2&a){const r=n.oxw(2);n.Q6J("ngIf",r.enablePopover)}}function E(a,c){if(1&a&&(n.YNc(0,$,2,3,"nz-tag",7),n.YNc(1,W,1,1,"ng-template",null,8,n.W1O)),2&a){const r=n.oxw(),v=n.MAs(4);n.Q6J("ngIf",r.enablePopover)("ngIfElse",v)}}function H(a,c){}function X(a,c){if(1&a&&(n.TgZ(0,"nz-tag"),n.YNc(1,H,0,0,"ng-template",6),n.qZA()),2&a){n.oxw();const r=n.MAs(8);n.xp6(1),n.Q6J("ngTemplateOutlet",r)}}function w(a,c){}function q(a,c){if(1&a&&n.YNc(0,w,0,0,"ng-template",6),2&a){n.oxw();const r=n.MAs(2);n.Q6J("ngTemplateOutlet",r)}}function G(a,c){if(1&a&&(n._UZ(0,"i",12),n._uU(1)),2&a){const r=n.oxw();n.xp6(1),n.hij(" ",r.variant.name,"\n")}}let K=(()=>{class a{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent"],[3,"variantId",4,"ngIf"],[3,"variantId"],["nz-icon","","nzType","civic-variant","nzTheme","twotone","nzTwotoneColor","#33B358"]],template:function(r,v){if(1&r&&(n.YNc(0,L,3,2,"ng-container",0),n.YNc(1,E,3,2,"ng-template",null,1,n.W1O),n.YNc(3,X,2,1,"ng-template",null,2,n.W1O),n.YNc(5,q,1,1,"ng-template",null,3,n.W1O),n.YNc(7,G,2,1,"ng-template",null,4,n.W1O)),2&r){const U=n.MAs(6);n.Q6J("ngIf",v.linked)("ngIfElse",U)}},directives:[g.O5,h.yS,g.tP,P.j,t.lU,D,f.Ls],styles:[""]}),a})()},4867:(N,Z,e)=>{e.d(Z,{Q:()=>S});var n=e(9808),g=e(325),h=e(8481),P=e(647),t=e(3610),x=e(6949),O=e(7484),m=e(1894),f=e(3098),M=e(8144),C=e(3309),b=e(3630),y=e(5e3);let T=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=y.oAB({type:l}),l.\u0275inj=y.cJS({imports:[[n.ez,g.Bz,x.WG,O.vh,m.Jb,f.q6,h.X,P.PV,M.zf,C.U,b.X]]}),l})(),S=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=y.oAB({type:l}),l.\u0275inj=y.cJS({imports:[[n.ez,g.Bz,h.X,t.$6,P.PV,T]]}),l})()},7180:(N,Z,e)=>{e.r(Z),e.d(Z,{PhenotypesModule:()=>at});var n=e(9808),g=e(325),h=e(373),P=e(1059),t=e(5e3),x=e(712),O=e(8992),m=e(1945),f=e(647),M=e(6550),C=e(6949);function b(o,s){if(1&o&&(t.ynx(0),t._UZ(1,"cvc-section-navigation",1),t.TgZ(2,"nz-page-header",2),t.TgZ(3,"nz-page-header-title"),t._UZ(4,"i",3),t._uU(5),t.qZA(),t.TgZ(6,"nz-page-header-extra"),t.TgZ(7,"cvc-link-tag",4),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"nz-page-header-content"),t.TgZ(10,"div",5),t._UZ(11,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&o){const i=s.ngIf;t.xp6(1),t.Q6J("displayName",i.name),t.xp6(4),t.hij(" ",i.name," "),t.xp6(2),t.Q6J("href",i.url),t.xp6(1),t.hij(" ",i.hpoId," ")}}let y=(()=>{class o{constructor(i,p){this.route=i,this.gql=p,this.routeSub=this.route.params.subscribe(A=>{this.phenotypeId=+A.phenotypeId,this.queryRef=this.gql.watch({phenotypeId:this.phenotypeId});let I=this.queryRef.valueChanges;this.loading$=I.pipe((0,h.j)("loading"),(0,P.O)(!0)),this.phenotype$=I.pipe((0,h.j)("data","phenotype"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(g.gz),t.Y36(x.WGV))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-phenotypes-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nz-icon","","nzType","civic:phenotype"],["tooltip","View in the HPO",3,"href"],[1,"content"]],template:function(i,p){1&i&&(t.YNc(0,b,12,4,"ng-container",0),t.ALo(1,"ngrxPush")),2&i&&t.Q6J("ngIf",t.lcZ(1,1,p.phenotype$))},directives:[n.O5,O.I,m.$O,m.u9,f.Ls,m.Jp,M.l,m.u5,g.lC],pipes:[C.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),o})();var T=e(1894),S=e(3154),l=e(8929),z=e(4850),_=e(13),u=e(592),d=e(2166),J=e(7956);function Q(o,s){if(1&o&&(t.TgZ(0,"cvc-link-tag",13),t._uU(1),t.qZA()),2&o){const i=t.oxw().$implicit;t.Q6J("href",i.url),t.xp6(1),t.hij(" ",i.hpoId," ")}}function Y(o,s){1&o&&t._uU(0,"--")}function F(o,s){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._UZ(2,"cvc-phenotype-tag",10),t.qZA(),t.TgZ(3,"td"),t.YNc(4,Q,2,2,"cvc-link-tag",11),t.YNc(5,Y,1,0,"ng-template",null,12,t.W1O),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.qZA()),2&o){const i=s.$implicit,p=t.MAs(6);t.xp6(2),t.Q6J("phenotype",i),t.xp6(2),t.Q6J("ngIf",i.hpoId)("ngIfElse",p),t.xp6(4),t.hij(" ",i.evidenceCount," "),t.xp6(2),t.hij(" ",i.assertionCount," ")}}let j=(()=>{class o{constructor(i){this.gql=i,this.initialPageSize=25,this.debouncedQuery=new l.xQ,this.sortColumns=x.lYz}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize});let i=this.queryRef.valueChanges;this.phenotypes$=i.pipe((0,h.j)("data","phenotypes","edges"),(0,z.U)(p=>p.map(A=>A.node))),this.isLoading$=i.pipe((0,h.j)("loading"),(0,P.O)(!0)),this.totalCount$=i.pipe((0,h.j)("data","phenotypes","totalCount")),this.pageInfo$=i.pipe((0,h.j)("data","phenotypes","pageInfo")),this.debouncedQuery.pipe((0,_.b)(500)).subscribe(p=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}onModelChanged(){this.debouncedQuery.next()}onSortChanged(i){var p;null===(p=this.queryRef)||void 0===p||p.refetch({sortBy:(0,S._)(i)})}refresh(){var i;null===(i=this.queryRef)||void 0===i||i.refetch({name:this.hpoNameFilter,hpoId:this.hpoIdFilter})}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(i){var p;null===(p=this.queryRef)||void 0===p||p.fetchMore({variables:{after:i}})}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(x.B97))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-phenotypes-table"]],decls:23,vars:21,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["phenotypesTable",""],[3,"nzSortOrderChange"],["nzWidth","40%",3,"nzColumnKey","nzSortFn"],["nzWidth","10%","nzRight","",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:evidence","nz-tooltip","","nzTooltipTitle","Evidence count"],["nz-icon","","nzType","civic:assertion","nz-tooltip","","nzTooltipTitle","Assertion count"],["placeholderText","Search Name",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search HPO ID",3,"inputModel","onInputChanged","inputModelChange"],[4,"ngFor","ngForOf"],[3,"phenotype"],["tooltip","View in the HPO",3,"href",4,"ngIf","ngIfElse"],["noHpo",""],["tooltip","View in the HPO",3,"href"]],template:function(i,p){if(1&i&&(t.TgZ(0,"nz-table",0,1),t.ALo(2,"ngrxPush"),t.ALo(3,"ngrxPush"),t.TgZ(4,"thead",2),t.NdJ("nzSortOrderChange",function(I){return p.onSortChanged(I)}),t.TgZ(5,"tr"),t.TgZ(6,"th",3),t._uU(7," Name "),t.qZA(),t.TgZ(8,"th",3),t._uU(9," HPO ID "),t.qZA(),t.TgZ(10,"th",4),t._UZ(11,"i",5),t.qZA(),t.TgZ(12,"th",4),t._UZ(13,"i",6),t.qZA(),t.qZA(),t.TgZ(14,"tr"),t.TgZ(15,"th"),t.TgZ(16,"cvc-clearable-input-filter",7),t.NdJ("inputModelChange",function(I){return p.hpoNameFilter=I}),t.qZA(),t.qZA(),t.TgZ(17,"th"),t.TgZ(18,"cvc-clearable-input-filter",8),t.NdJ("inputModelChange",function(I){return p.hpoIdFilter=I}),t.qZA(),t.qZA(),t._UZ(19,"th"),t._UZ(20,"th"),t.qZA(),t.qZA(),t.TgZ(21,"tbody"),t.YNc(22,F,11,5,"tr",9),t.qZA(),t.qZA()),2&i){const A=t.MAs(1);t.Q6J("nzData",t.lcZ(2,17,p.phenotypes$))("nzLoading",t.lcZ(3,19,p.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),t.xp6(6),t.Q6J("nzColumnKey",p.sortColumns.Name)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",p.sortColumns.HpoId)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",p.sortColumns.EvidenceItemCount)("nzSortFn",!0),t.xp6(2),t.Q6J("nzColumnKey",p.sortColumns.AssertionCount)("nzSortFn",!0),t.xp6(4),t.Q6J("inputModel",p.hpoNameFilter)("onInputChanged",p.textInputCallback),t.xp6(2),t.Q6J("inputModel",p.hpoIdFilter)("onInputChanged",p.textInputCallback),t.xp6(4),t.Q6J("ngForOf",A.data)}},directives:[u.N8,u.Om,u.$Z,u.Uo,u._C,u.qD,u.qn,d.p,u.p0,n.sg,J.i,n.O5,M.l],pipes:[C.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),o})(),D=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["phenotypes-home"]],decls:9,vars:1,consts:[[1,"site-page-header"],["nz-icon","","nzType","civic:phenotype"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"]],template:function(i,p){1&i&&(t.TgZ(0,"nz-page-header",0),t.TgZ(1,"nz-page-header-title"),t._UZ(2,"i",1),t._uU(3," Phenotypes "),t.qZA(),t.TgZ(4,"nz-page-header-content"),t.TgZ(5,"div",2),t.TgZ(6,"div",3),t.TgZ(7,"div",4),t._UZ(8,"cvc-phenotypes-table"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(6),t.Q6J("nzSpan",24))},directives:[m.$O,m.u9,f.Ls,m.u5,T.SK,T.t3,j],styles:["[_nghost-%COMP%]{display:block}"]}),o})();var V=e(8144),L=e(4805),B=e(3756),$=e(8965);function R(o,s){if(1&o&&(t.TgZ(0,"cvc-entity-table-card",5),t._UZ(1,"cvc-assertions-table",6),t.qZA()),2&o){t.oxw();const i=t.MAs(3),p=t.oxw();t.Q6J("cvcTitle",i),t.xp6(1),t.Q6J("phenotypeId",p.phenotypeId)}}function W(o,s){1&o&&(t._UZ(0,"i",7),t._uU(1," Phenotype Assertions "))}function E(o,s){if(1&o&&(t.TgZ(0,"cvc-entity-table-card",5),t._UZ(1,"cvc-evidence-table",6),t.qZA()),2&o){t.oxw();const i=t.MAs(6),p=t.oxw();t.Q6J("cvcTitle",i),t.xp6(1),t.Q6J("phenotypeId",p.phenotypeId)}}function H(o,s){1&o&&(t._UZ(0,"i",7),t._uU(1," Phenotype Evidence "))}function X(o,s){1&o&&(t.TgZ(0,"nz-space",1),t.YNc(1,R,2,2,"cvc-entity-table-card",2),t.YNc(2,W,2,0,"ng-template",null,3,t.W1O),t.YNc(4,E,2,2,"cvc-entity-table-card",2),t.YNc(5,H,2,0,"ng-template",null,4,t.W1O),t.qZA())}const G=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-phenotypes"]],decls:1,vars:0,template:function(i,p){1&i&&t._UZ(0,"router-outlet")},directives:[g.lC],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),o})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:D,data:{breadcrumb:"Home"}},{path:":phenotypeId",component:y,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class o{constructor(i){this.route=i,this.routeSub=this.route.params.subscribe(p=>{this.phenotypeId=+p.phenotypeId})}ngOnDestroy(){this.routeSub.unsubscribe()}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(g.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-phenotypes-summary"]],decls:1,vars:1,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[3,"cvcTitle",4,"nzSpaceItem"],["assertionsCardTitle",""],["evidenceCardTitle",""],[3,"cvcTitle"],[3,"phenotypeId"],["nz-icon","","nzType","civic:phenotype"]],template:function(i,p){1&i&&t.YNc(0,X,7,0,"nz-space",0),2&i&&t.Q6J("ngIf",p.phenotypeId)},directives:[n.O5,V.NU,V.$1,L._,B.x,f.Ls,$.a],styles:["[_nghost-%COMP%]{display:block}"]}),o})(),data:{breadcrumb:"Summary"}}]}]}];let K=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.Bz.forChild(G)],g.Bz]}),o})();var a=e(404),c=e(5630),r=e(4125),v=e(6286),U=e(3630);let k=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,C.WG,u.HQ,r.k,v.y,U.X]]}),o})(),tt=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,m.KJ,f.PV,T.Jb,k]]}),o})();var nt=e(9441),et=e(767),ot=e(316);let at=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,tt,nt.s,et.Q,ot.C,U.X,c.D,K,f.PV,u.HQ,m.KJ,C.WG,T.Jb,a.cg,V.zf]]}),o})()}}]);