"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[5606],{8664:(M,g,e)=>{e.d(g,{I:()=>X});var v=e(6654),n=e(5e3),l=e(9808),s=e(325),c=e(8481),_=e(3610),d=e(4850),h=e(712),P=e(7484),z=e(647),Z=e(3193),u=e(3098),m=e(6550),T=e(1894),x=e(8144),r=e(6949);function C(t,a){if(1&t&&(n._UZ(0,"i",13),n._uU(1)),2&t){const o=n.oxw().ngIf;n.xp6(1),n.hij(" ",o.name," ")}}function f(t,a){if(1&t&&n._UZ(0,"cvc-gene-tag",14),2&t){const o=n.oxw().ngIf;n.Q6J("enablePopover",!1)("gene",o.gene)}}function I(t,a){1&t&&(n.TgZ(0,"span"),n._uU(1,",\xa0"),n.qZA())}function V(t,a){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.YNc(2,I,2,0,"span",1),n.qZA()),2&t){const o=a.$implicit,i=a.last;n.xp6(1),n.hij(" ",o,""),n.xp6(1),n.Q6J("ngIf",!i)}}function A(t,a){if(1&t&&(n.TgZ(0,"nz-descriptions-item",15),n.YNc(1,V,3,2,"span",16),n.qZA()),2&t){const o=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",o.variantAliases)}}function O(t,a){if(1&t&&(n.TgZ(0,"nz-descriptions-item",17),n.TgZ(1,"cvc-link-tag",18),n._uU(2),n.qZA(),n.qZA()),2&t){const o=n.oxw().ngIf;n.xp6(1),n.MGl("href","https://reg.genome.network/allele/",o.alleleRegistryId,".html"),n.xp6(1),n.hij(" ",o.alleleRegistryId," ")}}function y(t,a){if(1&t&&(n.TgZ(0,"a",19),n.TgZ(1,"nz-tag",20),n._UZ(2,"i",21),n._uU(3),n.qZA(),n.qZA()),2&t){const o=n.oxw().ngIf;n.MGl("routerLink","/variants/",o.id,"/flags"),n.xp6(3),n.hij(" Flags (",o.flags.totalCount,") ")}}function J(t,a){if(1&t&&(n.TgZ(0,"a",19),n.TgZ(1,"nz-tag",22),n._UZ(2,"i",23),n._uU(3),n.qZA(),n.qZA()),2&t){const o=n.oxw().ngIf;n.MGl("routerLink","/variants/",o.id,"/revisions"),n.xp6(3),n.hij(" Revisions (",o.revisions.totalCount,") ")}}function N(t,a){if(1&t&&(n.TgZ(0,"a",19),n.TgZ(1,"nz-tag",24),n._UZ(2,"i",25),n._uU(3),n.qZA(),n.qZA()),2&t){const o=n.oxw().ngIf;n.MGl("routerLink","/variants/",o.id,"/comments"),n.xp6(3),n.hij(" Comments (",o.comments.totalCount,") ")}}function Y(t,a){if(1&t&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,C,2,1,"ng-template",null,3,n.W1O),n.YNc(4,f,1,2,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5),n.YNc(7,A,2,1,"nz-descriptions-item",6),n.YNc(8,O,3,2,"nz-descriptions-item",7),n.TgZ(9,"nz-descriptions-item",8),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"nz-row",9),n.TgZ(12,"nz-col",10),n.TgZ(13,"nz-space",11),n.YNc(14,y,4,2,"a",12),n.YNc(15,J,4,2,"a",12),n.YNc(16,N,4,2,"a",12),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&t){const o=a.ngIf,i=n.MAs(3),p=n.MAs(5);n.xp6(1),n.Q6J("nzTitle",i)("nzExtra",p),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(1),n.Q6J("ngIf",o.variantAliases.length>0),n.xp6(1),n.Q6J("ngIf",o.alleleRegistryId),n.xp6(2),n.hij(" ",o.evidenceItems.totalCount," ")}}let E=(()=>{class t{constructor(o){this.gql=o}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,d.U)(({data:o})=>o.variant))}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(h.ZYZ))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Evidence Items","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:variant"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(o,i){1&o&&(n.TgZ(0,"div",0),n.YNc(1,Y,17,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&o&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,i.variant$)))},directives:[l.O5,P.bd,z.Ls,Z.H,u.R7,u.uj,l.sg,m.l,T.SK,T.t3,x.NU,x.$1,s.yS,c.j],pipes:[r.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),t})();function U(t,a){}function Q(t,a){if(1&t&&(n.ynx(0),n.TgZ(1,"a",5),n.YNc(2,U,0,0,"ng-template",6),n.qZA(),n.BQk()),2&t){const o=n.oxw(),i=n.MAs(2);n.xp6(1),n.Q6J("routerLink",o.variant.link),n.xp6(1),n.Q6J("ngTemplateOutlet",i)}}function j(t,a){}function L(t,a){if(1&t){const o=n.EpF();n.TgZ(0,"nz-tag",9),n.NdJ("nzOnClose",function(p){return n.CHM(o),n.oxw(2).itemClosed(p)}),n.YNc(1,j,0,0,"ng-template",6),n.qZA()}if(2&t){n.oxw();const o=n.MAs(2),i=n.oxw(),p=n.MAs(8);n.Q6J("nzPopoverMouseEnterDelay",i.onCloseClicked?0:.5)("nzPopoverContent",o)("nzMode",i.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",p)}}function S(t,a){if(1&t&&n._UZ(0,"cvc-variant-popover",11),2&t){const o=n.oxw(3);n.Q6J("variantId",o.variant.id)}}function B(t,a){if(1&t&&n.YNc(0,S,1,1,"cvc-variant-popover",10),2&t){const o=n.oxw(2);n.Q6J("ngIf",o.enablePopover)}}function D(t,a){if(1&t&&(n.YNc(0,L,2,4,"nz-tag",7),n.YNc(1,B,1,1,"ng-template",null,8,n.W1O)),2&t){const o=n.oxw(),i=n.MAs(4);n.Q6J("ngIf",o.enablePopover)("ngIfElse",i)}}function F(t,a){}function R(t,a){if(1&t){const o=n.EpF();n.TgZ(0,"nz-tag",12),n.NdJ("nzOnClose",function(p){return n.CHM(o),n.oxw().itemClosed(p)}),n.YNc(1,F,0,0,"ng-template",6),n.qZA()}if(2&t){const o=n.oxw(),i=n.MAs(8);n.Q6J("nzMode",o.onCloseClicked?"closeable":"default"),n.xp6(1),n.Q6J("ngTemplateOutlet",i)}}function W(t,a){}function w(t,a){if(1&t&&n.YNc(0,W,0,0,"ng-template",6),2&t){n.oxw();const o=n.MAs(2);n.Q6J("ngTemplateOutlet",o)}}function G(t,a){if(1&t&&(n._UZ(0,"i",13),n._uU(1)),2&t){const o=n.oxw();n.xp6(1),n.hij(" ",o.variant.name,"\n")}}let X=(()=>{class t extends v.a{constructor(){super(),this.enablePopover=!0}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover"},features:[n.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzType","civic-variant","nzTheme","twotone","nzTwotoneColor","#33B358"]],template:function(o,i){if(1&o&&(n.YNc(0,Q,3,2,"ng-container",0),n.YNc(1,D,3,2,"ng-template",null,1,n.W1O),n.YNc(3,R,2,2,"ng-template",null,2,n.W1O),n.YNc(5,w,1,1,"ng-template",null,3,n.W1O),n.YNc(7,G,2,1,"ng-template",null,4,n.W1O)),2&o){const p=n.MAs(6);n.Q6J("ngIf",i.linked)("ngIfElse",p)}},directives:[l.O5,s.yS,l.tP,c.j,_.lU,E,z.Ls],styles:[""]}),t})()},4867:(M,g,e)=>{e.d(g,{Q:()=>x});var v=e(9808),n=e(325),l=e(8481),s=e(647),c=e(3610),_=e(6949),d=e(7484),h=e(1894),P=e(3098),z=e(8144),Z=e(3309),u=e(3630),m=e(5e3);let T=(()=>{class r{}return r.\u0275fac=function(f){return new(f||r)},r.\u0275mod=m.oAB({type:r}),r.\u0275inj=m.cJS({imports:[[v.ez,n.Bz,_.WG,d.vh,h.Jb,P.q6,l.X,s.PV,z.zf,Z.U,u.X]]}),r})(),x=(()=>{class r{}return r.\u0275fac=function(f){return new(f||r)},r.\u0275mod=m.oAB({type:r}),r.\u0275inj=m.cJS({imports:[[v.ez,n.Bz,l.X,c.$6,s.PV,T]]}),r})()},6295:(M,g,e)=>{e.r(g),e.d(g,{VariantsModule:()=>s});var v=e(9808),n=e(4053),l=e(5e3);let s=(()=>{class c{}return c.\u0275fac=function(d){return new(d||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({imports:[[v.ez,n.x]]}),c})()}}]);