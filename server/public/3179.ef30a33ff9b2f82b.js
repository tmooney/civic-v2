"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3179],{9180:(I,S,n)=>{n.d(S,{Z:()=>d});var t=n(5e3);const u=["*"];let d=(()=>{class p{constructor(){}ngOnInit(){}}return p.\u0275fac=function(z){return new(z||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["cvc-form-buttons"]],ngContentSelectors:u,decls:2,vars:0,consts:[[1,"form-buttons"]],template:function(z,P){1&z&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}.form-buttons[_ngcontent-%COMP%]{text-align:right}"]}),p})()},4375:(I,S,n)=>{n.d(S,{R:()=>d});var t=n(9808),u=n(5e3);let d=(()=>{class p{}return p.\u0275fac=function(z){return new(z||p)},p.\u0275mod=u.oAB({type:p}),p.\u0275inj=u.cJS({imports:[[t.ez]]}),p})()},8227:(I,S,n)=>{n.d(S,{q:()=>m});var t=n(5e3),u=n(8929),d=n(4850),p=n(373),f=n(2868),z=n(7625),P=n(1793),C=n(9350),e=n(9808),y=n(6042),v=n(2683),T=n(2643),h=n(3677),M=n(8144),x=n(6699),b=n(4219);function G(o,i){1&o&&t.Hsn(0)}function U(o,i){1&o&&t.GkF(0)}function N(o,i){if(1&o&&(t.ynx(0),t.YNc(1,U,1,0,"ng-container",5),t.BQk()),2&o){t.oxw(2);const a=t.MAs(1);t.xp6(1),t.Q6J("ngTemplateOutlet",a)}}function B(o,i){1&o&&t.GkF(0)}function k(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"nz-button-group",6),t.YNc(2,B,1,0,"ng-container",5),t.TgZ(3,"button",7),t.TgZ(4,"nz-space",8),t.TgZ(5,"span"),t._uU(6,"for"),t.qZA(),t._UZ(7,"nz-avatar",9),t._UZ(8,"i",10),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&o){t.oxw();const a=t.MAs(4),_=t.oxw(),R=t.MAs(1);t.xp6(1),t.Q6J("nzSize",_.nzSize),t.xp6(1),t.Q6J("ngTemplateOutlet",R),t.xp6(1),t.Q6J("nzType",_.buttonType)("nzDanger",_.nzDanger)("disabled",_.disabled)("nzDropdownMenu",a),t.xp6(1),t.Q6J("nzSize",4),t.xp6(3),t.Q6J("nzSrc",null==_.selectedOrg?null:_.selectedOrg.profileImagePath)("nzSize",10)("nzShape","square")}}function A(o,i){if(1&o){const a=t.EpF();t.TgZ(0,"li",11),t.NdJ("click",function(){const Z=t.CHM(a).$implicit;return t.oxw(2).selectOrg(Z)}),t._UZ(1,"nz-avatar",12),t._uU(2),t.qZA()}if(2&o){const a=i.$implicit,_=t.oxw(2);t.Q6J("nzSelected",(null==_.selectedOrg?null:_.selectedOrg.id)===a.id),t.xp6(1),t.Q6J("nzSrc",null==a?null:a.profileImagePath)("nzSize",10)("nzShape","square"),t.xp6(1),t.hij(" ",a.name," ")}}function D(o,i){if(1&o&&(t.ynx(0),t.YNc(1,N,2,1,"ng-container",1),t.YNc(2,k,9,10,"ng-container",1),t.TgZ(3,"nz-dropdown-menu",null,2),t.TgZ(5,"ul",3),t.YNc(6,A,3,5,"li",4),t.qZA(),t.qZA(),t.BQk()),2&o){const a=i.ngIf;t.xp6(1),t.Q6J("ngIf",a.length<=1),t.xp6(1),t.Q6J("ngIf",a.length>1),t.xp6(4),t.Q6J("ngForOf",a)}}const l=["*"];let m=(()=>{class o{constructor(a){this.viewerService=a,this.selectedOrgChange=new t.vpe,this.buttonType="primary",this.nzDanger=!1,this.nzSize="small",this.destroy$=new u.xQ}get disabled(){return this.button.disabled}selectOrg(a){this.selectedOrg=a,this.selectedOrgChange.emit(a)}ngOnInit(){this.organizations$=this.viewerService.viewer$.pipe((0,d.U)(a=>a.organizations)),this.mostRecentOrg$=this.viewerService.viewer$.pipe((0,p.j)("mostRecentOrg"),(0,f.b)(a=>{a&&(this.selectedOrg=a,this.selectedOrgChange.emit(a))})),this.mostRecentOrg$.pipe((0,z.R)(this.destroy$)).subscribe()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(C.a))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cvc-org-selector-btn-group"]],contentQueries:function(a,_,R){if(1&a&&t.Suo(R,P.m,5),2&a){let Z;t.iGM(Z=t.CRH())&&(_.button=Z.first)}},inputs:{selectedOrg:"selectedOrg",buttonType:"buttonType",nzDanger:"nzDanger",nzSize:"nzSize"},outputs:{selectedOrgChange:"selectedOrgChange"},ngContentSelectors:l,decls:4,vars:3,consts:[["submitButton",""],[4,"ngIf"],["orgMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[3,"nzSize"],["type","button","nz-button","","nz-dropdown","",1,"org-dropdown-btn",3,"nzType","nzDanger","disabled","nzDropdownMenu"],["nzDirection","horizontal",3,"nzSize"],[3,"nzSrc","nzSize","nzShape"],["nz-icon","","nzType","down"],["nz-menu-item","",3,"nzSelected","click"],[2,"background-color","#f0f5ff",3,"nzSrc","nzSize","nzShape"]],template:function(a,_){1&a&&(t.F$t(),t.YNc(0,G,1,0,"ng-template",null,0,t.W1O),t.YNc(2,D,7,3,"ng-container",1),t.ALo(3,"async")),2&a&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,_.organizations$)))},directives:[e.O5,e.tP,y.fY,v.w,y.ix,T.dQ,h.wA,h.cm,M.NU,x.Dz,h.RR,b.wO,e.sg,b.r9],pipes:[e.Ov],styles:["[_nghost-%COMP%]{display:inline-block}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:0 6px}"]}),o})()},1825:(I,S,n)=>{n.d(S,{A:()=>P});var t=n(9808),u=n(6042),d=n(6699),p=n(3677),f=n(8144),z=n(5e3);let P=(()=>{class C{}return C.\u0275fac=function(y){return new(y||C)},C.\u0275mod=z.oAB({type:C}),C.\u0275inj=z.cJS({imports:[[t.ez,u.sL,d.Rt,p.b1,f.zf]]}),C})()},1793:(I,S,n)=>{n.d(S,{m:()=>u});var t=n(5e3);let u=(()=>{class d{constructor(f){this.el=f,this.observer=new MutationObserver(([z])=>this.disabled=z.target.disabled),this.observer.observe(this.el.nativeElement,{attributeFilter:["disabled"],childList:!1,subtree:!1})}ngOnDestroy(){this.observer.disconnect()}}return d.\u0275fac=function(f){return new(f||d)(t.Y36(t.SBq))},d.\u0275dir=t.lG2({type:d,selectors:[["button","cvcOrgSelectorBtn",""]],hostVars:2,hostBindings:function(f,z){2&f&&t.ekj("ant-btn-dangerous",z.nzDanger)}}),d})()},4623:(I,S,n)=>{n.d(S,{K:()=>y});var t=n(9808),u=n(8776),d=n(5e3),p=n(1047),f=n(4182);const P={name:"comment-textarea",component:(()=>{class v extends u.fS{constructor(){super(...arguments),this.defaultOptions={defaultValue:"",validation:{messages:{minlength:(h,M)=>{var x;return`Comments must be at least ${null===(x=M.templateOptions)||void 0===x?void 0:x.minLength} characters in length.`}}},templateOptions:{rows:4}}}}return v.\u0275fac=function(){let T;return function(M){return(T||(T=d.n5z(v)))(M||v)}}(),v.\u0275cmp=d.Xpm({type:v,selectors:[["comment-textarea-type"]],features:[d.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(h,M){1&h&&d._UZ(0,"textarea",0),2&h&&d.Q6J("formControl",M.formControl)("formlyAttributes",M.field)},directives:[p.Zp,f.Fj,f.JJ,f.oH,u.VQ],styles:[""],changeDetection:0}),v})(),wrappers:["form-field"]};var C=n(4546),e=n(9139);let y=(()=>{class v{}return v.\u0275fac=function(h){return new(h||v)},v.\u0275mod=d.oAB({type:v}),v.\u0275inj=d.cJS({imports:[[t.ez,f.UX,u.X0.forChild({types:[P]}),e.u,C.U5,p.o7]]}),v})()},3179:(I,S,n)=>{n.r(S),n.d(S,{GenesReviseModule:()=>Ee});var t=n(9808),u=n(325),d=n(5630),p=n(1945),f=n(647),z=n(373),P=n(1059),C=n(4850),e=n(5e3),y=n(712),v=n(9350),T=n(8992),h=n(1894),M=n(8616),x=n(6949);function b(s,g){1&s&&(e.TgZ(0,"div"),e._UZ(1,"router-outlet"),e.qZA())}function G(s,g){1&s&&(e.TgZ(0,"nz-row",8),e.TgZ(1,"div",9),e._UZ(2,"cvc-login-prompt"),e.qZA(),e.qZA())}function U(s,g){if(1&s&&(e.ynx(0),e._UZ(1,"cvc-section-navigation",1),e.TgZ(2,"nz-page-header",2),e.TgZ(3,"nz-page-header-title",3),e._uU(4," REVISE "),e._UZ(5,"i",4),e._uU(6),e.qZA(),e.TgZ(7,"nz-page-header-subtitle"),e._uU(8),e.qZA(),e.TgZ(9,"nz-page-header-content"),e.TgZ(10,"div",5),e.YNc(11,b,2,0,"div",6),e.ALo(12,"ngrxPush"),e.YNc(13,G,3,0,"ng-template",null,7,e.W1O),e.qZA(),e.qZA(),e.qZA(),e.BQk()),2&s){const r=g.ngIf,c=e.MAs(14),O=e.oxw();e.xp6(1),e.Q6J("displayName",r.name),e.xp6(5),e.hij(" ",r.name," "),e.xp6(2),e.hij(" ",r.officialName," "),e.xp6(3),e.Q6J("ngIf",e.lcZ(12,5,O.isSignedIn$))("ngIfElse",c)}}let N=(()=>{class s{constructor(r,c,O){this.gql=r,this.route=c,this.viewerService=O,this.routeSub=this.route.params.subscribe(E=>{let J=this.gql.watch({geneId:+E.geneId}).valueChanges;this.loading$=J.pipe((0,z.j)("loading"),(0,P.O)(!0)),this.gene$=J.pipe((0,z.j)("data","gene")),this.commentsTotal$=this.gene$.pipe((0,z.j)("comments","totalCount")),this.flagsTotal$=this.gene$.pipe((0,z.j)("flags","totalCount")),this.revisionsTotal$=this.gene$.pipe((0,z.j)("revisions","totalCount"))})}ngOnInit(){this.isSignedIn$=this.viewerService.viewer$.pipe((0,C.U)(r=>r.signedIn))}ngOnDestroy(){this.routeSub.unsubscribe()}}return s.\u0275fac=function(r){return new(r||s)(e.Y36(y.TNk),e.Y36(u.gz),e.Y36(v.a))},s.\u0275cmp=e.Xpm({type:s,selectors:[["genes-revise"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzType","civic:gene"],[1,"content"],[4,"ngIf","ngIfElse"],["notSignedIn",""],["nzSpan","24","nzJustify","center"],["nz-col","","nzSpan","6"]],template:function(r,c){1&r&&(e.YNc(0,U,15,7,"ng-container",0),e.ALo(1,"async")),2&r&&e.Q6J("ngIf",e.lcZ(1,1,c.gene$))},directives:[t.O5,T.I,p.$O,p.u9,f.Ls,p.yG,p.u5,u.lC,h.SK,h.t3,M.u],pipes:[t.Ov,x.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),s})();var B=n(8144),k=n(6559),A=n(4182),D=n(4546),l=n(2359),m=n(8776),o=n(1825),i=n(7008),a=n(4375),_=n(6042),R=n(8390),Z=n(2079),w=n(5109),Y=n(4623),j=n(7462);let W=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[t.ez,u.Bz,A.UX,w.s,D.U5,l.L,h.Jb,_.sL,m.X0,o.A,i.B,a.R,Y.K,R.N,Z.g,j.o]]}),s})();var $=n(7484);let K=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[t.ez,x.WG,$.vh,h.Jb,B.zf,k.H0,p.KJ,W,d.D]]}),s})();var Q=n(8929),L=n(7625),V=n(6738),F=n(591),X=n(5284),H=n(537),q=n(9169);let ee=(()=>{class s{constructor(r,c){this.suggestGeneRevisionGQL=r,this.networkErrorService=c,this.destroy$=new Q.xQ,this.isSubmitting$=new F.X(!1),this.submitSuccess$=new F.X(!1),this.submitError$=new F.X([])}suggest(r){this.storeObj={id:r.id,__typename:(0,X.e)("Gene")},this.isSubmitting$.next(!0),this.suggestGeneRevisionGQL.mutate({input:r},{update:(c,{data:{suggestGeneRevision:O}})=>{c.modify({id:c.identify(this.storeObj),fields:{revisions:(E=[])=>O.gene.revisions}})}}).pipe((0,L.R)(this.destroy$),(0,H.x)(()=>{this.isSubmitting$.next(!1)})).subscribe({error:c=>{c.graphQLErrors.length>0?this.submitError$.next(c.graphQLErrors.map(O=>O.message)):c.networkError&&this.networkErrorService.networkError$.next(c.networkError)},complete:()=>{this.submitError$.next([]),this.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0)}})}cleanup(){this.submitError$.next([]),this.submitSuccess$.next(!1),this.isSubmitting$.next(!1),this.networkErrorService.networkError$.next(void 0)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return s.\u0275fac=function(r){return new(r||s)(e.LFG(y.D9L),e.LFG(q.Y))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var te=n(822),ne=n(9180),oe=n(8227),se=n(2643),re=n(1793),ie=n(2683);function ae(s,g){if(1&s&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",3),e.qZA()),2&s){const r=e.oxw().ngIf;e.xp6(1),e.Q6J("errors",r)}}function le(s,g){if(1&s&&(e.ynx(0),e.YNc(1,ae,2,1,"nz-form-item",1),e.BQk()),2&s){const r=g.ngIf;e.xp6(1),e.Q6J("ngIf",r.length>0)}}function ce(s,g){1&s&&(e.TgZ(0,"p"),e._uU(1,"View it on the "),e.TgZ(2,"a",7),e._uU(3,"Revisions Page"),e.qZA(),e._uU(4," or suggest another revision below."),e.qZA())}function ge(s,g){if(1&s&&(e.ynx(0),e._UZ(1,"nz-alert",4),e.YNc(2,ce,5,0,"ng-template",5,6,e.W1O),e.BQk()),2&s){const r=e.MAs(3);e.xp6(1),e.Q6J("nzDescription",r)}}function pe(s,g){if(1&s){const r=e.EpF();e.TgZ(0,"nz-form-item"),e.TgZ(1,"nz-form-control"),e.TgZ(2,"cvc-form-buttons"),e.TgZ(3,"cvc-org-selector-btn-group",8),e.NdJ("selectedOrgChange",function(O){return e.CHM(r),e.oxw().mostRecentOrg=O}),e.TgZ(4,"button",9),e._uU(5," Suggest Revision "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&s){const r=e.oxw();e.xp6(3),e.Q6J("selectedOrg",r.mostRecentOrg),e.xp6(1),e.Q6J("disabled",!r.formGroup.valid)}}let me=(()=>{class s{constructor(r,c,O){this.viewerService=r,this.revisionService=c,this.revisableFieldsGQL=O,this.destroy$=new Q.xQ,this.formGroup=new A.cw({}),this.formOptions={},this.viewerService.viewer$.pipe((0,L.R)(this.destroy$)).subscribe(E=>{this.organizations=E.organizations,this.mostRecentOrg=E.mostRecentOrg}),this.submitError$=this.revisionService.submitError$,this.isSubmitting$=this.revisionService.isSubmitting$,this.submitSuccess$=this.revisionService.submitSuccess$,this.formFields=[{key:"id",type:"input",hide:!0},{key:"fields.description",type:"cvc-textarea",templateOptions:{label:"Description",placeholder:"Enter a description for this gene.",required:!1}},{key:"fields.sources",type:"multi-field",templateOptions:{label:"Sources",addText:"Add another Source"},fieldArray:{type:"source-input",templateOptions:{required:!0}}},{key:"comment",type:"comment-cvc-textarea",templateOptions:{label:"Comment",placeholder:"Please enter a comment describing your revision.",required:!0,minLength:10}}],this.submitSuccess$.pipe((0,L.R)(this.destroy$)).subscribe(E=>{E&&this.formOptions.resetModel&&this.formOptions.resetModel()})}ngOnInit(){this.revisableFieldsGQL.fetch({geneId:this.geneId}).subscribe(({data:{gene:r}})=>{r?this.formModel=this.toFormModel(r):console.error("Could not retrieve gene."),this.formOptions.updateInitialValue&&this.formOptions.updateInitialValue()})}toFormModel(r){return{id:r.id,fields:Object.assign({},r),comment:""}}selectOrg(r){this.mostRecentOrg=r}submitRevision(r){this.revisionService.suggest(this.toRevisionInput(r))}toRevisionInput(r){return Object.assign(Object.assign({},r),{fields:{description:(0,V.xt)(r.fields.description),sourceIds:r.fields.sources.map(c=>+c.id)},organizationId:void 0===this.mostRecentOrg?void 0:this.mostRecentOrg.id})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.revisionService.cleanup()}}return s.\u0275fac=function(r){return new(r||s)(e.Y36(v.a),e.Y36(ee),e.Y36(y.FOU))},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-gene-revise-form"]],inputs:{geneId:"geneId"},decls:8,vars:14,consts:[["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngIf"],[3,"form","fields","model","options","modelChange"],[3,"errors"],["nzType","success","nzMessage","Suggested Revision Submitted","nzShowIcon","",3,"nzDescription"],["nzSize","small"],["successMessage",""],["routerLink","../../revisions"],[3,"selectedOrg","selectedOrgChange"],["type","submit","nz-button","","cvcOrgSelectorBtn","","nzType","primary","nzSize","small",3,"disabled"]],template:function(r,c){1&r&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return c.submitRevision(c.formModel)}),e.YNc(1,le,2,1,"ng-container",1),e.ALo(2,"async"),e.YNc(3,ge,4,1,"ng-container",1),e.ALo(4,"async"),e.TgZ(5,"formly-form",2),e.NdJ("modelChange",function(E){return c.formModel=E}),e.qZA(),e.YNc(6,pe,6,2,"nz-form-item",1),e.ALo(7,"async"),e.qZA()),2&r&&(e.Q6J("formGroup",c.formGroup),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,8,c.submitError$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,10,c.submitSuccess$)),e.xp6(2),e.Q6J("form",c.formGroup)("fields",c.formFields)("model",c.formModel)("options",c.formOptions),e.xp6(1),e.Q6J("ngIf",!e.lcZ(7,12,c.submitSuccess$)))},directives:[A._Y,A.JL,D.Lr,A.sg,t.O5,h.SK,D.Nx,te.V,l.r,u.yS,m.T7,h.t3,D.Fd,ne.Z,oe.q,_.ix,se.dQ,re.m,ie.w],pipes:[t.Ov],styles:["[_nghost-%COMP%]{display:block}"]}),s})();function de(s,g){if(1&s&&(e.ynx(0),e._UZ(1,"cvc-gene-revise-form",8),e.BQk()),2&s){const r=e.oxw();e.xp6(1),e.Q6J("geneId",r.geneId)}}function ue(s,g){1&s&&e._uU(0,"Loading Gene...")}const fe=function(){return{rows:1}};function ze(s,g){1&s&&e._UZ(0,"nz-skeleton",9),2&s&&e.Q6J("nzParagraph",e.DdM(1,fe))}const he=function(){return{rows:3}};function ve(s,g){1&s&&e._UZ(0,"nz-skeleton",9),2&s&&e.Q6J("nzParagraph",e.DdM(1,he))}const _e=function(){return{rows:4}};function Se(s,g){1&s&&e._UZ(0,"nz-skeleton",9),2&s&&e.Q6J("nzParagraph",e.DdM(1,_e))}const Oe=function(){return{rows:5}};function Ce(s,g){1&s&&e._UZ(0,"nz-skeleton",9),2&s&&e.Q6J("nzParagraph",e.DdM(1,Oe))}function ye(s,g){1&s&&e._uU(0,"Loading gene...")}const Te=[{path:"",component:N,data:{breadcrumb:"Revise"},children:[{path:"",redirectTo:"suggest",pathMatch:"full"},{path:"suggest",component:(()=>{class s{constructor(r){this.route=r,this.routeParams$=this.route.params.subscribe(c=>{this.geneId=+c.geneId})}ngOnDestroy(){this.routeParams$.unsubscribe()}}return s.\u0275fac=function(r){return new(r||s)(e.Y36(u.gz))},s.\u0275cmp=e.Xpm({type:s,selectors:[["cvc-genes-suggest"]],decls:14,vars:3,consts:[[3,"nzGutter"],["nzSpan","16"],[4,"ngIf","ngIfElse"],["loadingGene",""],["nzSpan","8"],["nzTitle","Instructions","nz-type","inner"],["nzDirection","vertical",2,"width","100%"],[3,"nzParagraph",4,"nzSpaceItem"],[3,"geneId"],[3,"nzParagraph"]],template:function(r,c){if(1&r&&(e.TgZ(0,"nz-row",0),e.TgZ(1,"nz-col",1),e.YNc(2,de,2,1,"ng-container",2),e.YNc(3,ue,1,0,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(5,"nz-col",4),e.TgZ(6,"nz-card",5),e.TgZ(7,"nz-space",6),e.YNc(8,ze,1,2,"nz-skeleton",7),e.YNc(9,ve,1,2,"nz-skeleton",7),e.YNc(10,Se,1,2,"nz-skeleton",7),e.YNc(11,Ce,1,2,"nz-skeleton",7),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(12,ye,1,0,"ng-template",null,3,e.W1O)),2&r){const O=e.MAs(4);e.Q6J("nzGutter",16),e.xp6(2),e.Q6J("ngIf",c.geneId)("ngIfElse",O)}},directives:[h.SK,h.t3,t.O5,me,$.bd,B.NU,B.$1,k.ng],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),s})(),data:{breadcrumb:"Suggest Revision"}}]}];let Me=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[u.Bz.forChild(Te),K]]}),s})();var xe=n(9386);let Ee=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[t.ez,Me,u.Bz,d.D,p.KJ,f.PV,x.WG,h.Jb,xe.a]]}),s})()},6559:(I,S,n)=>{n.d(S,{ng:()=>A,H0:()=>D});var t=n(5e3),u=n(1721),d=n(655),p=n(9808),f=n(226);const P=["nzType","avatar"];function y(l,m){if(1&l&&(t.TgZ(0,"div",5),t._UZ(1,"nz-skeleton-element",6),t.qZA()),2&l){const o=t.oxw(2);t.xp6(1),t.Q6J("nzSize",o.avatar.size||"default")("nzShape",o.avatar.shape||"circle")}}function v(l,m){if(1&l&&t._UZ(0,"h3",7),2&l){const o=t.oxw(2);t.Udp("width",o.toCSSUnit(o.title.width))}}function T(l,m){if(1&l&&t._UZ(0,"li"),2&l){const o=m.index,i=t.oxw(3);t.Udp("width",i.toCSSUnit(i.widthList[o]))}}function h(l,m){if(1&l&&(t.TgZ(0,"ul",8),t.YNc(1,T,1,2,"li",9),t.qZA()),2&l){const o=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",o.rowsList)}}function M(l,m){if(1&l&&(t.ynx(0),t.YNc(1,y,2,2,"div",1),t.TgZ(2,"div",2),t.YNc(3,v,1,2,"h3",3),t.YNc(4,h,2,1,"ul",4),t.qZA(),t.BQk()),2&l){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",!!o.nzAvatar),t.xp6(2),t.Q6J("ngIf",!!o.nzTitle),t.xp6(1),t.Q6J("ngIf",!!o.nzParagraph)}}function x(l,m){1&l&&(t.ynx(0),t.Hsn(1),t.BQk())}const b=["*"];let G=(()=>{class l{constructor(){this.nzActive=!1,this.nzBlock=!1}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275dir=t.lG2({type:l,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(o,i){2&o&&t.ekj("ant-skeleton-active",i.nzActive)("ant-skeleton-block",i.nzBlock)},inputs:{nzActive:"nzActive",nzType:"nzType",nzBlock:"nzBlock"}}),(0,d.gn)([(0,u.yF)()],l.prototype,"nzBlock",void 0),l})(),N=(()=>{class l{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(o){if(o.nzSize&&"number"==typeof this.nzSize){const i=`${this.nzSize}px`;this.styleMap={width:i,height:i,"line-height":i}}else this.styleMap={}}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},features:[t.TTD],attrs:P,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(o,i){1&o&&t._UZ(0,"span",0),2&o&&(t.ekj("ant-skeleton-avatar-square","square"===i.nzShape)("ant-skeleton-avatar-circle","circle"===i.nzShape)("ant-skeleton-avatar-lg","large"===i.nzSize)("ant-skeleton-avatar-sm","small"===i.nzSize),t.Q6J("ngStyle",i.styleMap))},directives:[p.PC],encapsulation:2,changeDetection:0}),l})(),A=(()=>{class l{constructor(o,i,a){this.cdr=o,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[],i.addClass(a.nativeElement,"ant-skeleton")}toCSSUnit(o=""){return(0,u.WX)(o)}getTitleProps(){const o=!!this.nzAvatar,i=!!this.nzParagraph;let a="";return!o&&i?a="38%":o&&i&&(a="50%"),Object.assign({width:a},this.getProps(this.nzTitle))}getAvatarProps(){return Object.assign({shape:this.nzTitle&&!this.nzParagraph?"square":"circle",size:"large"},this.getProps(this.nzAvatar))}getParagraphProps(){const o=!!this.nzAvatar,i=!!this.nzTitle,a={};return(!o||!i)&&(a.width="61%"),a.rows=!o&&i?3:2,Object.assign(Object.assign({},a),this.getProps(this.nzParagraph))}getProps(o){return o&&"object"==typeof o?o:{}}getWidthList(){const{width:o,rows:i}=this.paragraph;let a=[];return o&&Array.isArray(o)?a=o:o&&!Array.isArray(o)&&(a=[],a[i-1]=o),a}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(o){(o.nzTitle||o.nzAvatar||o.nzParagraph)&&this.updateProps()}}return l.\u0275fac=function(o){return new(o||l)(t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(t.SBq))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-skeleton"]],hostVars:6,hostBindings:function(o,i){2&o&&t.ekj("ant-skeleton-with-avatar",!!i.nzAvatar)("ant-skeleton-active",i.nzActive)("ant-skeleton-round",!!i.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],features:[t.TTD],ngContentSelectors:b,decls:2,vars:2,consts:[[4,"ngIf"],["class","ant-skeleton-header",4,"ngIf"],[1,"ant-skeleton-content"],["class","ant-skeleton-title",3,"width",4,"ngIf"],["class","ant-skeleton-paragraph",4,"ngIf"],[1,"ant-skeleton-header"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[1,"ant-skeleton-paragraph"],[3,"width",4,"ngFor","ngForOf"]],template:function(o,i){1&o&&(t.F$t(),t.YNc(0,M,5,3,"ng-container",0),t.YNc(1,x,2,0,"ng-container",0)),2&o&&(t.Q6J("ngIf",i.nzLoading),t.xp6(1),t.Q6J("ngIf",!i.nzLoading))},directives:[N,p.O5,G,p.sg],encapsulation:2,changeDetection:0}),l})(),D=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[f.vT,p.ez]]}),l})()}}]);