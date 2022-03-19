"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[7559],{7559:(St,O,r)=>{r.r(O),r.d(O,{EvidenceAddModule:()=>xt});var s=r(9808),m=r(325),A=r(4850),e=r(5e3),J=r(9350),N=r(8992),g=r(1945),M=r(647),u=r(1894),P=r(8616),f=r(6949);function Y(t,i){1&t&&(e.TgZ(0,"div"),e._UZ(1,"router-outlet"),e.qZA())}function U(t,i){1&t&&(e.TgZ(0,"nz-row",7),e.TgZ(1,"div",8),e._UZ(2,"cvc-login-prompt"),e.qZA(),e.qZA())}let $=(()=>{class t{constructor(n){this.viewerService=n}ngOnInit(){this.isSignedIn$=this.viewerService.viewer$.pipe((0,A.U)(n=>n.signedIn))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(J.a))},t.\u0275cmp=e.Xpm({type:t,selectors:[["evidence-add"]],decls:13,vars:4,consts:[["displayName","New"],[1,"site-page-header"],["cvcFlaggableOptions",""],["nz-icon","","nzType","civic:evidence"],[1,"content"],[4,"ngIf","ngIfElse"],["notSignedIn",""],["nzSpan","24","nzJustify","center"],["nz-col","","nzSpan","6"]],template:function(n,o){if(1&n&&(e._UZ(0,"cvc-section-navigation",0),e.TgZ(1,"nz-page-header",1),e.TgZ(2,"nz-page-header-title",2),e._UZ(3,"i",3),e._uU(4," Add New Evidence "),e.qZA(),e.TgZ(5,"nz-page-header-subtitle"),e._uU(6," Submit and review new evidence items "),e.qZA(),e.TgZ(7,"nz-page-header-content"),e.TgZ(8,"div",4),e.YNc(9,Y,2,0,"div",5),e.ALo(10,"ngrxPush"),e.YNc(11,U,3,0,"ng-template",null,6,e.W1O),e.qZA(),e.qZA(),e.qZA()),2&n){const a=e.MAs(12);e.xp6(9),e.Q6J("ngIf",e.lcZ(10,2,o.isSignedIn$))("ngIfElse",a)}},directives:[N.I,g.$O,g.u9,M.Ls,g.yG,g.u5,s.O5,m.lC,u.SK,u.t3,P.u],pipes:[f.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var h=r(8144),B=r(6559),V=r(7484),j=r(1135),R=r(4623),G=r(8006),D=r(5452),X=r(3643),k=r(4375),Z=r(7008),W=r(7695),H=r(8390),K=r(1825),q=r(5457),ee=r(5743),te=r(2079),ne=r(7075),oe=r(7462),ie=r(3594),L=r(8929),S=r(591),y=r(7625),z=r(537),l=r(712),w=r(9169);let re=(()=>{class t{constructor(n,o){this.submitEvidenceItemGQL=n,this.networkErrorService=o,this.destroy$=new L.xQ,this.isSubmitting$=new S.X(!1),this.submitSuccess$=new S.X(!1),this.submitError$=new S.X([])}submit(n){this.isSubmitting$.next(!0),this.submitEvidenceItemGQL.mutate({input:n}).pipe((0,y.R)(this.destroy$),(0,z.x)(()=>{this.isSubmitting$.next(!1)})).subscribe({error:o=>{o.graphQLErrors.length>0?this.submitError$.next(o.graphQLErrors.map(a=>a.message)):o.networkError&&this.networkErrorService.networkError$.next(o.networkError)},complete:()=>{this.submitError$.next([]),this.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0)}})}cleanup(){this.submitError$.next([]),this.submitSuccess$.next(!1),this.isSubmitting$.next(!1),this.networkErrorService.networkError$.next(void 0)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(l.WFw),e.LFG(w.Y))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var p=r(8776),_=r(5109),C=r(2359),T=r(6042),v=r(4546),d=r(4182),ae=r(2789),ce=r(5932),se=r(3416),le=r(2480),de=r(1830),ue=r(4581),pe=r(7154),me=r(1038),ge=r(1270),Q=r(7525),fe=r(6530),b=r(444),he=r(6906);function ve(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"formly-field",2),e.BQk()),2&t){const n=i.$implicit;e.xp6(1),e.Q6J("field",n)}}function ye(t,i){if(1&t&&e._UZ(0,"cvc-source-tag",3),2&t){const n=e.oxw();e.Q6J("source",n.model.source)}}let _e=(()=>{class t extends p.fS{constructor(){super(),this.defaultOptions={templateOptions:{label:"Source",entityType:"Source",entityFragment:l.iXf},defaultValue:{sourceType:l.yic.Pubmed,source:void 0},fieldGroupClassName:"select-group",fieldGroup:[{key:"sourceType",type:"select",className:"type-field",templateOptions:{required:!1,placeholder:"Select Type",options:(0,b.o6)(l.yic).map((n,o)=>({value:n,label:(0,fe.c)(n)}))},hideExpression:(n,o,a)=>(console.log(n),null!=n.source)},{key:"source",type:"citation-select",className:"citation-field",templateOptions:{required:!1},hideExpression:(n,o,a)=>(console.log(n),null!=n.source)}]}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-source-select"]],features:[e.qOj],decls:2,vars:2,consts:[[4,"ngFor","ngForOf"],[3,"source",4,"ngIf"],[3,"field"],[3,"source"]],template:function(n,o){1&n&&(e.YNc(0,ve,2,1,"ng-container",0),e.YNc(1,ye,1,1,"cvc-source-tag",1)),2&n&&(e.Q6J("ngForOf",o.field.fieldGroup),e.xp6(1),e.Q6J("ngIf",null!=o.model.source))},directives:[s.sg,p.cw,s.O5,he.T],styles:[":[_nghost-%COMP%]{display:block}.type-field[_ngcontent-%COMP%]{display:inline-block;width:10em}.citation-field[_ngcontent-%COMP%]{display:inline-block;margin-left:.5em;width:calc(100% - 10.5em)}.hidden[_ngcontent-%COMP%]{display:none}"]}),t})();var x=r(8054),Ce=r(3618),xe=r(8481),Se=r(373),F=r(822),ze=r(2643),Te=r(2683);function be(t,i){if(1&t&&e._UZ(0,"nz-alert",6),2&t){e.oxw();const n=e.MAs(3);e.Q6J("nzMessage",n)}}function Ee(t,i){if(1&t&&(e._uU(0," Found citation: "),e.TgZ(1,"em"),e._uU(2),e.qZA(),e._uU(3,", would you like to add it? ")),2&t){const n=e.oxw(3);e.xp6(2),e.Oqu(n.foundCitation)}}function Ie(t,i){1&t&&(e.ynx(0),e.YNc(1,be,1,1,"nz-alert",4),e.YNc(2,Ee,4,1,"ng-template",null,5,e.W1O),e.BQk())}function Oe(t,i){if(1&t&&e._UZ(0,"nz-alert",9),2&t){e.oxw();const n=e.MAs(3);e.Q6J("nzMessage",n)}}function Ae(t,i){if(1&t&&(e._uU(0," '"),e.TgZ(1,"em"),e._uU(2),e.qZA(),e._uU(3,"' created. ")),2&t){const n=e.oxw(3);e.xp6(2),e.Oqu(n.foundCitation)}}function Me(t,i){1&t&&(e.ynx(0),e.YNc(1,Oe,1,1,"nz-alert",7),e.YNc(2,Ae,4,1,"ng-template",null,8,e.W1O),e.BQk())}function Ze(t,i){if(1&t&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",10),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("errors",n.createErrors)}}function Le(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(a){return e.CHM(n),e.oxw(3).onAddRemoteCitation(a)}),e._uU(1," Add\xa0'"),e.TgZ(2,"em"),e._uU(3),e.qZA(),e._uU(4,"'\xa0 to CIViC Sources "),e.qZA()}if(2&t){const n=e.oxw(3);e.Q6J("nzLoading",n.isCreating),e.xp6(3),e.Oqu(n.foundCitation)}}function we(t,i){1&t&&(e.ynx(0),e.YNc(1,Le,5,2,"button",11),e.BQk())}function Qe(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(a){return e.CHM(n),e.oxw(3).onAcceptSource(a)}),e._uU(1," Specify this Source "),e.qZA()}}function Fe(t,i){1&t&&(e.ynx(0),e.YNc(1,Qe,2,0,"button",13),e.BQk())}function Je(t,i){if(1&t&&(e.ynx(0),e.TgZ(1,"nz-space",2),e.YNc(2,Ie,4,0,"ng-container",3),e.YNc(3,Me,4,0,"ng-container",3),e.YNc(4,Ze,2,1,"nz-form-item",3),e.YNc(5,we,2,0,"ng-container",3),e.YNc(6,Fe,2,0,"ng-container",3),e.qZA(),e.BQk()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("ngIf",!1===n.createSuccess&&0===n.createErrors.length),e.xp6(1),e.Q6J("ngIf",!0===n.createSuccess),e.xp6(1),e.Q6J("ngIf",n.createErrors.length>0),e.xp6(1),e.Q6J("ngIf",!1===n.createSuccess),e.xp6(1),e.Q6J("ngIf",!0===n.createSuccess)}}function Ne(t,i){if(1&t&&(e.TgZ(0,"span",16),e._UZ(1,"i",17),e._uU(2),e.qZA()),2&t){const n=e.oxw(3);e.xp6(2),e.hij(" Source not known to CIViC, fetch citation from ",n.sourceTypeKey,"? ")}}function Pe(t,i){1&t&&(e.ynx(0),e.YNc(1,Ne,3,1,"span",15),e.BQk())}function Ye(t,i){if(1&t&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",10),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("errors",n.existenceErrors)}}function Ue(t,i){if(1&t&&e._uU(0),2&t){const n=e.oxw(4);e.AsE(" Citation not found for ",n.sourceTypeKey,": ",n.citationId,". ")}}function $e(t,i){if(1&t&&(e.TgZ(0,"span"),e._UZ(1,"nz-alert",19),e.YNc(2,Ue,1,2,"ng-template",null,20,e.W1O),e.qZA()),2&t){const n=e.MAs(3);e.xp6(1),e.Q6J("nzMessage",n)}}function Be(t,i){1&t&&(e.ynx(0),e.YNc(1,$e,4,1,"span",18),e.BQk())}function Ve(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(a){return e.CHM(n),e.oxw(2).onExistenceQuery(a)}),e._uU(1," Fetch Citation for\xa0"),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e.qZA()}if(2&t){const n=e.oxw(2);e.Q6J("nzLoading",n.isChecking),e.xp6(3),e.AsE("",n.sourceTypeKey," ",n.citationId,"")}}function je(t,i){if(1&t&&(e.TgZ(0,"nz-space",2),e.YNc(1,Pe,2,0,"ng-container",3),e.YNc(2,Ye,2,1,"nz-form-item",3),e.YNc(3,Be,2,0,"ng-container",3),e.YNc(4,Ve,4,3,"button",11),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.showPrompt),e.xp6(1),e.Q6J("ngIf",n.existenceErrors.length>0),e.xp6(1),e.Q6J("ngIf",n.existenceFail)}}let Re=(()=>{class t{constructor(n,o,a){this.existenceCheckQuery=n,this.createSourceStubQuery=o,this.changeDetectorRef=a,this.addCitation=new e.vpe,this.citationIdChange=new e.vpe,this.sourceTypeChange=new e.vpe,this.showPrompt=!0,this.isChecking=!1,this.existenceFail=!1,this.existenceErrors=[],this.foundCitation=void 0,this.isCreating=!1,this.createSuccess=!1,this.createErrors=[]}set sourceType(n){this._sourceType=n,this.sourceTypeKey=(0,b.o6)(l.yic).getKeyOrThrow(n)}get sourceType(){return this._sourceType}onExistenceQuery(n){n&&n.preventDefault(),this.isChecking=!0,this.foundCitation=void 0,this.existenceCheckQuery.fetch({sourceType:this.sourceType,citationId:+this.citationId}).pipe((0,z.x)(()=>{this.isChecking=!1,this.changeDetectorRef.detectChanges()})).subscribe({next:({data:{remoteCitation:o}})=>{null!==o?this.foundCitation=o:(this.showPrompt=!1,this.existenceFail=!0)},error:o=>{this.showPrompt=!1,this.existenceErrors=o.graphQLErrors.map(a=>a.message)},complete:()=>{this.existenceErrors=[]}})}onAddRemoteCitation(n){n&&n.preventDefault(),this.isCreating=!0,this.createSuccess=!1,this.createSourceStubQuery.mutate({input:{citationId:+this.citationId,sourceType:this.sourceType}}).pipe((0,z.x)(()=>{this.isCreating=!1,this.changeDetectorRef.detectChanges()})).subscribe({next:({data:o})=>{var a;console.log(o);const c=null===(a=null==o?void 0:o.addRemoteCitation)||void 0===a?void 0:a.newSource;this.sourceStub=c,this.createSuccess=!0},error:o=>{this.showPrompt=!1,this.createSuccess=!1,this.createErrors=o.graphQLErrors.map(a=>a.message)},complete:()=>{this.createErrors=[]}})}onAcceptSource(n){n&&n.preventDefault(),this.addCitation.emit({id:this.sourceStub.id,entityFragment:l.SJD})}ngAfterContentInit(){console.log("model")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.gtM),e.Y36(l.RMv),e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-citation-loader"]],inputs:{model:"model",citationId:"citationId",sourceType:"sourceType"},outputs:{addCitation:"addCitation",citationIdChange:"citationIdChange",sourceTypeChange:"sourceTypeChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["fetchCitation",""],["nzDirection","vertical"],[4,"ngIf"],["nzType","info","nzShowIcon","",3,"nzMessage",4,"nzSpaceItem"],["foundCitationMsg",""],["nzType","info","nzShowIcon","",3,"nzMessage"],["nzType","success","nzShowIcon","",3,"nzMessage",4,"nzSpaceItem"],["createdMsg",""],["nzType","success","nzShowIcon","",3,"nzMessage"],[3,"errors"],["type","submit","nz-button","","nzBlock","","nzType","primary","nzSize","default",3,"nzLoading","click",4,"nzSpaceItem"],["type","submit","nz-button","","nzBlock","","nzType","primary","nzSize","default",3,"nzLoading","click"],["type","submit","nz-button","","nzBlock","","nzType","primary","nzSize","default",3,"click",4,"nzSpaceItem"],["type","submit","nz-button","","nzBlock","","nzType","primary","nzSize","default",3,"click"],["nz-typography","",4,"nzSpaceItem"],["nz-typography",""],["nz-icon","","nzType","info-circle","nzTheme","twotone"],[4,"nzSpaceItem"],["nzType","warning","nzShowIcon","",3,"nzMessage"],["existenceFail",""]],template:function(n,o){if(1&n&&(e.YNc(0,Je,7,5,"ng-container",0),e.YNc(1,je,5,3,"ng-template",null,1,e.W1O)),2&n){const a=e.MAs(2);e.Q6J("ngIf",o.foundCitation)("ngIfElse",a)}},directives:[s.O5,h.NU,h.$1,C.r,u.SK,v.Nx,F.V,T.ix,ze.dQ,Te.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-space-item[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]}),t})();function Ge(t,i){if(1&t&&(e.TgZ(0,"nz-option",4),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.Q6J("nzLabel",n.label)("nzValue",n.source),e.xp6(1),e.AsE(" ",n.source.citation," (",n.source.citationId,") ")}}function De(t,i){if(1&t&&(e.ynx(0),e.YNc(1,Ge,2,4,"nz-option",3),e.BQk()),2&t){const n=i.ngrxLet;e.xp6(1),e.Q6J("ngForOf",n)}}function Xe(t,i){if(1&t&&(e.TgZ(0,"div",8),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.hij(" ",n.to.prompt," ")}}function ke(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"cvc-citation-loader",9),e.NdJ("addCitation",function(a){return e.CHM(n),e.oxw(2).onAddCitation(a)})("sourceTypeChange",function(a){return e.CHM(n),e.oxw(2).model.sourceType=a})("citationIdChange",function(a){return e.CHM(n),e.oxw(2).to.searchValue=a}),e.qZA()}if(2&t){const n=e.oxw(2);e.Q6J("model",n.model)("sourceType",n.model.sourceType)("citationId",n.to.searchValue)}}function We(t,i){if(1&t&&(e.ynx(0,5),e.YNc(1,Xe,2,1,"div",6),e.YNc(2,ke,1,3,"cvc-citation-loader",7),e.BQk()),2&t){const n=e.oxw();e.Q6J("ngSwitch",n.to.searchLength>0&&n.to.searchLength>=n.to.minSearchLength),e.xp6(1),e.Q6J("ngSwitchCase",!1),e.xp6(1),e.Q6J("ngSwitchCase",!0)}}let He=(()=>{class t extends p.fS{constructor(n){super(),this.sourceTypeaheadQuery=n,this.defaultOptions={templateOptions:{placeholder:"Search Sources",onSearch:()=>{},minSearchLength:1,maxSearchLength:15,searchLength:0,searchValue:""},expressionProperties:{"templateOptions.prompt":o=>`Search for ${(0,b.o6)(l.yic).getKeyOrThrow(o.sourceType)} sources known to CIViC.`}},this.onAddCitation=o=>{const a=this.field.parent.templateOptions;a.entityType="SourceStub",a.entityFragment=o.entityFragment,this.field.formControl.setValue(o.id)}}ngOnInit(){this.queryRef=this.sourceTypeaheadQuery.watch({sourceType:this.model.sourceType,partialCitationId:9999999}),this.sources$=this.queryRef.valueChanges.pipe((0,Se.j)("data","sourceTypeahead"),(0,A.U)(n=>n.map(o=>({value:o.id,label:o.citation,source:o}))))}ngAfterViewInit(){this.to.onSearch=n=>{this.to.searchLength=n.length,this.to.searchValue=n,!(n.length<this.to.minLengthSearch||n.length>this.to.maxLength)&&this.queryRef.refetch({sourceType:l.yic.Pubmed,partialCitationId:+n})}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.NbY))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-citation-select-type"]],features:[e.qOj],decls:4,vars:7,consts:[["nzShowSearch","","nzServerSearch","",3,"formControl","formlyAttributes","nzPlaceHolder","nzNotFoundContent","nzShowArrow","nzFilterOption","nzOnSearch"],[4,"ngrxLet"],["notFound",""],["nzCustomContent","",3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzCustomContent","",3,"nzLabel","nzValue"],[3,"ngSwitch"],["class","ant-form-item-explain",4,"ngSwitchCase"],[3,"model","sourceType","citationId","addCitation","sourceTypeChange","citationIdChange",4,"ngSwitchCase"],[1,"ant-form-item-explain"],[3,"model","sourceType","citationId","addCitation","sourceTypeChange","citationIdChange"]],template:function(n,o){if(1&n&&(e.TgZ(0,"nz-select",0),e.NdJ("nzOnSearch",function(c){return o.to.onSearch(c)}),e.YNc(1,De,2,1,"ng-container",1),e.qZA(),e.YNc(2,We,3,3,"ng-template",null,2,e.W1O)),2&n){const a=e.MAs(3);e.Q6J("formControl",o.formControl)("formlyAttributes",o.field)("nzPlaceHolder",o.to.placeholder?o.to.placeholder:null)("nzNotFoundContent",a)("nzShowArrow",!1)("nzFilterOption",o.to.filterOption),e.xp6(1),e.Q6J("ngrxLet",o.sources$)}},directives:[x.Vq,d.JJ,d.oH,p.VQ,f.eJ,s.sg,x.Ip,s.RF,s.n9,Re],styles:["[_nghost-%COMP%]{display:block}.loading-icon[_ngcontent-%COMP%]{margin-right:8px}.source-citation[_ngcontent-%COMP%]{font-style:oblique}"],changeDetection:0}),t})(),Ke=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,h.zf,C.L,v.U5,Z.B,T.sL]]}),t})();const qe={types:[{name:"citation-select",component:He}]};let et=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,d.UX,f.WG,x.LV,Ke,p.X0.forChild(qe),_.s]]}),t})();var tt=r(9779);const nt={types:[{name:"source-select",component:_e,wrappers:["form-field"]}]};let ot=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,d.UX,f.WG,p.X0.forChild(nt),x.LV,h.zf,Ce.ZJ,xe.X,et,tt.s]]}),t})();var it=r(5472);let rt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[re],imports:[[s.ez,m.Bz,d.UX,_.s,v.U5,C.L,u.Jb,T.sL,Q.j,p.X0,K.A,Z.B,k.R,W.C,ne.l,H.N,te.g,D.C,ee.W,q.$,G.I,oe.o,R.K,ie.q,X.q,j.C,ae.o,ce.A,se.g,le.r,de.S,ue.e,pe.e,me.J,ge.i,ot,it.r,_.s]]}),t})(),at=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,u.Jb,h.zf,V.vh,B.H0,rt]]}),t})();var E=r(6738),ct=r(6064),st=r(6123);function lt(t,i){1&t&&e.GkF(0)}function dt(t,i){1&t&&e.GkF(0)}function ut(t,i){if(1&t&&(e.TgZ(0,"nz-form-item"),e._UZ(1,"cvc-form-errors-alert",9),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("errors",n.errorMessages)}}function pt(t,i){if(1&t&&(e.TgZ(0,"p"),e._uU(1,"View "),e.TgZ(2,"a",13),e._uU(3,"its details"),e.qZA(),e._uU(4,"."),e.qZA()),2&t){const n=e.oxw(3);e.xp6(2),e.MGl("routerLink","/evidence/",n.newId,"/summary")}}function mt(t,i){if(1&t&&(e.ynx(0),e._UZ(1,"nz-alert",10),e.YNc(2,pt,5,1,"ng-template",11,12,e.W1O),e.BQk()),2&t){const n=e.MAs(3);e.xp6(1),e.Q6J("nzDescription",n)}}function gt(t,i){if(1&t&&(e.YNc(0,ut,2,1,"nz-form-item",8),e.YNc(1,mt,4,1,"ng-container",8)),2&t){const n=e.oxw();e.Q6J("ngIf",n.errorMessages.length>0),e.xp6(1),e.Q6J("ngIf",n.success)}}function ft(t,i){if(1&t&&e._UZ(0,"ngx-json-viewer",14),2&t){const n=e.oxw();e.Q6J("json",n.formModel)}}let ht=(()=>{class t{constructor(n,o){this.submitEvidenceGQL=n,this.networkErrorService=o,this.destroy$=new L.xQ,this.formGroup=new d.cw({}),this.formOptions={formState:new ct._},this.success=!1,this.errorMessages=[],this.loading=!1,this.submitEvidenceMutator=new st.U(o),this.formFields=[{key:"fields",wrappers:["form-container"],templateOptions:{label:"Add Evidence Item Form"},fieldGroup:[{key:"gene",type:"gene-array",templateOptions:{maxCount:1,required:!0}},{key:"variant",type:"variant-array",templateOptions:{required:!0,maxCount:1}},{key:"description",type:"cvc-textarea",templateOptions:{label:"Evidence Statement",helpText:'Your original description of evidence from published literature detailing the association or lack of association between a variant and its predictive, prognostic, diagnostic, predisposing, functional or oncogenic value. Data constituting personal or identifying information should not be entered (e.g. <a href="https://www.hipaajournal.com/what-is-protected-health-information/" target="_blank">protected health information (PHI) as defined by HIPAA</a> in the U.S. and/or comparable laws in your jurisdiction).',placeholder:"No description provided",required:!0}},{key:"source",type:"multi-field",wrappers:["form-field"],templateOptions:{label:"Source",helpText:"CIViC accepts PubMed or ASCO Abstracts sources. Please provide the source of the support for your evidence here.",addText:"Specify a Source",maxCount:1},fieldArray:{type:"source-input",templateOptions:{hideLabel:!0,required:!0}}},{key:"variantOrigin",type:"variant-origin-select",templateOptions:{required:!0}},{key:"evidenceType",type:"evidence-type-select",templateOptions:{required:!0}},{key:"clinicalSignificance",type:"clinical-significance-select",templateOptions:{required:!0}},{key:"disease",type:"disease-array",templateOptions:{maxCount:1}},{key:"evidenceLevel",type:"evidence-level-select",templateOptions:{required:!0}},{key:"evidenceDirection",type:"evidence-direction-select",templateOptions:{required:!0}},{key:"drugs",type:"drug-array"},{key:"drugInteractionType",type:"drug-interaction-select"},{key:"phenotypes",type:"phenotype-array"},{key:"evidenceRating",type:"rating-input",templateOptions:{required:!0,label:"Rating",helpText:"Please rate your evidence on a scale of one to five stars. Use the star rating descriptions for guidance."}},{key:"comment",type:"comment-textarea",templateOptions:{label:"Comment",helpText:"Please provide any additional comments you wish to make about this evidence item. This comment will appear as the first comment in this item's comment thread.",placeholder:"Please enter a comment describing your revision.",required:!0,minLength:10}},{key:"organization",type:"org-submit-button",templateOptions:{submitLabel:"Submit Evidence Item Revision",submitSize:"large"}}]}]}ngOnInit(){}submitEvidence(n){let o=this.toSubmitInput(n);if(o){let a=this.submitEvidenceMutator.mutate(this.submitEvidenceGQL,{input:o},c=>{this.newId=c.submitEvidence.evidenceItem.id});a.submitSuccess$.pipe((0,y.R)(this.destroy$)).subscribe(c=>{c&&(this.success=!0)}),a.submitError$.pipe((0,y.R)(this.destroy$)).subscribe(c=>{c&&(this.errorMessages=c,this.success=!1)}),a.isSubmitting$.pipe((0,y.R)(this.destroy$)).subscribe(c=>{this.loading=c})}}toSubmitInput(n){var o,a;if(n){const c=n.fields;return{fields:{variantOrigin:c.variantOrigin,description:E.xt(c.description),variantId:c.variant[0].id,sourceId:c.source[0].id,evidenceType:c.evidenceType,evidenceDirection:c.evidenceDirection,clinicalSignificance:c.clinicalSignificance,diseaseId:E.uP(null===(o=c.disease[0])||void 0===o?void 0:o.id),evidenceLevel:c.evidenceLevel,phenotypeIds:c.phenotypes.map(I=>I.id),rating:+c.evidenceRating,drugIds:c.drugs.map(I=>I.id),drugInteractionType:E.uP(c.drugInteractionType)},comment:c.comment,organizationId:null===(a=null==n?void 0:n.fields.organization)||void 0===a?void 0:a.id}}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.WFw),e.Y36(w.Y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-evidence-submit-form"]],decls:10,vars:9,consts:[["nzTip","Submitting",3,"nzSpinning"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],[4,"ngTemplateOutlet"],[3,"form","fields","model","options","modelChange"],["formMessages",""],["nz-row",""],["nz-col","","nzSpan","24"],[3,"json",4,"ngIf"],[4,"ngIf"],[3,"errors"],["nzType","success","nzMessage","Evidence Submitted","nzShowIcon","",3,"nzDescription"],["nzSize","small"],["successMessage",""],[3,"routerLink"],[3,"json"]],template:function(n,o){if(1&n&&(e.TgZ(0,"nz-spin",0),e.TgZ(1,"form",1),e.NdJ("ngSubmit",function(){return o.submitEvidence(o.formModel)}),e.YNc(2,lt,1,0,"ng-container",2),e.TgZ(3,"formly-form",3),e.NdJ("modelChange",function(c){return o.formModel=c}),e.qZA(),e.YNc(4,dt,1,0,"ng-container",2),e.qZA(),e.YNc(5,gt,2,2,"ng-template",null,4,e.W1O),e.qZA(),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.YNc(9,ft,1,1,"ngx-json-viewer",7),e.qZA(),e.qZA()),2&n){const a=e.MAs(6);e.Q6J("nzSpinning",o.loading),e.xp6(1),e.Q6J("formGroup",o.formGroup),e.xp6(1),e.Q6J("ngTemplateOutlet",a),e.xp6(1),e.Q6J("form",o.formGroup)("fields",o.formFields)("model",o.formModel)("options",o.formOptions),e.xp6(1),e.Q6J("ngTemplateOutlet",a),e.xp6(5),e.Q6J("ngIf",o.formModel)}},directives:[Q.W,d._Y,d.JL,v.Lr,d.sg,s.tP,p.T7,s.O5,u.SK,v.Nx,F.V,C.r,m.yS,u.t3,_.Y],styles:[""]}),t})();const vt=[{path:"",component:$,children:[{path:"",redirectTo:"submit",pathMatch:"full"},{path:"submit",component:(()=>{class t{constructor(n){this.route=n,this.routeParams$=this.route.params.subscribe(o=>{this.evidenceId=+o.evidenceId})}ngOnDestroy(){this.routeParams$.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["cvc-evidence-submit"]],decls:1,vars:0,template:function(n,o){1&n&&e._UZ(0,"cvc-evidence-submit-form")},directives:[ht],styles:[""]}),t})(),data:{breadcrumb:"Submit New Evidence"}}]}];let yt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.Bz.forChild(vt),at],m.Bz]}),t})();var _t=r(5630),Ct=r(9386);let xt=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,yt,g.KJ,M.PV,_t.D,Ct.a,u.Jb,f.WG]]}),t})()}}]);