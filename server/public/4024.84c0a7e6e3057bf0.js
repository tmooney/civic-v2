"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4024],{1912:(Ee,se,r)=>{r.d(se,{s:()=>le});var o=r(5e3),i=r(6042),t=r(2643),E=r(2683),F=r(3640),U=r(2160),q=r(3762),O=r(647);let L=(()=>{class te{constructor(oe){this.cookies=oe,this.location=function Z(te){return encodeURIComponent(te).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}(window.location.href),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return te.\u0275fac=function(oe){return new(oe||te)(o.Y36(U.N))},te.\u0275cmp=o.Xpm({type:te,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(oe,V){1&oe&&(o.TgZ(0,"nz-list",0),o.TgZ(1,"nz-list-item"),o.TgZ(2,"form",1),o._UZ(3,"input",2),o.TgZ(4,"button",3),o._UZ(5,"i",4),o._uU(6," Sign In with a Google Account "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(7,"nz-list-item"),o.TgZ(8,"form",1),o._UZ(9,"input",2),o.TgZ(10,"button",3),o._uU(11," Sign In with an ORCID Account "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(12,"nz-list-item"),o.TgZ(13,"form",1),o._UZ(14,"input",2),o.TgZ(15,"button",3),o._UZ(16,"i",5),o._uU(17," Sign In with a Github Account "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&oe&&(o.xp6(2),o.MGl("action","/api/auth/google_oauth2?origin=",V.location,"",o.LSH),o.xp6(1),o.s9C("value",V.xsrfToken),o.xp6(5),o.MGl("action","/api/auth/orcid?origin=",V.location,"",o.LSH),o.xp6(1),o.s9C("value",V.xsrfToken),o.xp6(4),o.MGl("action","/api/auth/github?origin=",V.location,"",o.LSH),o.xp6(1),o.s9C("value",V.xsrfToken))},directives:[q.n_,q.AA,i.ix,t.dQ,E.w,O.Ls],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),te})();function G(te,ae){1&te&&(o.ynx(0),o.TgZ(1,"p",5),o._uU(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),o.qZA(),o._UZ(3,"cvc-auth-options-list"),o.BQk())}function K(te,ae){1&te&&o._uU(0," Sign In\n")}function H(te,ae){if(1&te){const oe=o.EpF();o.TgZ(0,"button",0),o.NdJ("click",function(){return o.CHM(oe),o.oxw().handleCancel()}),o._uU(1,"Cancel"),o.qZA()}}let le=(()=>{class te{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return te.\u0275fac=function(oe){return new(oe||te)},te.\u0275cmp=o.Xpm({type:te,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(oe,V){if(1&oe&&(o.TgZ(0,"button",0),o.NdJ("click",function(){return V.showAuth()}),o.TgZ(1,"span"),o._uU(2,"Sign In"),o.qZA(),o.qZA(),o.TgZ(3,"nz-modal",1),o.NdJ("nzVisibleChange",function(I){return V.authVisible=I})("nzOnCancel",function(){return V.handleCancel()}),o.YNc(4,G,4,0,"ng-container",2),o.qZA(),o.YNc(5,K,1,0,"ng-template",null,3,o.W1O),o.YNc(7,H,2,0,"ng-template",null,4,o.W1O)),2&oe){const $=o.MAs(6),I=o.MAs(8);o.xp6(3),o.Q6J("nzVisible",V.authVisible)("nzTitle",$)("nzFooter",I)}},directives:[i.ix,t.dQ,E.w,F.du,F.Hf,L],styles:["[_nghost-%COMP%]{display:inline-block}"]}),te})()},1844:(Ee,se,r)=>{r.d(se,{B:()=>q});var o=r(9808),i=r(6042),t=r(3640),E=r(3762),F=r(647),Z=r(5e3);let U=(()=>{class O{}return O.\u0275fac=function(G){return new(G||O)},O.\u0275mod=Z.oAB({type:O}),O.\u0275inj=Z.cJS({imports:[[o.ez,F.PV,E.Ph,i.sL]]}),O})(),q=(()=>{class O{}return O.\u0275fac=function(G){return new(G||O)},O.\u0275mod=Z.oAB({type:O}),O.\u0275inj=Z.cJS({imports:[[o.ez,i.sL,t.Qp,U]]}),O})()},7881:(Ee,se,r)=>{r.d(se,{L:()=>Z});var o=r(5e3),i=r(9808),t=r(6699);function E(U,q){if(1&U&&o._UZ(0,"nz-avatar",2),2&U){const O=o.oxw();o.Q6J("nzSrc",O.user.profileImagePath)("nzSize",O.size)}}function F(U,q){if(1&U&&(o._UZ(0,"nz-avatar",3),o.ALo(1,"uppercase")),2&U){const O=o.oxw();o.Q6J("nzSize",O.size)("nzText",o.lcZ(1,2,O.user.displayName.charAt(0)))}}let Z=(()=>{class U{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return U.\u0275fac=function(O){return new(O||U)},U.\u0275cmp=o.Xpm({type:U,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(O,L){if(1&O&&(o.YNc(0,E,1,2,"nz-avatar",0),o.YNc(1,F,2,4,"ng-template",null,1,o.W1O)),2&O){const G=o.MAs(2);o.Q6J("ngIf",L.user.profileImagePath)("ngIfElse",G)}},directives:[i.O5,t.Dz],pipes:[i.gd],styles:["[_nghost-%COMP%]{display:inline-block}"]}),U})()},5473:(Ee,se,r)=>{r.d(se,{H:()=>E});var o=r(9808),i=r(6699),t=r(5e3);let E=(()=>{class F{}return F.\u0275fac=function(U){return new(U||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[o.ez,i.Rt]]}),F})()},9350:(Ee,se,r)=>{r.d(se,{a:()=>O});var o=r(4850),i=r(5154),t=r(373),E=r(1059),F=r(712),Z=r(5e3),U=r(520);const q={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let O=(()=>{class L{constructor(K,H){function le(I){return!(!I||I.role!==F.i44.Admin)}function te(I){return!(!I||I.role!==F.i44.Editor&&I.role!==F.i44.Admin)}function ae(I){return!(!I||I.role!==F.i44.Curator)}function oe(I){return!(!I||I.role!==F.i44.Curator&&I.role!==F.i44.Editor&&I.role!==F.i44.Admin)}function V(I){var P,ne;return!(!I||I.role!==F.i44.Editor&&I.role!==F.i44.Admin||!I.mostRecentConflictOfInterestStatement||(null===(P=I.mostRecentConflictOfInterestStatement)||void 0===P?void 0:P.coiStatus)!=F.Mgx.Conflict&&(null===(ne=I.mostRecentConflictOfInterestStatement)||void 0===ne?void 0:ne.coiStatus)!=F.Mgx.Valid)}function $(I){if(I.mostRecentOrganizationId)return I.organizations.find(P=>P.id===I.mostRecentOrganizationId)}this.viewerBaseGQL=K,this.http=H,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe((0,o.U)(I=>({data:I.data,loading:I.loading,networkStatus:I.networkStatus})),(0,i.d)(1)),this.isLoading$=this.data$.pipe((0,t.j)("loading"),(0,E.O)(!0)),this.viewer$=this.data$.pipe((0,t.j)("data","viewer"),(0,o.U)(I=>Object.assign(Object.assign({},I),{signedIn:null!==I,signedOut:null===I,canCurate:oe(I),canModerate:V(I),isAdmin:le(I),isEditor:te(I),isCurator:ae(I),organizations:null===I?[]:I.organizations,mostRecentOrg:null===I?void 0:$(I),invalidCoi:te(I)&&(!I.mostRecentConflictOfInterestStatement||I.mostRecentConflictOfInterestStatement.coiStatus===F.Mgx.Expired||I.mostRecentConflictOfInterestStatement.coiStatus===F.Mgx.Missing)})),(0,E.O)(q),(0,i.d)(1)),this.signedIn$=this.viewer$.pipe((0,o.U)(I=>I.signedIn)),this.signedOut$=this.viewer$.pipe((0,o.U)(I=>I.signedOut)),this.isAdmin$=this.viewer$.pipe((0,o.U)(I=>le(I))),this.isEditor$=this.viewer$.pipe((0,o.U)(I=>te(I))),this.isCurator$=this.viewer$.pipe((0,o.U)(I=>ae(I))),this.canCurate$=this.viewer$.pipe((0,o.U)(I=>oe(I))),this.canModerate$=this.viewer$.pipe((0,o.U)(I=>V(I)))}signOut(){this.http.get("/api/sign_out").subscribe(K=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return L.\u0275fac=function(K){return new(K||L)(Z.LFG(F.Tt7),Z.LFG(U.eN))},L.\u0275prov=Z.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"}),L})()},6123:(Ee,se,r)=>{r.d(se,{U:()=>F});var o=r(8929),i=r(591),t=r(7625),E=r(537);class F{constructor(U){this.networkErrorService=U}mutate(U,q,O){let L=new o.xQ,G={isSubmitting$:new i.X(!1),submitSuccess$:new i.X(!1),submitError$:new i.X([]),cleanup:()=>{L.next(),L.complete()}};return G.isSubmitting$.next(!0),U.mutate(q).pipe((0,t.R)(L),(0,E.x)(()=>{G.isSubmitting$.next(!1)})).subscribe({next:K=>{K.data&&O&&O(K.data)},error:K=>{K.graphQLErrors.length>0?G.submitError$.next(K.graphQLErrors.map(H=>H.message)):K.networkError&&this.networkErrorService.networkError$.next(K.networkError),G.cleanup()},complete:()=>{G.submitError$.next([]),G.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),G.cleanup()}}),G}}},822:(Ee,se,r)=>{r.d(se,{V:()=>q});var o=r(5e3),i=r(9808),t=r(2359);function E(O,L){if(1&O&&o._UZ(0,"nz-alert",4),2&O){const G=o.oxw();o.Q6J("nzDescription",G.errors[0])}}function F(O,L){if(1&O&&o._UZ(0,"nz-alert",5),2&O){o.oxw();const G=o.MAs(3);o.Q6J("nzDescription",G)}}function Z(O,L){if(1&O&&(o.TgZ(0,"li"),o._uU(1),o.qZA()),2&O){const G=L.$implicit;o.xp6(1),o.Oqu(G)}}function U(O,L){if(1&O&&(o.TgZ(0,"ul",6),o.YNc(1,Z,2,1,"li",7),o.qZA()),2&O){const G=o.oxw();o.xp6(1),o.Q6J("ngForOf",G.errors)}}let q=(()=>{class O{constructor(){}ngOnInit(){}}return O.\u0275fac=function(G){return new(G||O)},O.\u0275cmp=o.Xpm({type:O,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(G,K){1&G&&(o.YNc(0,E,1,1,"nz-alert",0),o.YNc(1,F,1,1,"nz-alert",1),o.YNc(2,U,2,1,"ng-template",2,3,o.W1O)),2&G&&(o.Q6J("ngIf",1===K.errors.length),o.xp6(1),o.Q6J("ngIf",K.errors.length>1))},directives:[i.O5,t.r,i.sg],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),O})()},7008:(Ee,se,r)=>{r.d(se,{B:()=>E});var o=r(9808),i=r(2359),t=r(5e3);let E=(()=>{class F{}return F.\u0275fac=function(U){return new(U||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[o.ez,i.L]]}),F})()},8785:(Ee,se,r)=>{r.d(se,{t:()=>ne});var o=r(5e3),i=r(6123),t=r(8929),E=r(7625),F=r(712),Z=r(9169),U=r(7484),q=r(9808),O=r(2359),L=r(1894),G=r(4546),K=r(822),H=r(7525),le=r(3868),te=r(4182),ae=r(6042),oe=r(2643),V=r(2683);function $(X,de){1&X&&o._UZ(0,"nz-alert",7)}function I(X,de){if(1&X&&(o.TgZ(0,"nz-form-item"),o._UZ(1,"cvc-form-errors-alert",8),o.qZA()),2&X){const fe=o.oxw();o.xp6(1),o.Q6J("errors",fe.errorMessages)}}function P(X,de){if(1&X){const fe=o.EpF();o.TgZ(0,"nz-form-item"),o.TgZ(1,"textarea",9),o.NdJ("ngModelChange",function(ue){return o.CHM(fe),o.oxw().coiText=ue}),o.qZA(),o.qZA()}if(2&X){const fe=o.oxw();o.xp6(1),o.Q6J("ngModel",fe.coiText)}}let ne=(()=>{class X{constructor(fe,pe){this.updateCoiGql=fe,this.coiUpdatedEvent=new o.vpe,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new t.xQ,this.updateCoiMutator=new i.U(pe)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let pe=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});pe.submitSuccess$.pipe((0,E.R)(this.destroy$)).subscribe(ue=>{ue&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),pe.submitError$.pipe((0,E.R)(this.destroy$)).subscribe(ue=>{ue&&(this.errorMessages=ue,this.success=!1)}),pe.isSubmitting$.pipe((0,E.R)(this.destroy$)).subscribe(ue=>{this.loading=ue})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return X.\u0275fac=function(fe){return new(fe||X)(o.Y36(F.IP1),o.Y36(Z.Y))},X.\u0275cmp=o.Xpm({type:X,selectors:[["cvc-user-coi-form"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(fe,pe){1&fe&&(o.TgZ(0,"nz-card"),o.YNc(1,$,1,0,"nz-alert",0),o.YNc(2,I,2,1,"nz-form-item",1),o.TgZ(3,"nz-spin",2),o.TgZ(4,"nz-form-item"),o.TgZ(5,"nz-radio-group",3),o.NdJ("ngModelChange",function(W){return pe.coiStatus=W}),o.TgZ(6,"label",4),o._uU(7,"I do not have any potential conflicts of interest."),o.qZA(),o.TgZ(8,"label",5),o._uU(9,"I do have a potential conflict of interest."),o.qZA(),o.qZA(),o.qZA(),o.YNc(10,P,2,1,"nz-form-item",1),o.TgZ(11,"nz-form-item"),o.TgZ(12,"button",6),o.NdJ("click",function(){return pe.updateCoi()}),o._uU(13," Save Conflict of Interest Statement "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&fe&&(o.xp6(1),o.Q6J("ngIf",pe.success),o.xp6(1),o.Q6J("ngIf",pe.errorMessages.length>0),o.xp6(1),o.Q6J("nzSpinning",pe.loading),o.xp6(2),o.Q6J("ngModel",pe.coiStatus),o.xp6(5),o.Q6J("ngIf","coiPresent"===pe.coiStatus),o.xp6(2),o.Q6J("disabled",pe.loading||"coiPresent"===pe.coiStatus&&(void 0===pe.coiText||pe.coiText.length<10)))},directives:[U.bd,q.O5,O.r,L.SK,G.Nx,K.V,H.W,le.Dg,te.JJ,te.On,le.Of,te.Fj,ae.ix,oe.dQ,V.w],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),X})()},330:(Ee,se,r)=>{r.d(se,{e:()=>K});var o=r(9808),i=r(4182),t=r(6949),E=r(7484),F=r(2359),Z=r(4546),U=r(7008),q=r(3868),O=r(7525),L=r(6042),G=r(5e3);let K=(()=>{class H{}return H.\u0275fac=function(te){return new(te||H)},H.\u0275mod=G.oAB({type:H}),H.\u0275inj=G.cJS({imports:[[o.ez,i.u5,Z.U5,i.UX,t.WG,E.vh,F.L,q.aF,L.sL,O.j,U.B]]}),H})()},712:(Ee,se,r)=>{r.d(se,{ti:()=>ji,$G1:()=>Xo,iGM:()=>Zo,KNk:()=>nr,T97:()=>sr,RMv:()=>Nr,LUc:()=>xr,iwm:()=>j,Vr2:()=>u,A94:()=>hs,mdl:()=>Y,Gbq:()=>ai,u4i:()=>ie,ejK:()=>zs,uBv:()=>ze,td:()=>li,Tq1:()=>Ii,q8c:()=>bi,WRV:()=>go,IZ6:()=>zo,qf4:()=>No,Rdc:()=>Po,gtM:()=>Dr,fpJ:()=>Cr,k2T:()=>zr,UWf:()=>po,cMj:()=>Cs,UIR:()=>di,E8d:()=>Te,P_b:()=>mi,Mgx:()=>Pe,iST:()=>fi,Kk:()=>vi,OfU:()=>Be,kQf:()=>io,l4w:()=>os,JQ3:()=>Tr,db2:()=>Qs,h01:()=>Je,wg3:()=>Ts,k7O:()=>yi,kv3:()=>er,R8w:()=>Ye,GB2:()=>Ds,Zyn:()=>He,dUU:()=>Si,kq9:()=>Xe,vRc:()=>or,Ud2:()=>Ei,GYx:()=>Ko,AO2:()=>je,BTF:()=>_i,wJ2:()=>qe,eY8:()=>Li,_Aq:()=>lt,pHu:()=>Ns,tI1:()=>tt,Q_P:()=>Pr,Sx0:()=>f,Ybm:()=>Oi,Cp0:()=>N,RTy:()=>C,sBY:()=>As,zBv:()=>ur,kqt:()=>R,Zhw:()=>cr,B0s:()=>Qr,rzy:()=>Fi,BQZ:()=>ce,sfv:()=>he,TNk:()=>Ms,rJ8:()=>Ri,FOU:()=>kr,Q4m:()=>pr,Fvz:()=>mt,cCu:()=>xs,_jb:()=>lo,MYm:()=>ao,oRL:()=>gt,lfy:()=>gr,fow:()=>ft,X5f:()=>wi,WOS:()=>$s,Lr0:()=>Ps,Del:()=>Gs,xlL:()=>ht,io:()=>Vi,WGV:()=>Us,OHm:()=>Yi,lYz:()=>vt,FKQ:()=>hr,B97:()=>Wi,mII:()=>ko,ghc:()=>Bi,NQC:()=>ut,JDX:()=>Lt,VZq:()=>Hi,EwB:()=>Zr,FJi:()=>zt,L5n:()=>to,rZD:()=>yt,SrV:()=>Ct,Bk6:()=>Zs,TiL:()=>ho,yic:()=>It,SJD:()=>Vt,F3s:()=>Tt,jw9:()=>St,g0X:()=>ks,iXf:()=>Mn,NbY:()=>Ar,kQl:()=>Dt,LLl:()=>Qo,WFw:()=>Ur,tji:()=>us,o71:()=>Et,jMx:()=>na,A4J:()=>ro,Vj7:()=>Gr,D9L:()=>Jr,SWk:()=>Kr,aw3:()=>ss,Xft:()=>gs,mpB:()=>Nt,m$d:()=>ea,IP1:()=>es,LiH:()=>Xs,wRZ:()=>Xr,wbP:()=>ns,sLD:()=>Js,yqR:()=>Ks,cEv:()=>Co,i44:()=>_t,vMt:()=>Jo,tJ6:()=>To,IRu:()=>l,Qzn:()=>qi,iJT:()=>ua,qP7:()=>M,Qtd:()=>oa,Zo2:()=>Do,ROj:()=>cs,FB1:()=>c,q1D:()=>sa,d4o:()=>h,huM:()=>b,ZYZ:()=>xo,nnL:()=>ps,Bo4:()=>pa,ubO:()=>ca,tw_:()=>Ao,wpb:()=>re,BnY:()=>$r,_eC:()=>Mr,fwG:()=>Mo,zwS:()=>$o,pP7:()=>ke,Tt7:()=>Go,Kmw:()=>Uo});var o=r(655);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var E=r(9245);function F(e,s){for(var y,n=/\r\n|[\n\r]/g,d=1,z=s+1;(y=n.exec(e.body))&&y.index<s;)d+=1,z=s+1-(y.index+y[0].length);return{line:d,column:z}}function Z(e){return U(e.source,F(e.source,e.start))}function U(e,s){var n=e.locationOffset.column-1,d=O(n)+e.body,z=s.line-1,T=s.line+(e.locationOffset.line-1),x=s.column+(1===s.line?n:0),me="".concat(e.name,":").concat(T,":").concat(x,"\n"),Fe=d.split(/\r\n|[\n\r]/g),Ke=Fe[z];if(Ke.length>120){for(var At=Math.floor(x/80),xt=x%80,We=[],Ue=0;Ue<Ke.length;Ue+=80)We.push(Ke.slice(Ue,Ue+80));return me+q([["".concat(T),We[0]]].concat(We.slice(1,At+1).map(function(Ft){return["",Ft]}),[[" ",O(xt-1)+"^"],["",We[At+1]]]))}return me+q([["".concat(T-1),Fe[z-1]],["".concat(T),Ke],["",O(x-1)+"^"],["".concat(T+1),Fe[z+1]]])}function q(e){var s=e.filter(function(d){return void 0!==d[1]}),n=Math.max.apply(Math,s.map(function(d){return d[0].length}));return s.map(function(d){var y=d[1];return function L(e,s){return O(e-s.length)+s}(n,d[0])+(y?" | "+y:" |")}).join("\n")}function O(e){return Array(e+1).join(" ")}function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}function H(e,s){for(var n=0;n<s.length;n++){var d=s[n];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}function oe(e,s){return!s||"object"!==G(s)&&"function"!=typeof s?V(e):s}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e){var s="function"==typeof Map?new Map:void 0;return $=function(d){if(null===d||!function ne(e){return-1!==Function.toString.call(e).indexOf("[native code]")}(d))return d;if("function"!=typeof d)throw new TypeError("Super expression must either be null or a function");if(void 0!==s){if(s.has(d))return s.get(d);s.set(d,z)}function z(){return I(d,arguments,de(this).constructor)}return z.prototype=Object.create(d.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),X(z,d)},$(e)}function I(e,s,n){return(I=P()?Reflect.construct:function(z,y,T){var D=[null];D.push.apply(D,y);var me=new(Function.bind.apply(z,D));return T&&X(me,T.prototype),me}).apply(null,arguments)}function P(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function X(e,s){return(X=Object.setPrototypeOf||function(d,z){return d.__proto__=z,d})(e,s)}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(e)}var fe=function(e){!function te(e,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&X(e,s)}(n,e);var s=function ae(e){var s=P();return function(){var z,d=de(e);if(s){var y=de(this).constructor;z=Reflect.construct(d,arguments,y)}else z=d.apply(this,arguments);return oe(this,z)}}(n);function n(d,z,y,T,D,x,me){var Fe,Ke,At,xt,We;(function K(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")})(this,n),We=s.call(this,d);var bt,Ue=Array.isArray(z)?0!==z.length?z:void 0:z?[z]:void 0,Ft=y;!Ft&&Ue&&(Ft=null===(bt=Ue[0].loc)||void 0===bt?void 0:bt.source);var $t,Ot=T;!Ot&&Ue&&(Ot=Ue.reduce(function(dt,Mt){return Mt.loc&&dt.push(Mt.loc.start),dt},[])),Ot&&0===Ot.length&&(Ot=void 0),T&&y?$t=T.map(function(dt){return F(y,dt)}):Ue&&($t=Ue.reduce(function(dt,Mt){return Mt.loc&&dt.push(F(Mt.loc.source,Mt.loc.start)),dt},[]));var Rt=me;if(null==Rt&&null!=x){var kt=x.extensions;(function t(e){return"object"==i(e)&&null!==e})(kt)&&(Rt=kt)}return Object.defineProperties(V(We),{name:{value:"GraphQLError"},message:{value:d,enumerable:!0,writable:!0},locations:{value:null!==(Fe=$t)&&void 0!==Fe?Fe:void 0,enumerable:null!=$t},path:{value:null!=D?D:void 0,enumerable:null!=D},nodes:{value:null!=Ue?Ue:void 0},source:{value:null!==(Ke=Ft)&&void 0!==Ke?Ke:void 0},positions:{value:null!==(At=Ot)&&void 0!==At?At:void 0},originalError:{value:x},extensions:{value:null!==(xt=Rt)&&void 0!==xt?xt:void 0,enumerable:null!=Rt}}),(null==x?void 0:x.stack)?(Object.defineProperty(V(We),"stack",{value:x.stack,writable:!0,configurable:!0}),oe(We)):(Error.captureStackTrace?Error.captureStackTrace(V(We),n):Object.defineProperty(V(We),"stack",{value:Error().stack,writable:!0,configurable:!0}),We)}return function le(e,s,n){s&&H(e.prototype,s),n&&H(e,n)}(n,[{key:"toString",value:function(){return function pe(e){var s=e.message;if(e.nodes)for(var n=0,d=e.nodes;n<d.length;n++){var z=d[n];z.loc&&(s+="\n\n"+Z(z.loc))}else if(e.source&&e.locations)for(var y=0,T=e.locations;y<T.length;y++)s+="\n\n"+U(e.source,T[y]);return s}(this)}},{key:E.YF,get:function(){return"Object"}}]),n}($(Error));function ue(e,s,n){return new fe("Syntax Error: ".concat(n),void 0,e,[s])}var W=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),k=r(848),g=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),B=r(6261),A=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),w=r(2032),ye=function(){function e(n){var d=new k.WU(g.SOF,0,0,0,0,null);this.source=n,this.lastToken=d,this.token=d,this.line=1,this.lineStart=0}var s=e.prototype;return s.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},s.lookahead=function(){var d=this.token;if(d.kind!==g.EOF)do{var z;d=null!==(z=d.next)&&void 0!==z?z:d.next=Ne(this,d)}while(d.kind===g.COMMENT);return d},e}();function De(e){return isNaN(e)?g.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function Ne(e,s){for(var n=e.source,d=n.body,z=d.length,y=s.end;y<z;){var T=d.charCodeAt(y),D=e.line,x=1+y-e.lineStart;switch(T){case 65279:case 9:case 32:case 44:++y;continue;case 10:++y,++e.line,e.lineStart=y;continue;case 13:10===d.charCodeAt(y+1)?y+=2:++y,++e.line,e.lineStart=y;continue;case 33:return new k.WU(g.BANG,y,y+1,D,x,s);case 35:return $e(n,y,D,x,s);case 36:return new k.WU(g.DOLLAR,y,y+1,D,x,s);case 38:return new k.WU(g.AMP,y,y+1,D,x,s);case 40:return new k.WU(g.PAREN_L,y,y+1,D,x,s);case 41:return new k.WU(g.PAREN_R,y,y+1,D,x,s);case 46:if(46===d.charCodeAt(y+1)&&46===d.charCodeAt(y+2))return new k.WU(g.SPREAD,y,y+3,D,x,s);break;case 58:return new k.WU(g.COLON,y,y+1,D,x,s);case 61:return new k.WU(g.EQUALS,y,y+1,D,x,s);case 64:return new k.WU(g.AT,y,y+1,D,x,s);case 91:return new k.WU(g.BRACKET_L,y,y+1,D,x,s);case 93:return new k.WU(g.BRACKET_R,y,y+1,D,x,s);case 123:return new k.WU(g.BRACE_L,y,y+1,D,x,s);case 124:return new k.WU(g.PIPE,y,y+1,D,x,s);case 125:return new k.WU(g.BRACE_R,y,y+1,D,x,s);case 34:return 34===d.charCodeAt(y+1)&&34===d.charCodeAt(y+2)?ee(n,y,D,x,s,e):_(n,y,D,x,s);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return Ve(n,y,T,D,x,s);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return Q(n,y,D,x,s)}throw ue(n,y,Oe(T))}return new k.WU(g.EOF,z,z,e.line,1+y-e.lineStart,s)}function Oe(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(De(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(De(e),".")}function $e(e,s,n,d,z){var T,y=e.body,D=s;do{T=y.charCodeAt(++D)}while(!isNaN(T)&&(T>31||9===T));return new k.WU(g.COMMENT,s,D,n,d,z,y.slice(s+1,D))}function Ve(e,s,n,d,z,y){var T=e.body,D=n,x=s,me=!1;if(45===D&&(D=T.charCodeAt(++x)),48===D){if((D=T.charCodeAt(++x))>=48&&D<=57)throw ue(e,x,"Invalid number, unexpected digit after 0: ".concat(De(D),"."))}else x=be(e,x,D),D=T.charCodeAt(x);if(46===D&&(me=!0,D=T.charCodeAt(++x),x=be(e,x,D),D=T.charCodeAt(x)),(69===D||101===D)&&(me=!0,(43===(D=T.charCodeAt(++x))||45===D)&&(D=T.charCodeAt(++x)),x=be(e,x,D),D=T.charCodeAt(x)),46===D||function ge(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(D))throw ue(e,x,"Invalid number, expected digit but got: ".concat(De(D),"."));return new k.WU(me?g.FLOAT:g.INT,s,x,d,z,y,T.slice(s,x))}function be(e,s,n){var d=e.body,z=s,y=n;if(y>=48&&y<=57){do{y=d.charCodeAt(++z)}while(y>=48&&y<=57);return z}throw ue(e,z,"Invalid number, expected digit but got: ".concat(De(y),"."))}function _(e,s,n,d,z){for(var y=e.body,T=s+1,D=T,x=0,me="";T<y.length&&!isNaN(x=y.charCodeAt(T))&&10!==x&&13!==x;){if(34===x)return me+=y.slice(D,T),new k.WU(g.STRING,s,T+1,n,d,z,me);if(x<32&&9!==x)throw ue(e,T,"Invalid character within String: ".concat(De(x),"."));if(++T,92===x){switch(me+=y.slice(D,T-1),x=y.charCodeAt(T)){case 34:me+='"';break;case 47:me+="/";break;case 92:me+="\\";break;case 98:me+="\b";break;case 102:me+="\f";break;case 110:me+="\n";break;case 114:me+="\r";break;case 116:me+="\t";break;case 117:var Fe=S(y.charCodeAt(T+1),y.charCodeAt(T+2),y.charCodeAt(T+3),y.charCodeAt(T+4));if(Fe<0){var Ke=y.slice(T+1,T+5);throw ue(e,T,"Invalid character escape sequence: \\u".concat(Ke,"."))}me+=String.fromCharCode(Fe),T+=4;break;default:throw ue(e,T,"Invalid character escape sequence: \\".concat(String.fromCharCode(x),"."))}D=++T}}throw ue(e,T,"Unterminated string.")}function ee(e,s,n,d,z,y){for(var T=e.body,D=s+3,x=D,me=0,Fe="";D<T.length&&!isNaN(me=T.charCodeAt(D));){if(34===me&&34===T.charCodeAt(D+1)&&34===T.charCodeAt(D+2))return Fe+=T.slice(x,D),new k.WU(g.BLOCK_STRING,s,D+3,n,d,z,(0,w.W7)(Fe));if(me<32&&9!==me&&10!==me&&13!==me)throw ue(e,D,"Invalid character within String: ".concat(De(me),"."));10===me?(++D,++y.line,y.lineStart=D):13===me?(10===T.charCodeAt(D+1)?D+=2:++D,++y.line,y.lineStart=D):92===me&&34===T.charCodeAt(D+1)&&34===T.charCodeAt(D+2)&&34===T.charCodeAt(D+3)?(Fe+=T.slice(x,D)+'"""',x=D+=4):++D}throw ue(e,D,"Unterminated string.")}function S(e,s,n,d){return J(e)<<12|J(s)<<8|J(n)<<4|J(d)}function J(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Q(e,s,n,d,z){for(var y=e.body,T=y.length,D=s+1,x=0;D!==T&&!isNaN(x=y.charCodeAt(D))&&(95===x||x>=48&&x<=57||x>=65&&x<=90||x>=97&&x<=122);)++D;return new k.WU(g.NAME,s,D,n,d,z,y.slice(s,D))}var Ie=function(){function e(n,d){var z=(0,B.T)(n)?n:new B.H(n);this._lexer=new ye(z),this._options=d}var s=e.prototype;return s.parseName=function(){var d=this.expectToken(g.NAME);return{kind:W.NAME,value:d.value,loc:this.loc(d)}},s.parseDocument=function(){var d=this._lexer.token;return{kind:W.DOCUMENT,definitions:this.many(g.SOF,this.parseDefinition,g.EOF),loc:this.loc(d)}},s.parseDefinition=function(){if(this.peek(g.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(g.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},s.parseOperationDefinition=function(){var d=this._lexer.token;if(this.peek(g.BRACE_L))return{kind:W.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(d)};var y,z=this.parseOperationType();return this.peek(g.NAME)&&(y=this.parseName()),{kind:W.OPERATION_DEFINITION,operation:z,name:y,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseOperationType=function(){var d=this.expectToken(g.NAME);switch(d.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(d)},s.parseVariableDefinitions=function(){return this.optionalMany(g.PAREN_L,this.parseVariableDefinition,g.PAREN_R)},s.parseVariableDefinition=function(){var d=this._lexer.token;return{kind:W.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(g.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(g.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(d)}},s.parseVariable=function(){var d=this._lexer.token;return this.expectToken(g.DOLLAR),{kind:W.VARIABLE,name:this.parseName(),loc:this.loc(d)}},s.parseSelectionSet=function(){var d=this._lexer.token;return{kind:W.SELECTION_SET,selections:this.many(g.BRACE_L,this.parseSelection,g.BRACE_R),loc:this.loc(d)}},s.parseSelection=function(){return this.peek(g.SPREAD)?this.parseFragment():this.parseField()},s.parseField=function(){var y,T,d=this._lexer.token,z=this.parseName();return this.expectOptionalToken(g.COLON)?(y=z,T=this.parseName()):T=z,{kind:W.FIELD,alias:y,name:T,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(g.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(d)}},s.parseArguments=function(d){return this.optionalMany(g.PAREN_L,d?this.parseConstArgument:this.parseArgument,g.PAREN_R)},s.parseArgument=function(){var d=this._lexer.token,z=this.parseName();return this.expectToken(g.COLON),{kind:W.ARGUMENT,name:z,value:this.parseValueLiteral(!1),loc:this.loc(d)}},s.parseConstArgument=function(){var d=this._lexer.token;return{kind:W.ARGUMENT,name:this.parseName(),value:(this.expectToken(g.COLON),this.parseValueLiteral(!0)),loc:this.loc(d)}},s.parseFragment=function(){var d=this._lexer.token;this.expectToken(g.SPREAD);var z=this.expectOptionalKeyword("on");return!z&&this.peek(g.NAME)?{kind:W.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(d)}:{kind:W.INLINE_FRAGMENT,typeCondition:z?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(d)}},s.parseFragmentDefinition=function(){var d,z=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(d=this._options)||void 0===d?void 0:d.experimentalFragmentVariables)?{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(z)}:{kind:W.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(z)}},s.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},s.parseValueLiteral=function(d){var z=this._lexer.token;switch(z.kind){case g.BRACKET_L:return this.parseList(d);case g.BRACE_L:return this.parseObject(d);case g.INT:return this._lexer.advance(),{kind:W.INT,value:z.value,loc:this.loc(z)};case g.FLOAT:return this._lexer.advance(),{kind:W.FLOAT,value:z.value,loc:this.loc(z)};case g.STRING:case g.BLOCK_STRING:return this.parseStringLiteral();case g.NAME:switch(this._lexer.advance(),z.value){case"true":return{kind:W.BOOLEAN,value:!0,loc:this.loc(z)};case"false":return{kind:W.BOOLEAN,value:!1,loc:this.loc(z)};case"null":return{kind:W.NULL,loc:this.loc(z)};default:return{kind:W.ENUM,value:z.value,loc:this.loc(z)}}case g.DOLLAR:if(!d)return this.parseVariable()}throw this.unexpected()},s.parseStringLiteral=function(){var d=this._lexer.token;return this._lexer.advance(),{kind:W.STRING,value:d.value,block:d.kind===g.BLOCK_STRING,loc:this.loc(d)}},s.parseList=function(d){var z=this,y=this._lexer.token;return{kind:W.LIST,values:this.any(g.BRACKET_L,function(){return z.parseValueLiteral(d)},g.BRACKET_R),loc:this.loc(y)}},s.parseObject=function(d){var z=this,y=this._lexer.token;return{kind:W.OBJECT,fields:this.any(g.BRACE_L,function(){return z.parseObjectField(d)},g.BRACE_R),loc:this.loc(y)}},s.parseObjectField=function(d){var z=this._lexer.token,y=this.parseName();return this.expectToken(g.COLON),{kind:W.OBJECT_FIELD,name:y,value:this.parseValueLiteral(d),loc:this.loc(z)}},s.parseDirectives=function(d){for(var z=[];this.peek(g.AT);)z.push(this.parseDirective(d));return z},s.parseDirective=function(d){var z=this._lexer.token;return this.expectToken(g.AT),{kind:W.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(d),loc:this.loc(z)}},s.parseTypeReference=function(){var z,d=this._lexer.token;return this.expectOptionalToken(g.BRACKET_L)?(z=this.parseTypeReference(),this.expectToken(g.BRACKET_R),z={kind:W.LIST_TYPE,type:z,loc:this.loc(d)}):z=this.parseNamedType(),this.expectOptionalToken(g.BANG)?{kind:W.NON_NULL_TYPE,type:z,loc:this.loc(d)}:z},s.parseNamedType=function(){var d=this._lexer.token;return{kind:W.NAMED_TYPE,name:this.parseName(),loc:this.loc(d)}},s.parseTypeSystemDefinition=function(){var d=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(d.kind===g.NAME)switch(d.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(d)},s.peekDescription=function(){return this.peek(g.STRING)||this.peek(g.BLOCK_STRING)},s.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},s.parseSchemaDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("schema");var y=this.parseDirectives(!0),T=this.many(g.BRACE_L,this.parseOperationTypeDefinition,g.BRACE_R);return{kind:W.SCHEMA_DEFINITION,description:z,directives:y,operationTypes:T,loc:this.loc(d)}},s.parseOperationTypeDefinition=function(){var d=this._lexer.token,z=this.parseOperationType();this.expectToken(g.COLON);var y=this.parseNamedType();return{kind:W.OPERATION_TYPE_DEFINITION,operation:z,type:y,loc:this.loc(d)}},s.parseScalarTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("scalar");var y=this.parseName(),T=this.parseDirectives(!0);return{kind:W.SCALAR_TYPE_DEFINITION,description:z,name:y,directives:T,loc:this.loc(d)}},s.parseObjectTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("type");var y=this.parseName(),T=this.parseImplementsInterfaces(),D=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:W.OBJECT_TYPE_DEFINITION,description:z,name:y,interfaces:T,directives:D,fields:x,loc:this.loc(d)}},s.parseImplementsInterfaces=function(){var d;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLImplementsInterfaces)){var z=[];this.expectOptionalToken(g.AMP);do{z.push(this.parseNamedType())}while(this.expectOptionalToken(g.AMP)||this.peek(g.NAME));return z}return this.delimitedMany(g.AMP,this.parseNamedType)},s.parseFieldsDefinition=function(){var d;return!0===(null===(d=this._options)||void 0===d?void 0:d.allowLegacySDLEmptyFields)&&this.peek(g.BRACE_L)&&this._lexer.lookahead().kind===g.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(g.BRACE_L,this.parseFieldDefinition,g.BRACE_R)},s.parseFieldDefinition=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName(),T=this.parseArgumentDefs();this.expectToken(g.COLON);var D=this.parseTypeReference(),x=this.parseDirectives(!0);return{kind:W.FIELD_DEFINITION,description:z,name:y,arguments:T,type:D,directives:x,loc:this.loc(d)}},s.parseArgumentDefs=function(){return this.optionalMany(g.PAREN_L,this.parseInputValueDef,g.PAREN_R)},s.parseInputValueDef=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName();this.expectToken(g.COLON);var D,T=this.parseTypeReference();this.expectOptionalToken(g.EQUALS)&&(D=this.parseValueLiteral(!0));var x=this.parseDirectives(!0);return{kind:W.INPUT_VALUE_DEFINITION,description:z,name:y,type:T,defaultValue:D,directives:x,loc:this.loc(d)}},s.parseInterfaceTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("interface");var y=this.parseName(),T=this.parseImplementsInterfaces(),D=this.parseDirectives(!0),x=this.parseFieldsDefinition();return{kind:W.INTERFACE_TYPE_DEFINITION,description:z,name:y,interfaces:T,directives:D,fields:x,loc:this.loc(d)}},s.parseUnionTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("union");var y=this.parseName(),T=this.parseDirectives(!0),D=this.parseUnionMemberTypes();return{kind:W.UNION_TYPE_DEFINITION,description:z,name:y,directives:T,types:D,loc:this.loc(d)}},s.parseUnionMemberTypes=function(){return this.expectOptionalToken(g.EQUALS)?this.delimitedMany(g.PIPE,this.parseNamedType):[]},s.parseEnumTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("enum");var y=this.parseName(),T=this.parseDirectives(!0),D=this.parseEnumValuesDefinition();return{kind:W.ENUM_TYPE_DEFINITION,description:z,name:y,directives:T,values:D,loc:this.loc(d)}},s.parseEnumValuesDefinition=function(){return this.optionalMany(g.BRACE_L,this.parseEnumValueDefinition,g.BRACE_R)},s.parseEnumValueDefinition=function(){var d=this._lexer.token,z=this.parseDescription(),y=this.parseName(),T=this.parseDirectives(!0);return{kind:W.ENUM_VALUE_DEFINITION,description:z,name:y,directives:T,loc:this.loc(d)}},s.parseInputObjectTypeDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("input");var y=this.parseName(),T=this.parseDirectives(!0),D=this.parseInputFieldsDefinition();return{kind:W.INPUT_OBJECT_TYPE_DEFINITION,description:z,name:y,directives:T,fields:D,loc:this.loc(d)}},s.parseInputFieldsDefinition=function(){return this.optionalMany(g.BRACE_L,this.parseInputValueDef,g.BRACE_R)},s.parseTypeSystemExtension=function(){var d=this._lexer.lookahead();if(d.kind===g.NAME)switch(d.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(d)},s.parseSchemaExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var z=this.parseDirectives(!0),y=this.optionalMany(g.BRACE_L,this.parseOperationTypeDefinition,g.BRACE_R);if(0===z.length&&0===y.length)throw this.unexpected();return{kind:W.SCHEMA_EXTENSION,directives:z,operationTypes:y,loc:this.loc(d)}},s.parseScalarTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var z=this.parseName(),y=this.parseDirectives(!0);if(0===y.length)throw this.unexpected();return{kind:W.SCALAR_TYPE_EXTENSION,name:z,directives:y,loc:this.loc(d)}},s.parseObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var z=this.parseName(),y=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),D=this.parseFieldsDefinition();if(0===y.length&&0===T.length&&0===D.length)throw this.unexpected();return{kind:W.OBJECT_TYPE_EXTENSION,name:z,interfaces:y,directives:T,fields:D,loc:this.loc(d)}},s.parseInterfaceTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var z=this.parseName(),y=this.parseImplementsInterfaces(),T=this.parseDirectives(!0),D=this.parseFieldsDefinition();if(0===y.length&&0===T.length&&0===D.length)throw this.unexpected();return{kind:W.INTERFACE_TYPE_EXTENSION,name:z,interfaces:y,directives:T,fields:D,loc:this.loc(d)}},s.parseUnionTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseUnionMemberTypes();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.UNION_TYPE_EXTENSION,name:z,directives:y,types:T,loc:this.loc(d)}},s.parseEnumTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseEnumValuesDefinition();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.ENUM_TYPE_EXTENSION,name:z,directives:y,values:T,loc:this.loc(d)}},s.parseInputObjectTypeExtension=function(){var d=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var z=this.parseName(),y=this.parseDirectives(!0),T=this.parseInputFieldsDefinition();if(0===y.length&&0===T.length)throw this.unexpected();return{kind:W.INPUT_OBJECT_TYPE_EXTENSION,name:z,directives:y,fields:T,loc:this.loc(d)}},s.parseDirectiveDefinition=function(){var d=this._lexer.token,z=this.parseDescription();this.expectKeyword("directive"),this.expectToken(g.AT);var y=this.parseName(),T=this.parseArgumentDefs(),D=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var x=this.parseDirectiveLocations();return{kind:W.DIRECTIVE_DEFINITION,description:z,name:y,arguments:T,repeatable:D,locations:x,loc:this.loc(d)}},s.parseDirectiveLocations=function(){return this.delimitedMany(g.PIPE,this.parseDirectiveLocation)},s.parseDirectiveLocation=function(){var d=this._lexer.token,z=this.parseName();if(void 0!==A[z.value])return z;throw this.unexpected(d)},s.loc=function(d){var z;if(!0!==(null===(z=this._options)||void 0===z?void 0:z.noLocation))return new k.Ye(d,this._lexer.lastToken,this._lexer.source)},s.peek=function(d){return this._lexer.token.kind===d},s.expectToken=function(d){var z=this._lexer.token;if(z.kind===d)return this._lexer.advance(),z;throw ue(this._lexer.source,z.start,"Expected ".concat(_e(d),", found ").concat(Le(z),"."))},s.expectOptionalToken=function(d){var z=this._lexer.token;if(z.kind===d)return this._lexer.advance(),z},s.expectKeyword=function(d){var z=this._lexer.token;if(z.kind!==g.NAME||z.value!==d)throw ue(this._lexer.source,z.start,'Expected "'.concat(d,'", found ').concat(Le(z),"."));this._lexer.advance()},s.expectOptionalKeyword=function(d){var z=this._lexer.token;return z.kind===g.NAME&&z.value===d&&(this._lexer.advance(),!0)},s.unexpected=function(d){var z=null!=d?d:this._lexer.token;return ue(this._lexer.source,z.start,"Unexpected ".concat(Le(z),"."))},s.any=function(d,z,y){this.expectToken(d);for(var T=[];!this.expectOptionalToken(y);)T.push(z.call(this));return T},s.optionalMany=function(d,z,y){if(this.expectOptionalToken(d)){var T=[];do{T.push(z.call(this))}while(!this.expectOptionalToken(y));return T}return[]},s.many=function(d,z,y){this.expectToken(d);var T=[];do{T.push(z.call(this))}while(!this.expectOptionalToken(y));return T},s.delimitedMany=function(d,z){this.expectOptionalToken(d);var y=[];do{y.push(z.call(this))}while(this.expectOptionalToken(d));return y},e}();function Le(e){var s=e.value;return _e(e.kind)+(null!=s?' "'.concat(s,'"'):"")}function _e(e){return function Se(e){return e===g.BANG||e===g.DOLLAR||e===g.AMP||e===g.PAREN_L||e===g.PAREN_R||e===g.SPREAD||e===g.COLON||e===g.EQUALS||e===g.AT||e===g.BRACKET_L||e===g.BRACKET_R||e===g.BRACE_L||e===g.PIPE||e===g.BRACE_R}(e)?'"'.concat(e,'"'):e}var we=new Map,ve=new Map,Qe=!0,xe=!1;function Re(e){return e.replace(/[\s,]+/g," ").trim()}function ot(e){var s=Re(e);if(!we.has(s)){var n=function Ce(e,s){return new Ie(e,s).parseDocument()}(e,{experimentalFragmentVariables:xe,allowLegacyFragmentVariables:xe});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");we.set(s,function et(e){var s=new Set(e.definitions);s.forEach(function(d){d.loc&&delete d.loc,Object.keys(d).forEach(function(z){var y=d[z];y&&"object"==typeof y&&s.add(y)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(function it(e){var s=new Set,n=[];return e.definitions.forEach(function(d){if("FragmentDefinition"===d.kind){var z=d.name.value,y=function nt(e){return Re(e.source.body.substring(e.start,e.end))}(d.loc),T=ve.get(z);T&&!T.has(y)?Qe&&console.warn("Warning: fragment with name "+z+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):T||ve.set(z,T=new Set),T.add(y),s.has(y)||(s.add(y),n.push(d))}else n.push(d)}),(0,o.pi)((0,o.pi)({},e),{definitions:n})}(n)))}return we.get(s)}function v(e){for(var s=[],n=1;n<arguments.length;n++)s[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var d=e[0];return s.forEach(function(z,y){d+=z&&"Document"===z.kind?z.loc.source.body:z,d+=e[y+1]}),ot(d)}var e,Ge_gql=v;(e=v||(v={})).gql=Ge_gql,e.resetCaches=function rt(){we.clear(),ve.clear()},e.disableFragmentWarnings=function st(){Qe=!1},e.enableExperimentalFragmentVariables=function at(){xe=!0},e.disableExperimentalFragmentVariables=function ct(){xe=!1},v.default=v;var p=r(9298),a=r(5e3),j=(()=>(function(e){e.Na="NA",e.TierIii="TIER_III",e.TierIiLevelC="TIER_II_LEVEL_C",e.TierIiLevelD="TIER_II_LEVEL_D",e.TierIv="TIER_IV",e.TierILevelA="TIER_I_LEVEL_A",e.TierILevelB="TIER_I_LEVEL_B"}(j||(j={})),j))(),u=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.Na="NA",e.Negative="NEGATIVE",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE"}(u||(u={})),u))(),Y=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Supports="SUPPORTS"}(Y||(Y={})),Y))(),ie=(()=>(function(e){e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME"}(ie||(ie={})),ie))(),ze=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(ze||(ze={})),ze))(),Te=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT"}(Te||(Te={})),Te))(),Pe=(()=>(function(e){e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID"}(Pe||(Pe={})),Pe))(),Be=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Be||(Be={})),Be))(),Je=(()=>(function(e){e.Created="CREATED",e.LastModified="LAST_MODIFIED"}(Je||(Je={})),Je))(),Ye=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT"}(Ye||(Ye={})),Ye))(),He=(()=>(function(e){e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES"}(He||(He={})),He))(),Xe=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID"}(Xe||(Xe={})),Xe))(),je=(()=>(function(e){e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED"}(je||(je={})),je))(),qe=(()=>(function(e){e.Organization="ORGANIZATION",e.Subject="SUBJECT",e.Unscoped="UNSCOPED",e.User="USER"}(qe||(qe={})),qe))(),lt=(()=>(function(e){e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN"}(lt||(lt={})),lt))(),tt=(()=>(function(e){e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS"}(tt||(tt={})),tt))(),f=(()=>(function(e){e.A="A",e.B="B",e.C="C",e.D="D",e.E="E"}(f||(f={})),f))(),N=(()=>(function(e){e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN"}(N||(N={})),N))(),C=(()=>(function(e){e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED"}(C||(C={})),C))(),R=(()=>(function(e){e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC"}(R||(R={})),R))(),ce=(()=>(function(e){e.Open="OPEN",e.Resolved="RESOLVED"}(ce||(ce={})),ce))(),he=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(he||(he={})),he))(),mt=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount"}(mt||(mt={})),mt))(),gt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(gt||(gt={})),gt))(),ft=(()=>(function(e){e.Mention="MENTION",e.Subscription="SUBSCRIPTION"}(ft||(ft={})),ft))(),ht=(()=>(function(e){e.Id="ID",e.Name="NAME"}(ht||(ht={})),ht))(),vt=(()=>(function(e){e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME"}(vt||(vt={})),vt))(),ut=(()=>(function(e){e.Read="READ",e.Unread="UNREAD"}(ut||(ut={})),ut))(),Lt=(()=>(function(e){e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36"}(Lt||(Lt={})),Lt))(),zt=(()=>(function(e){e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED"}(zt||(zt={})),zt))(),yt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(yt||(yt={})),yt))(),Ct=(()=>(function(e){e.Asc="ASC",e.Desc="DESC"}(Ct||(Ct={})),Ct))(),It=(()=>(function(e){e.Asco="ASCO",e.Pubmed="PUBMED"}(It||(It={})),It))(),Tt=(()=>(function(e){e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED"}(Tt||(Tt={})),Tt))(),St=(()=>(function(e){e.Citation="CITATION",e.CitationId="CITATION_ID",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME"}(St||(St={})),St))(),Dt=(()=>(function(e){e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.Year="YEAR"}(Dt||(Dt={})),Dt))(),Et=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Et||(Et={})),Et))(),Nt=(()=>(function(e){e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP"}(Nt||(Nt={})),Nt))(),_t=(()=>(function(e){e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR"}(_t||(_t={})),_t))(),l=(()=>(function(e){e.Id="ID",e.LastAction="LAST_ACTION",e.Name="NAME",e.Role="ROLE"}(l||(l={})),l))(),M=(()=>(function(e){e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED"}(M||(M={})),M))(),c=(()=>(function(e){e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES"}(c||(c={})),c))(),h=(()=>(function(e){e.CoordinateEnd="COORDINATE_END",e.CoordinateStart="COORDINATE_START",e.Name="NAME"}(h||(h={})),h))(),b=(()=>(function(e){e.CommonGermline="COMMON_GERMLINE",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN"}(b||(b={})),b))(),re=(()=>(function(e){e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT"}(re||(re={})),re))(),ke=(()=>(function(e){e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName"}(ke||(ke={})),ke))();const Pt=v`
    fragment assertionPopover on Assertion {
  id
  name
  summary
  assertionType
  assertionDirection
  clinicalSignificance
  variantOrigin
  ampLevel
  acmgCodes {
    code
  }
  nccnGuideline
  fdaCompanionTest
  regulatoryApproval
  drugs {
    id
    name
    link
  }
  drugInteractionType
  disease {
    id
    name
    link
  }
  phenotypes {
    id
    name
    link
  }
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,Wt=v`
    fragment AssertionBrowseTableRowFields on Assertion {
  id
  name
  link
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
  }
  disease {
    id
    name
    link
  }
  drugs {
    id
    name
    link
  }
  phenotypes @include(if: $cardView) {
    id
    name
    link
  }
  drugInteractionType
  summary
  assertionType
  assertionDirection
  clinicalSignificance
  ampLevel
  acmgCodes @include(if: $cardView) {
    code
  }
  fdaCompanionTest @include(if: $cardView)
  regulatoryApproval @include(if: $cardView)
  nccnGuideline @include(if: $cardView)
  variantOrigin @include(if: $cardView)
}
    `,Jt=v`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Ut=v`
    fragment commentListNode on Comment {
  id
  title
  comment
  createdAt
  commenter {
    id
    username
    displayName
    name
    role
    profileImagePath(size: 32)
    organizations {
      id
      name
      profileImagePath(size: 32)
    }
  }
  parsedComment {
    __typename
    ... on CommentTagSegment {
      entityId
      displayName
      tagType
      status
      link
      __typename
    }
    ... on CommentTextSegment {
      text
    }
    ... on User {
      id
      displayName
      role
    }
  }
}
    `,jt=v`
    fragment commentPopover on Comment {
  id
  name
  createdAt
  title
  comment
  commenter {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  commentable {
    id
    name
    link
    __typename
  }
}
    `,Kt=v`
    fragment BrowseDiseaseRowFields on BrowseDisease {
  id
  name
  doid
  diseaseUrl
  geneNames
  assertionCount
  evidenceItemCount
  variantCount
  geneCount
  link
}
    `,Ht=v`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
  link
}
    `,wt=v`
    fragment eventFeedNode on Event {
  id
  action
  createdAt
  organization {
    id
    name
    profileImagePath(size: 32)
  }
  originatingUser {
    id
    username
    displayName
    role
    profileImagePath(size: 32)
  }
  subject {
    name
    id
    link
    ... on Source {
      citation
      sourceType
    }
    ... on EvidenceItem {
      status
    }
    ... on Assertion {
      status
    }
    __typename
  }
  originatingObject {
    id
    name
    link
    __typename
    ... on Revision {
      id
    }
    ... on Comment {
      id
    }
    ... on Flag {
      id
    }
  }
}
    `,Xt=v`
    fragment eventFeed on EventConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  eventTypes @include(if: $showFilters)
  unfilteredCount
  uniqueParticipants @include(if: $showFilters) {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  participatingOrganizations @include(if: $showFilters) {
    id
    name
    profileImagePath(size: 32)
  }
  edges {
    cursor
    node {
      ...eventFeedNode
    }
  }
}
    ${wt}`,qt=v`
    fragment evidencePopover on EvidenceItem {
  id
  name
  description
  evidenceLevel
  evidenceType
  evidenceDirection
  clinicalSignificance
  variantOrigin
  drugs {
    id
    name
    link
  }
  drugInteractionType
  disease {
    id
    name
    link
  }
  phenotypes {
    id
    name
    link
  }
  evidenceRating
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
  }
  source {
    id
    citation
    sourceType
    displayType
    link
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,en=v`
    fragment EvidenceGridFields on EvidenceItem {
  id
  name
  link
  disease {
    id
    name
    link
  }
  drugs {
    id
    name
    link
  }
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
  }
  phenotypes @include(if: $cardView) {
    id
    name
    link
  }
  source @include(if: $cardView) {
    id
    citation
    citationId
    sourceType
    sourceUrl
    clinicalTrials {
      nctId
      id
    }
    link
  }
  assertions @include(if: $cardView) {
    id
    name
    link
  }
  status
  drugInteractionType
  description
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  clinicalSignificance
  variantOrigin
}
    `,nn=v`
    fragment flagList on FlagConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  totalCount
  unfilteredCountForSubject
  uniqueFlaggingUsers {
    username
    id
    profileImagePath(size: 32)
  }
  uniqueResolvingUsers {
    username
    id
    profileImagePath(size: 32)
  }
  edges {
    node {
      ...flag
    }
  }
}
    ${v`
    fragment flag on Flag {
  id
  state
  createdAt
  resolvedAt
  flaggable {
    id
    name
    link
  }
  flaggingUser {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  resolvingUser {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  openComment {
    __typename
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
  resolutionComment {
    __typename
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
}
    `}`,on=v`
    fragment genePopover on Gene {
  id
  name
  officialName
  geneAliases
  variants {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    `,rn=v`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,sn=v`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,an=v`
    fragment OrganizationBrowseTableRowFields on Organization {
  id
  name
  description @include(if: $cardView)
  profileImagePath(size: 256) @include(if: $cardView)
  url
  memberCount
  eventCount
  subGroups {
    name
    id
  }
  mostRecentEvent {
    createdAt
  }
  orgStatsHash @include(if: $cardView) {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
}
    `,cn=v`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,ln=v`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,un=v`
    fragment revision on Revision {
  id
  revisionsetId
  createdAt
  resolvedAt
  fieldName
  currentValue
  suggestedValue
  linkoutData {
    name
    diffValue {
      ... on ObjectFieldDiff {
        currentObjects {
          id
          displayName
          displayType
          entityType
          link
        }
        addedObjects {
          id
          displayName
          displayType
          entityType
          link
        }
        removedObjects {
          id
          displayName
          displayType
          entityType
          link
        }
        keptObjects {
          id
          displayName
          displayType
          entityType
          link
        }
        suggestedObjects {
          id
          displayName
          displayType
          entityType
          link
        }
      }
      ... on ScalarFieldDiff {
        left
        right
      }
    }
  }
  revisor {
    id
    displayName
    role
  }
  resolver {
    id
    displayName
    role
  }
  creationComment {
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
  resolutionComment {
    parsedComment {
      __typename
      ... on CommentTagSegment {
        entityId
        displayName
        tagType
        link
        __typename
      }
      ... on CommentTextSegment {
        text
      }
      ... on User {
        id
        displayName
        role
      }
    }
  }
  status
}
    `,dn=v`
    fragment ContributorFields on ContributingUser {
  user {
    id
    profileImagePath(size: 12)
  }
  uniqueActions {
    action
    count
  }
  lastActionDate
  totalActionCount
}
    `,pn=v`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,mn=v`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,gn=v`
    fragment BrowseSourceSuggestionRowFields on SourceSuggestion {
  id
  gene {
    id
    name
    link
  }
  variant {
    id
    name
    link
  }
  disease {
    id
    name
    link
  }
  source {
    id
    citation
    citationId
    sourceType
    sourceUrl
    displayType
  }
  user {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  initialComment
  status
  reason
}
    `,fn=v`
    fragment sourcePopover on SourcePopover {
  id
  name
  evidenceItemCount
  citation
  citationId
  displayType
  sourceUrl
  clinicalTrials {
    id
    nctId
    link
  }
}
    `,hn=v`
    fragment BrowseSourceRowFields on BrowseSource {
  id
  authors
  citationId
  evidenceItemCount
  journal
  name
  publicationYear
  sourceType
  citation
  displayType
  link
}
    `,vn=v`
    fragment popoverUser on User {
  id
  profileImagePath(size: 64)
  displayName
  bio
  role
  organizations {
    id
    name
  }
}
    `,zn=v`
    fragment UserBrowseTableRowFields on User {
  id
  name
  displayName
  organizations {
    id
    name
  }
  role
  statsHash {
    submittedEvidenceItems
    revisions
  }
  mostRecentActionTimestamp
}
    `,yn=v`
    fragment variantGroupPopoverFields on VariantGroup {
  id
  name
  description
  variants {
    edges {
      node {
        id
        name
        link
      }
    }
  }
  sources {
    id
    citation
    sourceType
    link
  }
}
    `,Cn=v`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,In=v`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,Tn=v`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,Sn=v`
    fragment variantPopoverFields on Variant {
  id
  name
  description
  variantAliases
  alleleRegistryId
  evidenceItems {
    totalCount
  }
  gene {
    id
    name
    link
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    `,Dn=v`
    fragment menuVariant on Variant {
  id
  name
  link
}
    `,En=v`
    fragment previewComment on CommentBodySegment {
  __typename
  ... on CommentTagSegment {
    entityId
    displayName
    tagType
    status
    __typename
  }
  ... on CommentTextSegment {
    text
    __typename
  }
  ... on User {
    id
    displayName
    role
    __typename
  }
}
    `,Nn=v`
    fragment AddDiseaseFields on AddDiseasePayload {
  new
  disease {
    id
    name
    displayName
  }
}
    `,_n=v`
    fragment AddDrugFields on AddDrugPayload {
  new
  drug {
    id
    ncitId
    name
  }
}
    `,An=v`
    fragment EvidenceTransferSearchFields on EvidenceItem {
  id
  name
}
    `,On=v`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,Qt=v`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Vt=v`
    fragment SourceStubFields on SourceStub {
  id
  citationId
  sourceType
}
    `,Mn=v`
    fragment SourceTypeaheadFields on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,Zt=v`
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `,Ln=v`
    fragment AddVariantFields on AddVariantPayload {
  new
  variant {
    id
    name
  }
}
    `,xn=(v`
    fragment VariantSelectFields on Variant {
  id
  name
}
    `,v`
    fragment RevisableEvidenceFields on EvidenceItem {
  id
  variant {
    id
    name
    link
  }
  variantOrigin
  description
  clinicalSignificance
  disease {
    id
    doid
    name
    displayName
  }
  drugs {
    id
    ncitId
    name
  }
  drugInteractionType
  evidenceDirection
  evidenceLevel
  evidenceType
  phenotypes {
    id
    hpoId
    name
  }
  evidenceRating
  source {
    id
    sourceType
    citationId
    citation
  }
}
    `),Fn=v`
    fragment SubmittableEvidenceFields on EvidenceItem {
  id
  description
  variantOrigin
  evidenceType
  clinicalSignificance
  evidenceLevel
  evidenceDirection
  evidenceRating
  drugInteractionType
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  source {
    id
    citation
    sourceType
  }
  phenotypes {
    id
    name
  }
  drugs {
    id
    name
  }
  disease {
    id
    name
  }
}
    `,$n=v`
    fragment RevisableGeneFields on Gene {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
}
    `,Rn=v`
    fragment SubmittableVariantGroupFields on VariantGroup {
  id
  name
  description
  variants(first: 50) {
    nodes {
      id
      name
      link
    }
  }
  sources {
    id
    link
    citation
    sourceType
  }
}
    `,bn=v`
    fragment RevisableVariantFields on Variant {
  id
  name
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  gene {
    id
    name
  }
  variantAliases
  alleleRegistryId
  clinvarIds
  ensemblVersion
  hgvsDescriptions
  referenceBuild
  variantTypes {
    id
    name
    soid
  }
  fivePrimeCoordinates {
    ...CoordinateFields
  }
  threePrimeCoordinates {
    ...CoordinateFields
  }
}
    ${v`
    fragment CoordinateFields on Coordinate {
  chromosome
  referenceBases
  representativeTranscript
  start
  stop
  variantBases
}
    `}`,Gn=v`
    fragment AssertionDetailFields on Assertion {
  id
  name
  status
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,Bn=v`
    fragment AssertionSummaryFields on Assertion {
  id
  name
  summary
  description
  status
  variantOrigin
  disease {
    id
    name
  }
  gene {
    id
    name
  }
  variant {
    id
    name
    alleleRegistryId
  }
  assertionType
  assertionDirection
  clinicalSignificance
  drugs {
    ncitId
    name
    id
  }
  phenotypes {
    id
    name
  }
  drugInteractionType
  ampLevel
  acmgCodes {
    code
    description
  }
  nccnGuideline
  nccnGuidelineVersion
  regulatoryApproval
  fdaCompanionTest
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  acceptanceEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `,Un=v`
    fragment EvidenceDetailFields on EvidenceItem {
  id
  name
  status
  variant {
    id
    name
    link
  }
  gene {
    id
    name
    link
  }
  assertions {
    id
    name
    link
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,wn=v`
    fragment EvidenceSummaryFields on EvidenceItem {
  id
  name
  description
  status
  evidenceLevel
  evidenceType
  evidenceDirection
  clinicalSignificance
  variantOrigin
  drugs {
    id
    name
  }
  drugInteractionType
  disease {
    id
    name
  }
  phenotypes {
    id
    name
  }
  source {
    id
    citation
    citationId
    sourceType
    displayType
    sourceUrl
    ascoAbstractId
    clinicalTrials {
      nctId
      id
    }
  }
  evidenceRating
  gene {
    id
    name
  }
  variant {
    id
    name
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  acceptanceEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  submissionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `,Qn=v`
    fragment GeneDetailFields on Gene {
  id
  name
  officialName
  entrezId
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,Vn=v`
    fragment GeneSummaryFields on Gene {
  description
  entrezId
  geneAliases
  id
  name
  officialName
  sources {
    id
    citation
    sourceUrl
    displayType
    sourceType
  }
  variants {
    edges {
      node {
        id
        name
        description
      }
    }
  }
  myGeneInfoDetails
  lastSubmittedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  lastAcceptedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    `,Zn=v`
    fragment OrganizationDetailFields on Organization {
  id
  name
  url
  description
  profileImagePath(size: 256)
  subGroups {
    id
    name
    profileImagePath(size: 12)
  }
  orgStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  orgAndSuborgsStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
}
    `,Yn=v`
    fragment OrganizationGroupsFields on Organization {
  id
  name
  description
  profileImagePath(size: 12)
  orgStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
}
    `,kn=v`
    fragment OrganizationMembersFields on User {
  id
  name
  displayName
  username
  profileImagePath(size: 36)
  role
  url
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
}
    `,Wn=v`
    fragment Release on DataRelease {
  name
  geneTsv {
    filename
    path
  }
  variantTsv {
    filename
    path
  }
  variantGroupTsv {
    filename
    path
  }
  evidenceTsv {
    filename
    path
  }
  assertionTsv {
    filename
    path
  }
  acceptedVariantsVcf {
    filename
    path
  }
  acceptedAndSubmittedVariantsVcf {
    filename
    path
  }
}
    `,Jn=v`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,jn=v`
    fragment SourceSummaryFields on Source {
  displayType
  title
  abstract
  publicationDate
  citationId
  fullJournalTitle
  pmcId
  authorString
  clinicalTrials {
    nctId
    id
  }
}
    `,Kn=v`
    fragment UserDetailFields on User {
  id
  name
  displayName
  username
  email
  profileImagePath(size: 128)
  role
  url
  bio
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
  organizations {
    id
    name
  }
  country {
    id
    name
  }
  statsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  mostRecentConflictOfInterestStatement {
    id
    coiPresent
    coiStatement
    coiStatus
    createdAt
    expiresAt
  }
}
    `,Hn=v`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Xn=v`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,qn=v`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Yt=v`
    fragment notificationNode on Notification {
  id
  type
  event {
    ...eventFeedNode
  }
  seen
  subscription {
    id
    subscribable {
      id
      name
      __typename
    }
  }
}
    ${wt}`,ei=v`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,ti=v`
    fragment VariantGroupDetailFields on VariantGroup {
  id
  name
  variants {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,ni=v`
    fragment VariantGroupSummaryFields on VariantGroup {
  id
  name
  description
  sources {
    id
    link
    citation
    sourceUrl
    displayType
    sourceType
  }
  variants {
    edges {
      node {
        id
        name
        link
        description
      }
    }
  }
}
    `,ii=v`
    fragment VariantDetailFields on Variant {
  id
  name
  gene {
    id
    name
  }
  variantAliases
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `,ri=v`
    fragment VariantSummaryFields on Variant {
  id
  name
  description
  gene {
    id
    name
  }
  sources {
    id
    citation
    sourceUrl
    displayType
    sourceType
  }
  variantAliases
  alleleRegistryId
  variantTypes {
    soid
    name
  }
  hgvsDescriptions
  clinvarIds
  evidenceScore
  referenceBuild
  ensemblVersion
  fivePrimeCoordinates {
    representativeTranscript
    chromosome
    start
    stop
    referenceBases
    variantBases
  }
  threePrimeCoordinates {
    representativeTranscript
    chromosome
    start
    stop
    referenceBases
    variantBases
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  myVariantInfo {
    ...MyVariantInfoFields
  }
  lastSubmittedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  lastAcceptedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${v`
    fragment MyVariantInfoFields on MyVariantInfo {
  myVariantInfoId
  caddConsequence
  caddDetail
  caddScore
  clinvarClinicalSignificance
  clinvarHgvsCoding
  clinvarHgvsGenomic
  clinvarHgvsNonCoding
  clinvarHgvsProtein
  clinvarId
  clinvarOmim
  cosmicId
  dbnsfpInterproDomain
  dbsnpRsid
  eglClass
  eglHgvs
  eglProtein
  eglTranscript
  exacAlleleCount
  exacAlleleFrequency
  exacAlleleNumber
  fathmmMklPrediction
  fathmmMklScore
  fathmmPrediction
  fathmmScore
  fitconsScore
  gerp
  gnomadExomeAlleleCount
  gnomadExomeAlleleFrequency
  gnomadExomeAlleleNumber
  gnomadExomeFilter
  gnomadGenomeAlleleCount
  gnomadGenomeAlleleFrequency
  gnomadGenomeAlleleNumber
  gnomadGenomeFilter
  lrtPrediction
  lrtScore
  metalrPrediction
  metalrScore
  metasvmPrediction
  metasvmScore
  mutationassessorPrediction
  mutationassessorScore
  mutationtasterPrediction
  mutationtasterScore
  phastcons100way
  phastcons30way
  phyloP100way
  phyloP30way
  polyphen2HdivPrediction
  polyphen2HdivScore
  polyphen2HvarPrediction
  polyphen2HvarScore
  proveanPrediction
  proveanScore
  revelScore
  siftPrediction
  siftScore
  siphy
  snpeffSnpEffect
  snpeffSnpImpact
}
    `}`,si=v`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Pt}`;let ai=(()=>{class e extends p.AE{constructor(n){super(n),this.document=si}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ci=v`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $assertionType: EvidenceType, $variantId: Int, $evidenceId: Int, $geneName: String, $variantName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $status: EvidenceStatus, $cardView: Boolean!) {
  assertions(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    drugName: $drugName
    id: $id
    summary: $summary
    assertionDirection: $assertionDirection
    clinicalSignificance: $clinicalSignificance
    assertionType: $assertionType
    variantId: $variantId
    sortBy: $sortBy
    ampLevel: $ampLevel
    geneName: $geneName
    variantName: $variantName
    evidenceId: $evidenceId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    drugId: $drugId
    diseaseId: $diseaseId
    status: $status
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...AssertionBrowseTableRowFields
      }
    }
  }
}
    ${Wt}`;let li=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ci}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ui=v`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Jt}`;let di=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ui}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pi=v`
    query ClinicalTrialsBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $nctId: String, $sortBy: ClinicalTrialSort) {
  clinicalTrials(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    nctId: $nctId
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        id
        name
        nctId
        evidenceCount
        sourceCount
        link
      }
    }
  }
}
    `;let mi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=pi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gi=v`
    query CommentList($first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $mentionedUserId: Int, $mentionedRole: UserRole, $mentionedEntity: TaggableEntityInput, $subject: CommentableInput, $sortBy: DateSort) {
  comments(
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    mentionedUserId: $mentionedUserId
    mentionedRole: $mentionedRole
    mentionedEntity: $mentionedEntity
    subject: $subject
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    uniqueCommenters {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    mentionedUsers {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    mentionedRoles {
      displayName
      entityId
      tagType
      link
    }
    mentionedEntities {
      displayName
      entityId
      tagType
      link
    }
    unfilteredCountForSubject
    edges {
      cursor
      node {
        ...commentListNode
      }
    }
  }
}
    ${Ut}`;let fi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=gi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const hi=v`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${jt}`;let vi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=hi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zi=v`
    query DiseasePopover($diseaseId: Int!) {
  diseasePopover(id: $diseaseId) {
    id
    name
    displayName
    doid
    diseaseUrl
    diseaseAliases
    assertionCount
    evidenceItemCount
    variantCount
    link
  }
}
    `;let yi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=zi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ci=v`
    query BrowseDiseases($first: Int, $last: Int, $before: String, $after: String, $sortBy: DiseasesSort, $name: String, $doid: String, $geneNames: String) {
  browseDiseases(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    doid: $doid
    geneNames: $geneNames
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseDiseaseRowFields
      }
    }
  }
}
    ${Kt}`;let Ii=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ci}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ti=v`
    query DrugPopover($drugId: Int!) {
  drugPopover(id: $drugId) {
    id
    name
    drugUrl
    ncitId
    drugAliases
    assertionCount
    evidenceItemCount
    link
  }
}
    `;let Si=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ti}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Di=v`
    query DrugsBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $ncitId: String, $sortBy: DrugSort) {
  drugs(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    ncitId: $ncitId
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...DrugBrowseTableRowFields
      }
    }
  }
}
    ${Ht}`;let Ei=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Di}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ni=v`
    query EventFeed($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $mode: EventFeedMode, $showFilters: Boolean!) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
    mode: $mode
  ) {
    ...eventFeed
  }
}
    ${Xt}`;let _i=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ni}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ai=v`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${qt}`;let Oi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ai}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mi=v`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $drugName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $clinicalSignificance: EvidenceClinicalSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $drugId: Int, $sourceId: Int, $clinicalTrialId: Int, $geneSymbol: String, $variantName: String, $status: EvidenceStatus, $cardView: Boolean!) {
  evidenceItems(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    drugName: $drugName
    id: $id
    description: $description
    evidenceLevel: $evidenceLevel
    evidenceDirection: $evidenceDirection
    clinicalSignificance: $clinicalSignificance
    evidenceType: $evidenceType
    evidenceRating: $rating
    variantOrigin: $variantOrigin
    variantId: $variantId
    assertionId: $assertionId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    diseaseId: $diseaseId
    drugId: $drugId
    sourceId: $sourceId
    clinicalTrialId: $clinicalTrialId
    geneSymbol: $geneSymbol
    variantName: $variantName
    status: $status
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...EvidenceGridFields
      }
    }
  }
}
    ${en}`;let Li=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Mi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=v`
    query FlagList($flaggable: FlaggableInput, $flaggingUserId: Int, $resolvingUserId: Int, $state: FlagState, $sortBy: DateSort, $first: Int, $last: Int, $before: String, $after: String) {
  flags(
    flaggable: $flaggable
    flaggingUserId: $flaggingUserId
    resolvingUserId: $resolvingUserId
    state: $state
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    ...flagList
  }
}
    ${nn}`;let Fi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=xi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $i=v`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${on}`;let Ri=(()=>{class e extends p.AE{constructor(n){super(n),this.document=$i}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pi=v`
    query BrowseGenes($entrezSymbol: String, $drugName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    drugName: $drugName
    geneAlias: $geneAlias
    diseaseName: $diseaseName
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    edges {
      cursor
      node {
        id
        entrezId
        name
        link
        geneAliases
        diseases {
          name
          id
          link
        }
        drugs {
          name
          id
          link
        }
        variantCount
        evidenceItemCount
        assertionCount
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    totalCount
    filteredCount
    pageCount
  }
}
    `;let bi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Pi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gi=v`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${rn}`;let Bi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Gi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ui=v`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${sn}`;let wi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ui}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qi=v`
    query OrganizationsBrowse($first: Int, $last: Int, $before: String, $after: String, $id: Int, $orgName: String, $sortBy: OrganizationSort, $cardView: Boolean!) {
  organizations(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $orgName
    id: $id
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...OrganizationBrowseTableRowFields
      }
    }
  }
}
    ${an}`;let Vi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Qi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zi=v`
    query PhenotypePopover($phenotypeId: Int!) {
  phenotypePopover(id: $phenotypeId) {
    id
    name
    url
    hpoId
    assertionCount
    evidenceItemCount
    link
  }
}
    `;let Yi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Zi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ki=v`
    query PhenotypesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $hpoId: String, $sortBy: PhenotypeSort) {
  phenotypes(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    hpoId: $hpoId
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...PhenotypeBrowseTableRowFields
      }
    }
  }
}
    ${cn}`;let Wi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ki}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ji=v`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let ji=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Ji}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ki=v`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Hi=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Ki}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xi=v`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${ln}`;let qi=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Xi}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const eo=v`
    query Revisions($subject: ModeratedInput, $first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserId: Int, $resolvingUserId: Int, $revisionsetId: String, $status: RevisionStatus) {
  revisions(
    first: $first
    last: $last
    before: $before
    after: $after
    fieldName: $fieldName
    originatingUserId: $originatingUserId
    resolvingUserId: $resolvingUserId
    subject: $subject
    status: $status
    revisionsetId: $revisionsetId
  ) {
    totalCount
    unfilteredCountForSubject
    uniqueRevisors {
      username
      id
      profileImagePath(size: 32)
    }
    uniqueResolvers {
      username
      id
      profileImagePath(size: 32)
    }
    revisedFieldNames {
      name
      displayName
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
    edges {
      node {
        ...revision
      }
    }
  }
}
    ${un}`;let to=(()=>{class e extends p.AE{constructor(n){super(n),this.document=eo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const no=v`
    query ContributorAvatars($subscribable: SubscribableInput!) {
  contributors(subscribable: $subscribable) {
    editors {
      ...ContributorFields
    }
    curators {
      ...ContributorFields
    }
  }
}
    ${dn}`;let io=(()=>{class e extends p.AE{constructor(n){super(n),this.document=no}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oo=v`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${pn}`;let ro=(()=>{class e extends p.AE{constructor(n){super(n),this.document=oo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const so=v`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let ao=(()=>{class e extends p.mm{constructor(n){super(n),this.document=so}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const co=v`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let lo=(()=>{class e extends p.mm{constructor(n){super(n),this.document=co}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const uo=v`
    query CivicStats {
  timepointStats {
    assertions {
      ...TimepointCount
    }
    diseases {
      ...TimepointCount
    }
    comments {
      ...TimepointCount
    }
    drugs {
      ...TimepointCount
    }
    evidenceItems {
      ...TimepointCount
    }
    genes {
      ...TimepointCount
    }
    revisions {
      ...TimepointCount
    }
    sources {
      ...TimepointCount
    }
    users {
      ...TimepointCount
    }
    variants {
      ...TimepointCount
    }
  }
}
    ${mn}`;let po=(()=>{class e extends p.AE{constructor(n){super(n),this.document=uo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mo=v`
    query BrowseSourceSuggestions($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourceSuggestionsSort, $sourceType: SourceSource, $citationId: Int, $sourceId: Int, $geneName: String, $variantName: String, $diseaseName: String, $comment: String, $submitter: String, $citation: String, $submitterId: Int, $status: SourceSuggestionStatus) {
  sourceSuggestions(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    sourceType: $sourceType
    citationId: $citationId
    sourceId: $sourceId
    geneName: $geneName
    variantName: $variantName
    diseaseName: $diseaseName
    comment: $comment
    submitter: $submitter
    citation: $citation
    submitterId: $submitterId
    status: $status
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceSuggestionRowFields
      }
    }
  }
}
    ${gn}`;let go=(()=>{class e extends p.AE{constructor(n){super(n),this.document=mo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const fo=v`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${fn}`;let ho=(()=>{class e extends p.AE{constructor(n){super(n),this.document=fo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vo=v`
    query BrowseSources($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourcesSort, $name: String, $year: Int, $sourceType: SourceSource, $citationId: Int, $author: String, $journal: String, $clinicalTrialId: Int) {
  browseSources(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    year: $year
    sourceType: $sourceType
    citationId: $citationId
    author: $author
    journal: $journal
    clinicalTrialId: $clinicalTrialId
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceRowFields
      }
    }
  }
}
    ${hn}`;let zo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=vo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yo=v`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${vn}`;let Co=(()=>{class e extends p.AE{constructor(n){super(n),this.document=yo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Io=v`
    query UsersBrowse($first: Int, $last: Int, $before: String, $after: String, $userName: String, $orgName: OrganizationFilter, $userRole: UserRole, $sortBy: UsersSort) {
  users(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $userName
    organization: $orgName
    role: $userRole
    sortBy: $sortBy
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
    edges {
      cursor
      node {
        ...UserBrowseTableRowFields
      }
    }
  }
}
    ${zn}`;let To=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Io}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const So=v`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${yn}`;let Do=(()=>{class e extends p.AE{constructor(n){super(n),this.document=So}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Eo=v`
    query BrowseVariantGroups($first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantGroupsSort, $name: String, $geneNames: String, $variantNames: String) {
  browseVariantGroups(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    geneNames: $geneNames
    variantNames: $variantNames
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseVariantGroupRowFields
      }
    }
  }
}
    ${Cn}`;let No=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Eo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _o=v`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${In}`;let Ao=(()=>{class e extends p.AE{constructor(n){super(n),this.document=_o}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oo=v`
    query VariantTypesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $soid: String, $sortBy: VariantTypeSort) {
  variantTypes(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    soid: $soid
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...VariantTypeBrowseTableRowFields
      }
    }
  }
}
    ${Tn}`;let Mo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Oo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lo=v`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${Sn}`;let xo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Lo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fo=v`
    query VariantsMenu($geneId: Int, $variantName: String, $evidenceStatusFilter: VariantDisplayFilter, $first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantMenuSort) {
  variants(
    geneId: $geneId
    name: $variantName
    evidenceStatusFilter: $evidenceStatusFilter
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      cursor
      node {
        ...menuVariant
      }
    }
  }
}
    ${Dn}`;let $o=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Fo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ro=v`
    query BrowseVariants($variantName: String, $entrezSymbol: String, $diseaseName: String, $drugName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
    diseaseName: $diseaseName
    drugName: $drugName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
    variantGroupId: $variantGroupId
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      cursor
      node {
        id
        name
        link
        evidenceScore
        evidenceItemCount
        geneId
        geneName
        geneLink
        diseases {
          id
          name
          link
        }
        drugs {
          id
          name
          link
        }
        aliases {
          name
        }
        assertionCount
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    `;let Po=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ro}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bo=v`
    query ViewerBase {
  viewer {
    id
    username
    role
    displayName
    profileImagePath(size: 32)
    organizations {
      id
      name
      profileImagePath(size: 32)
    }
    mostRecentConflictOfInterestStatement {
      coiStatus
    }
    mostRecentOrganizationId
  }
}
    `;let Go=(()=>{class e extends p.AE{constructor(n){super(n),this.document=bo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bo=v`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Uo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Bo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wo=v`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let Qo=(()=>{class e extends p.mm{constructor(n){super(n),this.document=wo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vo=v`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Ut}`;let Zo=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Vo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yo=v`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${En}`;let ko=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Yo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wo=v`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Jo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Wo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jo=v`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Ko=(()=>{class e extends p.AE{constructor(n){super(n),this.document=jo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ho=v`
    query AcmgCodeTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    id
    code
    description
  }
}
    `;let Xo=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ho}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qo=v`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    displayName
    doid
    diseaseAliases
  }
}
    `;let er=(()=>{class e extends p.AE{constructor(n){super(n),this.document=qo}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tr=v`
    mutation AddDisease($name: String!, $doid: Int) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...AddDiseaseFields
  }
}
    ${Nn}`;let nr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=tr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ir=v`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let or=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ir}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rr=v`
    mutation AddDrug($name: String!, $ncitId: String) {
  addDrug(input: {name: $name, ncitId: $ncitId}) {
    ...AddDrugFields
  }
}
    ${_n}`;let sr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=rr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ar=v`
    query EvidenceTypeahead($id: Int!) {
  evidenceItem(id: $id) {
    id
    status
    name
  }
}
    `;let cr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ar}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lr=v`
    query EvidenceTransferSearch($id: Int, $first: Int) {
  evidenceItems(id: $id, first: $first) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...EvidenceTransferSearchFields
      }
    }
  }
}
    ${An}`;let ur=(()=>{class e extends p.AE{constructor(n){super(n),this.document=lr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const dr=v`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${On}`;let pr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=dr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mr=v`
    query NccnGuidelineTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    id
    name
  }
}
    `;let gr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=mr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fr=v`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let hr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=fr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vr=v`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Qt}`;let zr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=vr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yr=v`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Cr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=yr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ir=v`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Tr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Ir}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Sr=v`
    query CheckRemoteCitation($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Dr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Sr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Er=v`
    mutation AddRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      ...SourceStubFields
    }
  }
}
    ${Vt}`;let Nr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Er}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _r=v`
    query SourceTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Qt}`;let Ar=(()=>{class e extends p.AE{constructor(n){super(n),this.document=_r}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Or=v`
    query VariantTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Zt}`;let Mr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Or}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Lr=v`
    mutation AddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...AddVariantFields
  }
}
    ${Ln}`;let xr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Lr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    query VariantSelect($name: String!, $geneId: Int) {
  variants(name: $name, first: 20, geneId: $geneId) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${Zt}`;const Fr=v`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let $r=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Fr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rr=v`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${xn}`;let Pr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Rr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const br=v`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
      revisions {
        totalCount
        edges {
          node {
            id
            revisionsetId
            createdAt
            fieldName
            currentValue
            suggestedValue
            linkoutData {
              name
              diffValue {
                ... on ObjectFieldDiff {
                  addedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  removedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  keptObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                }
                ... on ScalarFieldDiff {
                  left
                  right
                }
              }
            }
            revisor {
              id
              name
            }
            status
          }
        }
      }
    }
    results {
      id
      fieldName
    }
  }
}
    `;let Gr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=br}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Fn}`;const Br=v`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Ur=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Br}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wr=v`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let Qr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=wr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vr=v`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Zr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Vr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yr=v`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${$n}`;let kr=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Yr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wr=v`
    mutation SuggestGeneRevision($input: SuggestGeneRevisionInput!) {
  suggestGeneRevision(input: $input) {
    clientMutationId
    gene {
      id
      revisions {
        totalCount
        edges {
          node {
            id
            revisionsetId
            createdAt
            fieldName
            currentValue
            suggestedValue
            linkoutData {
              name
              diffValue {
                ... on ObjectFieldDiff {
                  addedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  removedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  keptObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                }
                ... on ScalarFieldDiff {
                  left
                  right
                }
              }
            }
            revisor {
              id
              name
            }
            status
          }
        }
      }
    }
    results {
      id
      fieldName
    }
  }
}
    `;let Jr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Wr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jr=v`
    mutation SuggestSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let Kr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=jr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hr=v`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let Xr=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Hr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qr=v`
    mutation UpdateCoi($input: UpdateCoiInput!) {
  updateCoi(input: $input) {
    coiStatement {
      coiPresent
      coiStatus
      createdAt
      id
    }
  }
}
    `;let es=(()=>{class e extends p.mm{constructor(n){super(n),this.document=qr}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ts=v`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let ns=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ts}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const is=v`
    query Countries {
  countries {
    id
    name
  }
}
    `;let os=(()=>{class e extends p.AE{constructor(n){super(n),this.document=is}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rs=v`
    mutation SuggestVariantGroupRevision($input: SuggestVariantGroupRevisionInput!) {
  suggestVariantGroupRevision(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
    results {
      id
      fieldName
    }
  }
}
    `;let ss=(()=>{class e extends p.mm{constructor(n){super(n),this.document=rs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const as=v`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Rn}`;let cs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=as}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ls=v`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let us=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ls}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ds=v`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${bn}`;let ps=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ds}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ms=v`
    mutation SuggestVariantRevision($input: SuggestVariantRevisionInput!) {
  suggestVariantRevision(input: $input) {
    clientMutationId
    variant {
      id
      revisions {
        totalCount
        edges {
          node {
            id
            revisionsetId
            createdAt
            fieldName
            currentValue
            suggestedValue
            linkoutData {
              name
              diffValue {
                ... on ObjectFieldDiff {
                  addedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  removedObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                  keptObjects {
                    id
                    displayName
                    displayType
                    entityType
                  }
                }
                ... on ScalarFieldDiff {
                  left
                  right
                }
              }
            }
            revisor {
              id
              name
            }
            status
          }
        }
      }
    }
    results {
      id
      fieldName
    }
  }
}
    `;let gs=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ms}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fs=v`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Gn}`;let hs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=fs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vs=v`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Bn}`;let zs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=vs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ys=v`
    query ClinicalTrialDetail($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
    link
  }
}
    `;let Cs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ys}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Is=v`
    query DiseaseDetail($diseaseId: Int!) {
  disease(id: $diseaseId) {
    id
    name
    doid
    diseaseUrl
    displayName
    diseaseAliases
    link
  }
}
    `;let Ts=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Is}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ss=v`
    query DrugDetail($drugId: Int!) {
  drug(id: $drugId) {
    id
    name
    ncitId
    drugUrl
    drugAliases
    link
  }
}
    `;let Ds=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ss}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Es=v`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Un}`;let Ns=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Es}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _s=v`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${wn}`;let As=(()=>{class e extends p.AE{constructor(n){super(n),this.document=_s}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Os=v`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Qn}`;let Ms=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Os}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ls=v`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Vn}`;let xs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ls}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fs=v`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${Zn}`;let $s=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Fs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rs=v`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Yn}`;let Ps=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Rs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bs=v`
    query OrganizationMembers($organizationId: Int!) {
  organization(id: $organizationId) {
    members {
      edges {
        cursor
        node {
          ...OrganizationMembersFields
        }
      }
    }
  }
}
    ${kn}`;let Gs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=bs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bs=v`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
    link
  }
}
    `;let Us=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Bs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ws=v`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${Wn}`;let Qs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ws}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vs=v`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Jn}`;let Zs=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Vs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ys=v`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${jn}`;let ks=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ys}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ws=v`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Kn}`;let Js=(()=>{class e extends p.AE{constructor(n){super(n),this.document=Ws}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const js=v`
    query UserNotifications($first: Int, $last: Int, $before: String, $after: String, $notificationReason: NotificationReason, $subscriptionId: Int, $originatingObject: SubscribableInput, $eventType: EventAction, $originatingUserId: Int, $organizationId: Int, $includeRead: Boolean) {
  notifications(
    first: $first
    last: $last
    before: $before
    after: $after
    notificationReason: $notificationReason
    subscriptionId: $subscriptionId
    originatingObject: $originatingObject
    eventType: $eventType
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    includeRead: $includeRead
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    notificationSubjects {
      ...notificationFeedSubjects
    }
    originatingUsers {
      ...notificationOriginatingUsers
    }
    organizations {
      ...notificationOrganization
    }
    eventTypes
    edges {
      node {
        ...notificationNode
      }
    }
  }
}
    ${qn}
${Xn}
${Hn}
${Yt}`;let Ks=(()=>{class e extends p.AE{constructor(n){super(n),this.document=js}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hs=v`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Yt}`;let Xs=(()=>{class e extends p.mm{constructor(n){super(n),this.document=Hs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qs=v`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${ei}`;let ea=(()=>{class e extends p.mm{constructor(n){super(n),this.document=qs}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ta=v`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let na=(()=>{class e extends p.mm{constructor(n){super(n),this.document=ta}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ia=v`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${ti}`;let oa=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ia}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();v`
    query VariantGroupRevisions($variantGroupId: Int!, $first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserId: Int) {
  variantGroup(id: $variantGroupId) {
    id
    revisions(
      first: $first
      last: $last
      before: $before
      after: $after
      fieldName: $fieldName
      originatingUserId: $originatingUserId
    ) {
      totalCount
      uniqueRevisors {
        username
        id
        profileImagePath(size: 32)
      }
      revisedFieldNames {
        name
        displayName
      }
      edges {
        node {
          id
          revisionsetId
          createdAt
          fieldName
          currentValue
          suggestedValue
          linkoutData {
            name
            diffValue {
              ... on ObjectFieldDiff {
                addedObjects {
                  id
                  displayName
                  displayType
                  entityType
                }
                removedObjects {
                  id
                  displayName
                  displayType
                  entityType
                }
                keptObjects {
                  id
                  displayName
                  displayType
                  entityType
                }
              }
              ... on ScalarFieldDiff {
                left
                right
              }
            }
          }
          revisor {
            id
            name
          }
          status
        }
      }
    }
  }
}
    `;const ra=v`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${ni}`;let sa=(()=>{class e extends p.AE{constructor(n){super(n),this.document=ra}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const aa=v`
    query VariantTypeDetail($variantTypeId: Int!) {
  variantType(id: $variantTypeId) {
    id
    name
    soid
    description
    url
    link
  }
}
    `;let ca=(()=>{class e extends p.AE{constructor(n){super(n),this.document=aa}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const la=v`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${ii}`;let ua=(()=>{class e extends p.AE{constructor(n){super(n),this.document=la}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const da=v`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${ri}`;let pa=(()=>{class e extends p.AE{constructor(n){super(n),this.document=da}}return e.\u0275fac=function(n){return new(n||e)(a.LFG(p._M))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4024:(Ee,se,r)=>{r.r(se),r.d(se,{LayoutModule:()=>_t});var o=r(9808),i=r(325),t=r(5e3),E=r(9350),F=r(8929),Z=r(7625),U=r(655),q=r(4090),O=r(1721),L=r(4219),G=r(925),K=r(647),H=r(226),le=r(5113);const te=["*"],ae=["nz-sider-trigger",""];function oe(l,M){}function V(l,M){if(1&l&&(t.ynx(0),t.YNc(1,oe,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),h=t.MAs(5);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzZeroTrigger||h)}}function $(l,M){}function I(l,M){if(1&l&&(t.ynx(0),t.YNc(1,$,0,0,"ng-template",3),t.BQk()),2&l){const c=t.oxw(),h=t.MAs(3);t.xp6(1),t.Q6J("ngTemplateOutlet",c.nzTrigger||h)}}function P(l,M){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"right":"left")}}function ne(l,M){if(1&l&&t._UZ(0,"i",5),2&l){const c=t.oxw(2);t.Q6J("nzType",c.nzCollapsed?"left":"right")}}function X(l,M){if(1&l&&(t.YNc(0,P,1,1,"i",4),t.YNc(1,ne,1,1,"i",4)),2&l){const c=t.oxw();t.Q6J("ngIf",!c.nzReverseArrow),t.xp6(1),t.Q6J("ngIf",c.nzReverseArrow)}}function de(l,M){1&l&&t._UZ(0,"i",6)}function fe(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){t.CHM(c);const b=t.oxw();return b.setCollapsed(!b.nzCollapsed)}),t.qZA()}if(2&l){const c=t.oxw();t.Q6J("matchBreakPoint",c.matchBreakPoint)("nzCollapsedWidth",c.nzCollapsedWidth)("nzCollapsed",c.nzCollapsed)("nzBreakpoint",c.nzBreakpoint)("nzReverseArrow",c.nzReverseArrow)("nzTrigger",c.nzTrigger)("nzZeroTrigger",c.nzZeroTrigger)("siderWidth",c.widthSetting)}}let pe=(()=>{class l{constructor(c,h){this.elementRef=c,this.renderer=h,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:te,decls:1,vars:0,template:function(c,h){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),W=(()=>{class l{constructor(c,h){this.elementRef=c,this.renderer=h,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36(t.Qsj))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:te,decls:1,vars:0,template:function(c,h){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),k=(()=>{class l{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(c,h){2&c&&(t.Udp("width",h.isNormalTrigger?h.siderWidth:null),t.ekj("ant-layout-sider-trigger",h.isNormalTrigger)("ant-layout-sider-zero-width-trigger",h.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",h.isZeroTrigger&&h.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",h.isZeroTrigger&&!h.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[t.TTD],attrs:ae,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(c,h){1&c&&(t.YNc(0,V,2,1,"ng-container",0),t.YNc(1,I,2,1,"ng-container",0),t.YNc(2,X,2,2,"ng-template",null,1,t.W1O),t.YNc(4,de,1,0,"ng-template",null,2,t.W1O)),2&c&&(t.Q6J("ngIf",h.isZeroTrigger),t.xp6(1),t.Q6J("ngIf",h.isNormalTrigger))},directives:[o.O5,o.tP,K.Ls],encapsulation:2,changeDetection:0}),l})(),g=(()=>{class l{constructor(c,h,b){this.platform=c,this.cdr=h,this.breakpointService=b,this.destroy$=new F.xQ,this.nzMenuDirective=null,this.nzCollapsedChange=new t.vpe,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:(0,O.WX)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(c){c!==this.nzCollapsed&&(this.nzCollapsed=c,this.nzCollapsedChange.emit(c),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(q.ow,!0).pipe((0,Z.R)(this.destroy$)).subscribe(c=>{const h=this.nzBreakpoint;h&&(0,O.ov)().subscribe(()=>{this.matchBreakPoint=!c[h],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(c){const{nzCollapsed:h,nzCollapsedWidth:b,nzWidth:re}=c;(h||b||re)&&this.updateStyleMap(),h&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(G.t4),t.Y36(t.sBO),t.Y36(q.r3))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-sider"]],contentQueries:function(c,h,b){if(1&c&&t.Suo(b,L.wO,5),2&c){let re;t.iGM(re=t.CRH())&&(h.nzMenuDirective=re.first)}},hostAttrs:[1,"ant-layout-sider"],hostVars:18,hostBindings:function(c,h){2&c&&(t.Udp("flex",h.flexSetting)("max-width",h.widthSetting)("min-width",h.widthSetting)("width",h.widthSetting),t.ekj("ant-layout-sider-zero-width",h.nzCollapsed&&0===h.nzCollapsedWidth)("ant-layout-sider-light","light"===h.nzTheme)("ant-layout-sider-dark","dark"===h.nzTheme)("ant-layout-sider-collapsed",h.nzCollapsed)("ant-layout-sider-has-trigger",h.nzCollapsible&&null!==h.nzTrigger))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[t.TTD],ngContentSelectors:te,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(c,h){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA(),t.YNc(2,fe,1,8,"div",1)),2&c&&(t.xp6(2),t.Q6J("ngIf",h.nzCollapsible&&null!==h.nzTrigger))},directives:[k,o.O5],encapsulation:2,changeDetection:0}),(0,U.gn)([(0,O.yF)()],l.prototype,"nzReverseArrow",void 0),(0,U.gn)([(0,O.yF)()],l.prototype,"nzCollapsible",void 0),(0,U.gn)([(0,O.yF)()],l.prototype,"nzCollapsed",void 0),l})(),B=(()=>{class l{constructor(c){this.directionality=c,this.dir="ltr",this.destroy$=new F.xQ}ngOnInit(){var c;this.dir=this.directionality.value,null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(h=>{this.dir=h})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(H.Is,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-layout"]],contentQueries:function(c,h,b){if(1&c&&t.Suo(b,g,4),2&c){let re;t.iGM(re=t.CRH())&&(h.listOfNzSiderComponent=re)}},hostAttrs:[1,"ant-layout"],hostVars:4,hostBindings:function(c,h){2&c&&t.ekj("ant-layout-rtl","rtl"===h.dir)("ant-layout-has-sider",h.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:te,decls:1,vars:0,template:function(c,h){1&c&&(t.F$t(),t.Hsn(0))},encapsulation:2,changeDetection:0}),l})(),A=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[H.vT,o.ez,K.PV,le.xu,G.ud]]}),l})();var w=r(404),ye=r(1894),Se=r(712),De=r(373),Ne=r(1047),Oe=r(4182),$e=r(2845),Ve=r(4832),be=r(969),_=r(3753),ee=r(2654),S=r(8514),J=r(6787),Q=r(2198),ge=r(2868),Ce=r(6792),Ae=r(2986),Me=r(7545),Ie=r(1159),Le=r(7429),_e=r(8076);function we(l,M){if(1&l&&(t.ynx(0),t._uU(1),t.BQk()),2&l){const c=t.oxw();t.xp6(1),t.Oqu(c.nzLabel)}}const ve=[[["nz-auto-option"]]],Qe=["nz-auto-option"],xe=["*"],Re=["panel"],nt=["content"];function it(l,M){}function et(l,M){1&l&&t.YNc(0,it,0,0,"ng-template")}function ot(l,M){1&l&&t.Hsn(0)}function v(l,M){if(1&l&&(t.TgZ(0,"nz-auto-option",8),t._uU(1),t.qZA()),2&l){const c=M.$implicit;t.Q6J("nzValue",c)("nzLabel",c&&c.label?c.label:c),t.xp6(1),t.hij(" ",c&&c.label?c.label:c," ")}}function rt(l,M){if(1&l&&t.YNc(0,v,2,3,"nz-auto-option",7),2&l){const c=t.oxw(2);t.Q6J("ngForOf",c.nzDataSource)}}function st(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",0,1),t.NdJ("@slideMotion.done",function(b){return t.CHM(c),t.oxw().onAnimationEvent(b)}),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,et,1,0,void 0,4),t.qZA(),t.qZA(),t.qZA(),t.YNc(5,ot,1,0,"ng-template",null,5,t.W1O),t.YNc(7,rt,1,1,"ng-template",null,6,t.W1O)}if(2&l){const c=t.MAs(6),h=t.MAs(8),b=t.oxw();t.ekj("ant-select-dropdown-hidden",!b.showPanel)("ant-select-dropdown-rtl","rtl"===b.dir),t.Q6J("ngClass",b.nzOverlayClassName)("ngStyle",b.nzOverlayStyle)("nzNoAnimation",null==b.noAnimation?null:b.noAnimation.nzNoAnimation)("@slideMotion",void 0)("@.disabled",null==b.noAnimation?null:b.noAnimation.nzNoAnimation),t.xp6(4),t.Q6J("ngTemplateOutlet",b.nzDataSource?h:c)}}let at=(()=>{class l{constructor(){}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:Qe,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(c,h){1&c&&(t.F$t(ve),t.TgZ(0,"div",0),t.YNc(1,we,2,1,"ng-container",1),t.qZA(),t.Hsn(2)),2&c&&(t.xp6(1),t.Q6J("nzStringTemplateOutlet",h.nzLabel))},directives:[be.f],encapsulation:2,changeDetection:0}),l})();class ct{constructor(M,c=!1){this.source=M,this.isUserInput=c}}let Ge=(()=>{class l{constructor(c,h,b,re){this.ngZone=c,this.changeDetectorRef=h,this.element=b,this.nzAutocompleteOptgroupComponent=re,this.nzDisabled=!1,this.selectionChange=new t.vpe,this.mouseEntered=new t.vpe,this.active=!1,this.selected=!1,this.destroy$=new F.xQ}ngOnInit(){this.ngZone.runOutsideAngular(()=>{(0,_.R)(this.element.nativeElement,"mouseenter").pipe((0,Q.h)(()=>this.mouseEntered.observers.length>0),(0,Z.R)(this.destroy$)).subscribe(()=>{this.ngZone.run(()=>this.mouseEntered.emit(this))}),(0,_.R)(this.element.nativeElement,"mousedown").pipe((0,Z.R)(this.destroy$)).subscribe(c=>c.preventDefault())})}ngOnDestroy(){this.destroy$.next()}select(c=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),c&&this.emitSelectionChangeEvent()}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){(0,O.zT)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(c=!1){this.selectionChange.emit(new ct(this,c))}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(t.SBq),t.Y36(at,8))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(c,h){1&c&&t.NdJ("click",function(){return h.selectViaInteraction()}),2&c&&(t.uIk("aria-selected",h.selected.toString())("aria-disabled",h.nzDisabled.toString()),t.ekj("ant-select-item-option-grouped",h.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",h.selected)("ant-select-item-option-active",h.active)("ant-select-item-option-disabled",h.nzDisabled))},inputs:{nzValue:"nzValue",nzLabel:"nzLabel",nzDisabled:"nzDisabled"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:xe,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(c,h){1&c&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},encapsulation:2,changeDetection:0}),(0,U.gn)([(0,O.yF)()],l.prototype,"nzDisabled",void 0),l})();const pt={provide:Oe.JU,useExisting:(0,t.Gpc)(()=>a),multi:!0};let a=(()=>{class l{constructor(c,h,b,re,ke){this.elementRef=c,this.overlay=h,this.viewContainerRef=b,this.nzInputGroupWhitSuffixOrPrefixDirective=re,this.document=ke,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new F.xQ,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){return this.nzAutocomplete&&this.nzAutocomplete.options.length?this.nzAutocomplete.activeItem:null}ngAfterViewInit(){this.nzAutocomplete&&this.nzAutocomplete.animationStateChange.pipe((0,Z.R)(this.destroy$)).subscribe(c=>{"void"===c.toState&&this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.destroyPanel()}writeValue(c){Promise.resolve(null).then(()=>this.setTriggerValue(c))}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}setDisabledState(c){this.elementRef.nativeElement.disabled=c,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.overlayRef.detach(),this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.portal=null))}handleKeydown(c){const h=c.keyCode,b=h===Ie.LH||h===Ie.JH;h===Ie.hY&&c.preventDefault(),!this.panelOpen||h!==Ie.hY&&h!==Ie.Mf?this.panelOpen&&h===Ie.K5?this.nzAutocomplete.showPanel&&(c.preventDefault(),this.activeOption?this.activeOption.selectViaInteraction():this.closePanel()):this.panelOpen&&b&&this.nzAutocomplete.showPanel&&(c.stopPropagation(),c.preventDefault(),h===Ie.LH?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(c){const h=c.target,b=this.document;let re=h.value;"number"===h.type&&(re=""===re?null:parseFloat(re)),this.previousValue!==re&&(this.previousValue=re,this.onChange(re),this.canOpen()&&b.activeElement===c.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe((0,ge.b)(()=>this.positionStrategy.reapplyLastPosition()),(0,Ce.g)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(c=>{this.setValueAndClose(c)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe((0,Q.h)(c=>!this.elementRef.nativeElement.contains(c.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw function p(){return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.")}();!this.portal&&this.nzAutocomplete.template&&(this.portal=new Le.UE(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new $e.X_({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const c=[new $e.tR({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new $e.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(c).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const c=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==c?(this.nzAutocomplete.setActiveItem(c),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(c){const h=c.nzValue;this.setTriggerValue(c.getLabel()),this.onChange(h),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(c){const h=this.nzAutocomplete.getOption(c),b=h?h.getLabel():c;this.elementRef.nativeElement.value=null!=b?b:"",this.nzAutocomplete.nzBackfill||(this.previousValue=b)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const c=this.elementRef.nativeElement;return!c.readOnly&&!c.disabled}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.SBq),t.Y36($e.aV),t.Y36(t.s_b),t.Y36(Ne.ke,8),t.Y36(o.K0,8))},l.\u0275dir=t.lG2({type:l,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(c,h){1&c&&t.NdJ("focusin",function(){return h.handleFocus()})("blur",function(){return h.handleBlur()})("input",function(re){return h.handleInput(re)})("keydown",function(re){return h.handleKeydown(re)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[t._Bn([pt])]}),l})(),j=(()=>{class l{constructor(c,h,b,re){this.changeDetectorRef=c,this.ngZone=h,this.directionality=b,this.noAnimation=re,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(ke,Pt)=>ke===Pt,this.selectionChange=new t.vpe,this.showPanel=!0,this.isOpen=!1,this.activeItem=null,this.dir="ltr",this.destroy$=new F.xQ,this.animationStateChange=new t.vpe,this.activeItemIndex=-1,this.selectionChangeSubscription=ee.w.EMPTY,this.optionMouseEnterSubscription=ee.w.EMPTY,this.dataSourceChangeSubscription=ee.w.EMPTY,this.optionSelectionChanges=(0,S.P)(()=>this.options?(0,J.T)(...this.options.map(ke=>ke.selectionChange)):this.ngZone.onStable.asObservable().pipe((0,Ae.q)(1),(0,Me.w)(()=>this.optionSelectionChanges))),this.optionMouseEnter=(0,S.P)(()=>this.options?(0,J.T)(...this.options.map(ke=>ke.mouseEntered)):this.ngZone.onStable.asObservable().pipe((0,Ae.q)(1),(0,Me.w)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var c;null===(c=this.directionality.change)||void 0===c||c.pipe((0,Z.R)(this.destroy$)).subscribe(h=>{this.dir=h,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}onAnimationEvent(c){this.animationStateChange.emit(c)}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.dataSourceChangeSubscription=this.selectionChangeSubscription=this.optionMouseEnterSubscription=null,this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(c){const h=this.options.get(c);h&&!h.active?(this.activeItem=h,this.activeItemIndex=c,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles()):(this.activeItem=null,this.activeItemIndex=-1,this.clearSelectedOptions()),this.changeDetectorRef.markForCheck()}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(c){return this.options.reduce((h,b,re)=>-1===h?this.compareWith(c,b.nzValue)?re:-1:h,-1)}getOption(c){return this.options.find(h=>this.compareWith(c,h.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(h=>{!h.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(c,h=!1){this.options.forEach(b=>{b!==c&&(h&&b.deselect(),b.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe((0,Q.h)(c=>c.isUserInput)).subscribe(c=>{c.source.select(),c.source.setActiveStyles(),this.activeItem=c.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c.source,!0),this.selectionChange.emit(c.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(c=>{c.setActiveStyles(),this.activeItem=c,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(c)})}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(H.Is,8),t.Y36(Ve.P,9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["nz-autocomplete"]],contentQueries:function(c,h,b){if(1&c&&t.Suo(b,Ge,5),2&c){let re;t.iGM(re=t.CRH())&&(h.fromContentOptions=re)}},viewQuery:function(c,h){if(1&c&&(t.Gf(t.Rgc,5),t.Gf(Re,5),t.Gf(nt,5),t.Gf(Ge,5)),2&c){let b;t.iGM(b=t.CRH())&&(h.template=b.first),t.iGM(b=t.CRH())&&(h.panel=b.first),t.iGM(b=t.CRH())&&(h.content=b.first),t.iGM(b=t.CRH())&&(h.fromDataSourceOptions=b)}},inputs:{nzWidth:"nzWidth",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:xe,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(c,h){1&c&&(t.F$t(),t.YNc(0,st,9,10,"ng-template"))},directives:[Ge,o.mk,o.PC,Ve.P,o.tP,o.sg],encapsulation:2,data:{animation:[_e.mF]},changeDetection:0}),(0,U.gn)([(0,O.yF)()],l.prototype,"nzDefaultActiveFirstOption",void 0),(0,U.gn)([(0,O.yF)()],l.prototype,"nzBackfill",void 0),l})(),m=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[H.vT,o.ez,$e.U8,Oe.u5,be.T,Ve.g,Ne.o7]]}),l})();var u=r(6949);function Y(l,M){1&l&&t._UZ(0,"i",5)}function ie(l,M){if(1&l){const c=t.EpF();t.ynx(0),t.TgZ(1,"a",6),t.TgZ(2,"nz-auto-option",7),t.NdJ("click",function(){t.CHM(c);const b=t.oxw();return b.searchQuery="",b.refresh()}),t.TgZ(3,"span"),t._UZ(4,"i",8),t._UZ(5,"span",9),t._UZ(6,"br"),t._UZ(7,"span",9),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&l){const c=M.$implicit,h=t.oxw();t.xp6(1),t.Q6J("routerLink",h.urlForResult(c)),t.xp6(1),t.Q6J("nzValue",h.urlForResult(c)),t.xp6(2),t.Q6J("nzType",h.iconNameForResult(c)),t.xp6(1),t.s9C("innerHTML",c.name,t.oJD),t.xp6(2),t.s9C("innerHTML",c.matchingText,t.oJD)}}let ze=(()=>{class l{constructor(c,h){this.gql=c,this.router=h,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe((0,De.j)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(c){switch(c.resultType){case Se.rZD.EvidenceItem:return"civic:evidence";case Se.rZD.VariantGroup:return"civic:variantgroup";default:return`civic:${c.resultType.toLowerCase()}`}}urlForResult(c){let h;switch(c.resultType){case Se.rZD.VariantGroup:h="variant-groups";break;case Se.rZD.EvidenceItem:h="evidence";break;default:h=`${c.resultType.toLowerCase()}s`}return`/${h}/${c.id}/summary`}quicksearchSelected(c){let h=c.target.value;this.searchQuery="",this.router.navigate([h])}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(Se.ghc),t.Y36(i.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(c,h){if(1&c&&(t.TgZ(0,"nz-input-group",0),t.TgZ(1,"input",1),t.NdJ("ngModelChange",function(re){return h.searchQuery=re})("ngModelChange",function(){return h.refresh()})("keyup.enter",function(re){return h.quicksearchSelected(re)}),t.qZA(),t.qZA(),t.YNc(2,Y,1,0,"ng-template",null,2,t.W1O),t.TgZ(4,"nz-autocomplete",null,3),t.YNc(6,ie,8,5,"ng-container",4),t.ALo(7,"ngrxPush"),t.qZA()),2&c){const b=t.MAs(3),re=t.MAs(5);t.Q6J("nzSuffix",b),t.xp6(1),t.Q6J("ngModel",h.searchQuery)("nzAutocomplete",re),t.xp6(5),t.Q6J("ngForOf",t.lcZ(7,4,h.searchResults$))}},directives:[Ne.gB,Ne.ke,Ne.Zp,Oe.Fj,a,Oe.JJ,Oe.On,K.Ls,j,o.sg,i.yS,Ge],pipes:[u.fM],styles:[""]}),l})();var Ze=r(1912),Te=r(4850),Pe=r(1059),Be=r(8144),Je=r(4401),Ye=r(3677),He=r(7881),Xe=r(3640),je=r(8785);function qe(l,M){if(1&l&&(t.ynx(0),t.TgZ(1,"div",9),t._UZ(2,"i",10),t._UZ(3,"nz-badge",11),t.qZA(),t.BQk()),2&l){const c=M.ngrxLet;t.xp6(1),t.MGl("nzTooltipTitle","You have ",c," unread notification(s)."),t.xp6(2),t.Q6J("nzShowDot",c>0)}}function lt(l,M){if(1&l&&(t.TgZ(0,"a",7),t.YNc(1,qe,4,2,"ng-container",8),t.qZA()),2&l){const c=t.oxw().ngIf,h=t.oxw();t.MGl("routerLink","/users/",c.id,"/notifications"),t.xp6(1),t.Q6J("ngrxLet",h.unreadCount$)}}function tt(l,M){if(1&l&&(t.TgZ(0,"div",12),t._UZ(1,"i",13),t._UZ(2,"i",14),t.TgZ(3,"nz-dropdown-menu",null,15),t.TgZ(5,"ul",16),t.TgZ(6,"li",17),t.TgZ(7,"a",18),t._uU(8," Add Evidence "),t.qZA(),t.qZA(),t.TgZ(9,"li",17),t.TgZ(10,"a",19),t._uU(11," Add Assertion "),t.qZA(),t.qZA(),t.TgZ(12,"li",17),t.TgZ(13,"a",20),t._uU(14," Suggest Source "),t.qZA(),t.qZA(),t.TgZ(15,"li",17),t.TgZ(16,"a",21),t._uU(17," Add Variant Group "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&l){const c=t.MAs(4);t.Q6J("nzDropdownMenu",c)}}function f(l,M){1&l&&t._UZ(0,"nz-badge",29),2&l&&t.Q6J("nzShowDot",!0)}function N(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"li",28),t.NdJ("click",function(){return t.CHM(c),t.oxw(3).coiUpdateModalVisible=!0}),t.TgZ(1,"nz-badge",30),t.TgZ(2,"strong"),t._uU(3," Please provide an updated conflict of interest statement. "),t.qZA(),t.qZA(),t.qZA()}2&l&&(t.xp6(1),t.Q6J("nzShowDot",!0))}function C(l,M){1&l&&(t.TgZ(0,"li",17),t.TgZ(1,"a",31),t._uU(2," Admin Console "),t.qZA(),t.qZA())}function R(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"div",12),t._UZ(1,"cvc-user-avatar",22),t._UZ(2,"i",14),t.YNc(3,f,1,1,"nz-badge",23),t.TgZ(4,"nz-dropdown-menu",null,24),t.TgZ(6,"ul",16),t.TgZ(7,"li",17),t._uU(8,"Signed In as\xa0"),t.TgZ(9,"strong"),t._uU(10),t.qZA(),t.qZA(),t._UZ(11,"li",25),t.YNc(12,N,4,1,"li",26),t.TgZ(13,"li",17),t.TgZ(14,"a",7),t._uU(15," Your Profile "),t.qZA(),t.qZA(),t.YNc(16,C,3,0,"li",27),t._UZ(17,"li",25),t.TgZ(18,"li",28),t.NdJ("click",function(){return t.CHM(c),t.oxw(2).signOut()}),t._uU(19,"Sign Out"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&l){const c=t.MAs(5),h=t.oxw().ngIf;t.Q6J("nzDropdownMenu",c),t.xp6(1),t.Q6J("user",h),t.xp6(2),t.Q6J("ngIf",h.invalidCoi),t.xp6(7),t.Oqu(h.username),t.xp6(2),t.Q6J("ngIf",h.invalidCoi),t.xp6(2),t.MGl("routerLink","/users/",h.id,""),t.xp6(2),t.Q6J("ngIf",h.isAdmin)}}function ce(l,M){1&l&&(t.ynx(0),t.TgZ(1,"nz-space",4),t.YNc(2,lt,2,2,"a",5),t.YNc(3,tt,18,1,"div",6),t.YNc(4,R,20,7,"div",6),t.qZA(),t.BQk())}function he(l,M){1&l&&(t.TgZ(0,"span"),t._uU(1,"Update your Conflict of Interest Statement"),t.qZA())}function mt(l,M){if(1&l){const c=t.EpF();t.TgZ(0,"cvc-user-coi-form",32),t.NdJ("coiUpdatedEvent",function(){return t.CHM(c),t.oxw().coiUpdated()}),t.qZA()}}let Gt=(()=>{class l{constructor(c,h){this.queryService=c,this.unreadCountGql=h,this.coiUpdateModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=this.unreadCountGql.watch(void 0).valueChanges.pipe((0,Te.U)(({data:b})=>b.notifications.unreadCount),(0,Pe.O)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(E.a),t.Y36(Se.Kmw))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-viewer-button"]],decls:7,vars:7,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["nzAlign","center","nzSize","middle"],[3,"routerLink",4,"nzSpaceItem"],["class","topMenuIcon","nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",3,"nzDropdownMenu",4,"nzSpaceItem"],[3,"routerLink"],[4,"ngrxLet"],["nz-tooltip","",1,"topMenuIcon",3,"nzTooltipTitle"],["nz-icon","","nzType","bell","nzTheme","outline"],["nzColor","blue",1,"topBarBadge",3,"nzShowDot"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"topMenuIcon",3,"nzDropdownMenu"],["nz-icon","","nzType","plus","nzTheme","outline"],["nz-icon","","nzType","caret-down","nzTheme","outline",1,"topMenuSecondary"],["addMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["routerLink","/sources/add"],["routerLink","/variant-groups/add/submit"],["size","small",3,"user"],["class","topBarBadge","nzColor","orange",3,"nzShowDot",4,"ngIf"],["userMenu","nzDropdownMenu"],["nz-menu-divider",""],["nz-menu-item","",3,"click",4,"ngIf"],["nz-menu-item","",4,"ngIf"],["nz-menu-item","",3,"click"],["nzColor","orange",1,"topBarBadge",3,"nzShowDot"],["nzColor","orange",3,"nzShowDot"],["routerLink","/admin"],[3,"coiUpdatedEvent"]],template:function(c,h){if(1&c&&(t.YNc(0,ce,5,0,"ng-container",0),t.ALo(1,"ngrxPush"),t.TgZ(2,"nz-modal",1),t.NdJ("nzVisibleChange",function(re){return h.coiUpdateModalVisible=re})("nzOnCancel",function(){return h.handleCoiModalCancel()}),t.YNc(3,he,2,0,"ng-template",null,2,t.W1O),t.YNc(5,mt,1,0,"ng-template",null,3,t.W1O),t.qZA()),2&c){const b=t.MAs(4),re=t.MAs(6);t.Q6J("ngIf",t.lcZ(1,5,h.viewer$)),t.xp6(2),t.Q6J("nzVisible",h.coiUpdateModalVisible)("nzContent",re)("nzTitle",b)("nzFooter",null)}},directives:[o.O5,Be.NU,Be.$1,i.yS,u.eJ,w.SY,K.Ls,Je.x7,Ye.cm,Ye.RR,L.wO,L.r9,He.L,L.YV,Xe.du,je.t],pipes:[u.fM],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}"]}),l})();function gt(l,M){1&l&&t._UZ(0,"img",62)}function ft(l,M){1&l&&t._UZ(0,"img",63)}function ht(l,M){1&l&&t._UZ(0,"cvc-login-button")}function vt(l,M){1&l&&t._UZ(0,"cvc-viewer-button")}const ut=function(l){return{"is-collapsed":l}},zt=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class l{constructor(c){this.viewerService=c,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return l.\u0275fac=function(c){return new(c||l)(t.Y36(E.a))},l.\u0275cmp=t.Xpm({type:l,selectors:[["cvc-layout"]],decls:145,vars:43,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"sidebar-menu",3,"nzInlineCollapsed"],["nz-menu-group",""],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["nz-icon","","nzType","home","nzThemes","filled"],["routerLink","/welcome"],["nz-menu-group","",3,"nzTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","audit"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","file-add"],["routerLink","/curation/queues/pending-sources"],["routerLink","/curation/queues/pending-evidence"],["routerLink","/curation/queues/pending-assertions"],["nz-icon","","nzType","global"],["routerLink","/community","id","main-community"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-icon","","nzType","bar-chart"],["routerLink","/statistics","id","statistics"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["routerLink","/pages/about"],["routerLink","/pages/help"],["routerLink","/pages/contact"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(c,h){1&c&&(t.TgZ(0,"nz-layout",0),t.TgZ(1,"nz-sider",1),t.NdJ("nzCollapsedChange",function(re){return h.isCollapsed=re}),t.TgZ(2,"a",2),t.TgZ(3,"div",3),t.YNc(4,gt,1,0,"img",4),t.YNc(5,ft,1,0,"img",5),t.qZA(),t.qZA(),t.TgZ(6,"ul",6),t.TgZ(7,"li",7),t.TgZ(8,"ul"),t.TgZ(9,"li",8),t._UZ(10,"i",9),t.TgZ(11,"span"),t.TgZ(12,"a",10),t._uU(13,"Home"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"li",11),t.TgZ(15,"ul"),t.TgZ(16,"li",12),t._UZ(17,"i",13),t.TgZ(18,"span"),t.TgZ(19,"a",14),t._uU(20,"Assertions"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"li",12),t._UZ(22,"i",15),t.TgZ(23,"span"),t.TgZ(24,"a",16),t._uU(25,"Evidence"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"li",12),t._UZ(27,"i",17),t.TgZ(28,"span"),t.TgZ(29,"a",18),t._uU(30,"Genes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"li",12),t._UZ(32,"i",19),t.TgZ(33,"span"),t.TgZ(34,"a",20),t._uU(35,"Variants"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"li",12),t._UZ(37,"i",21),t.TgZ(38,"span"),t.TgZ(39,"a",22),t._uU(40,"Variant Groups"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(41,"li",7),t.TgZ(42,"ul"),t.TgZ(43,"li",12),t._UZ(44,"i",23),t.TgZ(45,"span"),t.TgZ(46,"a",24),t._uU(47,"Clinical Trials"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"li",12),t._UZ(49,"i",25),t.TgZ(50,"span"),t.TgZ(51,"a",26),t._uU(52,"Diseases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(53,"li",12),t._UZ(54,"i",27),t.TgZ(55,"span"),t.TgZ(56,"a",28),t._uU(57,"Drugs"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(58,"li",12),t._UZ(59,"i",29),t.TgZ(60,"span"),t.TgZ(61,"a",30),t._uU(62,"Phenotypes"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"li",12),t._UZ(64,"i",31),t.TgZ(65,"span"),t.TgZ(66,"a",32),t._uU(67,"Sources"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(68,"li",12),t._UZ(69,"i",33),t.TgZ(70,"span"),t.TgZ(71,"a",34),t._uU(72,"Variant Types"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(73,"li",11),t.TgZ(74,"ul"),t.TgZ(75,"li",12),t._UZ(76,"i",35),t.TgZ(77,"span"),t.TgZ(78,"a",36),t._uU(79,"Sources Queue"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(80,"li",12),t._UZ(81,"i",35),t.TgZ(82,"span"),t.TgZ(83,"a",37),t._uU(84,"Evidence Queue"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(85,"li",12),t._UZ(86,"i",35),t.TgZ(87,"span"),t.TgZ(88,"a",38),t._uU(89,"Assertions Queue"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(90,"li",11),t.TgZ(91,"ul"),t.TgZ(92,"li",12),t._UZ(93,"i",39),t.TgZ(94,"span"),t.TgZ(95,"a",40),t._uU(96,"Community"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(97,"li",12),t._UZ(98,"i",41),t.TgZ(99,"span"),t.TgZ(100,"a",42),t._uU(101,"Users"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(102,"li",12),t._UZ(103,"i",43),t.TgZ(104,"span"),t.TgZ(105,"a",44),t._uU(106,"Organizations"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(107,"li",11),t.TgZ(108,"ul"),t.TgZ(109,"li",12),t._UZ(110,"i",45),t.TgZ(111,"span"),t.TgZ(112,"a",46),t._uU(113,"Data Releases"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(114,"li",12),t._UZ(115,"i",47),t.TgZ(116,"span"),t.TgZ(117,"a",48),t._uU(118,"Statistics"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(119,"nz-layout",49),t.TgZ(120,"nz-header"),t.TgZ(121,"div",50),t.TgZ(122,"div",51),t.TgZ(123,"span",52),t.NdJ("click",function(){return h.isCollapsed=!h.isCollapsed}),t._UZ(124,"i",53),t.qZA(),t.qZA(),t.TgZ(125,"div",54),t._UZ(126,"cvc-quicksearch"),t.qZA(),t.TgZ(127,"div",55),t.TgZ(128,"ul",56),t.TgZ(129,"li",8),t.TgZ(130,"a",57),t._uU(131,"About CIViC"),t.qZA(),t.qZA(),t.TgZ(132,"li",8),t.TgZ(133,"a",58),t._uU(134,"Help"),t.qZA(),t.qZA(),t.TgZ(135,"li",8),t.TgZ(136,"a",59),t._uU(137,"Contact"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(138,"div",60),t.YNc(139,ht,1,0,"cvc-login-button",61),t.ALo(140,"async"),t.YNc(141,vt,1,0,"cvc-viewer-button",61),t.ALo(142,"async"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(143,"nz-content"),t._UZ(144,"router-outlet"),t.qZA(),t.qZA(),t.qZA()),2&c&&(t.xp6(1),t.Q6J("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",h.isCollapsed)("nzTrigger",null),t.xp6(2),t.Q6J("ngClass",t.VKq(39,ut,h.isCollapsed)),t.xp6(1),t.Q6J("ngIf",!h.isCollapsed),t.xp6(1),t.Q6J("ngIf",h.isCollapsed),t.xp6(1),t.Q6J("nzInlineCollapsed",h.isCollapsed),t.xp6(8),t.Q6J("nzTitle",h.isCollapsed?"KNOW":"KNOWLEDGEBASE"),t.xp6(2),t.Q6J("nzTooltipTitle",h.isCollapsed?"Assertions":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Evidence":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Genes":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Variants":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Variant Groups":""),t.xp6(7),t.Q6J("nzTooltipTitle",h.isCollapsed?"Clinical Trials":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Diseases":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Drugs":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Phenotypes":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Sources":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Variant Types":""),t.xp6(5),t.Q6J("nzTitle",h.isCollapsed?"CURATE":"CURATION"),t.xp6(2),t.Q6J("nzTooltipTitle",h.isCollapsed?"Pending Source Suggestions":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Pending New Evidence":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Pending New Assertions":""),t.xp6(5),t.Q6J("nzTitle",h.isCollapsed?"COMM":"COMMUNITY"),t.xp6(2),t.Q6J("nzTooltipTitle",h.isCollapsed?"Community":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Users":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Organizations":""),t.xp6(5),t.Q6J("nzTitle",h.isCollapsed?"RES":"RESOURCES"),t.xp6(2),t.Q6J("nzTooltipTitle",h.isCollapsed?"Data Releases":""),t.xp6(5),t.Q6J("nzTooltipTitle",h.isCollapsed?"Statistics":""),t.xp6(5),t.Q6J("ngClass",t.VKq(41,ut,h.isCollapsed)),t.xp6(5),t.Q6J("nzType",h.isCollapsed?"menu-unfold":"menu-fold"),t.xp6(15),t.Q6J("ngIf",t.lcZ(140,35,h.signedOut$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(142,37,h.signedIn$)))},directives:[B,g,i.yS,o.mk,o.O5,L.wO,L.uA,L.r9,K.Ls,w.SY,W,ye.SK,ye.t3,ze,Ze.s,Gt,pe,i.lC],pipes:[o.Ov],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}.sidebar-menu[_ngcontent-%COMP%]{margin-top:-24px}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),l})(),children:[{path:"assertions",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(2826),r.e(1679),r.e(3883),r.e(7468),r.e(8776),r.e(4573),r.e(5307),r.e(8592),r.e(7014)]).then(r.bind(r,136)).then(l=>l.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(305),r.e(8592),r.e(1711)]).then(r.bind(r,3553)).then(l=>l.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"comments",loadChildren:()=>Promise.all([r.e(1945),r.e(1854)]).then(r.bind(r,1854)).then(l=>l.CommentsModule),data:{breadcrumb:"Comments"}},{path:"community",loadChildren:()=>Promise.all([r.e(1945),r.e(9946)]).then(r.bind(r,5094)).then(l=>l.CommunityModule),data:{breadcrumb:"Community"}},{path:"diseases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(2826),r.e(305),r.e(1843),r.e(3883),r.e(392),r.e(774),r.e(9246),r.e(7727),r.e(5131),r.e(8592),r.e(6582)]).then(r.bind(r,1398)).then(l=>l.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(2826),r.e(305),r.e(3883),r.e(4431)]).then(r.bind(r,9450)).then(l=>l.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(7727),r.e(3543)]).then(r.bind(r,7727)).then(l=>l.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"flags",loadChildren:()=>Promise.all([r.e(1945),r.e(3133)]).then(r.bind(r,3133)).then(l=>l.FlagsModule),data:{breadcrumb:"Flags"}},{path:"genes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(3501),r.e(5193),r.e(4186),r.e(392),r.e(681)]).then(r.bind(r,681)).then(l=>l.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(2826),r.e(305),r.e(1843),r.e(4509),r.e(3883),r.e(4292),r.e(392),r.e(774),r.e(7727),r.e(4067),r.e(8741),r.e(8592),r.e(4592)]).then(r.bind(r,4592)).then(l=>l.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(2826),r.e(305),r.e(3883),r.e(1037)]).then(r.bind(r,7180)).then(l=>l.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"revisions",loadChildren:()=>Promise.all([r.e(1945),r.e(166)]).then(r.bind(r,166)).then(l=>l.RevisionsModule),data:{breadcrumb:"Revisions"}},{path:"sources",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(305),r.e(1679),r.e(1843),r.e(4509),r.e(7468),r.e(8776),r.e(774),r.e(4573),r.e(5131),r.e(8592),r.e(6189)]).then(r.bind(r,1874)).then(l=>l.SourcesModule),data:{breadcrumb:"Sources"}},{path:"curation",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(2826),r.e(305),r.e(1843),r.e(4509),r.e(3883),r.e(774),r.e(1782)]).then(r.bind(r,6256)).then(l=>l.CurationModule),data:{breadcrumb:"Curation"}},{path:"users",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(4186),r.e(2826),r.e(305),r.e(1843),r.e(4509),r.e(3883),r.e(4292),r.e(774),r.e(7727),r.e(4067),r.e(8741),r.e(8592),r.e(2764)]).then(r.bind(r,2764)).then(l=>l.UsersModule),data:{breadcrumb:"Users"}},{path:"variant-groups",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6256),r.e(3501),r.e(4186),r.e(79)]).then(r.bind(r,79)).then(l=>l.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(3501),r.e(5193),r.e(4186),r.e(392),r.e(9246),r.e(8592),r.e(5606)]).then(r.bind(r,6295)).then(l=>l.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(3501),r.e(5193),r.e(4186),r.e(392),r.e(9246),r.e(290)]).then(r.bind(r,5951)).then(l=>l.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>Promise.all([r.e(6256),r.e(3501),r.e(5193),r.e(9001),r.e(2826),r.e(4292),r.e(4067),r.e(5471)]).then(r.bind(r,6528)).then(l=>l.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"statistics",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(6412)]).then(r.bind(r,6412)).then(l=>l.StatisticsModule),data:{breadcrumb:"Statistics"}},{path:"releases",loadChildren:()=>Promise.all([r.e(1945),r.e(592),r.e(329)]).then(r.bind(r,329)).then(l=>l.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>Promise.all([r.e(1945),r.e(54)]).then(r.bind(r,54)).then(l=>l.PagesModule),data:{breadcrumb:"Pages"}}]}];let yt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[i.Bz.forChild(zt)],i.Bz]}),l})();var Ct=r(3618),It=r(5109),Tt=r(4546);let St=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[o.ez,Oe.u5,i.Bz,u.WG,Ne.o7,Tt.U5,K.PV,m]]}),l})();var Dt=r(1844),Bt=r(5473),Et=r(330);let Nt=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[o.ez,u.WG,Ye.b1,i.Bz,Be.zf,K.PV,Je.mS,w.cg,Xe.Qp,Bt.H,Et.e]]}),l})(),_t=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[[o.ez,yt,K.PV,ye.Jb,A,L.ip,w.cg,Ct.ZJ,It.s,Dt.B,Nt,St]]}),l})()},6792:(Ee,se,r)=>{r.d(se,{g:()=>F});var o=r(353),t=r(3489),E=r(9312);function F(O,L=o.P){const K=function i(O){return O instanceof Date&&!isNaN(+O)}(O)?+O-L.now():Math.abs(O);return H=>H.lift(new Z(K,L))}class Z{constructor(L,G){this.delay=L,this.scheduler=G}call(L,G){return G.subscribe(new U(L,this.delay,this.scheduler))}}class U extends t.L{constructor(L,G,K){super(L),this.delay=G,this.scheduler=K,this.queue=[],this.active=!1,this.errored=!1}static dispatch(L){const G=L.source,K=G.queue,H=L.scheduler,le=L.destination;for(;K.length>0&&K[0].time-H.now()<=0;)K.shift().notification.observe(le);if(K.length>0){const te=Math.max(0,K[0].time-H.now());this.schedule(L,te)}else this.unsubscribe(),G.active=!1}_schedule(L){this.active=!0,this.destination.add(L.schedule(U.dispatch,this.delay,{source:this,destination:this.destination,scheduler:L}))}scheduleNotification(L){if(!0===this.errored)return;const G=this.scheduler,K=new q(G.now()+this.delay,L);this.queue.push(K),!1===this.active&&this._schedule(G)}_next(L){this.scheduleNotification(E.P.createNext(L))}_error(L){this.errored=!0,this.queue=[],this.destination.error(L),this.unsubscribe()}_complete(){this.scheduleNotification(E.P.createComplete()),this.unsubscribe()}}class q{constructor(L,G){this.time=L,this.notification=G}}},373:(Ee,se,r)=>{r.d(se,{j:()=>i});var o=r(4850);function i(...E){const F=E.length;if(0===F)throw new Error("list of properties cannot be empty.");return Z=>(0,o.U)(function t(E,F){return U=>{let q=U;for(let O=0;O<F;O++){const L=null!=q?q[E[O]]:void 0;if(void 0===L)return;q=L}return q}}(E,F))(Z)}},6699:(Ee,se,r)=>{r.d(se,{Dz:()=>te,Rt:()=>oe});var o=r(655),i=r(5e3),t=r(9439),E=r(1721),F=r(925),Z=r(9808),U=r(647),q=r(226);const O=["textEl"];function L(V,$){if(1&V&&i._UZ(0,"i",3),2&V){const I=i.oxw();i.Q6J("nzType",I.nzIcon)}}function G(V,$){if(1&V){const I=i.EpF();i.TgZ(0,"img",4),i.NdJ("error",function(ne){return i.CHM(I),i.oxw().imgError(ne)}),i.qZA()}if(2&V){const I=i.oxw();i.Q6J("src",I.nzSrc,i.LSH),i.uIk("srcset",I.nzSrcSet,i.LSH)("alt",I.nzAlt)}}function K(V,$){if(1&V&&(i.TgZ(0,"span",5,6),i._uU(2),i.qZA()),2&V){const I=i.oxw();i.Q6J("ngStyle",I.textStyles),i.xp6(2),i.Oqu(I.nzText)}}let te=(()=>{class V{constructor(I,P,ne,X){this.nzConfigService=I,this.elementRef=P,this.cdr=ne,this.platform=X,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new i.vpe,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement}imgError(I){this.nzError.emit(I),I.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const I=this.textEl.nativeElement.offsetWidth,P=this.el.getBoundingClientRect().width,ne=2*this.nzGap<P?2*this.nzGap:8;this.textStyles={transform:`scale(${P-ne<I?(P-ne)/I:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return V.\u0275fac=function(I){return new(I||V)(i.Y36(t.jY),i.Y36(i.SBq),i.Y36(i.sBO),i.Y36(F.t4))},V.\u0275cmp=i.Xpm({type:V,selectors:[["nz-avatar"]],viewQuery:function(I,P){if(1&I&&i.Gf(O,5),2&I){let ne;i.iGM(ne=i.CRH())&&(P.textEl=ne.first)}},hostAttrs:[1,"ant-avatar"],hostVars:20,hostBindings:function(I,P){2&I&&(i.Udp("width",P.customSize)("height",P.customSize)("line-height",P.customSize)("font-size",P.hasIcon&&P.customSize?P.nzSize/2:null,"px"),i.ekj("ant-avatar-lg","large"===P.nzSize)("ant-avatar-sm","small"===P.nzSize)("ant-avatar-square","square"===P.nzShape)("ant-avatar-circle","circle"===P.nzShape)("ant-avatar-icon",P.nzIcon)("ant-avatar-image",P.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[i.TTD],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(I,P){1&I&&(i.YNc(0,L,1,1,"i",0),i.YNc(1,G,1,3,"img",1),i.YNc(2,K,3,2,"span",2)),2&I&&(i.Q6J("ngIf",P.nzIcon&&P.hasIcon),i.xp6(1),i.Q6J("ngIf",P.nzSrc&&P.hasSrc),i.xp6(1),i.Q6J("ngIf",P.nzText&&P.hasText))},directives:[Z.O5,U.Ls,Z.PC],encapsulation:2,changeDetection:0}),(0,o.gn)([(0,t.oS)()],V.prototype,"nzShape",void 0),(0,o.gn)([(0,t.oS)()],V.prototype,"nzSize",void 0),(0,o.gn)([(0,t.oS)(),(0,E.Rn)()],V.prototype,"nzGap",void 0),V})(),oe=(()=>{class V{}return V.\u0275fac=function(I){return new(I||V)},V.\u0275mod=i.oAB({type:V}),V.\u0275inj=i.cJS({imports:[[q.vT,Z.ez,U.PV,F.ud]]}),V})()},4401:(Ee,se,r)=>{r.d(se,{x7:()=>ue,mS:()=>k,F9:()=>W});var o=r(655),i=r(5e3),t=r(8929),E=r(7625),F=r(8076),Z=r(9439),U=r(1721),q=r(226),O=r(4832),L=r(9808),G=r(969),K=r(7144);function H(g,B){if(1&g&&(i.TgZ(0,"p",6),i._uU(1),i.qZA()),2&g){const A=B.$implicit,w=i.oxw(2).index,ye=i.oxw(2);i.ekj("current",A===ye.countArray[w]),i.xp6(1),i.hij(" ",A," ")}}function le(g,B){if(1&g&&(i.ynx(0),i.YNc(1,H,2,3,"p",5),i.BQk()),2&g){const A=i.oxw(3);i.xp6(1),i.Q6J("ngForOf",A.countSingleArray)}}function te(g,B){if(1&g&&(i.TgZ(0,"span",3),i.YNc(1,le,2,1,"ng-container",4),i.qZA()),2&g){const A=B.index,w=i.oxw(2);i.Udp("transform","translateY("+100*-w.countArray[A]+"%)"),i.Q6J("nzNoAnimation",w.noAnimation),i.xp6(1),i.Q6J("ngIf",!w.nzDot&&void 0!==w.countArray[A])}}function ae(g,B){if(1&g&&(i.ynx(0),i.YNc(1,te,2,4,"span",2),i.BQk()),2&g){const A=i.oxw();i.xp6(1),i.Q6J("ngForOf",A.maxNumberArray)}}function oe(g,B){if(1&g&&i._uU(0),2&g){const A=i.oxw();i.hij("",A.nzOverflowCount,"+")}}function V(g,B){if(1&g&&(i.ynx(0),i._uU(1),i.BQk()),2&g){const A=i.oxw(2);i.xp6(1),i.Oqu(A.nzText)}}function $(g,B){if(1&g&&(i.ynx(0),i._UZ(1,"span",2),i.TgZ(2,"span",3),i.YNc(3,V,2,1,"ng-container",1),i.qZA(),i.BQk()),2&g){const A=i.oxw();i.xp6(1),i.Gre("ant-badge-status-dot ant-badge-status-",A.nzStatus||A.presetColor,""),i.Udp("background",!A.presetColor&&A.nzColor),i.Q6J("ngStyle",A.nzStyle),i.xp6(2),i.Q6J("nzStringTemplateOutlet",A.nzText)}}function I(g,B){if(1&g&&i._UZ(0,"nz-badge-sup",5),2&g){const A=i.oxw(2);i.Q6J("nzOffset",A.nzOffset)("nzTitle",A.nzTitle)("nzStyle",A.nzStyle)("nzDot",A.nzDot)("nzOverflowCount",A.nzOverflowCount)("disableAnimation",!!(A.nzStandalone||A.nzStatus||A.nzColor||null!=A.noAnimation&&A.noAnimation.nzNoAnimation))("nzCount",A.nzCount)("noAnimation",!(null==A.noAnimation||!A.noAnimation.nzNoAnimation))}}function P(g,B){if(1&g&&(i.ynx(0),i.YNc(1,I,1,8,"nz-badge-sup",4),i.BQk()),2&g){const A=i.oxw();i.xp6(1),i.Q6J("ngIf",A.showSup)}}const ne=["*"];function X(g,B){if(1&g&&(i.ynx(0),i._uU(1),i.BQk()),2&g){const A=i.oxw();i.xp6(1),i.Oqu(A.nzText)}}const de=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let fe=(()=>{class g{constructor(){this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.noAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9]}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(A){const{nzOverflowCount:w,nzCount:ye}=A;ye&&"number"==typeof ye.currentValue&&(this.count=Math.max(0,ye.currentValue),this.countArray=this.count.toString().split("").map(Se=>+Se)),w&&this.generateMaxNumberArray()}}return g.\u0275fac=function(A){return new(A||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-badge-sup"]],hostAttrs:[1,"ant-scroll-number"],hostVars:15,hostBindings:function(A,w){2&A&&(i.uIk("title",null===w.nzTitle?"":w.nzTitle||w.nzCount),i.d8E("@.disabled",w.disableAnimation)("@zoomBadgeMotion",void 0),i.Akn(w.nzStyle),i.Udp("right",w.nzOffset&&w.nzOffset[0]?-w.nzOffset[0]:null,"px")("margin-top",w.nzOffset&&w.nzOffset[1]?w.nzOffset[1]:null,"px"),i.ekj("ant-badge-count",!w.nzDot)("ant-badge-dot",w.nzDot)("ant-badge-multiple-words",w.countArray.length>=2))},inputs:{nzOffset:"nzOffset",nzTitle:"nzTitle",nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzCount:"nzCount",noAnimation:"noAnimation"},exportAs:["nzBadgeSup"],features:[i.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"nzNoAnimation","transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only",3,"nzNoAnimation"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(A,w){if(1&A&&(i.YNc(0,ae,2,1,"ng-container",0),i.YNc(1,oe,1,1,"ng-template",null,1,i.W1O)),2&A){const ye=i.MAs(2);i.Q6J("ngIf",w.count<=w.nzOverflowCount)("ngIfElse",ye)}},directives:[L.O5,L.sg,O.P],encapsulation:2,data:{animation:[F.Ev]},changeDetection:0}),g})(),ue=(()=>{class g{constructor(A,w,ye,Se,De,Ne){this.nzConfigService=A,this.renderer=w,this.cdr=ye,this.elementRef=Se,this.directionality=De,this.noAnimation=Ne,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new t.xQ,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null}ngOnInit(){var A;null===(A=this.directionality.change)||void 0===A||A.pipe((0,E.R)(this.destroy$)).subscribe(w=>{this.dir=w,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(A){const{nzColor:w,nzShowDot:ye,nzDot:Se,nzCount:De,nzShowZero:Ne}=A;w&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null),(ye||Se||De||Ne)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return g.\u0275fac=function(A){return new(A||g)(i.Y36(Z.jY),i.Y36(i.Qsj),i.Y36(i.sBO),i.Y36(i.SBq),i.Y36(q.Is,8),i.Y36(O.P,9))},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-badge"]],hostAttrs:[1,"ant-badge"],hostVars:4,hostBindings:function(A,w){2&A&&i.ekj("ant-badge-status",w.nzStatus)("ant-badge-not-a-wrapper",!!(w.nzStandalone||w.nzStatus||w.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[i.TTD],ngContentSelectors:ne,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount","noAnimation"]],template:function(A,w){1&A&&(i.F$t(),i.YNc(0,$,4,7,"ng-container",0),i.Hsn(1),i.YNc(2,P,2,1,"ng-container",1)),2&A&&(i.Q6J("ngIf",w.nzStatus||w.nzColor),i.xp6(2),i.Q6J("nzStringTemplateOutlet",w.nzCount))},directives:[fe,L.O5,L.PC,G.f],encapsulation:2,data:{animation:[F.Ev]},changeDetection:0}),(0,o.gn)([(0,U.yF)()],g.prototype,"nzShowZero",void 0),(0,o.gn)([(0,U.yF)()],g.prototype,"nzShowDot",void 0),(0,o.gn)([(0,U.yF)()],g.prototype,"nzStandalone",void 0),(0,o.gn)([(0,U.yF)()],g.prototype,"nzDot",void 0),(0,o.gn)([(0,Z.oS)()],g.prototype,"nzOverflowCount",void 0),(0,o.gn)([(0,Z.oS)()],g.prototype,"nzColor",void 0),g})(),W=(()=>{class g{constructor(){this.nzPlacement="end",this.nzText=null,this.presetColor=null}ngOnChanges(A){const{nzColor:w}=A;w&&(this.presetColor=this.nzColor&&-1!==de.indexOf(this.nzColor)?this.nzColor:null)}}return g.\u0275fac=function(A){return new(A||g)},g.\u0275cmp=i.Xpm({type:g,selectors:[["nz-ribbon"]],hostAttrs:[1,"ant-ribbon-wrapper"],inputs:{nzColor:"nzColor",nzPlacement:"nzPlacement",nzText:"nzText"},exportAs:["nzRibbon"],features:[i.TTD],ngContentSelectors:ne,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(A,w){1&A&&(i.F$t(),i.Hsn(0),i.TgZ(1,"div",0),i.YNc(2,X,2,1,"ng-container",1),i._UZ(3,"div",2),i.qZA()),2&A&&(i.xp6(1),i.Tol(w.presetColor&&"ant-ribbon-color-"+w.presetColor),i.Udp("background-color",!w.presetColor&&w.nzColor),i.ekj("ant-ribbon-placement-end","end"===w.nzPlacement)("ant-ribbon-placement-start","start"===w.nzPlacement),i.xp6(1),i.Q6J("nzStringTemplateOutlet",w.nzText),i.xp6(1),i.Udp("color",!w.presetColor&&w.nzColor))},directives:[G.f],encapsulation:2,changeDetection:0}),g})(),k=(()=>{class g{}return g.\u0275fac=function(A){return new(A||g)},g.\u0275mod=i.oAB({type:g}),g.\u0275inj=i.cJS({imports:[[q.vT,L.ez,K.Q8,G.T,O.g]]}),g})()},7484:(Ee,se,r)=>{r.d(se,{bd:()=>$e,vh:()=>be,_i:()=>De});var o=r(655),i=r(5e3),t=r(1721),E=r(8929),F=r(7625),Z=r(9439),U=r(226),q=r(9808),O=r(969);function L(_,ee){1&_&&i.Hsn(0)}const G=["*"];function K(_,ee){1&_&&(i.TgZ(0,"div",4),i._UZ(1,"div",5),i.qZA()),2&_&&i.Q6J("ngClass",ee.$implicit)}function H(_,ee){if(1&_&&(i.TgZ(0,"div",2),i.YNc(1,K,2,1,"div",3),i.qZA()),2&_){const S=ee.$implicit;i.xp6(1),i.Q6J("ngForOf",S)}}function le(_,ee){if(1&_&&(i.ynx(0),i._uU(1),i.BQk()),2&_){const S=i.oxw(3);i.xp6(1),i.Oqu(S.nzTitle)}}function te(_,ee){if(1&_&&(i.TgZ(0,"div",11),i.YNc(1,le,2,1,"ng-container",12),i.qZA()),2&_){const S=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",S.nzTitle)}}function ae(_,ee){if(1&_&&(i.ynx(0),i._uU(1),i.BQk()),2&_){const S=i.oxw(3);i.xp6(1),i.Oqu(S.nzExtra)}}function oe(_,ee){if(1&_&&(i.TgZ(0,"div",13),i.YNc(1,ae,2,1,"ng-container",12),i.qZA()),2&_){const S=i.oxw(2);i.xp6(1),i.Q6J("nzStringTemplateOutlet",S.nzExtra)}}function V(_,ee){}function $(_,ee){if(1&_&&(i.ynx(0),i.YNc(1,V,0,0,"ng-template",14),i.BQk()),2&_){const S=i.oxw(2);i.xp6(1),i.Q6J("ngTemplateOutlet",S.listOfNzCardTabComponent.template)}}function I(_,ee){if(1&_&&(i.TgZ(0,"div",6),i.TgZ(1,"div",7),i.YNc(2,te,2,1,"div",8),i.YNc(3,oe,2,1,"div",9),i.qZA(),i.YNc(4,$,2,1,"ng-container",10),i.qZA()),2&_){const S=i.oxw();i.xp6(2),i.Q6J("ngIf",S.nzTitle),i.xp6(1),i.Q6J("ngIf",S.nzExtra),i.xp6(1),i.Q6J("ngIf",S.listOfNzCardTabComponent)}}function P(_,ee){}function ne(_,ee){if(1&_&&(i.TgZ(0,"div",15),i.YNc(1,P,0,0,"ng-template",14),i.qZA()),2&_){const S=i.oxw();i.xp6(1),i.Q6J("ngTemplateOutlet",S.nzCover)}}function X(_,ee){1&_&&(i.ynx(0),i.Hsn(1),i.BQk())}function de(_,ee){1&_&&i._UZ(0,"nz-card-loading")}function fe(_,ee){}function pe(_,ee){if(1&_&&(i.TgZ(0,"li"),i.TgZ(1,"span"),i.YNc(2,fe,0,0,"ng-template",14),i.qZA(),i.qZA()),2&_){const S=ee.$implicit,J=i.oxw(2);i.Udp("width",100/J.nzActions.length,"%"),i.xp6(2),i.Q6J("ngTemplateOutlet",S)}}function ue(_,ee){if(1&_&&(i.TgZ(0,"ul",16),i.YNc(1,pe,3,3,"li",17),i.qZA()),2&_){const S=i.oxw();i.xp6(1),i.Q6J("ngForOf",S.nzActions)}}let Se=(()=>{class _{constructor(){this.nzHoverable=!0}}return _.\u0275fac=function(S){return new(S||_)},_.\u0275dir=i.lG2({type:_,selectors:[["","nz-card-grid",""]],hostAttrs:[1,"ant-card-grid"],hostVars:2,hostBindings:function(S,J){2&S&&i.ekj("ant-card-hoverable",J.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),(0,o.gn)([(0,t.yF)()],_.prototype,"nzHoverable",void 0),_})(),De=(()=>{class _{}return _.\u0275fac=function(S){return new(S||_)},_.\u0275cmp=i.Xpm({type:_,selectors:[["nz-card-tab"]],viewQuery:function(S,J){if(1&S&&i.Gf(i.Rgc,7),2&S){let Q;i.iGM(Q=i.CRH())&&(J.template=Q.first)}},exportAs:["nzCardTab"],ngContentSelectors:G,decls:1,vars:0,template:function(S,J){1&S&&(i.F$t(),i.YNc(0,L,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),_})(),Ne=(()=>{class _{constructor(){this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]]}}return _.\u0275fac=function(S){return new(S||_)},_.\u0275cmp=i.Xpm({type:_,selectors:[["nz-card-loading"]],hostAttrs:[1,"ant-card-loading-content"],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(S,J){1&S&&(i.TgZ(0,"div",0),i.YNc(1,H,2,1,"div",1),i.qZA()),2&S&&(i.xp6(1),i.Q6J("ngForOf",J.listOfLoading))},directives:[q.sg,q.mk],encapsulation:2,changeDetection:0}),_})(),$e=(()=>{class _{constructor(S,J,Q){this.nzConfigService=S,this.cdr=J,this.directionality=Q,this._nzModuleName="card",this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new E.xQ,this.nzConfigService.getConfigChangeEventForComponent("card").pipe((0,F.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var S;null===(S=this.directionality.change)||void 0===S||S.pipe((0,F.R)(this.destroy$)).subscribe(J=>{this.dir=J,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return _.\u0275fac=function(S){return new(S||_)(i.Y36(Z.jY),i.Y36(i.sBO),i.Y36(U.Is,8))},_.\u0275cmp=i.Xpm({type:_,selectors:[["nz-card"]],contentQueries:function(S,J,Q){if(1&S&&(i.Suo(Q,De,5),i.Suo(Q,Se,4)),2&S){let ge;i.iGM(ge=i.CRH())&&(J.listOfNzCardTabComponent=ge.first),i.iGM(ge=i.CRH())&&(J.listOfNzCardGridDirective=ge)}},hostAttrs:[1,"ant-card"],hostVars:16,hostBindings:function(S,J){2&S&&i.ekj("ant-card-loading",J.nzLoading)("ant-card-bordered",!1===J.nzBorderless&&J.nzBordered)("ant-card-hoverable",J.nzHoverable)("ant-card-small","small"===J.nzSize)("ant-card-contain-grid",J.listOfNzCardGridDirective&&J.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===J.nzType)("ant-card-contain-tabs",!!J.listOfNzCardTabComponent)("ant-card-rtl","rtl"===J.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzCover:"nzCover",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:G,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(S,J){if(1&S&&(i.F$t(),i.YNc(0,I,5,3,"div",0),i.YNc(1,ne,2,1,"div",1),i.TgZ(2,"div",2),i.YNc(3,X,2,0,"ng-container",3),i.YNc(4,de,1,0,"ng-template",null,4,i.W1O),i.qZA(),i.YNc(6,ue,2,1,"ul",5)),2&S){const Q=i.MAs(5);i.Q6J("ngIf",J.nzTitle||J.nzExtra||J.listOfNzCardTabComponent),i.xp6(1),i.Q6J("ngIf",J.nzCover),i.xp6(1),i.Q6J("ngStyle",J.nzBodyStyle),i.xp6(1),i.Q6J("ngIf",!J.nzLoading)("ngIfElse",Q),i.xp6(3),i.Q6J("ngIf",J.nzActions.length)}},directives:[Ne,q.O5,O.f,q.tP,q.PC,q.sg],encapsulation:2,changeDetection:0}),(0,o.gn)([(0,Z.oS)(),(0,t.yF)()],_.prototype,"nzBordered",void 0),(0,o.gn)([(0,Z.oS)(),(0,t.yF)()],_.prototype,"nzBorderless",void 0),(0,o.gn)([(0,t.yF)()],_.prototype,"nzLoading",void 0),(0,o.gn)([(0,Z.oS)(),(0,t.yF)()],_.prototype,"nzHoverable",void 0),(0,o.gn)([(0,Z.oS)()],_.prototype,"nzSize",void 0),_})(),be=(()=>{class _{}return _.\u0275fac=function(S){return new(S||_)},_.\u0275mod=i.oAB({type:_}),_.\u0275inj=i.cJS({imports:[[q.ez,O.T],U.vT]}),_})()},3677:(Ee,se,r)=>{r.d(se,{cm:()=>De,b1:()=>be,wA:()=>$e,RR:()=>Ve});var o=r(655),i=r(1159),t=r(7429),E=r(5e3),F=r(8929),Z=r(591),U=r(6787),q=r(3753),O=r(8896),L=r(3426),G=r(7604),K=r(4850),H=r(7545),le=r(2198),te=r(7138),ae=r(5778),oe=r(7625),V=r(9439),$=r(6950),I=r(1721),P=r(2845),ne=r(925),X=r(226),de=r(9808),fe=r(4182),pe=r(6042),ue=r(4832),W=r(969),k=r(647),g=r(4219),B=r(8076);function A(S,J){if(1&S){const Q=E.EpF();E.TgZ(0,"div",0),E.NdJ("@slideMotion.done",function(Ce){return E.CHM(Q),E.oxw().onAnimationEvent(Ce)})("mouseenter",function(){return E.CHM(Q),E.oxw().setMouseState(!0)})("mouseleave",function(){return E.CHM(Q),E.oxw().setMouseState(!1)}),E.Hsn(1),E.qZA()}if(2&S){const Q=E.oxw();E.ekj("ant-dropdown-rtl","rtl"===Q.dir),E.Q6J("ngClass",Q.nzOverlayClassName)("ngStyle",Q.nzOverlayStyle)("@slideMotion",void 0)("@.disabled",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)("nzNoAnimation",null==Q.noAnimation?null:Q.noAnimation.nzNoAnimation)}}const w=["*"],Se=[$.yW.bottomLeft,$.yW.bottomRight,$.yW.topRight,$.yW.topLeft];let De=(()=>{class S{constructor(Q,ge,Ce,Ae,Me,Ie){this.nzConfigService=Q,this.elementRef=ge,this.overlay=Ce,this.renderer=Ae,this.viewContainerRef=Me,this.platform=Ie,this._nzModuleName="dropDown",this.overlayRef=null,this.destroy$=new F.xQ,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new Z.X(!1),this.nzTrigger$=new Z.X("hover"),this.overlayClose$=new F.xQ,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new E.vpe}setDropdownMenuValue(Q,ge){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(Q,ge)}ngAfterViewInit(){if(this.nzDropdownMenu){const Q=this.elementRef.nativeElement,ge=(0,U.T)((0,q.R)(Q,"mouseenter").pipe((0,G.h)(!0)),(0,q.R)(Q,"mouseleave").pipe((0,G.h)(!1))),Ae=(0,U.T)(this.nzDropdownMenu.mouseState$,ge),Me=(0,q.R)(Q,"click").pipe((0,K.U)(()=>!this.nzVisible)),Ie=this.nzTrigger$.pipe((0,H.w)(ve=>"hover"===ve?Ae:"click"===ve?Me:O.E)),Le=this.nzDropdownMenu.descendantMenuItemClick$.pipe((0,le.h)(()=>this.nzClickHide),(0,G.h)(!1)),_e=(0,U.T)(Ie,Le,this.overlayClose$).pipe((0,le.h)(()=>!this.nzDisabled)),we=(0,U.T)(this.inputVisible$,_e);(0,L.aj)([we,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe((0,K.U)(([ve,Qe])=>ve||Qe),(0,te.e)(150),(0,ae.x)(),(0,le.h)(()=>this.platform.isBrowser),(0,oe.R)(this.destroy$)).subscribe(ve=>{const xe=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:Q).getBoundingClientRect().width;this.nzVisible!==ve&&this.nzVisibleChange.emit(ve),this.nzVisible=ve,ve?(this.overlayRef?this.overlayRef.getConfig().minWidth=xe:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:xe,disposeOnNavigation:!0,hasBackdrop:this.nzBackdrop&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),(0,U.T)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe((0,le.h)(Re=>!this.elementRef.nativeElement.contains(Re.target))),this.overlayRef.keydownEvents().pipe((0,le.h)(Re=>Re.keyCode===i.hY&&!(0,i.Vb)(Re)))).pipe((0,oe.R)(this.destroy$)).subscribe(()=>{this.overlayClose$.next(!1)})),this.positionStrategy.withPositions([$.yW[this.nzPlacement],...Se]),(!this.portal||this.portal.templateRef!==this.nzDropdownMenu.templateRef)&&(this.portal=new t.UE(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()}),this.nzDropdownMenu.animationStateChange$.pipe((0,oe.R)(this.destroy$)).subscribe(ve=>{"void"===ve.toState&&(this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=null)})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(Q){const{nzVisible:ge,nzDisabled:Ce,nzOverlayClassName:Ae,nzOverlayStyle:Me,nzTrigger:Ie}=Q;if(Ie&&this.nzTrigger$.next(this.nzTrigger),ge&&this.inputVisible$.next(this.nzVisible),Ce){const Le=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(Le,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(Le,"disabled")}Ae&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),Me&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle)}}return S.\u0275fac=function(Q){return new(Q||S)(E.Y36(V.jY),E.Y36(E.SBq),E.Y36(P.aV),E.Y36(E.Qsj),E.Y36(E.s_b),E.Y36(ne.t4))},S.\u0275dir=E.lG2({type:S,selectors:[["","nz-dropdown",""]],hostAttrs:[1,"ant-dropdown-trigger"],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[E.TTD]}),(0,o.gn)([(0,V.oS)(),(0,I.yF)()],S.prototype,"nzBackdrop",void 0),(0,o.gn)([(0,I.yF)()],S.prototype,"nzClickHide",void 0),(0,o.gn)([(0,I.yF)()],S.prototype,"nzDisabled",void 0),(0,o.gn)([(0,I.yF)()],S.prototype,"nzVisible",void 0),S})(),Ne=(()=>{class S{}return S.\u0275fac=function(Q){return new(Q||S)},S.\u0275mod=E.oAB({type:S}),S.\u0275inj=E.cJS({}),S})(),$e=(()=>{class S{constructor(Q,ge,Ce){this.renderer=Q,this.nzButtonGroupComponent=ge,this.elementRef=Ce}ngAfterViewInit(){const Q=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&Q&&this.renderer.addClass(Q,"ant-dropdown-button")}}return S.\u0275fac=function(Q){return new(Q||S)(E.Y36(E.Qsj),E.Y36(pe.fY,9),E.Y36(E.SBq))},S.\u0275dir=E.lG2({type:S,selectors:[["","nz-button","","nz-dropdown",""]]}),S})(),Ve=(()=>{class S{constructor(Q,ge,Ce,Ae,Me,Ie,Le){this.cdr=Q,this.elementRef=ge,this.renderer=Ce,this.viewContainerRef=Ae,this.nzMenuService=Me,this.directionality=Ie,this.noAnimation=Le,this.mouseState$=new Z.X(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.animationStateChange$=new E.vpe,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new F.xQ}onAnimationEvent(Q){this.animationStateChange$.emit(Q)}setMouseState(Q){this.mouseState$.next(Q)}setValue(Q,ge){this[Q]=ge,this.cdr.markForCheck()}ngOnInit(){var Q;null===(Q=this.directionality.change)||void 0===Q||Q.pipe((0,oe.R)(this.destroy$)).subscribe(ge=>{this.dir=ge,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return S.\u0275fac=function(Q){return new(Q||S)(E.Y36(E.sBO),E.Y36(E.SBq),E.Y36(E.Qsj),E.Y36(E.s_b),E.Y36(g.hl),E.Y36(X.Is,8),E.Y36(ue.P,9))},S.\u0275cmp=E.Xpm({type:S,selectors:[["nz-dropdown-menu"]],viewQuery:function(Q,ge){if(1&Q&&E.Gf(E.Rgc,7),2&Q){let Ce;E.iGM(Ce=E.CRH())&&(ge.templateRef=Ce.first)}},exportAs:["nzDropdownMenu"],features:[E._Bn([g.hl,{provide:g.Cc,useValue:!0}])],ngContentSelectors:w,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(Q,ge){1&Q&&(E.F$t(),E.YNc(0,A,2,7,"ng-template"))},directives:[de.mk,de.PC,ue.P],encapsulation:2,data:{animation:[B.mF]},changeDetection:0}),S})(),be=(()=>{class S{}return S.\u0275fac=function(Q){return new(Q||S)},S.\u0275mod=E.oAB({type:S}),S.\u0275inj=E.cJS({imports:[[X.vT,de.ez,P.U8,fe.u5,pe.sL,g.ip,k.PV,ue.g,ne.ud,$.e4,Ne,W.T],g.ip]}),S})();new P.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new P.tR({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new P.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new P.tR({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},3762:(Ee,se,r)=>{r.d(se,{n_:()=>je,I2:()=>Pe,t4:()=>Be,AA:()=>qe,yw:()=>ze,yi:()=>ie,IO:()=>m,Ph:()=>tt});var o=r(5e3),i=r(6699),t=r(9808),E=r(969),F=r(655),Z=r(1721),U=r(8929),q=r(8514),O=r(1086),L=r(6787),G=r(591),K=r(2986),H=r(7545),le=r(7625),te=r(685),ae=r(226),oe=r(7525),V=r(1894);const $=["*"];function I(f,N){if(1&f&&o._UZ(0,"nz-avatar",3),2&f){const C=o.oxw();o.Q6J("nzSrc",C.nzSrc)}}function P(f,N){1&f&&o.Hsn(0,0,["*ngIf","!nzSrc"])}function ne(f,N){if(1&f&&o._UZ(0,"nz-list-item-meta-avatar",3),2&f){const C=o.oxw();o.Q6J("nzSrc",C.avatarStr)}}function X(f,N){if(1&f&&(o.TgZ(0,"nz-list-item-meta-avatar"),o.GkF(1,4),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",C.avatarTpl)}}function de(f,N){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(3);o.xp6(1),o.Oqu(C.nzTitle)}}function fe(f,N){if(1&f&&(o.TgZ(0,"nz-list-item-meta-title"),o.YNc(1,de,2,1,"ng-container",6),o.qZA()),2&f){const C=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzTitle)}}function pe(f,N){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(3);o.xp6(1),o.Oqu(C.nzDescription)}}function ue(f,N){if(1&f&&(o.TgZ(0,"nz-list-item-meta-description"),o.YNc(1,pe,2,1,"ng-container",6),o.qZA()),2&f){const C=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzDescription)}}function W(f,N){if(1&f&&(o.TgZ(0,"div",5),o.YNc(1,fe,2,1,"nz-list-item-meta-title",1),o.YNc(2,ue,2,1,"nz-list-item-meta-description",1),o.Hsn(3,1),o.Hsn(4,2),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("ngIf",C.nzTitle&&!C.titleComponent),o.xp6(1),o.Q6J("ngIf",C.nzDescription&&!C.descriptionComponent)}}const k=[[["nz-list-item-meta-avatar"]],[["nz-list-item-meta-title"]],[["nz-list-item-meta-description"]]],g=["nz-list-item-meta-avatar","nz-list-item-meta-title","nz-list-item-meta-description"];function B(f,N){1&f&&o.Hsn(0)}const A=["nz-list-item-actions",""];function w(f,N){}function ye(f,N){1&f&&o._UZ(0,"em",3)}function Se(f,N){if(1&f&&(o.TgZ(0,"li"),o.YNc(1,w,0,0,"ng-template",1),o.YNc(2,ye,1,0,"em",2),o.qZA()),2&f){const C=N.$implicit,R=N.last;o.xp6(1),o.Q6J("ngTemplateOutlet",C),o.xp6(1),o.Q6J("ngIf",!R)}}function De(f,N){}const Ne=function(f,N){return{$implicit:f,index:N}};function Oe(f,N){if(1&f&&(o.ynx(0),o.YNc(1,De,0,0,"ng-template",9),o.BQk()),2&f){const C=N.$implicit,R=N.index,ce=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",o.WLB(2,Ne,C,R))}}function $e(f,N){if(1&f&&(o.TgZ(0,"div",7),o.YNc(1,Oe,2,5,"ng-container",8),o.Hsn(2,4),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("ngForOf",C.nzDataSource)}}function Ve(f,N){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(2);o.xp6(1),o.Oqu(C.nzHeader)}}function be(f,N){if(1&f&&(o.TgZ(0,"nz-list-header"),o.YNc(1,Ve,2,1,"ng-container",10),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzHeader)}}function _(f,N){1&f&&o._UZ(0,"div"),2&f&&o.Udp("min-height",53,"px")}function ee(f,N){}function S(f,N){if(1&f&&(o.TgZ(0,"div",13),o.YNc(1,ee,0,0,"ng-template",9),o.qZA()),2&f){const C=N.$implicit,R=N.index,ce=o.oxw(2);o.Q6J("nzSpan",ce.nzGrid.span||null)("nzXs",ce.nzGrid.xs||null)("nzSm",ce.nzGrid.sm||null)("nzMd",ce.nzGrid.md||null)("nzLg",ce.nzGrid.lg||null)("nzXl",ce.nzGrid.xl||null)("nzXXl",ce.nzGrid.xxl||null),o.xp6(1),o.Q6J("ngTemplateOutlet",ce.nzRenderItem)("ngTemplateOutletContext",o.WLB(9,Ne,C,R))}}function J(f,N){if(1&f&&(o.TgZ(0,"div",11),o.YNc(1,S,2,12,"div",12),o.qZA()),2&f){const C=o.oxw();o.Q6J("nzGutter",C.nzGrid.gutter||null),o.xp6(1),o.Q6J("ngForOf",C.nzDataSource)}}function Q(f,N){if(1&f&&o._UZ(0,"nz-list-empty",14),2&f){const C=o.oxw();o.Q6J("nzNoResult",C.nzNoResult)}}function ge(f,N){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(2);o.xp6(1),o.Oqu(C.nzFooter)}}function Ce(f,N){if(1&f&&(o.TgZ(0,"nz-list-footer"),o.YNc(1,ge,2,1,"ng-container",10),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzFooter)}}function Ae(f,N){}function Me(f,N){}function Ie(f,N){if(1&f&&(o.TgZ(0,"nz-list-pagination"),o.YNc(1,Me,0,0,"ng-template",6),o.qZA()),2&f){const C=o.oxw();o.xp6(1),o.Q6J("ngTemplateOutlet",C.nzPagination)}}const Le=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],_e=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function we(f,N){if(1&f&&o._UZ(0,"ul",6),2&f){const C=o.oxw(2);o.Q6J("nzActions",C.nzActions)}}function ve(f,N){if(1&f&&(o.YNc(0,we,1,1,"ul",5),o.Hsn(1)),2&f){const C=o.oxw();o.Q6J("ngIf",C.nzActions&&C.nzActions.length>0)}}function Qe(f,N){if(1&f&&(o.ynx(0),o._uU(1),o.BQk()),2&f){const C=o.oxw(3);o.xp6(1),o.Oqu(C.nzContent)}}function xe(f,N){if(1&f&&(o.ynx(0),o.YNc(1,Qe,2,1,"ng-container",8),o.BQk()),2&f){const C=o.oxw(2);o.xp6(1),o.Q6J("nzStringTemplateOutlet",C.nzContent)}}function Re(f,N){if(1&f&&(o.Hsn(0,1),o.Hsn(1,2),o.YNc(2,xe,2,1,"ng-container",7)),2&f){const C=o.oxw();o.xp6(2),o.Q6J("ngIf",C.nzContent)}}function nt(f,N){1&f&&o.Hsn(0,3)}function it(f,N){}function et(f,N){}function ot(f,N){}function v(f,N){}function rt(f,N){if(1&f&&(o.YNc(0,it,0,0,"ng-template",9),o.YNc(1,et,0,0,"ng-template",9),o.YNc(2,ot,0,0,"ng-template",9),o.YNc(3,v,0,0,"ng-template",9)),2&f){const C=o.oxw(),R=o.MAs(3),ce=o.MAs(5),he=o.MAs(1);o.Q6J("ngTemplateOutlet",R),o.xp6(1),o.Q6J("ngTemplateOutlet",C.nzExtra),o.xp6(1),o.Q6J("ngTemplateOutlet",ce),o.xp6(1),o.Q6J("ngTemplateOutlet",he)}}function st(f,N){}function at(f,N){}function ct(f,N){}function Ge(f,N){if(1&f&&(o.TgZ(0,"nz-list-item-extra"),o.YNc(1,ct,0,0,"ng-template",9),o.qZA()),2&f){const C=o.oxw(2);o.xp6(1),o.Q6J("ngTemplateOutlet",C.nzExtra)}}function pt(f,N){}function p(f,N){if(1&f&&(o.ynx(0),o.TgZ(1,"div",10),o.YNc(2,st,0,0,"ng-template",9),o.YNc(3,at,0,0,"ng-template",9),o.qZA(),o.YNc(4,Ge,2,1,"nz-list-item-extra",7),o.YNc(5,pt,0,0,"ng-template",9),o.BQk()),2&f){const C=o.oxw(),R=o.MAs(3),ce=o.MAs(1),he=o.MAs(5);o.xp6(2),o.Q6J("ngTemplateOutlet",R),o.xp6(1),o.Q6J("ngTemplateOutlet",ce),o.xp6(1),o.Q6J("ngIf",C.nzExtra),o.xp6(1),o.Q6J("ngTemplateOutlet",he)}}const a=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],j=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let m=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-meta-title"]],exportAs:["nzListItemMetaTitle"],ngContentSelectors:$,decls:2,vars:0,consts:[[1,"ant-list-item-meta-title"]],template:function(C,R){1&C&&(o.F$t(),o.TgZ(0,"h4",0),o.Hsn(1),o.qZA())},encapsulation:2,changeDetection:0}),f})(),u=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-meta-description"]],exportAs:["nzListItemMetaDescription"],ngContentSelectors:$,decls:2,vars:0,consts:[[1,"ant-list-item-meta-description"]],template:function(C,R){1&C&&(o.F$t(),o.TgZ(0,"div",0),o.Hsn(1),o.qZA())},encapsulation:2,changeDetection:0}),f})(),Y=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-meta-avatar"]],inputs:{nzSrc:"nzSrc"},exportAs:["nzListItemMetaAvatar"],ngContentSelectors:$,decls:3,vars:2,consts:[[1,"ant-list-item-meta-avatar"],[3,"nzSrc",4,"ngIf"],[4,"ngIf"],[3,"nzSrc"]],template:function(C,R){1&C&&(o.F$t(),o.TgZ(0,"div",0),o.YNc(1,I,1,1,"nz-avatar",1),o.YNc(2,P,1,0,"ng-content",2),o.qZA()),2&C&&(o.xp6(1),o.Q6J("ngIf",R.nzSrc),o.xp6(1),o.Q6J("ngIf",!R.nzSrc))},directives:[i.Dz,t.O5],encapsulation:2,changeDetection:0}),f})(),ie=(()=>{class f{constructor(C,R){this.elementRef=C,this.renderer=R,this.avatarStr="",this.renderer.addClass(C.nativeElement,"ant-list-item-meta")}set nzAvatar(C){C instanceof o.Rgc?(this.avatarStr="",this.avatarTpl=C):this.avatarStr=C}}return f.\u0275fac=function(C){return new(C||f)(o.Y36(o.SBq),o.Y36(o.Qsj))},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-meta"],["","nz-list-item-meta",""]],contentQueries:function(C,R,ce){if(1&C&&(o.Suo(ce,u,5),o.Suo(ce,m,5)),2&C){let he;o.iGM(he=o.CRH())&&(R.descriptionComponent=he.first),o.iGM(he=o.CRH())&&(R.titleComponent=he.first)}},inputs:{nzAvatar:"nzAvatar",nzTitle:"nzTitle",nzDescription:"nzDescription"},exportAs:["nzListItemMeta"],ngContentSelectors:g,decls:4,vars:3,consts:[[3,"nzSrc",4,"ngIf"],[4,"ngIf"],["class","ant-list-item-meta-content",4,"ngIf"],[3,"nzSrc"],[3,"ngTemplateOutlet"],[1,"ant-list-item-meta-content"],[4,"nzStringTemplateOutlet"]],template:function(C,R){1&C&&(o.F$t(k),o.YNc(0,ne,1,1,"nz-list-item-meta-avatar",0),o.YNc(1,X,2,1,"nz-list-item-meta-avatar",1),o.Hsn(2),o.YNc(3,W,5,2,"div",2)),2&C&&(o.Q6J("ngIf",R.avatarStr),o.xp6(1),o.Q6J("ngIf",R.avatarTpl),o.xp6(2),o.Q6J("ngIf",R.nzTitle||R.nzDescription||R.descriptionComponent||R.titleComponent))},directives:[Y,m,u,t.O5,t.tP,E.f],encapsulation:2,changeDetection:0}),f})(),ze=(()=>{class f{constructor(){}}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:$,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ze=(()=>{class f{constructor(){}}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item-action"]],viewQuery:function(C,R){if(1&C&&o.Gf(o.Rgc,5),2&C){let ce;o.iGM(ce=o.CRH())&&(R.templateRef=ce.first)}},exportAs:["nzListItemAction"],ngContentSelectors:$,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.YNc(0,B,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),f})(),Te=(()=>{class f{constructor(C,R){this.ngZone=C,this.cdr=R,this.nzActions=[],this.actions=[],this.destroy$=new U.xQ,this.inputActionChanges$=new U.xQ,this.contentChildrenChanges$=(0,q.P)(()=>this.nzListItemActions?(0,O.of)(null):this.ngZone.onStable.asObservable().pipe((0,K.q)(1),(0,H.w)(()=>this.contentChildrenChanges$))),(0,L.T)(this.contentChildrenChanges$,this.inputActionChanges$).pipe((0,le.R)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(ce=>ce.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return f.\u0275fac=function(C){return new(C||f)(o.Y36(o.R0b),o.Y36(o.sBO))},f.\u0275cmp=o.Xpm({type:f,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(C,R,ce){if(1&C&&o.Suo(ce,Ze,4),2&C){let he;o.iGM(he=o.CRH())&&(R.nzListItemActions=he)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[o.TTD],attrs:A,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(C,R){1&C&&o.YNc(0,Se,3,2,"li",0),2&C&&o.Q6J("ngForOf",R.actions)},directives:[t.sg,t.tP,t.O5],encapsulation:2,changeDetection:0}),f})(),Pe=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(C,R){1&C&&o._UZ(0,"nz-embed-empty",0),2&C&&o.Q6J("nzComponentName","list")("specificContent",R.nzNoResult)},directives:[te.gB],encapsulation:2,changeDetection:0}),f})(),Be=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:$,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Je=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:$,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),Ye=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:$,decls:1,vars:0,template:function(C,R){1&C&&(o.F$t(),o.Hsn(0))},encapsulation:2,changeDetection:0}),f})(),He=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275dir=o.lG2({type:f,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),f})(),je=(()=>{class f{constructor(C){this.directionality=C,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new G.X(this.nzItemLayout),this.destroy$=new U.xQ}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var C;this.dir=this.directionality.value,null===(C=this.directionality.change)||void 0===C||C.pipe((0,le.R)(this.destroy$)).subscribe(R=>{this.dir=R})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(C){C.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return f.\u0275fac=function(C){return new(C||f)(o.Y36(ae.Is,8))},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(C,R,ce){if(1&C&&(o.Suo(ce,Je,5),o.Suo(ce,Ye,5),o.Suo(ce,He,5)),2&C){let he;o.iGM(he=o.CRH())&&(R.nzListFooterComponent=he.first),o.iGM(he=o.CRH())&&(R.nzListPaginationComponent=he.first),o.iGM(he=o.CRH())&&(R.nzListLoadMoreDirective=he.first)}},hostAttrs:[1,"ant-list"],hostVars:16,hostBindings:function(C,R){2&C&&o.ekj("ant-list-rtl","rtl"===R.dir)("ant-list-vertical","vertical"===R.nzItemLayout)("ant-list-lg","large"===R.nzSize)("ant-list-sm","small"===R.nzSize)("ant-list-split",R.nzSplit)("ant-list-bordered",R.nzBordered)("ant-list-loading",R.nzLoading)("ant-list-something-after-last-item",R.hasSomethingAfterLastItem)},inputs:{nzDataSource:"nzDataSource",nzBordered:"nzBordered",nzGrid:"nzGrid",nzHeader:"nzHeader",nzFooter:"nzFooter",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzPagination:"nzPagination",nzSize:"nzSize",nzSplit:"nzSplit",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[o.TTD],ngContentSelectors:_e,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(C,R){if(1&C&&(o.F$t(Le),o.YNc(0,$e,3,1,"ng-template",null,0,o.W1O),o.YNc(2,be,2,1,"nz-list-header",1),o.Hsn(3),o.TgZ(4,"nz-spin",2),o.ynx(5),o.YNc(6,_,1,2,"div",3),o.YNc(7,J,2,2,"div",4),o.YNc(8,Q,1,1,"nz-list-empty",5),o.BQk(),o.qZA(),o.YNc(9,Ce,2,1,"nz-list-footer",1),o.Hsn(10,1),o.YNc(11,Ae,0,0,"ng-template",6),o.Hsn(12,2),o.YNc(13,Ie,2,1,"nz-list-pagination",1),o.Hsn(14,3)),2&C){const ce=o.MAs(1);o.xp6(2),o.Q6J("ngIf",R.nzHeader),o.xp6(2),o.Q6J("nzSpinning",R.nzLoading),o.xp6(2),o.Q6J("ngIf",R.nzLoading&&R.nzDataSource&&0===R.nzDataSource.length),o.xp6(1),o.Q6J("ngIf",R.nzGrid&&R.nzDataSource)("ngIfElse",ce),o.xp6(1),o.Q6J("ngIf",!R.nzLoading&&R.nzDataSource&&0===R.nzDataSource.length),o.xp6(1),o.Q6J("ngIf",R.nzFooter),o.xp6(2),o.Q6J("ngTemplateOutlet",R.nzLoadMore),o.xp6(2),o.Q6J("ngIf",R.nzPagination)}},directives:[Be,oe.W,Pe,Je,Ye,t.sg,t.tP,t.O5,E.f,V.SK,V.t3],encapsulation:2,changeDetection:0}),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzBordered",void 0),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzLoading",void 0),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzSplit",void 0),f})(),qe=(()=>{class f{constructor(C,R,ce,he){this.parentComp=ce,this.cdr=he,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,R.addClass(C.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(C=>{this.itemLayout=C,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return f.\u0275fac=function(C){return new(C||f)(o.Y36(o.SBq),o.Y36(o.Qsj),o.Y36(je),o.Y36(o.sBO))},f.\u0275cmp=o.Xpm({type:f,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(C,R,ce){if(1&C&&o.Suo(ce,ze,5),2&C){let he;o.iGM(he=o.CRH())&&(R.listItemExtraDirective=he.first)}},hostVars:2,hostBindings:function(C,R){2&C&&o.ekj("ant-list-item-no-flex",R.nzNoFlex)},inputs:{nzActions:"nzActions",nzContent:"nzContent",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex"},exportAs:["nzListItem"],ngContentSelectors:j,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(C,R){if(1&C&&(o.F$t(a),o.YNc(0,ve,2,1,"ng-template",null,0,o.W1O),o.YNc(2,Re,3,1,"ng-template",null,1,o.W1O),o.YNc(4,nt,1,0,"ng-template",null,2,o.W1O),o.YNc(6,rt,4,4,"ng-template",null,3,o.W1O),o.YNc(8,p,6,4,"ng-container",4)),2&C){const ce=o.MAs(7);o.xp6(8),o.Q6J("ngIf",R.isVerticalAndExtra)("ngIfElse",ce)}},directives:[Te,ze,t.O5,E.f,t.tP],encapsulation:2,changeDetection:0}),(0,F.gn)([(0,Z.yF)()],f.prototype,"nzNoFlex",void 0),f})(),tt=(()=>{class f{}return f.\u0275fac=function(C){return new(C||f)},f.\u0275mod=o.oAB({type:f}),f.\u0275inj=o.cJS({imports:[[ae.vT,t.ez,oe.j,V.Jb,i.Rt,E.T,te.Xo]]}),f})()},4219:(Ee,se,r)=>{r.d(se,{hl:()=>ve,Cc:()=>_e,wO:()=>at,YV:()=>pt,uA:()=>Ge,r9:()=>xe,ip:()=>p});var o=r(655),i=r(5e3),t=r(8929),E=r(591),F=r(6787),Z=r(3426),U=r(4850),q=r(1709),O=r(2198),L=r(7604),G=r(7138),K=r(5778),H=r(7625),le=r(1059),te=r(7545),ae=r(1721),oe=r(325),V=r(226),$=r(2845),I=r(6950),P=r(925),ne=r(4832),X=r(9808),de=r(647),fe=r(969),pe=r(8076);const ue=["nz-submenu-title",""];function W(a,j){if(1&a&&i._UZ(0,"i",4),2&a){const m=i.oxw();i.Q6J("nzType",m.nzIcon)}}function k(a,j){if(1&a&&(i.ynx(0),i.TgZ(1,"span"),i._uU(2),i.qZA(),i.BQk()),2&a){const m=i.oxw();i.xp6(2),i.Oqu(m.nzTitle)}}function g(a,j){1&a&&i._UZ(0,"i",8)}function B(a,j){1&a&&i._UZ(0,"i",9)}function A(a,j){if(1&a&&(i.TgZ(0,"span",5),i.YNc(1,g,1,0,"i",6),i.YNc(2,B,1,0,"i",7),i.qZA()),2&a){const m=i.oxw();i.Q6J("ngSwitch",m.dir),i.xp6(1),i.Q6J("ngSwitchCase","rtl")}}function w(a,j){1&a&&i._UZ(0,"i",10)}const ye=["*"],Se=["nz-submenu-inline-child",""];function De(a,j){}const Ne=["nz-submenu-none-inline-child",""];function Oe(a,j){}const $e=["nz-submenu",""];function Ve(a,j){1&a&&i.Hsn(0,0,["*ngIf","!nzTitle"])}function be(a,j){if(1&a&&i._UZ(0,"div",6),2&a){const m=i.oxw(),u=i.MAs(7);i.Q6J("mode",m.mode)("nzOpen",m.nzOpen)("@.disabled",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("nzNoAnimation",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("menuClass",m.nzMenuClassName)("templateOutlet",u)}}function _(a,j){if(1&a){const m=i.EpF();i.TgZ(0,"div",8),i.NdJ("subMenuMouseState",function(Y){return i.CHM(m),i.oxw(2).setMouseEnterState(Y)}),i.qZA()}if(2&a){const m=i.oxw(2),u=i.MAs(7);i.Q6J("theme",m.theme)("mode",m.mode)("nzOpen",m.nzOpen)("position",m.position)("nzDisabled",m.nzDisabled)("isMenuInsideDropDown",m.isMenuInsideDropDown)("templateOutlet",u)("menuClass",m.nzMenuClassName)("@.disabled",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)("nzNoAnimation",null==m.noAnimation?null:m.noAnimation.nzNoAnimation)}}function ee(a,j){if(1&a){const m=i.EpF();i.YNc(0,_,1,10,"ng-template",7),i.NdJ("positionChange",function(Y){return i.CHM(m),i.oxw().onPositionChange(Y)})}if(2&a){const m=i.oxw(),u=i.MAs(1);i.Q6J("cdkConnectedOverlayPositions",m.overlayPositions)("cdkConnectedOverlayOrigin",u)("cdkConnectedOverlayWidth",m.triggerWidth)("cdkConnectedOverlayOpen",m.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function S(a,j){1&a&&i.Hsn(0,1)}const J=[[["","title",""]],"*"],Q=["[title]","*"],ge=["titleElement"],Ce=["nz-menu-group",""];function Ae(a,j){if(1&a&&(i.ynx(0),i._uU(1),i.BQk()),2&a){const m=i.oxw();i.xp6(1),i.Oqu(m.nzTitle)}}function Me(a,j){1&a&&i.Hsn(0,1,["*ngIf","!nzTitle"])}const Ie=["*",[["","title",""]]],Le=["*","[title]"],_e=new i.OlP("NzIsInDropDownMenuToken"),we=new i.OlP("NzMenuServiceLocalToken");let ve=(()=>{class a{constructor(){this.descendantMenuItemClick$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.theme$=new E.X("light"),this.mode$=new E.X("vertical"),this.inlineIndent$=new E.X(24),this.isChildSubMenuOpen$=new E.X(!1)}onDescendantMenuItemClick(m){this.descendantMenuItemClick$.next(m)}onChildMenuItemClick(m){this.childMenuItemClick$.next(m)}setMode(m){this.mode$.next(m)}setTheme(m){this.theme$.next(m)}setInlineIndent(m){this.inlineIndent$.next(m)}}return a.\u0275fac=function(m){return new(m||a)},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),Qe=(()=>{class a{constructor(m,u,Y){this.nzHostSubmenuService=m,this.nzMenuService=u,this.isMenuInsideDropDown=Y,this.mode$=this.nzMenuService.mode$.pipe((0,U.U)(Te=>"inline"===Te?"inline":"vertical"===Te||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new E.X(!1),this.isChildSubMenuOpen$=new E.X(!1),this.isMouseEnterTitleOrOverlay$=new t.xQ,this.childMenuItemClick$=new t.xQ,this.destroy$=new t.xQ,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const ie=this.childMenuItemClick$.pipe((0,q.zg)(()=>this.mode$),(0,O.h)(Te=>"inline"!==Te||this.isMenuInsideDropDown),(0,L.h)(!1)),ze=(0,F.T)(this.isMouseEnterTitleOrOverlay$,ie);(0,Z.aj)([this.isChildSubMenuOpen$,ze]).pipe((0,U.U)(([Te,Pe])=>Te||Pe),(0,G.e)(150),(0,K.x)(),(0,H.R)(this.destroy$)).pipe((0,K.x)()).subscribe(Te=>{this.setOpenStateWithoutDebounce(Te),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(Te):this.nzMenuService.isChildSubMenuOpen$.next(Te)})}onChildMenuItemClick(m){this.childMenuItemClick$.next(m)}setOpenStateWithoutDebounce(m){this.isCurrentSubMenuOpen$.next(m)}setMouseEnterTitleOrOverlayState(m){this.isMouseEnterTitleOrOverlay$.next(m)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.LFG(a,12),i.LFG(ve),i.LFG(_e))},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac}),a})(),xe=(()=>{class a{constructor(m,u,Y,ie,ze,Ze,Te,Pe){this.nzMenuService=m,this.cdr=u,this.nzSubmenuService=Y,this.isMenuInsideDropDown=ie,this.directionality=ze,this.routerLink=Ze,this.routerLinkWithHref=Te,this.router=Pe,this.destroy$=new t.xQ,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new t.xQ,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,Pe&&this.router.events.pipe((0,H.R)(this.destroy$),(0,O.h)(Be=>Be instanceof oe.m2)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(m){this.nzDisabled?(m.preventDefault(),m.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(m){this.nzSelected=m,this.selected$.next(m)}updateRouterActive(){!this.listOfRouterLink||!this.listOfRouterLinkWithHref||!this.router||!this.router.navigated||!this.nzMatchRouter||Promise.resolve().then(()=>{const m=this.hasActiveLinks();this.nzSelected!==m&&(this.nzSelected=m,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const m=this.isLinkActive(this.router);return this.routerLink&&m(this.routerLink)||this.routerLinkWithHref&&m(this.routerLinkWithHref)||this.listOfRouterLink.some(m)||this.listOfRouterLinkWithHref.some(m)}isLinkActive(m){return u=>m.isActive(u.urlTree||"",{paths:this.nzMatchRouterExact?"exact":"subset",queryParams:this.nzMatchRouterExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"})}ngOnInit(){var m;(0,Z.aj)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,Y])=>{this.inlinePaddingLeft="inline"===u?this.level*Y:null}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe((0,H.R)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(m){m.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(ve),i.Y36(i.sBO),i.Y36(Qe,8),i.Y36(_e),i.Y36(V.Is,8),i.Y36(oe.rH,8),i.Y36(oe.yS,8),i.Y36(oe.F0,8))},a.\u0275dir=i.lG2({type:a,selectors:[["","nz-menu-item",""]],contentQueries:function(m,u,Y){if(1&m&&(i.Suo(Y,oe.rH,5),i.Suo(Y,oe.yS,5)),2&m){let ie;i.iGM(ie=i.CRH())&&(u.listOfRouterLink=ie),i.iGM(ie=i.CRH())&&(u.listOfRouterLinkWithHref=ie)}},hostVars:20,hostBindings:function(m,u){1&m&&i.NdJ("click",function(ie){return u.clickMenuItem(ie)}),2&m&&(i.Udp("padding-left","rtl"===u.dir?null:u.nzPaddingLeft||u.inlinePaddingLeft,"px")("padding-right","rtl"===u.dir?u.nzPaddingLeft||u.inlinePaddingLeft:null,"px"),i.ekj("ant-dropdown-menu-item",u.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",u.isMenuInsideDropDown&&u.nzSelected)("ant-dropdown-menu-item-danger",u.isMenuInsideDropDown&&u.nzDanger)("ant-dropdown-menu-item-disabled",u.isMenuInsideDropDown&&u.nzDisabled)("ant-menu-item",!u.isMenuInsideDropDown)("ant-menu-item-selected",!u.isMenuInsideDropDown&&u.nzSelected)("ant-menu-item-danger",!u.isMenuInsideDropDown&&u.nzDanger)("ant-menu-item-disabled",!u.isMenuInsideDropDown&&u.nzDisabled))},inputs:{nzPaddingLeft:"nzPaddingLeft",nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter"},exportAs:["nzMenuItem"],features:[i.TTD]}),(0,o.gn)([(0,ae.yF)()],a.prototype,"nzDisabled",void 0),(0,o.gn)([(0,ae.yF)()],a.prototype,"nzSelected",void 0),(0,o.gn)([(0,ae.yF)()],a.prototype,"nzDanger",void 0),(0,o.gn)([(0,ae.yF)()],a.prototype,"nzMatchRouterExact",void 0),(0,o.gn)([(0,ae.yF)()],a.prototype,"nzMatchRouter",void 0),a})(),Re=(()=>{class a{constructor(m,u){this.cdr=m,this.directionality=u,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new i.vpe,this.subMenuMouseState=new i.vpe,this.dir="ltr",this.destroy$=new t.xQ}ngOnInit(){var m;this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(m){this.nzDisabled||this.subMenuMouseState.next(m)}clickTitle(){"inline"===this.mode&&!this.nzDisabled&&this.toggleSubMenu.emit()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.sBO),i.Y36(V.Is,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(m,u){1&m&&i.NdJ("click",function(){return u.clickTitle()})("mouseenter",function(){return u.setMouseState(!0)})("mouseleave",function(){return u.setMouseState(!1)}),2&m&&(i.Udp("padding-left","rtl"===u.dir?null:u.paddingLeft,"px")("padding-right","rtl"===u.dir?u.paddingLeft:null,"px"),i.ekj("ant-dropdown-menu-submenu-title",u.isMenuInsideDropDown)("ant-menu-submenu-title",!u.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:ue,ngContentSelectors:ye,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(m,u){if(1&m&&(i.F$t(),i.YNc(0,W,1,1,"i",0),i.YNc(1,k,3,1,"ng-container",1),i.Hsn(2),i.YNc(3,A,3,2,"span",2),i.YNc(4,w,1,0,"ng-template",null,3,i.W1O)),2&m){const Y=i.MAs(5);i.Q6J("ngIf",u.nzIcon),i.xp6(1),i.Q6J("nzStringTemplateOutlet",u.nzTitle),i.xp6(2),i.Q6J("ngIf",u.isMenuInsideDropDown)("ngIfElse",Y)}},directives:[X.O5,de.Ls,fe.f,X.RF,X.n9,X.ED],encapsulation:2,changeDetection:0}),a})(),nt=(()=>{class a{constructor(m,u,Y){this.elementRef=m,this.renderer=u,this.directionality=Y,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var m;this.calcMotionState(),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngOnChanges(m){const{mode:u,nzOpen:Y,menuClass:ie}=m;(u||Y)&&this.calcMotionState(),ie&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.removeClass(this.elementRef.nativeElement,ze)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(ze=>!!ze).forEach(ze=>{this.renderer.addClass(this.elementRef.nativeElement,ze)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(V.Is,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu-inline-child",""]],hostAttrs:[1,"ant-menu","ant-menu-inline","ant-menu-sub"],hostVars:3,hostBindings:function(m,u){2&m&&(i.d8E("@collapseMotion",u.expandState),i.ekj("ant-menu-rtl","rtl"===u.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[i.TTD],attrs:Se,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(m,u){1&m&&i.YNc(0,De,0,0,"ng-template",0),2&m&&i.Q6J("ngTemplateOutlet",u.templateOutlet)},directives:[X.tP],encapsulation:2,data:{animation:[pe.J_]},changeDetection:0}),a})(),it=(()=>{class a{constructor(m){this.directionality=m,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new i.vpe,this.expandState="collapsed",this.dir="ltr",this.destroy$=new t.xQ}setMouseState(m){this.nzDisabled||this.subMenuMouseState.next(m)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var m;this.calcMotionState(),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u})}ngOnChanges(m){const{mode:u,nzOpen:Y}=m;(u||Y)&&this.calcMotionState()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(V.Is,8))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu-none-inline-child",""]],hostAttrs:[1,"ant-menu-submenu","ant-menu-submenu-popup"],hostVars:14,hostBindings:function(m,u){1&m&&i.NdJ("mouseenter",function(){return u.setMouseState(!0)})("mouseleave",function(){return u.setMouseState(!1)}),2&m&&(i.d8E("@slideMotion",u.expandState)("@zoomBigMotion",u.expandState),i.ekj("ant-menu-light","light"===u.theme)("ant-menu-dark","dark"===u.theme)("ant-menu-submenu-placement-bottom","horizontal"===u.mode)("ant-menu-submenu-placement-right","vertical"===u.mode&&"right"===u.position)("ant-menu-submenu-placement-left","vertical"===u.mode&&"left"===u.position)("ant-menu-submenu-rtl","rtl"===u.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[i.TTD],attrs:Ne,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(m,u){1&m&&(i.TgZ(0,"div",0),i.YNc(1,Oe,0,0,"ng-template",1),i.qZA()),2&m&&(i.ekj("ant-dropdown-menu",u.isMenuInsideDropDown)("ant-menu",!u.isMenuInsideDropDown)("ant-dropdown-menu-vertical",u.isMenuInsideDropDown)("ant-menu-vertical",!u.isMenuInsideDropDown)("ant-dropdown-menu-sub",u.isMenuInsideDropDown)("ant-menu-sub",!u.isMenuInsideDropDown)("ant-menu-rtl","rtl"===u.dir),i.Q6J("ngClass",u.menuClass),i.xp6(1),i.Q6J("ngTemplateOutlet",u.templateOutlet))},directives:[X.mk,X.tP],encapsulation:2,data:{animation:[pe.$C,pe.mF]},changeDetection:0}),a})();const et=[I.yW.rightTop,I.yW.right,I.yW.rightBottom,I.yW.leftTop,I.yW.left,I.yW.leftBottom],ot=[I.yW.bottomLeft];let v=(()=>{class a{constructor(m,u,Y,ie,ze,Ze,Te){this.nzMenuService=m,this.cdr=u,this.nzSubmenuService=Y,this.platform=ie,this.isMenuInsideDropDown=ze,this.directionality=Ze,this.noAnimation=Te,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new i.vpe,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new t.xQ,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=et,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(m){this.nzSubmenuService.setOpenStateWithoutDebounce(m)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(m){this.isActive=m,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(m)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(m){const u=(0,I.d_)(m);"rightTop"===u||"rightBottom"===u||"right"===u?this.position="right":("leftTop"===u||"leftBottom"===u||"left"===u)&&(this.position="left")}ngOnInit(){var m;this.nzMenuService.theme$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.theme=u,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.mode=u,"horizontal"===u?this.overlayPositions=ot:"vertical"===u&&(this.overlayPositions=et),this.cdr.markForCheck()}),(0,Z.aj)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,Y])=>{this.inlinePaddingLeft="inline"===u?this.level*Y:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.isActive=u,u!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=u,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const m=this.listOfNzMenuItemDirective,u=m.changes,Y=(0,F.T)(u,...m.map(ie=>ie.selected$));u.pipe((0,le.O)(m),(0,te.w)(()=>Y),(0,le.O)(!0),(0,U.U)(()=>m.some(ie=>ie.nzSelected)),(0,H.R)(this.destroy$)).subscribe(ie=>{this.isSelected=ie,this.cdr.markForCheck()})}ngOnChanges(m){const{nzOpen:u}=m;u&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(ve),i.Y36(i.sBO),i.Y36(Qe),i.Y36(P.t4),i.Y36(_e),i.Y36(V.Is,8),i.Y36(ne.P,9))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-submenu",""]],contentQueries:function(m,u,Y){if(1&m&&(i.Suo(Y,a,5),i.Suo(Y,xe,5)),2&m){let ie;i.iGM(ie=i.CRH())&&(u.listOfNzSubMenuComponent=ie),i.iGM(ie=i.CRH())&&(u.listOfNzMenuItemDirective=ie)}},viewQuery:function(m,u){if(1&m&&i.Gf($.xu,7,i.SBq),2&m){let Y;i.iGM(Y=i.CRH())&&(u.cdkOverlayOrigin=Y.first)}},hostVars:34,hostBindings:function(m,u){2&m&&i.ekj("ant-dropdown-menu-submenu",u.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",u.isMenuInsideDropDown&&u.nzDisabled)("ant-dropdown-menu-submenu-open",u.isMenuInsideDropDown&&u.nzOpen)("ant-dropdown-menu-submenu-selected",u.isMenuInsideDropDown&&u.isSelected)("ant-dropdown-menu-submenu-vertical",u.isMenuInsideDropDown&&"vertical"===u.mode)("ant-dropdown-menu-submenu-horizontal",u.isMenuInsideDropDown&&"horizontal"===u.mode)("ant-dropdown-menu-submenu-inline",u.isMenuInsideDropDown&&"inline"===u.mode)("ant-dropdown-menu-submenu-active",u.isMenuInsideDropDown&&u.isActive)("ant-menu-submenu",!u.isMenuInsideDropDown)("ant-menu-submenu-disabled",!u.isMenuInsideDropDown&&u.nzDisabled)("ant-menu-submenu-open",!u.isMenuInsideDropDown&&u.nzOpen)("ant-menu-submenu-selected",!u.isMenuInsideDropDown&&u.isSelected)("ant-menu-submenu-vertical",!u.isMenuInsideDropDown&&"vertical"===u.mode)("ant-menu-submenu-horizontal",!u.isMenuInsideDropDown&&"horizontal"===u.mode)("ant-menu-submenu-inline",!u.isMenuInsideDropDown&&"inline"===u.mode)("ant-menu-submenu-active",!u.isMenuInsideDropDown&&u.isActive)("ant-menu-submenu-rtl","rtl"===u.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[i._Bn([Qe]),i.TTD],attrs:$e,ngContentSelectors:Q,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(m,u){if(1&m&&(i.F$t(J),i.TgZ(0,"div",0,1),i.NdJ("subMenuMouseState",function(ie){return u.setMouseEnterState(ie)})("toggleSubMenu",function(){return u.toggleSubMenu()}),i.YNc(2,Ve,1,0,"ng-content",2),i.qZA(),i.YNc(3,be,1,6,"div",3),i.YNc(4,ee,1,5,"ng-template",null,4,i.W1O),i.YNc(6,S,1,0,"ng-template",null,5,i.W1O)),2&m){const Y=i.MAs(5);i.Q6J("nzIcon",u.nzIcon)("nzTitle",u.nzTitle)("mode",u.mode)("nzDisabled",u.nzDisabled)("isMenuInsideDropDown",u.isMenuInsideDropDown)("paddingLeft",u.nzPaddingLeft||u.inlinePaddingLeft),i.xp6(2),i.Q6J("ngIf",!u.nzTitle),i.xp6(1),i.Q6J("ngIf","inline"===u.mode)("ngIfElse",Y)}},directives:[Re,nt,it,$.xu,X.O5,ne.P,$.pI],encapsulation:2,changeDetection:0}),(0,o.gn)([(0,ae.yF)()],a.prototype,"nzOpen",void 0),(0,o.gn)([(0,ae.yF)()],a.prototype,"nzDisabled",void 0),a})();function rt(a,j){return a||j}function st(a){return a||!1}let at=(()=>{class a{constructor(m,u,Y,ie){this.nzMenuService=m,this.isMenuInsideDropDown=u,this.cdr=Y,this.directionality=ie,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new i.vpe,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new E.X(this.nzInlineCollapsed),this.mode$=new E.X(this.nzMode),this.destroy$=new t.xQ,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(m){this.nzInlineCollapsed=m,this.inlineCollapsed$.next(m)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(m=>m.nzOpen),this.listOfNzSubMenuComponent.forEach(m=>m.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(m=>m.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var m;(0,Z.aj)([this.inlineCollapsed$,this.mode$]).pipe((0,H.R)(this.destroy$)).subscribe(([u,Y])=>{this.actualMode=u?"vertical":Y,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.nzClick.emit(u),this.nzSelectable&&!u.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(Y=>Y.setSelectedState(Y===u))}),this.dir=this.directionality.value,null===(m=this.directionality.change)||void 0===m||m.pipe((0,H.R)(this.destroy$)).subscribe(u=>{this.dir=u,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe((0,H.R)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(m){const{nzInlineCollapsed:u,nzInlineIndent:Y,nzTheme:ie,nzMode:ze}=m;u&&this.inlineCollapsed$.next(this.nzInlineCollapsed),Y&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),ie&&this.nzMenuService.setTheme(this.nzTheme),ze&&(this.mode$.next(this.nzMode),!m.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(Ze=>Ze.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(ve),i.Y36(_e),i.Y36(i.sBO),i.Y36(V.Is,8))},a.\u0275dir=i.lG2({type:a,selectors:[["","nz-menu",""]],contentQueries:function(m,u,Y){if(1&m&&(i.Suo(Y,xe,5),i.Suo(Y,v,5)),2&m){let ie;i.iGM(ie=i.CRH())&&(u.listOfNzMenuItemDirective=ie),i.iGM(ie=i.CRH())&&(u.listOfNzSubMenuComponent=ie)}},hostVars:34,hostBindings:function(m,u){2&m&&i.ekj("ant-dropdown-menu",u.isMenuInsideDropDown)("ant-dropdown-menu-root",u.isMenuInsideDropDown)("ant-dropdown-menu-light",u.isMenuInsideDropDown&&"light"===u.nzTheme)("ant-dropdown-menu-dark",u.isMenuInsideDropDown&&"dark"===u.nzTheme)("ant-dropdown-menu-vertical",u.isMenuInsideDropDown&&"vertical"===u.actualMode)("ant-dropdown-menu-horizontal",u.isMenuInsideDropDown&&"horizontal"===u.actualMode)("ant-dropdown-menu-inline",u.isMenuInsideDropDown&&"inline"===u.actualMode)("ant-dropdown-menu-inline-collapsed",u.isMenuInsideDropDown&&u.nzInlineCollapsed)("ant-menu",!u.isMenuInsideDropDown)("ant-menu-root",!u.isMenuInsideDropDown)("ant-menu-light",!u.isMenuInsideDropDown&&"light"===u.nzTheme)("ant-menu-dark",!u.isMenuInsideDropDown&&"dark"===u.nzTheme)("ant-menu-vertical",!u.isMenuInsideDropDown&&"vertical"===u.actualMode)("ant-menu-horizontal",!u.isMenuInsideDropDown&&"horizontal"===u.actualMode)("ant-menu-inline",!u.isMenuInsideDropDown&&"inline"===u.actualMode)("ant-menu-inline-collapsed",!u.isMenuInsideDropDown&&u.nzInlineCollapsed)("ant-menu-rtl","rtl"===u.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[i._Bn([{provide:we,useClass:ve},{provide:ve,useFactory:rt,deps:[[new i.tp0,new i.FiY,ve],we]},{provide:_e,useFactory:st,deps:[[new i.tp0,new i.FiY,_e]]}]),i.TTD]}),(0,o.gn)([(0,ae.yF)()],a.prototype,"nzInlineCollapsed",void 0),(0,o.gn)([(0,ae.yF)()],a.prototype,"nzSelectable",void 0),a})();function ct(a){return a||!1}let Ge=(()=>{class a{constructor(m,u,Y){this.elementRef=m,this.renderer=u,this.isMenuInsideDropDown=Y,this.renderer.addClass(m.nativeElement,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group":"ant-menu-item-group")}ngAfterViewInit(){const m=this.titleElement.nativeElement.nextElementSibling;m&&this.renderer.addClass(m,this.isMenuInsideDropDown?"ant-dropdown-menu-item-group-list":"ant-menu-item-group-list")}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(_e))},a.\u0275cmp=i.Xpm({type:a,selectors:[["","nz-menu-group",""]],viewQuery:function(m,u){if(1&m&&i.Gf(ge,5),2&m){let Y;i.iGM(Y=i.CRH())&&(u.titleElement=Y.first)}},inputs:{nzTitle:"nzTitle"},exportAs:["nzMenuGroup"],features:[i._Bn([{provide:_e,useFactory:ct,deps:[[new i.tp0,new i.FiY,_e]]}])],attrs:Ce,ngContentSelectors:Le,decls:5,vars:6,consts:[["titleElement",""],[4,"nzStringTemplateOutlet"],[4,"ngIf"]],template:function(m,u){1&m&&(i.F$t(Ie),i.TgZ(0,"div",null,0),i.YNc(2,Ae,2,1,"ng-container",1),i.YNc(3,Me,1,0,"ng-content",2),i.qZA(),i.Hsn(4)),2&m&&(i.ekj("ant-menu-item-group-title",!u.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title",u.isMenuInsideDropDown),i.xp6(2),i.Q6J("nzStringTemplateOutlet",u.nzTitle),i.xp6(1),i.Q6J("ngIf",!u.nzTitle))},directives:[fe.f,X.O5],encapsulation:2,changeDetection:0}),a})(),pt=(()=>{class a{constructor(m,u){this.elementRef=m,this.renderer=u,this.renderer.addClass(m.nativeElement,"ant-dropdown-menu-item-divider")}}return a.\u0275fac=function(m){return new(m||a)(i.Y36(i.SBq),i.Y36(i.Qsj))},a.\u0275dir=i.lG2({type:a,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),a})(),p=(()=>{class a{}return a.\u0275fac=function(m){return new(m||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[V.vT,X.ez,P.ud,$.U8,de.PV,ne.g,fe.T]]}),a})()},8144:(Ee,se,r)=>{r.d(se,{NU:()=>oe,$1:()=>le,zf:()=>V});var o=r(226),i=r(9808),t=r(5e3),E=r(655),F=r(8929),Z=r(7625),U=r(9439),q=r(1721);function O($,I){}const L=function($){return{$implicit:$}};function G($,I){if(1&$&&(t.TgZ(0,"span",4),t.YNc(1,O,0,0,"ng-template",5),t.qZA()),2&$){const P=t.oxw(),ne=P.last,X=P.index,de=t.oxw();t.Udp("margin-bottom","vertical"===de.nzDirection?ne?null:de.spaceSize:null,"px")("margin-right","horizontal"===de.nzDirection?ne?null:de.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",de.nzSplit)("ngTemplateOutletContext",t.VKq(6,L,X))}}function K($,I){if(1&$&&(t.TgZ(0,"div",1),t.GkF(1,2),t.qZA(),t.YNc(2,G,2,8,"span",3)),2&$){const P=I.$implicit,ne=I.last,X=t.oxw();t.Udp("margin-bottom","vertical"===X.nzDirection?ne?null:X.spaceSize:null,"px")("margin-right","horizontal"===X.nzDirection?ne?null:X.spaceSize:null,"px"),t.xp6(1),t.Q6J("ngTemplateOutlet",P),t.xp6(1),t.Q6J("ngIf",X.nzSplit&&!ne)}}const H=["*"];let le=(()=>{class ${constructor(){}}return $.\u0275fac=function(P){return new(P||$)},$.\u0275dir=t.lG2({type:$,selectors:[["","nzSpaceItem",""]]}),$})();const ae={small:8,middle:16,large:24};let oe=(()=>{class ${constructor(P,ne){this.nzConfigService=P,this.cdr=ne,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSplit=null,this.nzWrap=!1,this.nzSize="small",this.spaceSize=ae.small,this.destroy$=new F.xQ}updateSpaceItems(){this.spaceSize=("string"==typeof this.nzSize?ae[this.nzSize]:this.nzSize)/(this.nzSplit?2:1),this.cdr.markForCheck()}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.updateSpaceItems(),this.items.changes.pipe((0,Z.R)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}}return $.\u0275fac=function(P){return new(P||$)(t.Y36(U.jY),t.Y36(t.sBO))},$.\u0275cmp=t.Xpm({type:$,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(P,ne,X){if(1&P&&t.Suo(X,le,4,t.Rgc),2&P){let de;t.iGM(de=t.CRH())&&(ne.items=de)}},hostAttrs:[1,"ant-space"],hostVars:14,hostBindings:function(P,ne){2&P&&(t.Udp("flex-wrap",ne.nzWrap?"wrap":null),t.ekj("ant-space-horizontal","horizontal"===ne.nzDirection)("ant-space-vertical","vertical"===ne.nzDirection)("ant-space-align-start","start"===ne.mergedAlign)("ant-space-align-end","end"===ne.mergedAlign)("ant-space-align-center","center"===ne.mergedAlign)("ant-space-align-baseline","baseline"===ne.mergedAlign))},inputs:{nzDirection:"nzDirection",nzAlign:"nzAlign",nzSplit:"nzSplit",nzWrap:"nzWrap",nzSize:"nzSize"},exportAs:["NzSpace"],features:[t.TTD],ngContentSelectors:H,decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],[1,"ant-space-item"],[3,"ngTemplateOutlet"],["class","ant-space-split",3,"margin-bottom","margin-right",4,"ngIf"],[1,"ant-space-split"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(P,ne){1&P&&(t.F$t(),t.Hsn(0),t.YNc(1,K,3,6,"ng-template",0)),2&P&&(t.xp6(1),t.Q6J("ngForOf",ne.items))},directives:[i.sg,i.tP,i.O5],encapsulation:2,changeDetection:0}),(0,E.gn)([(0,q.yF)()],$.prototype,"nzWrap",void 0),(0,E.gn)([(0,U.oS)()],$.prototype,"nzSize",void 0),$})(),V=(()=>{class ${}return $.\u0275fac=function(P){return new(P||$)},$.\u0275mod=t.oAB({type:$}),$.\u0275inj=t.cJS({imports:[[o.vT,i.ez]]}),$})()},7525:(Ee,se,r)=>{r.d(se,{W:()=>ue,j:()=>W});var o=r(655),i=r(5e3),t=r(8929),E=r(591),F=r(839),Z=r(8723),U=r(1177);class O{constructor(g){this.durationSelector=g}call(g,B){return B.subscribe(new L(g,this.durationSelector))}}class L extends U.Ds{constructor(g,B){super(g),this.durationSelector=B,this.hasValue=!1}_next(g){try{const B=this.durationSelector.call(this,g);B&&this._tryNext(g,B)}catch(B){this.destination.error(B)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(g,B){let A=this.durationSubscription;this.value=g,this.hasValue=!0,A&&(A.unsubscribe(),this.remove(A)),A=(0,U.ft)(B,new U.IY(this)),A&&!A.closed&&this.add(this.durationSubscription=A)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const g=this.value,B=this.durationSubscription;B&&(this.durationSubscription=void 0,B.unsubscribe(),this.remove(B)),this.value=void 0,this.hasValue=!1,super._next(g)}}}var G=r(1059),K=r(5778),H=r(7545),le=r(7625),te=r(9439),ae=r(1721),oe=r(226),V=r(9808),$=r(7144);function I(k,g){1&k&&(i.TgZ(0,"span",3),i._UZ(1,"i",4),i._UZ(2,"i",4),i._UZ(3,"i",4),i._UZ(4,"i",4),i.qZA())}function P(k,g){}function ne(k,g){if(1&k&&(i.TgZ(0,"div",8),i._uU(1),i.qZA()),2&k){const B=i.oxw(2);i.xp6(1),i.Oqu(B.nzTip)}}function X(k,g){if(1&k&&(i.TgZ(0,"div"),i.TgZ(1,"div",5),i.YNc(2,P,0,0,"ng-template",6),i.YNc(3,ne,2,1,"div",7),i.qZA(),i.qZA()),2&k){const B=i.oxw(),A=i.MAs(1);i.xp6(1),i.ekj("ant-spin-rtl","rtl"===B.dir)("ant-spin-spinning",B.isLoading)("ant-spin-lg","large"===B.nzSize)("ant-spin-sm","small"===B.nzSize)("ant-spin-show-text",B.nzTip),i.xp6(1),i.Q6J("ngTemplateOutlet",B.nzIndicator||A),i.xp6(1),i.Q6J("ngIf",B.nzTip)}}function de(k,g){if(1&k&&(i.TgZ(0,"div",9),i.Hsn(1),i.qZA()),2&k){const B=i.oxw();i.ekj("ant-spin-blur",B.isLoading)}}const fe=["*"];let ue=(()=>{class k{constructor(B,A,w){this.nzConfigService=B,this.cdr=A,this.directionality=w,this._nzModuleName="spin",this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new t.xQ,this.spinning$=new E.X(this.nzSpinning),this.delay$=new F.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var B;this.delay$.pipe((0,G.O)(this.nzDelay),(0,K.x)(),(0,H.w)(w=>0===w?this.spinning$:this.spinning$.pipe(function q(k){return g=>g.lift(new O(k))}(ye=>(0,Z.H)(ye?w:0)))),(0,le.R)(this.destroy$)).subscribe(w=>{this.isLoading=w,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent("spin").pipe((0,le.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(B=this.directionality.change)||void 0===B||B.pipe((0,le.R)(this.destroy$)).subscribe(w=>{this.dir=w,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(B){const{nzSpinning:A,nzDelay:w}=B;A&&this.spinning$.next(this.nzSpinning),w&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return k.\u0275fac=function(B){return new(B||k)(i.Y36(te.jY),i.Y36(i.sBO),i.Y36(oe.Is,8))},k.\u0275cmp=i.Xpm({type:k,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(B,A){2&B&&i.ekj("ant-spin-nested-loading",!A.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[i.TTD],ngContentSelectors:fe,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(B,A){1&B&&(i.F$t(),i.YNc(0,I,5,0,"ng-template",null,0,i.W1O),i.YNc(2,X,4,12,"div",1),i.YNc(3,de,2,2,"div",2)),2&B&&(i.xp6(2),i.Q6J("ngIf",A.isLoading),i.xp6(1),i.Q6J("ngIf",!A.nzSimple))},directives:[V.O5,V.tP],encapsulation:2}),(0,o.gn)([(0,te.oS)()],k.prototype,"nzIndicator",void 0),(0,o.gn)([(0,ae.Rn)()],k.prototype,"nzDelay",void 0),(0,o.gn)([(0,ae.yF)()],k.prototype,"nzSimple",void 0),(0,o.gn)([(0,ae.yF)()],k.prototype,"nzSpinning",void 0),k})(),W=(()=>{class k{}return k.\u0275fac=function(B){return new(B||k)},k.\u0275mod=i.oAB({type:k}),k.\u0275inj=i.cJS({imports:[[oe.vT,V.ez,$.Q8]]}),k})()}}]);