"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[9636],{9636:(k,S,a)=>{a.r(S),a.d(S,{EvidenceDetailModule:()=>Wn});var o=a(9808),f=a(6949),I=a(5630),m=a(8144),T=a(3618),O=a(3309),A=a(4682),h=a(1945),Z=a(6042),E=a(8481),g=a(325),b=a(4867),y=a(647),v=a(712),u=a(373),C=a(1059),N=a(7625),B=a(8929),w=a(591),e=a(5e3),U=a(9350),P=a(8992),M=a(3193),r=a(8664),d=a(5623),c=a(8168),l=a(2683),_=a(2643),R=a(9077),F=a(8525),Y=a(2359),j=a(2233),x=a(1894),$=a(759),V=a(3997);function W(n,i){if(1&n&&(e.TgZ(0,"span",8),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3," Parents:"),e.qZA()),2&n){const t=e.oxw(2).ngIf;e.xp6(2),e.Oqu(t.name)}}function q(n,i){if(1&n&&(e.TgZ(0,"span",9),e.TgZ(1,"a",10),e._UZ(2,"cvc-gene-tag",11),e.qZA(),e.TgZ(3,"a",10),e._UZ(4,"cvc-variant-tag",12),e.qZA(),e.qZA()),2&n){const t=e.oxw(2).ngIf;e.xp6(1),e.MGl("routerLink","/genes/",t.gene.id,""),e.xp6(1),e.Q6J("gene",t.gene),e.xp6(1),e.MGl("routerLink","/variants/",t.variant.id,""),e.xp6(1),e.Q6J("variant",t.variant)}}function X(n,i){1&n&&(e.TgZ(0,"nz-space",5),e.YNc(1,W,4,1,"span",6),e.YNc(2,q,5,4,"span",7),e.qZA())}function G(n,i){1&n&&(e.TgZ(0,"nz-tag",26),e._uU(1,"Flagged"),e.qZA()),2&n&&e.Q6J("nzColor","red")}const H=function(n){return["/evidence",n,"revise"]};function K(n,i){if(1&n&&(e.TgZ(0,"button",28,29),e._uU(2," Revise "),e.qZA()),2&n){const t=e.MAs(1),s=e.oxw(3).ngIf;e.Q6J("routerLink",e.VKq(2,H,s.id))("nzType",t.isActive?"primary":"default")}}function ee(n,i){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,K,3,4,"button",27),e.qZA()),2&n){const t=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",t.signedIn)}}function ne(n,i){if(1&n&&(e.TgZ(0,"button",31,29),e._uU(2," Flag "),e.qZA()),2&n){const t=e.MAs(1);e.Q6J("nzType",t.isActive?"primary":"default")}}function te(n,i){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,ne,3,1,"button",30),e.qZA()),2&n){const t=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",t.signedIn)}}function ie(n,i){if(1&n&&e._UZ(0,"cvc-entity-subscription-button",33),2&n){const t=e.oxw(2).ngrxLet,s=e.oxw(2);e.Q6J("viewer",t)("subscribableId",s.subscribable.id)}}function ae(n,i){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,ie,1,2,"cvc-entity-subscription-button",32),e.qZA()),2&n){const t=e.oxw().ngrxLet,s=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.signedIn&&s.subscribable)}}function oe(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"cvc-revert-entity-button",35),e.NdJ("onReverted",function(p){return e.CHM(t),e.oxw(4).onRevertCompleted(p)}),e.qZA()}if(2&n){const t=e.oxw(2).ngrxLet,s=e.oxw().ngIf;e.Q6J("viewer",t)("entityId",s.id)}}function se(n,i){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,oe,1,2,"cvc-revert-entity-button",34),e.qZA()),2&n){const t=e.oxw().ngrxLet,s=e.oxw().ngIf;e.xp6(1),e.Q6J("ngIf",t.canModerate&&"SUBMITTED"!=s.status)}}function ce(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"nz-alert",36),e.NdJ("nzOnClose",function(){const z=e.CHM(t).$implicit;return e.oxw(3).onErrorBannerClose(z)}),e.qZA()}2&n&&e.Q6J("nzMessage",i.$implicit)}function re(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"nz-alert",37),e.NdJ("nzOnClose",function(){return e.CHM(t),e.oxw(3).onSuccessBannerClose()}),e.qZA()}if(2&n){const t=e.oxw(3);e.Q6J("nzMessage",t.successMessage)}}function le(n,i){1&n&&e._UZ(0,"nz-alert",38)}function de(n,i){if(1&n&&(e.TgZ(0,"nz-col",39),e._UZ(1,"cvc-contributor-avatars",40),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.Q6J("subscribable",t.subscribable)}}function pe(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"cvc-moderate-entity-buttons",42),e.NdJ("onModerated",function(p){return e.CHM(t),e.oxw(4).onModerateCompleted(p)}),e.qZA()}if(2&n){const t=e.oxw(2).ngrxLet,s=e.oxw().ngIf;e.Q6J("entityId",s.id)("viewer",t)}}function ge(n,i){if(1&n&&(e.TgZ(0,"span"),e.YNc(1,pe,1,2,"cvc-moderate-entity-buttons",41),e.qZA()),2&n){const t=e.oxw().ngrxLet,s=e.oxw().ngIf;e.xp6(1),e.Q6J("ngIf",t.canModerate&&"SUBMITTED"==s.status)}}const _e=function(n){return{flagged:n}};function me(n,i){if(1&n&&(e.TgZ(0,"nz-page-header",13),e.TgZ(1,"nz-page-header-title",14),e._UZ(2,"i",15),e._uU(3),e.qZA(),e.TgZ(4,"nz-page-header-tags"),e.YNc(5,G,2,1,"nz-tag",16),e.qZA(),e.TgZ(6,"nz-page-header-extra"),e.TgZ(7,"nz-space",17),e.YNc(8,ee,2,1,"span",18),e.YNc(9,te,2,1,"span",18),e.YNc(10,ae,2,1,"span",18),e.YNc(11,se,2,1,"span",18),e.qZA(),e.qZA(),e.TgZ(12,"nz-page-header-content"),e.YNc(13,ce,1,1,"nz-alert",19),e.YNc(14,re,1,1,"nz-alert",20),e.YNc(15,le,1,0,"nz-alert",21),e.TgZ(16,"cvc-tab-navigation",22),e.ALo(17,"ngrxPush"),e.YNc(18,de,2,1,"ng-template",null,23,e.W1O),e.qZA(),e.TgZ(20,"nz-space",24),e.YNc(21,ge,2,1,"span",18),e.qZA(),e.TgZ(22,"div",25),e._UZ(23,"router-outlet"),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw().ngIf,s=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(9,_e,t.flags.totalCount>0)),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.Q6J("ngIf",!1),e.xp6(8),e.Q6J("ngForOf",s.errors),e.xp6(1),e.Q6J("ngIf",s.successMessage),e.xp6(1),e.Q6J("ngIf","SUBMITTED"==t.status),e.xp6(1),e.Q6J("tabs",e.lcZ(17,7,s.tabs$))}}function ve(n,i){if(1&n&&(e.ynx(0),e._UZ(1,"cvc-section-navigation",1),e.YNc(2,X,3,0,"ng-template",null,2,e.W1O),e.TgZ(4,"div",3),e.ALo(5,"ngrxPush"),e.YNc(6,me,24,11,"nz-page-header",4),e.qZA(),e.BQk()),2&n){const t=i.ngIf,s=e.MAs(3),p=e.oxw();e.xp6(1),e.Q6J("displayName",t.name)("relationsTpl",s),e.xp6(3),e.Q6J("flags",e.lcZ(5,4,p.flagsTotal$)),e.xp6(2),e.Q6J("ngrxLet",p.viewer$)}}let ue=(()=>{class n{constructor(t,s,p){this.gql=t,this.viewerService=s,this.route=p,this.errors=[],this.destroy$=new B.xQ,this.defaultTabs=[{routeName:"summary",iconName:"pic-left",tabLabel:"Summary"},{routeName:"comments",iconName:"civic-comment",tabLabel:"Comments"},{routeName:"revisions",iconName:"civic-revision",tabLabel:"Revisions"},{routeName:"flags",iconName:"civic-flag",tabLabel:"Flags"},{routeName:"events",iconName:"civic-event",tabLabel:"Events"}],this.tabs$=new w.X(this.defaultTabs),this.routeSub=this.route.params.subscribe(z=>{this.queryRef=this.gql.watch({evidenceId:+z.evidenceId});let D=this.queryRef.valueChanges;this.loading$=D.pipe((0,u.j)("loading"),(0,C.O)(!0)),this.evidence$=D.pipe((0,u.j)("data","evidenceItem")),this.commentsTotal$=this.evidence$.pipe((0,u.j)("comments","totalCount")),this.flagsTotal$=this.evidence$.pipe((0,u.j)("flags","totalCount")),this.evidence$.pipe((0,u.j)("revisions","totalCount"),(0,N.R)(this.destroy$)).subscribe({next:qn=>{this.tabs$.next(this.defaultTabs.map(L=>"Revisions"===L.tabLabel?Object.assign({badgeCount:qn},L):L))}}),this.subscribable={id:+z.evidenceId,entityType:v.o71.EvidenceItem},this.viewer$=this.viewerService.viewer$})}ngOnDestroy(){this.routeSub.unsubscribe(),this.destroy$.next(),this.destroy$.unsubscribe()}onRevertCompleted(t){var s;!0===t?(this.errors=[],this.successMessage="Evidence Item reverted to submitted status.",null===(s=this.queryRef)||void 0===s||s.refetch()):(this.errors=t,this.successMessage=void 0)}onModerateCompleted(t){var s;Array.isArray(t)?(this.errors=t,this.successMessage=void 0):(this.errors=[],this.successMessage=`Evidence successfully ${t}.`,null===(s=this.queryRef)||void 0===s||s.refetch())}onErrorBannerClose(t){var s;this.errors=null===(s=this.errors)||void 0===s?void 0:s.filter(p=>p!=t)}onSuccessBannerClose(){this.successMessage=void 0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.pHu),e.Y36(U.a),e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["evidence-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName","relationsTpl"],["evidenceRelations",""],["cvcFlaggable","",3,"flags"],["class","site-page-header",4,"ngrxLet"],["nzDirection","horizontal"],["nz-typography","","class","label",4,"nzSpaceItem"],["class","tags",4,"nzSpaceItem"],["nz-typography","",1,"label"],[1,"tags"],[3,"routerLink"],[3,"gene"],[3,"variant"],[1,"site-page-header"],["cvcFlaggableOptions","",3,"ngClass"],["nz-icon","","nzType","civic:evidence"],[3,"nzColor",4,"ngIf"],["nzDirection","horizontal","nzSize","small"],[4,"nzSpaceItem"],["nzBanner","","nzType","error","nzCloseable","",3,"nzMessage","nzOnClose",4,"ngFor","ngForOf"],["nzBanner","","nzType","success","nzCloseable","",3,"nzMessage","nzOnClose",4,"ngIf"],["nzBanner","","nzMessage","This Evidence Item is in a 'submitted' state and has not yet been reviewed by an editor.","nzType","warning",4,"ngIf"],[3,"tabs"],["tabBarExtraContent",""],["nzDirection","vertical"],[1,"content"],[3,"nzColor"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType",4,"ngIf"],["routerLinkActive","","nz-button","","nzSize","small",3,"routerLink","nzType"],["rlaComments","routerLinkActive"],["routerLink","flags","routerLinkActive","","nz-button","","nzSize","small",3,"nzType",4,"ngIf"],["routerLink","flags","routerLinkActive","","nz-button","","nzSize","small",3,"nzType"],["typename","EvidenceItem",3,"viewer","subscribableId",4,"ngIf"],["typename","EvidenceItem",3,"viewer","subscribableId"],["entityType","EvidenceItem",3,"viewer","entityId","onReverted",4,"ngIf"],["entityType","EvidenceItem",3,"viewer","entityId","onReverted"],["nzBanner","","nzType","error","nzCloseable","",3,"nzMessage","nzOnClose"],["nzBanner","","nzType","success","nzCloseable","",3,"nzMessage","nzOnClose"],["nzBanner","","nzMessage","This Evidence Item is in a 'submitted' state and has not yet been reviewed by an editor.","nzType","warning"],["id","contributors-col"],[3,"subscribable"],["entityType","EvidenceItem",3,"entityId","viewer","onModerated",4,"ngIf"],["entityType","EvidenceItem",3,"entityId","viewer","onModerated"]],template:function(t,s){1&t&&(e.YNc(0,ve,7,6,"ng-container",0),e.ALo(1,"ngrxPush")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,s.evidence$))},directives:[o.O5,P.I,m.NU,m.$1,T.ZU,g.yS,M.H,r.I,d.o,f.eJ,h.$O,h.u9,c.Y,o.mk,l.w,y.Ls,h.ZJ,E.j,h.Jp,Z.ix,_.dQ,g.Od,g.rH,R.Q,F.e,h.u5,o.sg,Y.r,j.P,x.t3,$.N,V.m,g.lC],pipes:[f.fM],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),n})();var ze=a(2278);let fe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[o.ez,ze.l]]}),n})();var he=a(3801);let ye=(()=>{class n{constructor(t){this.route=t,this.commentable={id:+this.route.snapshot.params.evidenceId,entityType:v.OfU.EvidenceItem}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cvc-evidence-comments"]],decls:1,vars:1,consts:[[3,"commentable"]],template:function(t,s){1&t&&e._UZ(0,"cvc-comment-list",0),2&t&&e.Q6J("commentable",s.commentable)},directives:[he.D],styles:["[_nghost-%COMP%]{display:block}"]}),n})();var Te=a(7484),xe=a(6559),Ee=a(4271);let Se=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[o.ez,x.Jb,Te.vh,m.zf,xe.H0,Ee.M]]}),n})();var Ze=a(7036);let Ce=(()=>{class n{constructor(t){this.route=t,this.flaggable={entityType:v.sfv.EvidenceItem,id:+this.route.snapshot.params.evidenceId}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cvc-evidence-flags"]],decls:1,vars:1,consts:[[3,"flaggable"]],template:function(t,s){1&t&&e._UZ(0,"cvc-flag-list-and-filter",0),2&t&&e.Q6J("flaggable",s.flaggable)},directives:[Ze.L],styles:["[_nghost-%COMP%]{display:block}"]}),n})();var Ie=a(2914);let Ae=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[o.ez,Ie.A]]}),n})();var be=a(8291);let Ne=(()=>{class n{constructor(t){this.route=t,this.routeSub=this.route.params.subscribe(s=>{this.eid=+s.evidenceId,this.entityType=v.oRL.EvidenceItem})}ngOnDestroy(){this.routeSub.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cvc-evidence-revisions"]],decls:1,vars:2,consts:[[3,"id","entityType"]],template:function(t,s){1&t&&e._UZ(0,"cvc-revisions-list-and-filter",0),2&t&&e.Q6J("id",s.eid)("entityType",s.entityType)},directives:[be.a],styles:[""]}),n})();var J=a(3098),we=a(9444),Pe=a(3384),Me=a(4466),Je=a(7345),Qe=a(5453),De=a(6286),Le=a(8018),Oe=a(9441),Be=a(316),Ue=a(9779),Ye=a(897),ke=a(3580),Q=a(8625),Re=a(7026);let Fe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[o.ez,g.Bz,f.WG,x.Jb,m.zf,T.ZJ,Z.sL,E.X,y.PV,J.q6,we.s,Pe.h,ke.Q,Me.x,Ye.$,Je.W,Qe.N,Ue.s,De.y,Le.e,Oe.s,Be.C,Q.$L.forChild({formatter:{useClass:Re.x,provide:Q.KP}})]]}),n})();function je(n,i){1&n&&e._UZ(0,"i",4)}function $e(n,i){1&n&&e._UZ(0,"i",5)}function Ve(n,i){if(1&n&&(e.ynx(0),e.YNc(1,je,1,0,"i",2),e.YNc(2,$e,1,0,"i",3),e.BQk()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.filledStars),e.xp6(1),e.Q6J("ngForOf",t.emptyStars)}}function We(n,i){1&n&&e._uU(0," --\n")}let qe=(()=>{class n{constructor(){this.filledStars=[],this.emptyStars=[]}ngOnInit(){this.starRating&&(this.filledStars=Array(this.starRating),this.emptyStars=Array(5-this.starRating))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["cvc-evidence-rating"]],inputs:{starRating:"starRating"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noStars",""],["nzType","star","nzTheme","fill","nz-icon","",4,"ngFor","ngForOf"],["nzType","star","nzTheme","outline","nz-icon","",4,"ngFor","ngForOf"],["nzType","star","nzTheme","fill","nz-icon",""],["nzType","star","nzTheme","outline","nz-icon",""]],template:function(t,s){if(1&t&&(e.YNc(0,Ve,3,2,"ng-container",0),e.YNc(1,We,1,0,"ng-template",null,1,e.W1O)),2&t){const p=e.MAs(2);e.Q6J("ngIf",s.starRating)("ngIfElse",p)}},directives:[o.O5,o.sg,y.Ls],styles:[""]}),n})();var Xe=a(4590),Ge=a(125),He=a(6906),Ke=a(4049),en=a(4022),nn=a(6715),tn=a(7956),an=a(7469),on=a(4805),sn=a(3756),cn=a(4110);function rn(n,i){if(1&n&&(e.TgZ(0,"nz-descriptions",12),e.TgZ(1,"nz-descriptions-item",13),e.TgZ(2,"p",14),e._uU(3),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw(2).ngIf;e.xp6(2),e.Q6J("nzEllipsisRows",14),e.xp6(1),e.Oqu(t.description)}}function ln(n,i){if(1&n&&(e.TgZ(0,"nz-descriptions",15),e.TgZ(1,"nz-descriptions-item",16),e._uU(2),e.ALo(3,"evidenceEnumDisplay"),e.qZA(),e.TgZ(4,"nz-descriptions-item",17),e._uU(5),e.ALo(6,"evidenceEnumDisplay"),e.qZA(),e.TgZ(7,"nz-descriptions-item",18),e._uU(8),e.ALo(9,"evidenceEnumDisplay"),e.qZA(),e.TgZ(10,"nz-descriptions-item",19),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",20),e._UZ(13,"cvc-evidence-rating",21),e.qZA(),e.qZA()),2&n){const t=e.oxw(2).ngIf;e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",e.lcZ(3,6,t.evidenceType)," "),e.xp6(3),e.hij(" ",e.lcZ(6,8,t.evidenceDirection)," "),e.xp6(3),e.hij(" ",e.lcZ(9,10,t.clinicalSignificance)," "),e.xp6(3),e.hij(" ",t.evidenceLevel," "),e.xp6(2),e.Q6J("starRating",t.evidenceRating)}}function dn(n,i){if(1&n&&(e.TgZ(0,"nz-descriptions-item",31),e._uU(1),e.ALo(2,"timeago"),e._UZ(3,"cvc-user-tag",26),e.qZA()),2&n){const t=e.oxw(4).ngIf;e.xp6(1),e.hij(" ",e.lcZ(2,2,t.acceptanceEvent.createdAt)," by "),e.xp6(2),e.Q6J("user",t.acceptanceEvent.originatingUser)}}function pn(n,i){if(1&n&&(e.TgZ(0,"nz-descriptions-item",32),e._uU(1),e.ALo(2,"timeago"),e._UZ(3,"cvc-user-tag",26),e.qZA()),2&n){const t=e.oxw(4).ngIf;e.xp6(1),e.hij(" ",e.lcZ(2,2,t.rejectionEvent.createdAt)," by "),e.xp6(2),e.Q6J("user",t.rejectionEvent.originatingUser)}}function gn(n,i){if(1&n&&(e.ynx(0),e.ynx(1,28),e.YNc(2,dn,4,4,"nz-descriptions-item",29),e.YNc(3,pn,4,4,"nz-descriptions-item",30),e.BQk(),e.BQk()),2&n){const t=e.oxw(3).ngIf;e.xp6(1),e.Q6J("ngSwitch",null===t.rejectionEvent),e.xp6(1),e.Q6J("ngSwitchCase",!0),e.xp6(1),e.Q6J("ngSwitchCase",!1)}}function _n(n,i){if(1&n&&(e.TgZ(0,"nz-descriptions",22),e.TgZ(1,"nz-descriptions-item",23),e._UZ(2,"cvc-status-tag",24),e.qZA(),e.TgZ(3,"nz-descriptions-item",25),e._uU(4),e.ALo(5,"timeago"),e._UZ(6,"cvc-user-tag",26),e.qZA(),e.YNc(7,gn,4,3,"ng-container",27),e.qZA()),2&n){const t=e.oxw(2).ngIf;e.xp6(2),e.Q6J("status",t.status),e.xp6(2),e.hij(" ",e.lcZ(5,4,t.submissionEvent.createdAt)," by "),e.xp6(2),e.Q6J("user",t.submissionEvent.originatingUser),e.xp6(1),e.Q6J("ngIf",null!==t.rejectionEvent||null!==t.acceptanceEvent)}}function mn(n,i){if(1&n&&(e.ynx(0),e._UZ(1,"cvc-clinical-trial-tag",37),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("clinicalTrial",t)}}function vn(n,i){if(1&n&&(e.ynx(0),e.YNc(1,mn,2,1,"ng-container",36),e.BQk()),2&n){const t=e.oxw(3).ngIf;e.xp6(1),e.Q6J("ngForOf",t.source.clinicalTrials)}}function un(n,i){1&n&&(e.ynx(0),e.TgZ(1,"span",38),e._uU(2,"None Specified"),e.qZA(),e.BQk())}function zn(n,i){if(1&n&&(e.TgZ(0,"nz-descriptions",15),e.TgZ(1,"nz-descriptions-item",33),e._UZ(2,"cvc-source-tag",34),e.qZA(),e.TgZ(3,"nz-descriptions-item",35),e.YNc(4,vn,2,1,"ng-container",27),e.YNc(5,un,3,0,"ng-container",27),e.qZA(),e.qZA()),2&n){const t=e.oxw(2).ngIf;e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("source",t.source),e.xp6(1),e.Q6J("nzTitle",t.source.clinicalTrials.length>1?"Clinical Trials":"Clinical Trial"),e.xp6(1),e.Q6J("ngIf",t.source.clinicalTrials.length>0),e.xp6(1),e.Q6J("ngIf",0===t.source.clinicalTrials.length)}}function fn(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"a",44),e._UZ(2,"cvc-disease-tag",45),e.qZA(),e.BQk()),2&n){const t=e.oxw(3).ngIf;e.xp6(1),e.MGl("routerLink","/diseases/",t.disease.id,""),e.xp6(1),e.Q6J("disease",t.disease)}}function hn(n,i){1&n&&(e.TgZ(0,"span",38),e._uU(1,"N/A"),e.qZA())}function yn(n,i){if(1&n&&(e.ynx(0),e._UZ(1,"cvc-phenotype-tag",46),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("phenotype",t)}}function Tn(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"cvc-tag-list"),e.YNc(2,yn,2,1,"ng-container",36),e.qZA(),e.BQk()),2&n){const t=e.oxw(3).ngIf;e.xp6(2),e.Q6J("ngForOf",t.phenotypes)}}function xn(n,i){1&n&&(e.TgZ(0,"span",38),e._uU(1,"None Specified"),e.qZA())}function En(n,i){if(1&n&&(e.TgZ(0,"nz-descriptions",39),e.TgZ(1,"nz-descriptions-item",40),e.YNc(2,fn,3,2,"ng-container",27),e.YNc(3,hn,2,0,"span",41),e.qZA(),e.TgZ(4,"nz-descriptions-item",35),e.YNc(5,Tn,3,1,"ng-container",42),e.YNc(6,xn,2,0,"ng-template",null,43,e.W1O),e.qZA(),e.qZA()),2&n){const t=e.MAs(7),s=e.oxw(2).ngIf;e.Q6J("nzColumn",void 0!==(null==s.disease?null:s.disease.name)&&s.phenotypes.length>0?1:2),e.xp6(2),e.Q6J("ngIf",s.disease),e.xp6(1),e.Q6J("ngIf",!s.disease),e.xp6(1),e.Q6J("nzTitle",s.phenotypes.length>1?"Phenotypes":"Phenotype"),e.xp6(1),e.Q6J("ngIf",s.phenotypes.length>0)("ngIfElse",t)}}function Sn(n,i){1&n&&(e.TgZ(0,"span",38),e._uU(1,"N/A"),e.qZA())}function Zn(n,i){if(1&n&&(e.ynx(0),e._UZ(1,"cvc-drug-tag",51),e.BQk()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("drug",t)}}function Cn(n,i){if(1&n&&(e.TgZ(0,"cvc-tag-list"),e.YNc(1,Zn,2,1,"ng-container",36),e.qZA()),2&n){const t=e.oxw(3).ngIf;e.xp6(1),e.Q6J("ngForOf",t.drugs)}}function In(n,i){1&n&&e._uU(0," Drug ")}function An(n,i){1&n&&e._uU(0," Drug ")}function bn(n,i){if(1&n&&(e._uU(0),e.ALo(1,"titlecase")),2&n){const t=e.oxw(4).ngIf;e.hij(" Drugs (",e.lcZ(1,1,t.drugInteractionType),") ")}}function Nn(n,i){if(1&n&&(e.ynx(0,47),e.YNc(1,In,1,0,"ng-template",48),e.YNc(2,An,1,0,"ng-template",52),e.YNc(3,bn,2,3,"ng-template",49),e.BQk()),2&n){const t=e.oxw(3).ngIf;e.Q6J("ngPlural",t.drugs.length)}}function wn(n,i){if(1&n&&(e.TgZ(0,"nz-descriptions",12),e.TgZ(1,"nz-descriptions-item",35),e.ynx(2,47),e.YNc(3,Sn,2,0,"ng-template",48),e.YNc(4,Cn,2,1,"ng-template",49),e.BQk(),e.YNc(5,Nn,4,1,"ng-template",null,50,e.W1O),e.qZA(),e.qZA()),2&n){const t=e.MAs(6),s=e.oxw(2).ngIf;e.xp6(1),e.Q6J("nzTitle",t),e.xp6(1),e.Q6J("ngPlural",s.drugs.length)}}function Pn(n,i){1&n&&(e.TgZ(0,"nz-row",5),e.TgZ(1,"nz-col",6),e.TgZ(2,"nz-space",7),e.YNc(3,rn,4,2,"nz-descriptions",8),e.YNc(4,ln,14,12,"nz-descriptions",9),e.qZA(),e.qZA(),e.TgZ(5,"nz-col",6),e.TgZ(6,"nz-space",7),e.YNc(7,_n,8,6,"nz-descriptions",10),e.YNc(8,zn,6,5,"nz-descriptions",9),e.YNc(9,En,8,6,"nz-descriptions",11),e.YNc(10,wn,7,2,"nz-descriptions",8),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.Q6J("nzGutter",16),e.xp6(1),e.Q6J("nzSpan",12),e.xp6(4),e.Q6J("nzSpan",12))}function Mn(n,i){if(1&n&&(e.TgZ(0,"cvc-entity-table-card",53),e._UZ(1,"cvc-assertions-table",54),e.qZA()),2&n){const t=e.oxw().ngIf,s=e.MAs(4);e.Q6J("cvcTitle",s),e.xp6(1),e.Q6J("evidenceId",t.id)}}function Jn(n,i){if(1&n&&(e._UZ(0,"i",55),e._uU(1)),2&n){const t=e.oxw().ngIf;e.xp6(1),e.hij(" ",t.name," Assertions ")}}function Qn(n,i){1&n&&(e.TgZ(0,"nz-space",1),e.YNc(1,Pn,11,3,"nz-row",2),e.YNc(2,Mn,2,2,"cvc-entity-table-card",3),e.YNc(3,Jn,2,1,"ng-template",null,4,e.W1O),e.qZA())}let Dn=(()=>{class n{constructor(t,s){var p;if(this.gql=t,this.route=s,null==(p=this.evidenceId?this.evidenceId:+this.route.snapshot.params.evidenceId))throw new Error("Must pass in an evidence ID as an input or via the route.");this.queryRef=this.gql.watch({evidenceId:p});let z=this.queryRef.valueChanges;this.loading$=z.pipe((0,u.j)("loading"),(0,C.O)(!0)),this.evidence$=z.pipe((0,u.j)("data","evidenceItem")),this.subscribable={entityType:v.o71.EvidenceItem,id:p}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v.sBY),e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cvc-evidence-summary"]],inputs:{evidenceId:"evidenceId"},decls:2,vars:3,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],[3,"nzGutter",4,"nzSpaceItem"],[3,"cvcTitle",4,"nzSpaceItem"],["assertionsCardTitle",""],[3,"nzGutter"],[3,"nzSpan"],["nzDirection","vertical"],["nzLayout","vertical","nzSize","small","nzBordered","true",4,"nzSpaceItem"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["nzLayout","horizontal","nzSize","small","nzBordered","true","class","status-tags",4,"nzSpaceItem"],["nzLayout","vertical","nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["nzLayout","vertical","nzSize","small","nzBordered","true"],["nzTitle","Description"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Level"],["nzTitle","Rating"],[3,"starRating"],["nzLayout","horizontal","nzSize","small","nzBordered","true",1,"status-tags"],["nzTitle","Status"],[3,"status"],["nzTitle","Submitted"],[3,"user"],[4,"ngIf"],[3,"ngSwitch"],["nzTitle","Accepted",4,"ngSwitchCase"],["nzTitle","Rejected",4,"ngSwitchCase"],["nzTitle","Accepted"],["nzTitle","Rejected"],["nzTitle","Source","nzSpan","2"],[3,"source"],[3,"nzTitle"],[4,"ngFor","ngForOf"],[3,"clinicalTrial"],["nz-typography","","nzType","secondary"],["nzLayout","vertical","nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Disease"],["nz-typography","","nzType","secondary",4,"ngIf"],[4,"ngIf","ngIfElse"],["noPhenotypes",""],[3,"routerLink"],[3,"disease"],[3,"phenotype"],[3,"ngPlural"],["ngPluralCase","=0"],["ngPluralCase","other"],["drugsTitle",""],[3,"drug"],["ngPluralCase","=1"],[3,"cvcTitle"],[3,"evidenceId"],["nz-icon","","nzType","civic:assertion"]],template:function(t,s){1&t&&(e.YNc(0,Qn,5,0,"nz-space",0),e.ALo(1,"ngrxPush")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,s.evidence$))},directives:[o.O5,m.NU,m.$1,x.SK,x.t3,J.R7,J.uj,T.ZU,qe,Xe.h,Ge.I,o.RF,o.n9,He.T,o.sg,Ke.G,g.yS,en.n,nn.$,tn.i,o.iq,o.zE,an.u,on._,sn.x,l.w,y.Ls],pipes:[f.fM,cn.D,Q.wr,o.rS],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%], nz-space-item[_ngcontent-%COMP%]{width:100%}.status-tags[_ngcontent-%COMP%]     nz-tag{margin-right:0}.status-tags[_ngcontent-%COMP%]     .ant-descriptions-item-label{white-space:nowrap}"]}),n})();var Ln=a(2011);let On=(()=>{class n{constructor(t){this.route=t,this.subscribable={id:+this.route.snapshot.params.evidenceId,entityType:v.o71.EvidenceItem}}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cvc-evidence-events"]],decls:1,vars:1,consts:[["tagDisplay","hideSubject",3,"subscribable"]],template:function(t,s){1&t&&e._UZ(0,"cvc-event-feed",0),2&t&&e.Q6J("subscribable",s.subscribable)},directives:[Ln.o],styles:["[_nghost-%COMP%]{display:block}"]}),n})();var Bn=a(4292);let Un=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[o.ez,Bn.t]]}),n})();const Yn=[{path:"",component:ue,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"summary",pathMatch:"full"},{path:"summary",component:Dn,data:{breadcrumb:"Summary"}},{path:"comments",component:ye,data:{breadcrumb:"Comments"}},{path:"revisions",component:Ne,data:{breadcrumb:"Revisions"}},{path:"flags",component:Ce,data:{breadcrumb:"Flags"}},{path:"events",component:On,data:{breadcrumb:"Events"}}]}];let kn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(Yn),Fe,fe,Ae,Se,Un],g.Bz]}),n})();var Rn=a(4609),Fn=a(694),jn=a(8766),$n=a(8762),Vn=a(5750);let Wn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[o.ez,kn,g.Bz,f.WG,m.zf,T.ZJ,h.KJ,Z.sL,E.X,y.PV,Y.L,x.Jb,I.D,O.U,A.m,b.Q,Rn.g,Fn.G,jn.P,$n.c,Vn.Z]]}),n})()},6559:(k,S,a)=>{a.d(S,{ng:()=>P,H0:()=>M});var o=a(5e3),f=a(1721),I=a(655),m=a(9808),T=a(226);const A=["nzType","avatar"];function E(r,d){if(1&r&&(o.TgZ(0,"div",5),o._UZ(1,"nz-skeleton-element",6),o.qZA()),2&r){const c=o.oxw(2);o.xp6(1),o.Q6J("nzSize",c.avatar.size||"default")("nzShape",c.avatar.shape||"circle")}}function g(r,d){if(1&r&&o._UZ(0,"h3",7),2&r){const c=o.oxw(2);o.Udp("width",c.toCSSUnit(c.title.width))}}function b(r,d){if(1&r&&o._UZ(0,"li"),2&r){const c=d.index,l=o.oxw(3);o.Udp("width",l.toCSSUnit(l.widthList[c]))}}function y(r,d){if(1&r&&(o.TgZ(0,"ul",8),o.YNc(1,b,1,2,"li",9),o.qZA()),2&r){const c=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",c.rowsList)}}function v(r,d){if(1&r&&(o.ynx(0),o.YNc(1,E,2,2,"div",1),o.TgZ(2,"div",2),o.YNc(3,g,1,2,"h3",3),o.YNc(4,y,2,1,"ul",4),o.qZA(),o.BQk()),2&r){const c=o.oxw();o.xp6(1),o.Q6J("ngIf",!!c.nzAvatar),o.xp6(2),o.Q6J("ngIf",!!c.nzTitle),o.xp6(1),o.Q6J("ngIf",!!c.nzParagraph)}}function u(r,d){1&r&&(o.ynx(0),o.Hsn(1),o.BQk())}const C=["*"];let N=(()=>{class r{constructor(){this.nzActive=!1,this.nzBlock=!1}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275dir=o.lG2({type:r,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(c,l){2&c&&o.ekj("ant-skeleton-active",l.nzActive)("ant-skeleton-block",l.nzBlock)},inputs:{nzActive:"nzActive",nzType:"nzType",nzBlock:"nzBlock"}}),(0,I.gn)([(0,f.yF)()],r.prototype,"nzBlock",void 0),r})(),w=(()=>{class r{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(c){if(c.nzSize&&"number"==typeof this.nzSize){const l=`${this.nzSize}px`;this.styleMap={width:l,height:l,"line-height":l}}else this.styleMap={}}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},features:[o.TTD],attrs:A,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(c,l){1&c&&o._UZ(0,"span",0),2&c&&(o.ekj("ant-skeleton-avatar-square","square"===l.nzShape)("ant-skeleton-avatar-circle","circle"===l.nzShape)("ant-skeleton-avatar-lg","large"===l.nzSize)("ant-skeleton-avatar-sm","small"===l.nzSize),o.Q6J("ngStyle",l.styleMap))},directives:[m.PC],encapsulation:2,changeDetection:0}),r})(),P=(()=>{class r{constructor(c,l,_){this.cdr=c,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[],l.addClass(_.nativeElement,"ant-skeleton")}toCSSUnit(c=""){return(0,f.WX)(c)}getTitleProps(){const c=!!this.nzAvatar,l=!!this.nzParagraph;let _="";return!c&&l?_="38%":c&&l&&(_="50%"),Object.assign({width:_},this.getProps(this.nzTitle))}getAvatarProps(){return Object.assign({shape:this.nzTitle&&!this.nzParagraph?"square":"circle",size:"large"},this.getProps(this.nzAvatar))}getParagraphProps(){const c=!!this.nzAvatar,l=!!this.nzTitle,_={};return(!c||!l)&&(_.width="61%"),_.rows=!c&&l?3:2,Object.assign(Object.assign({},_),this.getProps(this.nzParagraph))}getProps(c){return c&&"object"==typeof c?c:{}}getWidthList(){const{width:c,rows:l}=this.paragraph;let _=[];return c&&Array.isArray(c)?_=c:c&&!Array.isArray(c)&&(_=[],_[l-1]=c),_}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(c){(c.nzTitle||c.nzAvatar||c.nzParagraph)&&this.updateProps()}}return r.\u0275fac=function(c){return new(c||r)(o.Y36(o.sBO),o.Y36(o.Qsj),o.Y36(o.SBq))},r.\u0275cmp=o.Xpm({type:r,selectors:[["nz-skeleton"]],hostVars:6,hostBindings:function(c,l){2&c&&o.ekj("ant-skeleton-with-avatar",!!l.nzAvatar)("ant-skeleton-active",l.nzActive)("ant-skeleton-round",!!l.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],features:[o.TTD],ngContentSelectors:C,decls:2,vars:2,consts:[[4,"ngIf"],["class","ant-skeleton-header",4,"ngIf"],[1,"ant-skeleton-content"],["class","ant-skeleton-title",3,"width",4,"ngIf"],["class","ant-skeleton-paragraph",4,"ngIf"],[1,"ant-skeleton-header"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[1,"ant-skeleton-paragraph"],[3,"width",4,"ngFor","ngForOf"]],template:function(c,l){1&c&&(o.F$t(),o.YNc(0,v,5,3,"ng-container",0),o.YNc(1,u,2,0,"ng-container",0)),2&c&&(o.Q6J("ngIf",l.nzLoading),o.xp6(1),o.Q6J("ngIf",!l.nzLoading))},directives:[w,m.O5,N,m.sg],encapsulation:2,changeDetection:0}),r})(),M=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[T.vT,m.ez]]}),r})()}}]);