"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4276],{5749:(E,h,e)=>{e.d(h,{m:()=>L});var n=e(5e3),u=e(9808),t=e(325),r=e(8481),d=e(3610),f=e(4850),y=e(712),z=e(7484),O=e(7881),M=e(1894),v=e(3098),P=e(6550),_=e(6949);const x=function(a,m){return{displayName:a,profileImagePath:m}};function A(a,m){if(1&a&&(n._UZ(0,"cvc-user-avatar",12),n.TgZ(1,"span",13),n._uU(2),n.qZA()),2&a){const s=n.oxw().ngIf;n.Q6J("user",n.WLB(2,x,s.name,s.profileImagePath)),n.xp6(2),n.Oqu(s.name)}}function S(a,m){if(1&a&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&a){const s=m.ngIf;n.xp6(1),n.Oqu(s)}}function b(a,m){if(1&a&&(n.ynx(0),n.TgZ(1,"cvc-link-tag",14),n._uU(2),n.qZA(),n.BQk()),2&a){const s=n.oxw().ngIf;n.xp6(1),n.Q6J("href",s.url),n.xp6(1),n.hij(" ",s.name," ")}}function B(a,m){if(1&a&&(n.ynx(0),n.TgZ(1,"nz-card",4),n.YNc(2,A,3,5,"ng-template",null,5,n.W1O),n.TgZ(4,"nz-row"),n.TgZ(5,"nz-col",6),n.TgZ(6,"div",7),n.TgZ(7,"p",8),n.YNc(8,S,2,1,"span",9),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"nz-descriptions",10),n.TgZ(10,"nz-descriptions-item",11),n.YNc(11,b,3,2,"ng-container",9),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&a){const s=m.ngIf,Z=n.MAs(3);n.oxw();const w=n.MAs(4),W=n.MAs(6);n.xp6(1),n.Q6J("nzTitle",Z),n.xp6(7),n.Q6J("ngIf",s.description)("ngIfElse",w),n.xp6(1),n.Q6J("nzColumn",2),n.xp6(2),n.Q6J("ngIf",s.url)("ngIfElse",W)}}function I(a,m){1&a&&n._uU(0," Organization has not provided a description.\n")}function D(a,m){1&a&&n._uU(0," --\n")}let Q=(()=>{class a{constructor(s){this.gql=s}ngOnInit(){if(void 0===this.orgId)throw new Error("cvc-org-popover requires orgId input.");this.org$=this.gql.watch({orgId:this.orgId}).valueChanges.pipe((0,f.U)(({data:s})=>s.organization))}}return a.\u0275fac=function(s){return new(s||a)(n.Y36(y.X5f))},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-organization-popover"]],inputs:{orgId:"orgId"},decls:7,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDesc",""],["noHomepage",""],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSpan","24"],[1,"popover-text"],["nz-typography",""],[4,"ngIf","ngIfElse"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Homepage"],["size","default",3,"user"],["nz-typography","","nzStyle","default",1,"display-name"],[3,"href"]],template:function(s,Z){1&s&&(n.TgZ(0,"div",0),n.YNc(1,B,12,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA(),n.YNc(3,I,1,0,"ng-template",null,2,n.W1O),n.YNc(5,D,1,0,"ng-template",null,3,n.W1O)),2&s&&(n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,Z.org$)))},directives:[u.O5,z.bd,O.L,M.SK,M.t3,v.R7,v.uj,P.l],pipes:[_.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),a})();var c=e(647);function o(a,m){}function i(a,m){if(1&a&&(n.ynx(0),n.TgZ(1,"a",5),n.YNc(2,o,0,0,"ng-template",6),n.qZA(),n.BQk()),2&a){const s=n.oxw(),Z=n.MAs(2);n.xp6(1),n.MGl("routerLink","/organizations/",s.org.id,""),n.xp6(1),n.Q6J("ngTemplateOutlet",Z)}}function p(a,m){}function l(a,m){if(1&a&&n._UZ(0,"cvc-organization-popover",10),2&a){const s=n.oxw(3);n.Q6J("orgId",s.org.id)}}function T(a,m){if(1&a&&n.YNc(0,l,1,1,"cvc-organization-popover",9),2&a){const s=n.oxw(2);n.Q6J("ngIf",s.enablePopover)}}function g(a,m){if(1&a&&(n.TgZ(0,"nz-tag",7),n.YNc(1,p,0,0,"ng-template",6),n.qZA(),n.YNc(2,T,1,1,"ng-template",null,8,n.W1O)),2&a){const s=n.MAs(3);n.oxw();const Z=n.MAs(8);n.Q6J("nzPopoverContent",s),n.xp6(1),n.Q6J("ngTemplateOutlet",Z)}}function C(a,m){}function U(a,m){if(1&a&&(n.TgZ(0,"nz-tag"),n.YNc(1,C,0,0,"ng-template",6),n.qZA()),2&a){n.oxw();const s=n.MAs(8);n.xp6(1),n.Q6J("ngTemplateOutlet",s)}}function J(a,m){}function R(a,m){if(1&a&&n.YNc(0,J,0,0,"ng-template",6),2&a){n.oxw();const s=n.MAs(2);n.Q6J("ngTemplateOutlet",s)}}function F(a,m){if(1&a&&(n._UZ(0,"i",11),n._uU(1)),2&a){const s=n.oxw();n.xp6(1),n.hij(" ",s.org.name,"\n")}}let L=(()=>{class a{constructor(){this.linked=!0,this.enablePopover=!0}ngOnInit(){if(void 0===this.org)throw new Error("cvc-org-tag requires valid TagLinkableOrganization input, none provided.")}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-organization-tag"]],inputs:{org:"org",linked:"linked",enablePopover:"enablePopover"},decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverContent"],["orgPopover",""],[3,"orgId",4,"ngIf"],[3,"orgId"],["nz-icon","","nzType","civic-organization","nzTheme","twotone","nzTwotoneColor","#58A0C4"]],template:function(s,Z){if(1&s&&(n.YNc(0,i,3,2,"ng-container",0),n.YNc(1,g,4,2,"ng-template",null,1,n.W1O),n.YNc(3,U,2,1,"ng-template",null,2,n.W1O),n.YNc(5,R,1,1,"ng-template",null,3,n.W1O),n.YNc(7,F,2,1,"ng-template",null,4,n.W1O)),2&s){const w=n.MAs(6);n.Q6J("ngIf",Z.linked)("ngIfElse",w)}},directives:[u.O5,t.yS,u.tP,r.j,d.lU,Q,c.Ls],styles:["[_nghost-%COMP%]{display:inline-block}"]}),a})()},9180:(E,h,e)=>{e.d(h,{Z:()=>t});var n=e(5e3);const u=["*"];let t=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(f){return new(f||r)},r.\u0275cmp=n.Xpm({type:r,selectors:[["cvc-form-buttons"]],ngContentSelectors:u,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(f,y){1&f&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),r})()},4375:(E,h,e)=>{e.d(h,{R:()=>t});var n=e(9808),u=e(5e3);let t=(()=>{class r{}return r.\u0275fac=function(f){return new(f||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[[n.ez]]}),r})()},8227:(E,h,e)=>{e.d(h,{q:()=>p});var n=e(5e3),u=e(8929),t=e(4850),r=e(373),d=e(2868),f=e(7625),y=e(1793),z=e(9350),O=e(9808),M=e(6042),v=e(2683),P=e(2643),_=e(3677),x=e(8144),A=e(6699),S=e(4219);function b(l,T){1&l&&n.Hsn(0)}function B(l,T){1&l&&n.GkF(0)}function I(l,T){if(1&l&&(n.ynx(0),n.YNc(1,B,1,0,"ng-container",5),n.BQk()),2&l){n.oxw(2);const g=n.MAs(1);n.xp6(1),n.Q6J("ngTemplateOutlet",g)}}function D(l,T){1&l&&n.GkF(0)}function Q(l,T){if(1&l&&(n.ynx(0),n.TgZ(1,"nz-button-group",6),n.YNc(2,D,1,0,"ng-container",5),n.TgZ(3,"button",7),n.TgZ(4,"nz-space",8),n.TgZ(5,"span"),n._uU(6,"for"),n.qZA(),n._UZ(7,"nz-avatar",9),n._UZ(8,"i",10),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&l){n.oxw();const g=n.MAs(4),C=n.oxw(),U=n.MAs(1);n.xp6(1),n.Q6J("nzSize",C.nzSize),n.xp6(1),n.Q6J("ngTemplateOutlet",U),n.xp6(1),n.Q6J("nzType",C.buttonType)("nzDanger",C.nzDanger)("disabled",C.disabled)("nzDropdownMenu",g),n.xp6(1),n.Q6J("nzSize",4),n.xp6(3),n.Q6J("nzSrc",null==C.selectedOrg?null:C.selectedOrg.profileImagePath)("nzSize",10)("nzShape","square")}}function c(l,T){if(1&l){const g=n.EpF();n.TgZ(0,"li",11),n.NdJ("click",function(){const J=n.CHM(g).$implicit;return n.oxw(2).selectOrg(J)}),n._UZ(1,"nz-avatar",12),n._uU(2),n.qZA()}if(2&l){const g=T.$implicit,C=n.oxw(2);n.Q6J("nzSelected",(null==C.selectedOrg?null:C.selectedOrg.id)===g.id),n.xp6(1),n.Q6J("nzSrc",null==g?null:g.profileImagePath)("nzSize",10)("nzShape","square"),n.xp6(1),n.hij(" ",g.name," ")}}function o(l,T){if(1&l&&(n.ynx(0),n.YNc(1,I,2,1,"ng-container",1),n.YNc(2,Q,9,10,"ng-container",1),n.TgZ(3,"nz-dropdown-menu",null,2),n.TgZ(5,"ul",3),n.YNc(6,c,3,5,"li",4),n.qZA(),n.qZA(),n.BQk()),2&l){const g=T.ngIf;n.xp6(1),n.Q6J("ngIf",g.length<=1),n.xp6(1),n.Q6J("ngIf",g.length>1),n.xp6(4),n.Q6J("ngForOf",g)}}const i=["*"];let p=(()=>{class l{constructor(g){this.viewerService=g,this.selectedOrgChange=new n.vpe,this.buttonType="primary",this.nzDanger=!1,this.nzSize="small",this.destroy$=new u.xQ}get disabled(){return this.button.disabled}selectOrg(g){this.selectedOrg=g,this.selectedOrgChange.emit(g)}refreshViewer(){setTimeout(()=>{this.viewerService.refetch()},2500)}ngOnInit(){this.organizations$=this.viewerService.viewer$.pipe((0,t.U)(g=>g.organizations)),this.mostRecentOrg$=this.viewerService.viewer$.pipe((0,r.j)("mostRecentOrg"),(0,d.b)(g=>{g&&(this.selectedOrg=g,this.selectedOrgChange.emit(g))})),this.mostRecentOrg$.pipe((0,f.R)(this.destroy$)).subscribe()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(g){return new(g||l)(n.Y36(z.a))},l.\u0275cmp=n.Xpm({type:l,selectors:[["cvc-org-selector-btn-group"]],contentQueries:function(g,C,U){if(1&g&&n.Suo(U,y.m,5),2&g){let J;n.iGM(J=n.CRH())&&(C.button=J.first)}},inputs:{selectedOrg:"selectedOrg",buttonType:"buttonType",nzDanger:"nzDanger",nzSize:"nzSize"},outputs:{selectedOrgChange:"selectedOrgChange"},ngContentSelectors:i,decls:4,vars:3,consts:[["submitButton",""],[4,"ngIf"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[3,"nzSize"],["type","button","nz-button","","nz-dropdown","",1,"org-dropdown-btn",3,"nzType","nzDanger","disabled","nzDropdownMenu"],["nzDirection","horizontal",3,"nzSize"],[3,"nzSrc","nzSize","nzShape"],["nz-icon","","nzType","down"],["nz-menu-item","",3,"nzSelected","click"],[2,"background-color","#f0f5ff",3,"nzSrc","nzSize","nzShape"]],template:function(g,C){1&g&&(n.F$t(),n.YNc(0,b,1,0,"ng-template",null,0,n.W1O),n.YNc(2,o,7,3,"ng-container",1),n.ALo(3,"async")),2&g&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,1,C.organizations$)))},directives:[O.O5,O.tP,M.fY,v.w,M.ix,P.dQ,_.wA,_.cm,x.NU,A.Dz,_.RR,S.wO,O.sg,S.r9],pipes:[O.Ov],styles:["[_nghost-%COMP%]{display:inline-block}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:0 6px}"]}),l})()},1825:(E,h,e)=>{e.d(h,{A:()=>y});var n=e(9808),u=e(6042),t=e(6699),r=e(3677),d=e(8144),f=e(5e3);let y=(()=>{class z{}return z.\u0275fac=function(M){return new(M||z)},z.\u0275mod=f.oAB({type:z}),z.\u0275inj=f.cJS({imports:[[n.ez,u.sL,t.Rt,r.b1,d.zf]]}),z})()},1793:(E,h,e)=>{e.d(h,{m:()=>u});var n=e(5e3);let u=(()=>{class t{constructor(d){this.el=d,this.observer=new MutationObserver(([f])=>this.disabled=f.target.disabled),this.observer.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.observer.disconnect()}}return t.\u0275fac=function(d){return new(d||t)(n.Y36(n.SBq))},t.\u0275dir=n.lG2({type:t,selectors:[["button","cvcOrgSelectorBtn",""]],hostVars:2,hostBindings:function(d,f){2&d&&n.ekj("ant-btn-dangerous",f.nzDanger)}}),t})()},4623:(E,h,e)=>{e.d(h,{K:()=>M});var n=e(9808),u=e(8776),t=e(5e3),r=e(1047),d=e(4182);const y={name:"comment-textarea",component:(()=>{class v extends u.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(_,x)=>{var A;return`Comments must be at least ${null===(A=x.templateOptions)||void 0===A?void 0:A.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return v.\u0275fac=function(){let P;return function(x){return(P||(P=t.n5z(v)))(x||v)}}(),v.\u0275cmp=t.Xpm({type:v,selectors:[["comment-textarea-type"]],features:[t.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(_,x){1&_&&t._UZ(0,"textarea",0),2&_&&t.Q6J("formControl",x.formControl)("formlyAttributes",x.field)},directives:[r.Zp,d.Fj,d.JJ,d.oH,u.VQ],styles:[""],changeDetection:0}),v})(),wrappers:["form-field"]};var z=e(4546),O=e(9139);let M=(()=>{class v{}return v.\u0275fac=function(_){return new(_||v)},v.\u0275mod=t.oAB({type:v}),v.\u0275inj=t.cJS({imports:[[n.ez,d.UX,u.X0.forChild({types:[y]}),O.u,z.U5,r.o7]]}),v})()},7733:(E,h,e)=>{e.r(h),e.d(h,{CurationQueuesModule:()=>Q});var n=e(9808),u=e(325),t=e(712),r=e(5e3),d=e(3756);let f=(()=>{class c{constructor(){this.status=t.RTy.Submitted}ngOnInit(){}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=r.Xpm({type:c,selectors:[["cvc-pending-assertions-page"]],decls:1,vars:1,consts:[["cvcTitle","Browse Pending Assertions",3,"status"]],template:function(i,p){1&i&&r._UZ(0,"cvc-assertions-table",0),2&i&&r.Q6J("status",p.status)},directives:[d.x],styles:[""]}),c})();var y=e(8965);let z=(()=>{class c{constructor(){this.status=t.RTy.Submitted}ngOnInit(){}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=r.Xpm({type:c,selectors:[["cvc-pending-evidence-page"]],decls:1,vars:1,consts:[["cvcTitle","Browse Pending Evidence",3,"status"]],template:function(i,p){1&i&&r._UZ(0,"cvc-evidence-table",0),2&i&&r.Q6J("status",p.status)},directives:[y.a],styles:[""]}),c})();var O=e(9814);const v=[{path:"",redirectTo:"pending-sources",pathMatch:"full"},{path:"pending-sources",component:(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=r.Xpm({type:c,selectors:[["cvc-pending-sources-page"]],decls:1,vars:0,consts:[["cvcTitle","Browse Suggested Sources"]],template:function(i,p){1&i&&r._UZ(0,"cvc-source-suggestions-table",0)},directives:[O.O],styles:[""]}),c})(),data:{breadcrumb:"Pending Source Suggestions"}},{path:"pending-evidence",component:z,data:{breadcrumb:"Pending Evidence Items"}},{path:"pending-assertions",component:f,data:{breadcrumb:"Pending Assertions"}}];let P=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=r.oAB({type:c}),c.\u0275inj=r.cJS({imports:[[u.Bz.forChild(v)],u.Bz]}),c})();var _=e(5630),x=e(1945),A=e(6949),S=e(8762),b=e(647),B=e(8144),I=e(3618),D=e(1894);let Q=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=r.oAB({type:c}),c.\u0275inj=r.cJS({imports:[[n.ez,A.WG,P,x.KJ,b.PV,B.zf,I.ZJ,D.Jb,_.D,S.c]]}),c})()},7563:(E,h,e)=>{e.r(h),e.d(h,{CurationModule:()=>c});var n=e(9808),u=e(325),t=e(5e3),r=e(8992),d=e(1945),f=e(1894),y=e(647),z=e(3618),O=e(2233);const _=[{path:"",component:(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(p){return new(p||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-curation-view"]],decls:1,vars:0,template:function(p,l){1&p&&t._UZ(0,"router-outlet")},directives:[u.lC],styles:[""]}),o})(),children:[{path:"",redirectTo:"activity",pathMatch:"full"},{path:"activity",component:(()=>{class o{constructor(){this.tabs=[{routeName:"curation-timeline",iconName:"civic-event",tabLabel:"Timeline"}]}}return o.\u0275fac=function(p){return new(p||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-curation-activity-view"]],decls:19,vars:4,consts:[[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzType","civic:event"],["nzFlex","600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],[3,"nzSpan"],[3,"tabs"],[1,"content"]],template:function(p,l){1&p&&(t._UZ(0,"cvc-section-navigation"),t.TgZ(1,"nz-page-header",0),t.TgZ(2,"nz-page-header-content"),t.TgZ(3,"nz-row",1),t.TgZ(4,"nz-col",2),t._UZ(5,"i",3),t.qZA(),t.TgZ(6,"nz-col",4),t.TgZ(7,"h2"),t._uU(8,"Curation Event Timeline"),t.qZA(),t.TgZ(9,"p",5),t._uU(10,"All CIViC curation activity is logged and publicly available, thus esablishing the provenance of its assertions, summaries, associations, and acknowledging the work of collaborators."),t.qZA(),t.qZA(),t._UZ(11,"nz-col",6),t.qZA(),t.TgZ(12,"nz-row"),t.TgZ(13,"nz-col",7),t._UZ(14,"cvc-tab-navigation",8),t.qZA(),t.qZA(),t.TgZ(15,"nz-row"),t.TgZ(16,"nz-col",7),t.TgZ(17,"div",9),t._UZ(18,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&p&&(t.xp6(9),t.Q6J("nzEllipsisRows",2),t.xp6(4),t.Q6J("nzSpan",24),t.xp6(1),t.Q6J("tabs",l.tabs),t.xp6(2),t.Q6J("nzSpan",24))},directives:[r.I,d.$O,d.u5,f.SK,f.t3,y.Ls,z.ZU,O.P,u.lC],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),o})(),loadChildren:()=>Promise.all([e.e(4292),e.e(3894)]).then(e.bind(e,6461)).then(o=>o.CurationActivityModule),data:{breadcrumb:"Activity"}},{path:"queues",component:(()=>{class o{constructor(){this.tabs=[{routeName:"pending-sources",iconName:"civic-source",tabLabel:"Sources Queue"},{routeName:"pending-evidence",iconName:"civic-evidence",tabLabel:"Evidence Queue"},{routeName:"pending-assertions",iconName:"civic-assertion",tabLabel:"Assertions Queue"}]}}return o.\u0275fac=function(p){return new(p||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-curation-queues-view"]],decls:19,vars:4,consts:[[1,"site-page-header"],[1,"header-content"],["nzFlex","64px",1,"header-icon"],["nz-icon","","nzType","file-add"],["nzFlex","600px",1,"header-description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzFlex","auto",1,"header-links"],[3,"nzSpan"],[3,"tabs"],[1,"content"]],template:function(p,l){1&p&&(t._UZ(0,"cvc-section-navigation"),t.TgZ(1,"nz-page-header",0),t.TgZ(2,"nz-page-header-content"),t.TgZ(3,"nz-row",1),t.TgZ(4,"nz-col",2),t._UZ(5,"i",3),t.qZA(),t.TgZ(6,"nz-col",4),t.TgZ(7,"h2"),t._uU(8,"Curation Queues"),t.qZA(),t.TgZ(9,"p",5),t._uU(10,"New submitted Evidence, Assertions, and Source Suggestions must be accepted by a CIViC Editor. These Curation Queues list items in need of Editor moderation."),t.qZA(),t.qZA(),t._UZ(11,"nz-col",6),t.qZA(),t.TgZ(12,"nz-row"),t.TgZ(13,"nz-col",7),t._UZ(14,"cvc-tab-navigation",8),t.qZA(),t.qZA(),t.TgZ(15,"nz-row"),t.TgZ(16,"nz-col",7),t.TgZ(17,"div",9),t._UZ(18,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&p&&(t.xp6(9),t.Q6J("nzEllipsisRows",2),t.xp6(4),t.Q6J("nzSpan",24),t.xp6(1),t.Q6J("tabs",l.tabs),t.xp6(2),t.Q6J("nzSpan",24))},directives:[r.I,d.$O,d.u5,f.SK,f.t3,y.Ls,z.ZU,O.P,u.lC],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content{background-color:#f0f0f0;border-top-left-radius:8px;border-top-right-radius:8px;margin:-12px -16px 16px;border-bottom:1px solid #bfbfbf}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon{padding:12px 0 12px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-icon i   svg{width:100%;height:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description{padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description h2{color:#262626;margin:-8px 0 0;font-weight:500}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-description p{color:#262626;margin:-2px 0 0;padding:0;font-size:95%;line-height:1.5em}[_nghost-%COMP%]     nz-page-header:first-of-type .header-content .header-links{text-align:right;padding:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0;padding-bottom:12px}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),o})(),loadChildren:()=>Promise.resolve().then(e.bind(e,7733)).then(o=>o.CurationQueuesModule),data:{breadcrumb:"Queues"}}]}];let x=(()=>{class o{}return o.\u0275fac=function(p){return new(p||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild(_)],u.Bz]}),o})();var A=e(7733),S=e(2832);let b=(()=>{class o{}return o.\u0275fac=function(p){return new(p||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,S.W]]}),o})();var B=e(767);let I=(()=>{class o{}return o.\u0275fac=function(p){return new(p||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,B.Q]]}),o})();var D=e(9441);let Q=(()=>{class o{}return o.\u0275fac=function(p){return new(p||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,D.s]]}),o})(),c=(()=>{class o{}return o.\u0275fac=function(p){return new(p||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,x,A.CurationQueuesModule,b,I,Q]]}),o})()}}]);