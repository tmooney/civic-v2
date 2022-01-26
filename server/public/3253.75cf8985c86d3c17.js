"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3253],{8369:(Q,A,o)=>{o.d(A,{W:()=>J});var t=o(9808),l=o(325),d=o(8481),h=o(3610),_=o(647),O=o(7484),x=o(3098),z=o(3309),f=o(4867),I=o(6286),n=o(8018),Z=o(6949),C=o(9444),m=o(1894),M=o(8144),p=o(3580),T=o(5e3);let y=(()=>{class u{}return u.\u0275fac=function(b){return new(b||u)},u.\u0275mod=T.oAB({type:u}),u.\u0275inj=T.cJS({imports:[[t.ez,l.Bz,Z.WG,O.vh,x.q6,_.PV,m.Jb,M.zf,d.X,z.U,p.Q,f.Q,I.y,n.e,C.s]]}),u})(),J=(()=>{class u{}return u.\u0275fac=function(b){return new(b||u)},u.\u0275mod=T.oAB({type:u}),u.\u0275inj=T.cJS({imports:[[t.ez,l.Bz,d.X,h.$6,_.PV,y,C.s]]}),u})()},8664:(Q,A,o)=>{o.d(A,{I:()=>w});var t=o(5e3),l=o(9808),d=o(325),h=o(8481),_=o(3610),O=o(4850),x=o(712),z=o(7484),f=o(647),I=o(3193),n=o(3098),Z=o(6550),C=o(1894),m=o(8144),M=o(6949);function p(r,g){if(1&r&&(t._UZ(0,"i",13),t._uU(1)),2&r){const i=t.oxw().ngIf;t.xp6(1),t.hij(" ",i.name," ")}}function T(r,g){if(1&r&&t._UZ(0,"cvc-gene-tag",14),2&r){const i=t.oxw().ngIf;t.Q6J("enablePopover",!1)("gene",i.gene)}}function y(r,g){1&r&&(t.TgZ(0,"span"),t._uU(1,",\xa0"),t.qZA())}function J(r,g){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.YNc(2,y,2,0,"span",1),t.qZA()),2&r){const i=g.$implicit,v=g.last;t.xp6(1),t.hij(" ",i,""),t.xp6(1),t.Q6J("ngIf",!v)}}function u(r,g){if(1&r&&(t.TgZ(0,"nz-descriptions-item",15),t.YNc(1,J,3,2,"span",16),t.qZA()),2&r){const i=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",i.variantAliases)}}function S(r,g){if(1&r&&(t.TgZ(0,"nz-descriptions-item",17),t.TgZ(1,"cvc-link-tag",18),t._uU(2),t.qZA(),t.qZA()),2&r){const i=t.oxw().ngIf;t.xp6(1),t.MGl("href","https://reg.genome.network/allele/",i.alleleRegistryId,".html"),t.xp6(1),t.hij(" ",i.alleleRegistryId," ")}}function b(r,g){if(1&r&&(t.TgZ(0,"a",19),t.TgZ(1,"nz-tag",20),t._UZ(2,"i",21),t._uU(3),t.qZA(),t.qZA()),2&r){const i=t.oxw().ngIf;t.MGl("routerLink","/variants/",i.id,"/flags"),t.xp6(3),t.hij(" Flags (",i.flags.totalCount,") ")}}function U(r,g){if(1&r&&(t.TgZ(0,"a",19),t.TgZ(1,"nz-tag",22),t._UZ(2,"i",23),t._uU(3),t.qZA(),t.qZA()),2&r){const i=t.oxw().ngIf;t.MGl("routerLink","/variants/",i.id,"/revisions"),t.xp6(3),t.hij(" Revisions (",i.revisions.totalCount,") ")}}function V(r,g){if(1&r&&(t.TgZ(0,"a",19),t.TgZ(1,"nz-tag",24),t._UZ(2,"i",25),t._uU(3),t.qZA(),t.qZA()),2&r){const i=t.oxw().ngIf;t.MGl("routerLink","/variants/",i.id,"/comments"),t.xp6(3),t.hij(" Comments (",i.comments.totalCount,") ")}}function Y(r,g){if(1&r&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,p,2,1,"ng-template",null,3,t.W1O),t.YNc(4,T,1,2,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5),t.YNc(7,u,2,1,"nz-descriptions-item",6),t.YNc(8,S,3,2,"nz-descriptions-item",7),t.TgZ(9,"nz-descriptions-item",8),t._uU(10),t.qZA(),t.qZA(),t.TgZ(11,"nz-row",9),t.TgZ(12,"nz-col",10),t.TgZ(13,"nz-space",11),t.YNc(14,b,4,2,"a",12),t.YNc(15,U,4,2,"a",12),t.YNc(16,V,4,2,"a",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&r){const i=g.ngIf,v=t.MAs(3),N=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",v)("nzExtra",N),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",i.variantAliases.length>0),t.xp6(1),t.Q6J("ngIf",i.alleleRegistryId),t.xp6(2),t.hij(" ",i.evidenceItems.totalCount," ")}}let F=(()=>{class r{constructor(i){this.gql=i}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,O.U)(({data:i})=>i.variant))}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(x.ZYZ))},r.\u0275cmp=t.Xpm({type:r,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Evidence Items","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:variant"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(i,v){1&i&&(t.TgZ(0,"div",0),t.YNc(1,Y,17,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&i&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,v.variant$)))},directives:[l.O5,z.bd,f.Ls,I.H,n.R7,n.uj,l.sg,Z.l,C.SK,C.t3,m.NU,m.$1,d.yS,h.j],pipes:[M.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),r})();function j(r,g){}function L(r,g){if(1&r&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,j,0,0,"ng-template",6),t.qZA(),t.BQk()),2&r){const i=t.oxw(),v=t.MAs(2);t.xp6(1),t.MGl("routerLink","/variants/",i.variant.id,""),t.xp6(1),t.Q6J("ngTemplateOutlet",v)}}function B(r,g){}function $(r,g){if(1&r&&(t.TgZ(0,"nz-tag",9),t.YNc(1,B,0,0,"ng-template",6),t.qZA()),2&r){t.oxw();const i=t.MAs(2);t.oxw();const v=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",i),t.xp6(1),t.Q6J("ngTemplateOutlet",v)}}function R(r,g){if(1&r&&t._UZ(0,"cvc-variant-popover",11),2&r){const i=t.oxw(3);t.Q6J("variantId",i.variant.id)}}function E(r,g){if(1&r&&t.YNc(0,R,1,1,"cvc-variant-popover",10),2&r){const i=t.oxw(2);t.Q6J("ngIf",i.enablePopover)}}function W(r,g){if(1&r&&(t.YNc(0,$,2,3,"nz-tag",7),t.YNc(1,E,1,1,"ng-template",null,8,t.W1O)),2&r){const i=t.oxw(),v=t.MAs(4);t.Q6J("ngIf",i.enablePopover)("ngIfElse",v)}}function X(r,g){}function G(r,g){if(1&r&&(t.TgZ(0,"nz-tag"),t.YNc(1,X,0,0,"ng-template",6),t.qZA()),2&r){t.oxw();const i=t.MAs(8);t.xp6(1),t.Q6J("ngTemplateOutlet",i)}}function H(r,g){}function K(r,g){if(1&r&&t.YNc(0,H,0,0,"ng-template",6),2&r){t.oxw();const i=t.MAs(2);t.Q6J("ngTemplateOutlet",i)}}function q(r,g){if(1&r&&(t._UZ(0,"i",12),t._uU(1)),2&r){const i=t.oxw();t.xp6(1),t.hij(" ",i.variant.name,"\n")}}let w=(()=>{class r{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent"],[3,"variantId",4,"ngIf"],[3,"variantId"],["nz-icon","","nzType","civic-variant","nzTheme","twotone","nzTwotoneColor","#33B358"]],template:function(i,v){if(1&i&&(t.YNc(0,L,3,2,"ng-container",0),t.YNc(1,W,3,2,"ng-template",null,1,t.W1O),t.YNc(3,G,2,1,"ng-template",null,2,t.W1O),t.YNc(5,K,1,1,"ng-template",null,3,t.W1O),t.YNc(7,q,2,1,"ng-template",null,4,t.W1O)),2&i){const N=t.MAs(6);t.Q6J("ngIf",v.linked)("ngIfElse",N)}},directives:[l.O5,d.yS,l.tP,h.j,_.lU,F,f.Ls],styles:[""]}),r})()},4867:(Q,A,o)=>{o.d(A,{Q:()=>M});var t=o(9808),l=o(325),d=o(8481),h=o(647),_=o(3610),O=o(6949),x=o(7484),z=o(1894),f=o(3098),I=o(8144),n=o(3309),Z=o(3630),C=o(5e3);let m=(()=>{class p{}return p.\u0275fac=function(y){return new(y||p)},p.\u0275mod=C.oAB({type:p}),p.\u0275inj=C.cJS({imports:[[t.ez,l.Bz,O.WG,x.vh,z.Jb,f.q6,d.X,h.PV,I.zf,n.U,Z.X]]}),p})(),M=(()=>{class p{}return p.\u0275fac=function(y){return new(y||p)},p.\u0275mod=C.oAB({type:p}),p.\u0275inj=C.cJS({imports:[[t.ez,l.Bz,d.X,_.$6,h.PV,m]]}),p})()},9450:(Q,A,o)=>{o.r(A),o.d(A,{DrugsModule:()=>ln});var t=o(9808),l=o(592),d=o(1945),h=o(6949),_=o(1894),O=o(404),x=o(8144),z=o(325),f=o(373),I=o(1059),n=o(5e3),Z=o(712),C=o(8992),m=o(647),M=o(6550),p=o(3098);function T(e,c){1&e&&n._UZ(0,"i",9)}function y(e,c){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const a=n.oxw().ngIf;n.xp6(1),n.Oqu(a.name)}}function J(e,c){if(1&e&&(n.TgZ(0,"nz-page-header-extra"),n.TgZ(1,"cvc-link-tag",10),n._uU(2),n.qZA(),n.qZA()),2&e){const a=n.oxw().ngIf;n.xp6(1),n.Q6J("href",a.drugUrl),n.xp6(1),n.hij(" ",a.ncitId," ")}}function u(e,c){if(1&e&&(n.TgZ(0,"nz-descriptions-item",11),n._uU(1),n.qZA()),2&e){const a=n.oxw().ngIf;n.xp6(1),n.hij(" ",a.drugAliases.join(", ")," ")}}function S(e,c){if(1&e&&(n.ynx(0),n._UZ(1,"cvc-section-navigation",1),n.TgZ(2,"nz-page-header",2),n.TgZ(3,"nz-page-header-title"),n.TgZ(4,"nz-space",3),n.YNc(5,T,1,0,"i",4),n.YNc(6,y,2,1,"span",5),n.qZA(),n.qZA(),n.YNc(7,J,3,2,"nz-page-header-extra",0),n.TgZ(8,"nz-page-header-content"),n.TgZ(9,"div",6),n.TgZ(10,"nz-descriptions",7),n.YNc(11,u,2,1,"nz-descriptions-item",8),n.qZA(),n._UZ(12,"router-outlet"),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&e){const a=c.ngIf;n.xp6(1),n.Q6J("displayName",a.name),n.xp6(6),n.Q6J("ngIf",a.ncitId),n.xp6(3),n.Q6J("nzColumn",1),n.xp6(1),n.Q6J("ngIf",a.drugAliases.length>0)}}let b=(()=>{class e{constructor(a,s){this.route=a,this.gql=s,this.routeSub=this.route.params.subscribe(P=>{this.drugId=+P.drugId,this.queryRef=this.gql.watch({drugId:this.drugId});let D=this.queryRef.valueChanges;this.loading$=D.pipe((0,f.j)("loading"),(0,I.O)(!0)),this.drug$=D.pipe((0,f.j)("data","drug"))})}ngOnDestroy(){this.routeSub.unsubscribe()}}return e.\u0275fac=function(a){return new(a||e)(n.Y36(z.gz),n.Y36(Z.GB2))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-drugs-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nzDirection","horizontal"],["nz-icon","","nzType","civic:intervention",4,"nzSpaceItem"],[4,"nzSpaceItem"],[1,"content"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nz-icon","","nzType","civic:intervention"],["tooltip","View in the NCIthesaurus",3,"href"],["nzTitle","Aliases","nzSpan","2"]],template:function(a,s){1&a&&(n.YNc(0,S,13,4,"ng-container",0),n.ALo(1,"ngrxPush")),2&a&&n.Q6J("ngIf",n.lcZ(1,1,s.drug$))},directives:[t.O5,C.I,d.$O,d.u9,x.NU,x.$1,m.Ls,d.Jp,M.l,d.u5,p.R7,p.uj,z.lC],pipes:[h.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),e})();var U=o(3154),V=o(8929),Y=o(4850),F=o(13),j=o(2166),L=o(7469);function B(e,c){if(1&e&&(n.TgZ(0,"cvc-link-tag",13),n._uU(1),n.qZA()),2&e){const a=n.oxw().$implicit;n.Q6J("href",a.drugUrl),n.xp6(1),n.hij(" ",a.ncitId," ")}}function $(e,c){1&e&&n._uU(0,"--")}function R(e,c){if(1&e&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._UZ(2,"cvc-drug-tag",10),n.qZA(),n.TgZ(3,"td"),n.YNc(4,B,2,2,"cvc-link-tag",11),n.YNc(5,$,1,0,"ng-template",null,12,n.W1O),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.qZA()),2&e){const a=c.$implicit,s=n.MAs(6);n.xp6(2),n.Q6J("drug",a),n.xp6(2),n.Q6J("ngIf",a.ncitId)("ngIfElse",s),n.xp6(4),n.hij(" ",a.evidenceCount," "),n.xp6(2),n.hij(" ",a.assertionCount," ")}}let E=(()=>{class e{constructor(a){this.gql=a,this.initialPageSize=25,this.debouncedQuery=new V.xQ,this.sortColumns=Z.kq9}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize});let a=this.queryRef.valueChanges;this.drugs$=a.pipe((0,f.j)("data","drugs","edges"),(0,Y.U)(s=>s.map(P=>P.node))),this.isLoading$=a.pipe((0,f.j)("loading"),(0,I.O)(!0)),this.totalCount$=a.pipe((0,f.j)("data","drugs","totalCount")),this.pageInfo$=a.pipe((0,f.j)("data","drugs","pageInfo")),this.debouncedQuery.pipe((0,F.b)(500)).subscribe(s=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}onModelChanged(){this.debouncedQuery.next()}onSortChanged(a){var s;null===(s=this.queryRef)||void 0===s||s.refetch({sortBy:(0,U._)(a)})}refresh(){var a;null===(a=this.queryRef)||void 0===a||a.refetch({name:this.nameFilter,ncitId:this.ncitIdFilter})}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(a){var s;null===(s=this.queryRef)||void 0===s||s.fetchMore({variables:{after:a}})}}return e.\u0275fac=function(a){return new(a||e)(n.Y36(Z.Ud2))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-drugs-table"]],decls:23,vars:21,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["drugsTable",""],[3,"nzSortOrderChange"],["nzWidth","40%",3,"nzColumnKey","nzSortFn"],["nzWidth","10%","nzRight","",3,"nzColumnKey","nzSortFn"],["nz-icon","","nzType","civic:evidence","nz-tooltip","","nzTooltipTitle","Evidence count"],["nz-icon","","nzType","civic:assertion","nz-tooltip","","nzTooltipTitle","Assertion count"],["placeholderText","Search Name",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search NCIt ID",3,"inputModel","onInputChanged","inputModelChange"],[4,"ngFor","ngForOf"],[3,"drug"],["tooltip","View in the NCIthesaurus",3,"href",4,"ngIf","ngIfElse"],["noNcit",""],["tooltip","View in the NCIthesaurus",3,"href"]],template:function(a,s){if(1&a&&(n.TgZ(0,"nz-table",0,1),n.ALo(2,"ngrxPush"),n.ALo(3,"ngrxPush"),n.TgZ(4,"thead",2),n.NdJ("nzSortOrderChange",function(D){return s.onSortChanged(D)}),n.TgZ(5,"tr"),n.TgZ(6,"th",3),n._uU(7," Name "),n.qZA(),n.TgZ(8,"th",3),n._uU(9," NCIt ID "),n.qZA(),n.TgZ(10,"th",4),n._UZ(11,"i",5),n.qZA(),n.TgZ(12,"th",4),n._UZ(13,"i",6),n.qZA(),n.qZA(),n.TgZ(14,"tr"),n.TgZ(15,"th"),n.TgZ(16,"cvc-clearable-input-filter",7),n.NdJ("inputModelChange",function(D){return s.nameFilter=D}),n.qZA(),n.qZA(),n.TgZ(17,"th"),n.TgZ(18,"cvc-clearable-input-filter",8),n.NdJ("inputModelChange",function(D){return s.ncitIdFilter=D}),n.qZA(),n.qZA(),n._UZ(19,"th"),n._UZ(20,"th"),n.qZA(),n.qZA(),n.TgZ(21,"tbody"),n.YNc(22,R,11,5,"tr",9),n.qZA(),n.qZA()),2&a){const P=n.MAs(1);n.Q6J("nzData",n.lcZ(2,17,s.drugs$))("nzLoading",n.lcZ(3,19,s.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(6),n.Q6J("nzColumnKey",s.sortColumns.Name)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",s.sortColumns.NcitId)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",s.sortColumns.EvidenceItemCount)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",s.sortColumns.AssertionCount)("nzSortFn",!0),n.xp6(4),n.Q6J("inputModel",s.nameFilter)("onInputChanged",s.textInputCallback),n.xp6(2),n.Q6J("inputModel",s.ncitIdFilter)("onInputChanged",s.textInputCallback),n.xp6(4),n.Q6J("ngForOf",P.data)}},directives:[l.N8,l.Om,l.$Z,l.Uo,l._C,l.qD,l.qn,m.Ls,j.p,l.p0,t.sg,L.u,t.O5,M.l],pipes:[h.fM],styles:["[_nghost-%COMP%]{display:block}"]}),e})(),W=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["drugs-home"]],decls:9,vars:1,consts:[[1,"site-page-header"],["nz-icon","","nzType","civic:intervention"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"]],template:function(a,s){1&a&&(n.TgZ(0,"nz-page-header",0),n.TgZ(1,"nz-page-header-title"),n._UZ(2,"i",1),n._uU(3," Drugs "),n.qZA(),n.TgZ(4,"nz-page-header-content"),n.TgZ(5,"div",2),n.TgZ(6,"div",3),n.TgZ(7,"div",4),n._UZ(8,"cvc-drugs-table"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&a&&(n.xp6(6),n.Q6J("nzSpan",24))},directives:[d.$O,d.u9,m.Ls,d.u5,_.SK,_.t3,E],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),e})();var X=o(4805),G=o(3756),H=o(8965);function K(e,c){if(1&e&&(n.TgZ(0,"cvc-entity-table-card",5),n._UZ(1,"cvc-assertions-table",6),n.qZA()),2&e){n.oxw();const a=n.MAs(3),s=n.oxw();n.Q6J("cvcTitle",a),n.xp6(1),n.Q6J("drugId",s.drugId)}}function q(e,c){1&e&&(n._UZ(0,"i",7),n._uU(1," Drug Assertions "))}function w(e,c){if(1&e&&(n.TgZ(0,"cvc-entity-table-card",5),n._UZ(1,"cvc-evidence-table",6),n.qZA()),2&e){n.oxw();const a=n.MAs(6),s=n.oxw();n.Q6J("cvcTitle",a),n.xp6(1),n.Q6J("drugId",s.drugId)}}function r(e,c){1&e&&(n._UZ(0,"i",7),n._uU(1," Drug Evidence "))}function g(e,c){1&e&&(n.TgZ(0,"nz-space",1),n.YNc(1,K,2,2,"cvc-entity-table-card",2),n.YNc(2,q,2,0,"ng-template",null,3,n.W1O),n.YNc(4,w,2,2,"cvc-entity-table-card",2),n.YNc(5,r,2,0,"ng-template",null,4,n.W1O),n.qZA())}const N=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-drugs"]],decls:1,vars:0,template:function(a,s){1&a&&n._UZ(0,"router-outlet")},directives:[z.lC],styles:[""]}),e})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:W,data:{breadcrumb:"Home"}},{path:":drugId",component:b,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:(()=>{class e{constructor(a){this.route=a,this.routeSub=this.route.params.subscribe(s=>{this.drugId=+s.drugId})}ngOnDestroy(){this.routeSub.unsubscribe()}}return e.\u0275fac=function(a){return new(a||e)(n.Y36(z.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-drugs-summary"]],decls:1,vars:1,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[3,"cvcTitle",4,"nzSpaceItem"],["assertionsCardTitle",""],["evidenceCardTitle",""],[3,"cvcTitle"],[3,"drugId"],["nz-icon","","nzType","civic:intervention"]],template:function(a,s){1&a&&n.YNc(0,g,7,0,"nz-space",0),2&a&&n.Q6J("ngIf",s.drugId)},directives:[t.O5,x.NU,x.$1,X._,G.x,m.Ls,H.a],styles:["[_nghost-%COMP%]{display:block}"]}),e})(),data:{breadcrumb:"Summary"}}]}]}];let nn=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[z.Bz.forChild(N)],z.Bz]}),e})();var tn=o(5630),en=o(8018),on=o(4125),k=o(3630);let an=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[t.ez,h.WG,l.HQ,m.PV,en.e,k.X,on.k]]}),e})(),rn=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[t.ez,m.PV,d.KJ,_.Jb,an]]}),e})();var sn=o(316),cn=o(767),gn=o(9441);let ln=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[tn.D,rn,sn.C,cn.Q,gn.s,k.X,t.ez,nn,m.PV,l.HQ,p.q6,d.KJ,h.WG,_.Jb,O.cg,x.zf]]}),e})()}}]);