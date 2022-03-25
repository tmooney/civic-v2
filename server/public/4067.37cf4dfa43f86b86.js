"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4067],{112:(Z,h,r)=>{r.d(h,{u:()=>B});var t=r(5e3),g=r(9808),T=r(325),z=r(8481),m=r(3610),C=r(4850),x=r(712),V=r(7484),S=r(3098),N=r(8664),d=r(6906),y=r(6949);function k(a,c){if(1&a&&(t._UZ(0,"i",7),t._uU(1)),2&a){const s=t.oxw().ngIf;t.xp6(1),t.hij(" ",s.name," ")}}function u(a,c){if(1&a&&(t.TgZ(0,"span"),t._UZ(1,"cvc-variant-tag",10),t.qZA()),2&a){const s=c.$implicit;t.xp6(1),t.Q6J("variant",s.node)}}function v(a,c){if(1&a&&(t.TgZ(0,"nz-descriptions-item",8),t.YNc(1,u,2,1,"span",9),t.qZA()),2&a){const s=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",s.variants.edges)}}function _(a,c){if(1&a&&(t.TgZ(0,"span"),t._UZ(1,"cvc-source-tag",12),t.qZA()),2&a){const s=c.$implicit;t.xp6(1),t.Q6J("source",s)}}function A(a,c){if(1&a&&(t.TgZ(0,"nz-descriptions-item",11),t.YNc(1,_,2,1,"span",9),t.qZA()),2&a){const s=t.oxw().ngIf;t.xp6(1),t.Q6J("ngForOf",s.sources)}}function E(a,c){if(1&a&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,k,2,1,"ng-template",null,3,t.W1O),t._uU(4),t.TgZ(5,"nz-descriptions",4),t.YNc(6,v,2,1,"nz-descriptions-item",5),t.YNc(7,A,2,1,"nz-descriptions-item",6),t.qZA(),t.qZA(),t.BQk()),2&a){const s=c.ngIf,f=t.MAs(3);t.xp6(1),t.Q6J("nzTitle",f),t.xp6(3),t.hij(" ",s.description," "),t.xp6(1),t.Q6J("nzColumn",2),t.xp6(1),t.Q6J("ngIf",s.variants.edges.length>0),t.xp6(1),t.Q6J("ngIf",s.sources.length>0)}}let M=(()=>{class a{constructor(s){this.gql=s}ngOnInit(){if(void 0===this.variantGroupId)throw new Error("Must pass a variant group ID into the variant group popover component.");this.variantGroup$=this.gql.watch({variantGroupId:this.variantGroupId}).valueChanges.pipe((0,C.U)(({data:s})=>s.variantGroup))}}return a.\u0275fac=function(s){return new(s||a)(t.Y36(x.Zo2))},a.\u0275cmp=t.Xpm({type:a,selectors:[["cvc-variant-group-popover"]],inputs:{variantGroupId:"variantGroupId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Variants","nzSpan","2",4,"ngIf"],["nzTitle","Sources","nzSpan","2",4,"ngIf"],["nz-icon","","nzType","civic:variant-group"],["nzTitle","Variants","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"variant"],["nzTitle","Sources","nzSpan","2"],[3,"source"]],template:function(s,f){1&s&&(t.TgZ(0,"div",0),t.YNc(1,E,8,5,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,f.variantGroup$)))},directives:[g.O5,V.bd,S.R7,S.uj,g.sg,N.I,d.T],pipes:[y.fM],styles:["[_nghost-%COMP%]{display:block}"]}),a})();var G=r(647);function D(a,c){}function w(a,c){if(1&a&&(t.ynx(0),t.TgZ(1,"a",5),t.YNc(2,D,0,0,"ng-template",6),t.qZA(),t.BQk()),2&a){const s=t.oxw(),f=t.MAs(2);t.xp6(1),t.Q6J("routerLink",s.variantgroup.link),t.xp6(1),t.Q6J("ngTemplateOutlet",f)}}function O(a,c){}function i(a,c){if(1&a&&(t.TgZ(0,"nz-tag",9),t.YNc(1,O,0,0,"ng-template",6),t.qZA()),2&a){t.oxw();const s=t.MAs(2);t.oxw();const f=t.MAs(8);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",s),t.xp6(1),t.Q6J("ngTemplateOutlet",f)}}function l(a,c){if(1&a&&t._UZ(0,"cvc-variant-group-popover",11),2&a){const s=t.oxw(3);t.Q6J("variantGroupId",s.variantgroup.id)}}function n(a,c){if(1&a&&t.YNc(0,l,1,1,"cvc-variant-group-popover",10),2&a){const s=t.oxw(2);t.Q6J("ngIf",s.enablePopover)}}function o(a,c){if(1&a&&(t.YNc(0,i,2,3,"nz-tag",7),t.YNc(1,n,1,1,"ng-template",null,8,t.W1O)),2&a){const s=t.oxw(),f=t.MAs(4);t.Q6J("ngIf",s.enablePopover)("ngIfElse",f)}}function e(a,c){}function p(a,c){if(1&a&&(t.TgZ(0,"nz-tag"),t.YNc(1,e,0,0,"ng-template",6),t.qZA()),2&a){t.oxw();const s=t.MAs(8);t.xp6(1),t.Q6J("ngTemplateOutlet",s)}}function I(a,c){}function P(a,c){if(1&a&&t.YNc(0,I,0,0,"ng-template",6),2&a){t.oxw();const s=t.MAs(2);t.Q6J("ngTemplateOutlet",s)}}function Q(a,c){if(1&a&&(t._UZ(0,"i",12),t._uU(1)),2&a){const s=t.oxw();t.xp6(1),t.hij(" ",s.variantgroup.name,"\n")}}let B=(()=>{class a{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.variantgroup)throw new Error("Must pass a LinkableVariantgroup into the variantgroup tag component")}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["cvc-variant-group-tag"]],inputs:{variantgroup:"variantgroup",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent"],[3,"variantGroupId",4,"ngIf"],[3,"variantGroupId"],["nz-icon","","nzType","civic-variantgroup","nzTheme","twotone","nzTwotoneColor","#33B358"]],template:function(s,f){if(1&s&&(t.YNc(0,w,3,2,"ng-container",0),t.YNc(1,o,3,2,"ng-template",null,1,t.W1O),t.YNc(3,p,2,1,"ng-template",null,2,t.W1O),t.YNc(5,P,1,1,"ng-template",null,3,t.W1O),t.YNc(7,Q,2,1,"ng-template",null,4,t.W1O)),2&s){const J=t.MAs(6);t.Q6J("ngIf",f.linked)("ngIfElse",J)}},directives:[g.O5,T.yS,g.tP,z.j,m.lU,M,G.Ls],styles:[""]}),a})()},7677:(Z,h,r)=>{r.d(h,{G:()=>k});var t=r(9808),g=r(325),T=r(3610),z=r(8481),m=r(647),C=r(9779),x=r(4867),V=r(7484),S=r(3098),N=r(6949),d=r(5e3);let y=(()=>{class u{}return u.\u0275fac=function(_){return new(_||u)},u.\u0275mod=d.oAB({type:u}),u.\u0275inj=d.cJS({imports:[[t.ez,N.WG,V.vh,S.q6,C.s,x.Q]]}),u})(),k=(()=>{class u{}return u.\u0275fac=function(_){return new(_||u)},u.\u0275mod=d.oAB({type:u}),u.\u0275inj=d.cJS({imports:[[t.ez,g.Bz,T.$6,z.X,m.PV,y]]}),u})()},6559:(Z,h,r)=>{r.d(h,{ng:()=>w,H0:()=>O});var t=r(5e3),g=r(1721),T=r(655),z=r(9808),m=r(226);const x=["nzType","avatar"];function N(i,l){if(1&i&&(t.TgZ(0,"div",5),t._UZ(1,"nz-skeleton-element",6),t.qZA()),2&i){const n=t.oxw(2);t.xp6(1),t.Q6J("nzSize",n.avatar.size||"default")("nzShape",n.avatar.shape||"circle")}}function d(i,l){if(1&i&&t._UZ(0,"h3",7),2&i){const n=t.oxw(2);t.Udp("width",n.toCSSUnit(n.title.width))}}function y(i,l){if(1&i&&t._UZ(0,"li"),2&i){const n=l.index,o=t.oxw(3);t.Udp("width",o.toCSSUnit(o.widthList[n]))}}function k(i,l){if(1&i&&(t.TgZ(0,"ul",8),t.YNc(1,y,1,2,"li",9),t.qZA()),2&i){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.rowsList)}}function u(i,l){if(1&i&&(t.ynx(0),t.YNc(1,N,2,2,"div",1),t.TgZ(2,"div",2),t.YNc(3,d,1,2,"h3",3),t.YNc(4,k,2,1,"ul",4),t.qZA(),t.BQk()),2&i){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!!n.nzAvatar),t.xp6(2),t.Q6J("ngIf",!!n.nzTitle),t.xp6(1),t.Q6J("ngIf",!!n.nzParagraph)}}function v(i,l){1&i&&(t.ynx(0),t.Hsn(1),t.BQk())}const _=["*"];let A=(()=>{class i{constructor(){this.nzActive=!1,this.nzBlock=!1}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275dir=t.lG2({type:i,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(n,o){2&n&&t.ekj("ant-skeleton-active",o.nzActive)("ant-skeleton-block",o.nzBlock)},inputs:{nzActive:"nzActive",nzType:"nzType",nzBlock:"nzBlock"}}),(0,T.gn)([(0,g.yF)()],i.prototype,"nzBlock",void 0),i})(),M=(()=>{class i{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(n){if(n.nzSize&&"number"==typeof this.nzSize){const o=`${this.nzSize}px`;this.styleMap={width:o,height:o,"line-height":o}}else this.styleMap={}}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},features:[t.TTD],attrs:x,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(n,o){1&n&&t._UZ(0,"span",0),2&n&&(t.ekj("ant-skeleton-avatar-square","square"===o.nzShape)("ant-skeleton-avatar-circle","circle"===o.nzShape)("ant-skeleton-avatar-lg","large"===o.nzSize)("ant-skeleton-avatar-sm","small"===o.nzSize),t.Q6J("ngStyle",o.styleMap))},directives:[z.PC],encapsulation:2,changeDetection:0}),i})(),w=(()=>{class i{constructor(n,o,e){this.cdr=n,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[],o.addClass(e.nativeElement,"ant-skeleton")}toCSSUnit(n=""){return(0,g.WX)(n)}getTitleProps(){const n=!!this.nzAvatar,o=!!this.nzParagraph;let e="";return!n&&o?e="38%":n&&o&&(e="50%"),Object.assign({width:e},this.getProps(this.nzTitle))}getAvatarProps(){return Object.assign({shape:this.nzTitle&&!this.nzParagraph?"square":"circle",size:"large"},this.getProps(this.nzAvatar))}getParagraphProps(){const n=!!this.nzAvatar,o=!!this.nzTitle,e={};return(!n||!o)&&(e.width="61%"),e.rows=!n&&o?3:2,Object.assign(Object.assign({},e),this.getProps(this.nzParagraph))}getProps(n){return n&&"object"==typeof n?n:{}}getWidthList(){const{width:n,rows:o}=this.paragraph;let e=[];return n&&Array.isArray(n)?e=n:n&&!Array.isArray(n)&&(e=[],e[o-1]=n),e}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(n){(n.nzTitle||n.nzAvatar||n.nzParagraph)&&this.updateProps()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-skeleton"]],hostVars:6,hostBindings:function(n,o){2&n&&t.ekj("ant-skeleton-with-avatar",!!o.nzAvatar)("ant-skeleton-active",o.nzActive)("ant-skeleton-round",!!o.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],features:[t.TTD],ngContentSelectors:_,decls:2,vars:2,consts:[[4,"ngIf"],["class","ant-skeleton-header",4,"ngIf"],[1,"ant-skeleton-content"],["class","ant-skeleton-title",3,"width",4,"ngIf"],["class","ant-skeleton-paragraph",4,"ngIf"],[1,"ant-skeleton-header"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[1,"ant-skeleton-paragraph"],[3,"width",4,"ngFor","ngForOf"]],template:function(n,o){1&n&&(t.F$t(),t.YNc(0,u,5,3,"ng-container",0),t.YNc(1,v,2,0,"ng-container",0)),2&n&&(t.Q6J("ngIf",o.nzLoading),t.xp6(1),t.Q6J("ngIf",!o.nzLoading))},directives:[M,z.O5,A,z.sg],encapsulation:2,changeDetection:0}),i})(),O=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.vT,z.ez]]}),i})()},5249:(Z,h,r)=>{r.d(h,{my:()=>w,A2:()=>l});var t=r(5e3),g=r(8929),T=r(7625),z=r(226),m=r(9808),C=r(969),x=r(925);let S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez]]}),n})();const N=function(n){return{$implicit:n}};function d(n,o){if(1&n&&t.GkF(0,3),2&n){const e=t.oxw();t.Q6J("ngTemplateOutlet",e.nzValueTemplate)("ngTemplateOutletContext",t.VKq(2,N,e.nzValue))}}function y(n,o){if(1&n&&(t.TgZ(0,"span",6),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.displayInt)}}function k(n,o){if(1&n&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.displayDecimal)}}function u(n,o){if(1&n&&(t.ynx(0),t.YNc(1,y,2,1,"span",4),t.YNc(2,k,2,1,"span",5),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.displayInt),t.xp6(1),t.Q6J("ngIf",e.displayDecimal)}}function v(n,o){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.nzTitle)}}function _(n,o){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.nzPrefix)}}function A(n,o){if(1&n&&(t.TgZ(0,"span",7),t.YNc(1,_,2,1,"ng-container",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",e.nzPrefix)}}function E(n,o){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.nzSuffix)}}function M(n,o){if(1&n&&(t.TgZ(0,"span",8),t.YNc(1,E,2,1,"ng-container",2),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("nzStringTemplateOutlet",e.nzSuffix)}}let D=(()=>{class n{constructor(e){this.locale_id=e,this.displayInt="",this.displayDecimal=""}ngOnChanges(){this.formatNumber()}formatNumber(){const e="number"==typeof this.nzValue?".":(0,m.dv)(this.locale_id,m.wE.Decimal),p=String(this.nzValue),[I,P]=p.split(e);this.displayInt=I,this.displayDecimal=P?`${e}${P}`:""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.soG))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nz-statistic-number"]],inputs:{nzValue:"nzValue",nzValueTemplate:"nzValueTemplate"},exportAs:["nzStatisticNumber"],features:[t.TTD],decls:3,vars:2,consts:[[1,"ant-statistic-content-value"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ant-statistic-content-value-int",4,"ngIf"],["class","ant-statistic-content-value-decimal",4,"ngIf"],[1,"ant-statistic-content-value-int"],[1,"ant-statistic-content-value-decimal"]],template:function(e,p){1&e&&(t.TgZ(0,"span",0),t.YNc(1,d,1,4,"ng-container",1),t.YNc(2,u,3,2,"ng-container",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",p.nzValueTemplate),t.xp6(1),t.Q6J("ngIf",!p.nzValueTemplate))},directives:[m.O5,m.tP],encapsulation:2,changeDetection:0}),n})(),w=(()=>{class n{constructor(e,p){this.cdr=e,this.directionality=p,this.nzValueStyle={},this.dir="ltr",this.destroy$=new g.xQ}ngOnInit(){var e;null===(e=this.directionality.change)||void 0===e||e.pipe((0,T.R)(this.destroy$)).subscribe(p=>{this.dir=p,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(z.Is,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["nz-statistic"]],inputs:{nzPrefix:"nzPrefix",nzSuffix:"nzSuffix",nzTitle:"nzTitle",nzValue:"nzValue",nzValueStyle:"nzValueStyle",nzValueTemplate:"nzValueTemplate"},exportAs:["nzStatistic"],decls:7,vars:8,consts:[[1,"ant-statistic"],[1,"ant-statistic-title"],[4,"nzStringTemplateOutlet"],[1,"ant-statistic-content",3,"ngStyle"],["class","ant-statistic-content-prefix",4,"ngIf"],[3,"nzValue","nzValueTemplate"],["class","ant-statistic-content-suffix",4,"ngIf"],[1,"ant-statistic-content-prefix"],[1,"ant-statistic-content-suffix"]],template:function(e,p){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,v,2,1,"ng-container",2),t.qZA(),t.TgZ(3,"div",3),t.YNc(4,A,2,1,"span",4),t._UZ(5,"nz-statistic-number",5),t.YNc(6,M,2,1,"span",6),t.qZA(),t.qZA()),2&e&&(t.ekj("ant-statistic-rtl","rtl"===p.dir),t.xp6(2),t.Q6J("nzStringTemplateOutlet",p.nzTitle),t.xp6(1),t.Q6J("ngStyle",p.nzValueStyle),t.xp6(1),t.Q6J("ngIf",p.nzPrefix),t.xp6(1),t.Q6J("nzValue",p.nzValue)("nzValueTemplate",p.nzValueTemplate),t.xp6(1),t.Q6J("ngIf",p.nzSuffix))},directives:[D,C.f,m.PC,m.O5],encapsulation:2,changeDetection:0}),n})(),l=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[z.vT,m.ez,x.ud,C.T,S]]}),n})()}}]);