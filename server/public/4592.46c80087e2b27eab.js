"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[4592],{392:(F,b,i)=>{i.d(b,{T:()=>x});var e=i(5e3),z=i(6715),n=i(9808),S=i(7469),J=i(4022),h=i(5749),O=i(8481),Q=i(3610);function U(r,p){if(1&r&&(e.ynx(0),e._UZ(1,"cvc-drug-tag",7),e.BQk()),2&r){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("drug",c)}}function m(r,p){if(1&r&&(e.ynx(0),e._UZ(1,"cvc-disease-tag",8),e.BQk()),2&r){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("disease",c)}}function A(r,p){if(1&r&&(e.ynx(0),e._UZ(1,"cvc-organization-tag",9),e.BQk()),2&r){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("org",c)}}const v=function(r){return{"matched-tag":r}};function M(r,p){if(1&r&&(e.TgZ(0,"div",2),e.ynx(1,5),e.YNc(2,U,2,1,"ng-container",6),e.YNc(3,m,2,1,"ng-container",6),e.YNc(4,A,2,1,"ng-container",6),e.BQk(),e.qZA()),2&r){const c=p.$implicit,l=e.oxw();e.Q6J("ngClass",e.VKq(5,v,l.matchingText&&c.name.toLowerCase().includes(l.matchingText))),e.xp6(1),e.Q6J("ngSwitch",l.tagType),e.xp6(1),e.Q6J("ngSwitchCase","drug"),e.xp6(1),e.Q6J("ngSwitchCase","disease"),e.xp6(1),e.Q6J("ngSwitchCase","organization")}}function I(r,p){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const c=e.oxw(2);e.xp6(1),e.hij("",c.matchedHiddenCount," of ")}}function f(r,p){if(1&r){const c=e.EpF();e.TgZ(0,"nz-tag",10),e.NdJ("click",function(){return e.CHM(c),e.oxw().onOverflowClicked()}),e._uU(1," +"),e.YNc(2,I,2,1,"span",11),e._uU(3),e.qZA()}if(2&r){const c=e.oxw(),l=e.MAs(5);e.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",l),e.xp6(2),e.Q6J("ngIf",c.matchedHiddenCount>0),e.xp6(1),e.hij("",c.hiddenCount," more ")}}function Z(r,p){if(1&r&&(e.ynx(0),e._UZ(1,"cvc-drug-tag",7),e.BQk()),2&r){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("drug",c)}}function w(r,p){if(1&r&&(e.ynx(0),e._UZ(1,"cvc-disease-tag",8),e.BQk()),2&r){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("disease",c)}}function q(r,p){if(1&r&&(e.ynx(0),e._UZ(1,"cvc-organization-tag",9),e.BQk()),2&r){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("org",c)}}function d(r,p){if(1&r&&(e.TgZ(0,"div",2),e.ynx(1,5),e.YNc(2,Z,2,1,"ng-container",6),e.YNc(3,w,2,1,"ng-container",6),e.YNc(4,q,2,1,"ng-container",6),e.BQk(),e.qZA()),2&r){const c=p.$implicit,l=e.oxw(2);e.Q6J("ngClass",e.VKq(5,v,l.matchingText&&c.name.toLowerCase().includes(l.matchingText))),e.xp6(1),e.Q6J("ngSwitch",l.tagType),e.xp6(1),e.Q6J("ngSwitchCase","drug"),e.xp6(1),e.Q6J("ngSwitchCase","disease"),e.xp6(1),e.Q6J("ngSwitchCase","organization")}}function P(r,p){if(1&r&&(e.TgZ(0,"cvc-tag-list",0),e.YNc(1,d,5,7,"div",1),e.qZA()),2&r){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",c.hiddenTags)}}let x=(()=>{class r{constructor(){this.maxDisplayCount=2,this.matchedHiddenCount=0}ngOnInit(){this.calculateDisplayedTags()}calculateDisplayedTags(){var c,l,u,y;if(this.displayedTags=null===(c=this.tags)||void 0===c?void 0:c.slice(0,this.maxDisplayCount),this.hiddenTags=null===(l=this.tags)||void 0===l?void 0:l.slice(this.maxDisplayCount),this.hiddenCount=null===(u=this.hiddenTags)||void 0===u?void 0:u.length,this.matchingText=null===(y=this.matchingText)||void 0===y?void 0:y.toLowerCase(),this.matchingText&&this.hiddenTags){let L=this.matchingText;this.hiddenTags.forEach(E=>{E.name.toLowerCase().includes(L)&&(this.matchedHiddenCount+=1)})}}onOverflowClicked(){var c;this.maxDisplayCount=(null===(c=this.tags)||void 0===c?void 0:c.length)||0,this.calculateDisplayedTags()}}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["cvc-tag-overflow"]],inputs:{matchingText:"matchingText",tags:"tags",tagType:"tagType",maxDisplayCount:"maxDisplayCount"},decls:6,vars:5,consts:[["size","xs"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["class","overflow-tag","nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverMouseEnterDelay","nzPopoverContent","click",4,"ngIf"],["additionalTagPopover",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"drug"],[3,"disease"],[3,"org"],["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",1,"overflow-tag",3,"nzPopoverMouseEnterDelay","nzPopoverContent","click"],[4,"ngIf"]],template:function(c,l){1&c&&(e.TgZ(0,"cvc-tag-list",0),e.YNc(1,M,5,7,"div",1),e.TgZ(2,"div",2),e.YNc(3,f,4,4,"nz-tag",3),e.qZA(),e.YNc(4,P,2,1,"ng-template",null,4,e.W1O),e.qZA()),2&c&&(e.xp6(1),e.Q6J("ngForOf",l.displayedTags),e.xp6(1),e.Q6J("ngClass",e.VKq(3,v,l.matchedHiddenCount>0)),e.xp6(1),e.Q6J("ngIf",l.hiddenCount&&l.hiddenCount>0))},directives:[z.$,n.sg,n.mk,n.RF,n.n9,S.u,J.n,h.m,n.O5,O.j,Q.lU],styles:[".overflow-tag[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),r})()},4592:(F,b,i)=>{i.r(b),i.d(b,{OrganizationsModule:()=>ft});var e=i(9808),z=i(325),n=i(5e3),S=i(4805),J=i(3756),h=i(647),O=i(2683);function Q(t,a){1&t&&(n._UZ(0,"i",3),n._uU(1," Organization Assertions\n"))}let U=(()=>{class t{constructor(o){this.route=o,this.organizationId=+this.route.snapshot.params.organizationId}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(z.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-organizations-assertions"]],decls:4,vars:2,consts:[[3,"cvcTitle"],[3,"organizationId"],["assertionsCardTitle",""],["nz-icon","","nzType","civic:assertion"]],template:function(o,s){if(1&o&&(n.TgZ(0,"cvc-entity-table-card",0),n._UZ(1,"cvc-assertions-table",1),n.qZA(),n.YNc(2,Q,2,0,"ng-template",null,2,n.W1O)),2&o){const g=n.MAs(3);n.Q6J("cvcTitle",g),n.xp6(1),n.Q6J("organizationId",s.organizationId)}},directives:[S._,J.x,h.Ls,O.w],styles:["[_nghost-%COMP%]{display:block}"]}),t})();var m=i(373),A=i(1059),v=i(712),M=i(9350),I=i(8992),f=i(1945),Z=i(8144),w=i(6550),q=i(2233),d=i(1894),P=i(7374),x=i(3618),r=i(7484),p=i(5249),c=i(3762),l=i(5749),u=i(6949);function y(t,a){1&t&&n._UZ(0,"i",10)}function L(t,a){if(1&t&&(n.TgZ(0,"span",11),n._uU(1),n.qZA()),2&t){const o=n.oxw().ngIf;n.MGl("routerLink","/organizatons/",o.id,""),n.xp6(1),n.hij(" ",o.name," ")}}function E(t,a){if(1&t&&(n.TgZ(0,"cvc-link-tag",12),n._uU(1," Organization Website "),n.qZA()),2&t){const o=n.oxw().ngIf;n.Q6J("href",o.url)}}function $(t,a){1&t&&(n.TgZ(0,"span"),n._uU(1,"(Excl. Child Organizations)"),n.qZA())}function H(t,a){1&t&&(n.TgZ(0,"p",16),n.TgZ(1,"b"),n._uU(2,"Organization Statistics (Incl. Child Organizations)"),n.qZA(),n.qZA())}function V(t,a){if(1&t&&(n.TgZ(0,"nz-row",13),n.TgZ(1,"nz-col",14),n.TgZ(2,"nz-card"),n._UZ(3,"nz-statistic",17),n.ALo(4,"number"),n.qZA(),n.qZA(),n.TgZ(5,"nz-col",14),n.TgZ(6,"nz-card"),n._UZ(7,"nz-statistic",17),n.ALo(8,"number"),n.qZA(),n.qZA(),n.TgZ(9,"nz-col",14),n.TgZ(10,"nz-card"),n._UZ(11,"nz-statistic",17),n.ALo(12,"number"),n.qZA(),n.qZA(),n.TgZ(13,"nz-col",14),n.TgZ(14,"nz-card"),n._UZ(15,"nz-statistic",17),n.ALo(16,"number"),n.qZA(),n.qZA(),n.TgZ(17,"nz-col",14),n.TgZ(18,"nz-card"),n._UZ(19,"nz-statistic",17),n.ALo(20,"number"),n.qZA(),n.qZA(),n.TgZ(21,"nz-col",14),n.TgZ(22,"nz-card"),n._UZ(23,"nz-statistic",17),n.ALo(24,"number"),n.qZA(),n.qZA(),n.TgZ(25,"nz-col",14),n.TgZ(26,"nz-card"),n._UZ(27,"nz-statistic",17),n.ALo(28,"number"),n.qZA(),n.qZA(),n.TgZ(29,"nz-col",14),n.TgZ(30,"nz-card"),n._UZ(31,"nz-statistic",17),n.ALo(32,"number"),n.qZA(),n.qZA(),n.qZA()),2&t){const o=n.oxw(2).ngIf;n.Q6J("nzGutter",16),n.xp6(1),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("nzValue",n.lcZ(4,25,o.orgAndSuborgsStatsHash.comments))("nzTitle","Comments"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(8,27,o.orgAndSuborgsStatsHash.revisions))("nzTitle","Suggested Revisions"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(12,29,o.orgAndSuborgsStatsHash.appliedRevisions))("nzTitle","Applied Revisions"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(16,31,o.orgAndSuborgsStatsHash.suggestedSources))("nzTitle","Suggested Sources"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(20,33,o.orgAndSuborgsStatsHash.submittedEvidenceItems))("nzTitle","Submitted Evidence"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(24,35,o.orgAndSuborgsStatsHash.acceptedEvidenceItems))("nzTitle","Accepted Evidence"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(28,37,o.orgAndSuborgsStatsHash.submittedAssertions))("nzTitle","Submitted Assertions"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(32,39,o.orgAndSuborgsStatsHash.acceptedAssertions))("nzTitle","Accepted Assertions")}}function R(t,a){if(1&t&&(n.TgZ(0,"nz-list-item"),n._UZ(1,"cvc-organization-tag",23),n.qZA()),2&t){const o=a.$implicit;n.xp6(1),n.Q6J("org",o)}}function G(t,a){if(1&t&&(n.TgZ(0,"nz-list",21),n.TgZ(1,"nz-list-header"),n._uU(2,"Child Organizations: "),n.qZA(),n.YNc(3,R,2,1,"nz-list-item",22),n.qZA()),2&t){const o=n.oxw(2).ngIf;n.xp6(3),n.Q6J("ngForOf",o.subGroups)}}function B(t,a){if(1&t&&(n.TgZ(0,"nz-row",13),n.TgZ(1,"nz-row"),n.TgZ(2,"nz-col",14),n._UZ(3,"img",15),n.qZA(),n.TgZ(4,"nz-col",14),n.TgZ(5,"nz-row"),n.TgZ(6,"p",16),n.TgZ(7,"b"),n._uU(8,"Description: "),n.qZA(),n._uU(9),n.qZA(),n.qZA(),n.TgZ(10,"nz-row"),n.TgZ(11,"p",16),n.TgZ(12,"b"),n._uU(13,"Organization Statistics "),n.YNc(14,$,2,0,"span",0),n.qZA(),n.qZA(),n.qZA(),n.TgZ(15,"nz-row",13),n.TgZ(16,"nz-col",14),n.TgZ(17,"nz-card"),n._UZ(18,"nz-statistic",17),n.ALo(19,"number"),n.qZA(),n.qZA(),n.TgZ(20,"nz-col",14),n.TgZ(21,"nz-card"),n._UZ(22,"nz-statistic",17),n.ALo(23,"number"),n.qZA(),n.qZA(),n.TgZ(24,"nz-col",14),n.TgZ(25,"nz-card"),n._UZ(26,"nz-statistic",17),n.ALo(27,"number"),n.qZA(),n.qZA(),n.TgZ(28,"nz-col",14),n.TgZ(29,"nz-card"),n._UZ(30,"nz-statistic",17),n.ALo(31,"number"),n.qZA(),n.qZA(),n.TgZ(32,"nz-col",14),n.TgZ(33,"nz-card"),n._UZ(34,"nz-statistic",17),n.ALo(35,"number"),n.qZA(),n.qZA(),n.TgZ(36,"nz-col",14),n.TgZ(37,"nz-card"),n._UZ(38,"nz-statistic",17),n.ALo(39,"number"),n.qZA(),n.qZA(),n.TgZ(40,"nz-col",14),n.TgZ(41,"nz-card"),n._UZ(42,"nz-statistic",17),n.ALo(43,"number"),n.qZA(),n.qZA(),n.TgZ(44,"nz-col",14),n.TgZ(45,"nz-card"),n._UZ(46,"nz-statistic",17),n.ALo(47,"number"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(48,"nz-row"),n.YNc(49,H,3,0,"p",18),n.qZA(),n.YNc(50,V,33,41,"nz-row",19),n.qZA(),n.TgZ(51,"nz-col",14),n.YNc(52,G,4,1,"nz-list",20),n.qZA(),n.qZA(),n.qZA()),2&t){const o=n.oxw().ngIf;n.Q6J("nzGutter",16),n.xp6(2),n.Q6J("nzSpan",2),n.xp6(1),n.s9C("nzSrc",o.profileImagePath),n.xp6(1),n.Q6J("nzSpan",18),n.xp6(5),n.Oqu(o.description),n.xp6(5),n.Q6J("ngIf",o.subGroups.length>0),n.xp6(1),n.Q6J("nzGutter",16),n.xp6(1),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("nzValue",n.lcZ(19,35,o.orgStatsHash.comments))("nzTitle","Comments"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(23,37,o.orgStatsHash.revisions))("nzTitle","Suggested Revisions"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(27,39,o.orgStatsHash.appliedRevisions))("nzTitle","Applied Revisions"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(31,41,o.orgStatsHash.suggestedSources))("nzTitle","Suggested Sources"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(35,43,o.orgStatsHash.submittedEvidenceItems))("nzTitle","Submitted Evidence"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(39,45,o.orgStatsHash.acceptedEvidenceItems))("nzTitle","Accepted Evidence"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(43,47,o.orgStatsHash.submittedAssertions))("nzTitle","Submitted Assertions"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(47,49,o.orgStatsHash.acceptedAssertions))("nzTitle","Accepted Assertions"),n.xp6(3),n.Q6J("ngIf",o.subGroups.length>0),n.xp6(1),n.Q6J("ngIf",o.subGroups.length>0),n.xp6(1),n.Q6J("nzSpan",4),n.xp6(1),n.Q6J("ngIf",o.subGroups.length>0)}}function j(t,a){if(1&t&&(n.ynx(0),n._UZ(1,"cvc-section-navigation",1),n.TgZ(2,"nz-page-header",2),n.TgZ(3,"nz-page-header-title"),n.TgZ(4,"nz-space",3),n.YNc(5,y,1,0,"i",4),n.YNc(6,L,2,2,"span",5),n.YNc(7,E,2,1,"cvc-link-tag",6),n.qZA(),n.qZA(),n.TgZ(8,"nz-page-header-content"),n._UZ(9,"cvc-tab-navigation",7),n.TgZ(10,"div",8),n.TgZ(11,"nz-space"),n.YNc(12,B,53,51,"nz-row",9),n.qZA(),n._UZ(13,"router-outlet"),n.qZA(),n.qZA(),n.qZA(),n.BQk()),2&t){const o=a.ngIf,s=n.oxw();n.xp6(1),n.Q6J("displayName",o.name),n.xp6(8),n.Q6J("tabs",s.tabs)}}let W=(()=>{class t{constructor(o,s,g){this.gql=o,this.viewerService=s,this.route=g,this.queryRef=this.gql.watch({organizationId:+this.route.snapshot.params.organizationId});let T=this.queryRef.valueChanges;this.loading$=T.pipe((0,m.j)("loading"),(0,A.O)(!0)),this.organization$=T.pipe((0,m.j)("data","organization")),this.viewer$=this.viewerService.viewer$,this.tabs=[{routeName:"members",tabLabel:"Members",iconName:"pic-right"},{routeName:"groups",tabLabel:"Child Organizations",iconName:"civic:organization"},{routeName:"activity",tabLabel:"Activity",iconName:"civic:event"},{routeName:"evidence",tabLabel:"Evidence Items",iconName:"civic:evidence"},{routeName:"assertions",tabLabel:"Assertions",iconName:"civic:assertion"}]}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(v.WOS),n.Y36(M.a),n.Y36(z.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["organizations-detail"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"displayName"],[1,"site-page-header"],["nzDirection","horizontal","nzSize","small"],["nz-icon","","nzType","civic:organization",4,"nzSpaceItem"],[3,"routerLink",4,"nzSpaceItem"],[3,"href",4,"nzSpaceItem"],[3,"tabs"],[1,"content"],[3,"nzGutter",4,"nzSpaceItem"],["nz-icon","","nzType","civic:organization"],[3,"routerLink"],[3,"href"],[3,"nzGutter"],[3,"nzSpan"],["nz-image","","width","121px","height","121px","alt","",3,"nzSrc"],["nz-typography",""],[3,"nzValue","nzTitle"],["nz-typography","",4,"ngIf"],[3,"nzGutter",4,"ngIf"],["nzBordered","","nzSize","small",4,"ngIf"],["nzBordered","","nzSize","small"],[4,"ngFor","ngForOf"],[3,"org"]],template:function(o,s){1&o&&(n.YNc(0,j,14,2,"ng-container",0),n.ALo(1,"ngrxPush")),2&o&&n.Q6J("ngIf",n.lcZ(1,1,s.organization$))},directives:[e.O5,I.I,f.$O,f.u9,Z.NU,Z.$1,h.Ls,O.w,z.rH,w.l,f.u5,q.P,d.SK,d.t3,P.Ie,x.ZU,r.bd,p.my,c.n_,c.t4,e.sg,c.AA,l.m,z.lC],pipes:[u.fM,e.JJ],styles:["[_nghost-%COMP%]{display:block}nz-page-header[_ngcontent-%COMP%]{background-color:#fff}.card-list[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%]{width:100%}.card-list[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%]   .card-grid-cell[_ngcontent-%COMP%]{width:50%}nz-page-header-title.flagged[_ngcontent-%COMP%]{padding-left:.75em}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]{border:1px solid red;overflow:auto}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#fff;overflow:auto;font-size:13px;list-style:none;margin:0;padding:0;display:table;width:100%}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   del[_ngcontent-%COMP%], .revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   ins[_ngcontent-%COMP%]{display:block;text-decoration:none}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0;display:table-row;margin:0;height:1em}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li.ins[_ngcontent-%COMP%]{background:#ddf;color:#008}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li.del[_ngcontent-%COMP%]{background:#fee;color:#b00}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#ffc}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   del[_ngcontent-%COMP%], .revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   ins[_ngcontent-%COMP%], .revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:pre-wrap;font-family:courier}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   del[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:400;background:#fcc}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   ins[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:400;background:#99f}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li.diff-comment[_ngcontent-%COMP%]{display:none}.revision-list[_ngcontent-%COMP%]   .revision-description-diff[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%]   li.diff-block-info[_ngcontent-%COMP%]{background:none repeat scroll 0 0 gray}"]}),t})();var K=i(2011);let X=(()=>{class t{constructor(o){this.route=o,this.mode=v.wJ2.Organization,this.organizationId=+this.route.snapshot.params.organizationId}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(z.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-organizations-events"]],decls:1,vars:2,consts:[["tagDisplay","hideOrg",3,"organizationId","mode"]],template:function(o,s){1&o&&n._UZ(0,"cvc-event-feed",0),2&o&&n.Q6J("organizationId",s.organizationId)("mode",s.mode)},directives:[K.o],styles:["[_nghost-%COMP%]{display:block}"]}),t})();var k=i(8965);function nn(t,a){1&t&&(n._UZ(0,"i",3),n._uU(1," Organization Evidence\n"))}let tn=(()=>{class t{constructor(o){this.route=o,this.organizationId=+this.route.snapshot.params.organizationId}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(z.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-organizations-evidence"]],decls:4,vars:2,consts:[[3,"cvcTitle"],[3,"organizationId"],["evidenceCardTitle",""],["nz-icon","","nzType","civic:evidence"]],template:function(o,s){if(1&o&&(n.TgZ(0,"cvc-entity-table-card",0),n._UZ(1,"cvc-evidence-table",1),n.qZA(),n.YNc(2,nn,2,0,"ng-template",null,2,n.W1O)),2&o){const g=n.MAs(3);n.Q6J("cvcTitle",g),n.xp6(1),n.Q6J("organizationId",s.organizationId)}},directives:[S._,k.a,h.Ls,O.w],styles:["[_nghost-%COMP%]{display:block}"]}),t})();var N=i(6699);function on(t,a){if(1&t&&n._UZ(0,"nz-avatar",2),2&t){const o=n.oxw();n.Q6J("nzSrc",o.organization.profileImagePath)("nzSize",o.size)}}function en(t,a){if(1&t&&(n._UZ(0,"nz-avatar",3),n.ALo(1,"uppercase")),2&t){const o=n.oxw();n.Q6J("nzText",n.lcZ(1,1,o.organization.name.charAt(0)))}}let an=(()=>{class t{ngOnInit(){if(void 0===this.organization)throw new Error("Must supply an organization to use this component");void 0===this.size&&(this.size="default")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-organization-avatar"]],inputs:{organization:"organization",size:"size"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzSize"],["nz-comment-avatar","",3,"nzText"]],template:function(o,s){if(1&o&&(n.YNc(0,on,1,2,"nz-avatar",0),n.YNc(1,en,2,3,"ng-template",null,1,n.W1O)),2&o){const g=n.MAs(2);n.Q6J("ngIf",s.organization.profileImagePath)("ngIfElse",g)}},directives:[e.O5,N.Dz],pipes:[e.gd],styles:[""]}),t})();function sn(t,a){if(1&t&&n._UZ(0,"cvc-organization-avatar",7),2&t){const o=n.oxw();n.Q6J("organization",o.organization)("size",64)}}let rn=(()=>{class t{ngOnInit(){if(null==this.organization)throw new Error("Must pass a organization into organization card")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-organization-card"]],inputs:{organization:"organization"},decls:48,vars:46,consts:[[3,"nzTitle","nzExtra"],["avatar",""],["nz-row","",3,"nzGutter"],[3,"nzSpan"],["nz-typography",""],[3,"nzGutter"],[3,"nzValue","nzTitle"],[3,"organization","size"]],template:function(o,s){if(1&o&&(n.TgZ(0,"nz-card",0),n.YNc(1,sn,1,2,"ng-template",null,1,n.W1O),n.TgZ(3,"div",2),n.TgZ(4,"nz-row"),n.TgZ(5,"nz-col",3),n.TgZ(6,"nz-row"),n.TgZ(7,"p",4),n.TgZ(8,"b"),n._uU(9,"Description: "),n.qZA(),n._uU(10),n.qZA(),n.qZA(),n.TgZ(11,"nz-row"),n.TgZ(12,"p",4),n.TgZ(13,"b"),n._uU(14,"Organization Statistics"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(15,"nz-row",5),n.TgZ(16,"nz-col",3),n.TgZ(17,"nz-card"),n._UZ(18,"nz-statistic",6),n.ALo(19,"number"),n.qZA(),n.qZA(),n.TgZ(20,"nz-col",3),n.TgZ(21,"nz-card"),n._UZ(22,"nz-statistic",6),n.ALo(23,"number"),n.qZA(),n.qZA(),n.TgZ(24,"nz-col",3),n.TgZ(25,"nz-card"),n._UZ(26,"nz-statistic",6),n.ALo(27,"number"),n.qZA(),n.qZA(),n.TgZ(28,"nz-col",3),n.TgZ(29,"nz-card"),n._UZ(30,"nz-statistic",6),n.ALo(31,"number"),n.qZA(),n.qZA(),n.TgZ(32,"nz-col",3),n.TgZ(33,"nz-card"),n._UZ(34,"nz-statistic",6),n.ALo(35,"number"),n.qZA(),n.qZA(),n.TgZ(36,"nz-col",3),n.TgZ(37,"nz-card"),n._UZ(38,"nz-statistic",6),n.ALo(39,"number"),n.qZA(),n.qZA(),n.TgZ(40,"nz-col",3),n.TgZ(41,"nz-card"),n._UZ(42,"nz-statistic",6),n.ALo(43,"number"),n.qZA(),n.qZA(),n.TgZ(44,"nz-col",3),n.TgZ(45,"nz-card"),n._UZ(46,"nz-statistic",6),n.ALo(47,"number"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o){const g=n.MAs(2);n.Q6J("nzTitle",s.organization.name)("nzExtra",g),n.xp6(3),n.Q6J("nzGutter",16),n.xp6(2),n.Q6J("nzSpan",24),n.xp6(5),n.Oqu(s.organization.description),n.xp6(5),n.Q6J("nzGutter",16),n.xp6(1),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("nzValue",n.lcZ(19,30,s.organization.orgStatsHash.comments))("nzTitle","Comments"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(23,32,s.organization.orgStatsHash.revisions))("nzTitle","Suggested Revisions"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(27,34,s.organization.orgStatsHash.appliedRevisions))("nzTitle","Applied Revisions"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(31,36,s.organization.orgStatsHash.suggestedSources))("nzTitle","Suggested Sources"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(35,38,s.organization.orgStatsHash.submittedEvidenceItems))("nzTitle","Submitted Evidence"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(39,40,s.organization.orgStatsHash.acceptedEvidenceItems))("nzTitle","Accepted Evidence"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(43,42,s.organization.orgStatsHash.submittedAssertions))("nzTitle","Submitted Assertions"),n.xp6(2),n.Q6J("nzSpan",3),n.xp6(2),n.Q6J("nzValue",n.lcZ(47,44,s.organization.orgStatsHash.acceptedAssertions))("nzTitle","Accepted Assertions")}},directives:[r.bd,an,d.SK,d.t3,x.ZU,p.my],pipes:[e.JJ],styles:[""]}),t})();function cn(t,a){if(1&t&&(n.TgZ(0,"nz-row"),n.TgZ(1,"nz-col",5),n._UZ(2,"cvc-organization-card",6),n.qZA(),n.qZA()),2&t){const o=a.$implicit;n.xp6(1),n.Q6J("nzSpan",24),n.xp6(1),n.Q6J("organization",o)}}function gn(t,a){if(1&t&&(n.TgZ(0,"div",3),n.YNc(1,cn,3,2,"nz-row",4),n.qZA()),2&t){const o=n.oxw().ngIf;n.Q6J("nzGutter",16),n.xp6(1),n.Q6J("ngForOf",o)}}function ln(t,a){1&t&&(n.TgZ(0,"nz-space",1),n.YNc(1,gn,2,2,"div",2),n.qZA())}let pn=(()=>{class t{constructor(o,s,g){this.gql=o,this.viewerService=s,this.route=g,this.queryRef=this.gql.watch({organizationId:+this.route.snapshot.params.organizationId});let T=this.queryRef.valueChanges;this.loading$=T.pipe((0,m.j)("loading"),(0,A.O)(!0)),this.organizations$=T.pipe((0,m.j)("data","organization","subGroups")),this.viewer$=this.viewerService.viewer$}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(v.Lr0),n.Y36(M.a),n.Y36(z.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-organizations-groups"]],decls:2,vars:3,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],["nz-row","",3,"nzGutter",4,"nzSpaceItem"],["nz-row","",3,"nzGutter"],[4,"ngFor","ngForOf"],[3,"nzSpan"],[3,"organization"]],template:function(o,s){1&o&&(n.YNc(0,ln,2,0,"nz-space",0),n.ALo(1,"ngrxPush")),2&o&&n.Q6J("ngIf",n.lcZ(1,1,s.organizations$))},directives:[e.O5,Z.NU,Z.$1,d.SK,e.sg,d.t3,rn],pipes:[u.fM],styles:[""]}),t})();var dn=i(3154),zn=i(8929),mn=i(4850),un=i(13),_=i(592),vn=i(2166),fn=i(392);function Zn(t,a){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._UZ(2,"cvc-organization-tag",6),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._UZ(6,"cvc-tag-overflow",7),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.qZA()),2&t){const o=a.$implicit;n.xp6(2),n.Q6J("org",o),n.xp6(2),n.hij(" ",o.memberCount," "),n.xp6(2),n.Q6J("maxDisplayCount",3)("tags",o.subGroups),n.xp6(2),n.hij(" ",o.eventCount," "),n.xp6(2),n.hij(" ",null==o.mostRecentEvent?null:o.mostRecentEvent.createdAt," ")}}let hn=(()=>{class t{constructor(o){this.gql=o,this.initialPageSize=25,this.debouncedQuery=new zn.xQ,this.tableView=!0,this.sortColumns=v.xlL}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize,cardView:!this.tableView});let o=this.queryRef.valueChanges;this.isLoading$=o.pipe((0,m.j)("loading"),(0,A.O)(!0)),this.organizations$=o.pipe((0,m.j)("data","organizations","edges"),(0,mn.U)(s=>s.map(g=>g.node))),this.totalCount$=o.pipe((0,m.j)("data","organizations","totalCount")),this.pageInfo$=o.pipe((0,m.j)("data","organizations","pageInfo")),this.debouncedQuery.pipe((0,un.b)(500)).subscribe(s=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}refresh(){this.queryRef.refetch({orgName:this.orgNameInput,id:this.idInput?+this.idInput:void 0,cardView:!this.tableView})}onModelChanged(){this.debouncedQuery.next()}onSortChanged(o){this.queryRef.refetch({sortBy:(0,dn._)(o),cardView:!this.tableView})}ngOnDestroy(){this.debouncedQuery.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(v.io))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-organizations-table"]],decls:25,vars:13,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["organizationsTable",""],[3,"nzSortOrderChange"],["nzWidth","25%",3,"nzColumnKey","nzSortFn"],["placeholderText","Search Name",3,"inputModel","onInputChanged","inputModelChange"],[4,"ngFor","ngForOf"],[3,"org"],["tagType","organization",3,"maxDisplayCount","tags"]],template:function(o,s){if(1&o&&(n.TgZ(0,"nz-table",0,1),n.ALo(2,"ngrxPush"),n.ALo(3,"ngrxPush"),n.TgZ(4,"thead",2),n.NdJ("nzSortOrderChange",function(C){return s.onSortChanged(C)}),n.TgZ(5,"tr"),n.TgZ(6,"th",3),n._uU(7," Name "),n.qZA(),n.TgZ(8,"th"),n._uU(9," Members "),n.qZA(),n.TgZ(10,"th"),n._uU(11," Sub Organizations "),n.qZA(),n.TgZ(12,"th"),n._uU(13," Actions "),n.qZA(),n.TgZ(14,"th"),n._uU(15," Last Action "),n.qZA(),n.qZA(),n.TgZ(16,"tr"),n.TgZ(17,"th"),n.TgZ(18,"cvc-clearable-input-filter",4),n.NdJ("inputModelChange",function(C){return s.orgNameInput=C}),n.qZA(),n.qZA(),n._UZ(19,"th"),n._UZ(20,"th"),n._UZ(21,"th"),n._UZ(22,"th"),n.qZA(),n.qZA(),n.TgZ(23,"tbody"),n.YNc(24,Zn,11,6,"tr",5),n.qZA(),n.qZA()),2&o){const g=n.MAs(1);n.Q6J("nzData",n.lcZ(2,9,s.organizations$))("nzLoading",n.lcZ(3,11,s.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(6),n.Q6J("nzColumnKey",s.sortColumns.Name)("nzSortFn",!0),n.xp6(12),n.Q6J("inputModel",s.orgNameInput)("onInputChanged",s.textInputCallback),n.xp6(6),n.Q6J("ngForOf",g.data)}},directives:[_.N8,_.Om,_.$Z,_.Uo,_._C,_.qD,vn.p,_.p0,e.sg,l.m,fn.T],pipes:[u.fM],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),_n=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["organizations-home"]],decls:9,vars:1,consts:[[1,"site-page-header"],["nz-icon","","nzType","civic:organization"],["nz-row",""],["nz-col","",3,"nzSpan"],[1,"content"]],template:function(o,s){1&o&&(n.TgZ(0,"nz-page-header",0),n.TgZ(1,"nz-page-header-title"),n._UZ(2,"i",1),n._uU(3," Organizations "),n.qZA(),n.TgZ(4,"nz-page-header-content"),n.TgZ(5,"div",2),n.TgZ(6,"div",3),n.TgZ(7,"div",4),n._UZ(8,"cvc-organizations-table"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(6),n.Q6J("nzSpan",24))},directives:[f.$O,f.u9,h.Ls,f.u5,d.SK,d.t3,hn],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     nz-page-header:first-of-type{background-color:#fff;border-radius:8px}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card{width:100%}[_nghost-%COMP%]     nz-page-header:first-of-type .card-list nz-card .card-grid-cell{width:50%}[_nghost-%COMP%]     nz-page-header:first-of-type nz-page-header-title.flagged{padding-left:.75em}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-content{padding-top:0}[_nghost-%COMP%]     nz-page-header:first-of-type .ant-page-header-heading-extra nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs{margin:0 -16px 12px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap{padding-left:16px;padding-right:16px;line-height:24px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab{padding:1px 8px}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-nav-wrap .ant-tabs-tab .anticon{margin-right:0}[_nghost-%COMP%]     nz-page-header:first-of-type #section-tabs .ant-tabs-extra-content{margin-right:16px}"]}),t})();var Cn=i(7881);function Tn(t,a){if(1&t&&n._UZ(0,"cvc-user-avatar",2),2&t){const o=n.oxw();n.Q6J("user",o.user)("size",64)}}let On=(()=>{class t{ngOnInit(){if(null==this.user)throw new Error("Must pass a user into user card")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-user-card"]],inputs:{user:"user"},decls:4,vars:5,consts:[[3,"nzTitle","nzExtra"],["avatar",""],[3,"user","size"]],template:function(o,s){if(1&o&&(n.TgZ(0,"nz-card",0),n.YNc(1,Tn,1,2,"ng-template",null,1,n.W1O),n._uU(3),n.qZA()),2&o){const g=n.MAs(2);n.Q6J("nzTitle",s.user.displayName)("nzExtra",g),n.xp6(3),n.lnq(" Name: ",s.user.name," Role: ",s.user.role," ORCID iD: ",s.user.orcid," ")}},directives:[r.bd,Cn.L],styles:[""]}),t})();function An(t,a){if(1&t&&(n.TgZ(0,"div",5),n._UZ(1,"cvc-user-card",6),n.qZA()),2&t){const o=a.$implicit;n.Q6J("nzSpan",2),n.xp6(1),n.Q6J("user",o.node)}}function xn(t,a){if(1&t&&(n.TgZ(0,"div",3),n.YNc(1,An,2,2,"div",4),n.qZA()),2&t){const o=n.oxw().ngIf;n.Q6J("nzGutter",16),n.xp6(1),n.Q6J("ngForOf",o)}}function Sn(t,a){1&t&&(n.TgZ(0,"nz-space",1),n.YNc(1,xn,2,2,"div",2),n.qZA())}let Mn=(()=>{class t{constructor(o,s,g){this.gql=o,this.viewerService=s,this.route=g,this.queryRef=this.gql.watch({organizationId:+this.route.snapshot.params.organizationId});let T=this.queryRef.valueChanges;this.loading$=T.pipe((0,m.j)("loading"),(0,A.O)(!0)),this.members$=T.pipe((0,m.j)("data","organization","members","edges")),this.viewer$=this.viewerService.viewer$}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(v.Del),n.Y36(M.a),n.Y36(z.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-organizations-members"]],decls:2,vars:3,consts:[["nzSize","middle","nzDirection","vertical","class","space-align-block",4,"ngIf"],["nzSize","middle","nzDirection","vertical",1,"space-align-block"],["nz-row","",3,"nzGutter",4,"nzSpaceItem"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan"],[3,"user"]],template:function(o,s){1&o&&(n.YNc(0,Sn,2,0,"nz-space",0),n.ALo(1,"ngrxPush")),2&o&&n.Q6J("ngIf",n.lcZ(1,1,s.members$))},directives:[e.O5,Z.NU,Z.$1,d.SK,e.sg,d.t3,On],pipes:[u.fM],styles:[""]}),t})();var yn=i(8134);function bn(t,a){1&t&&(n._UZ(0,"i",2),n._uU(1," Organization Source Suggestions\n"))}const Pn=[{path:"",component:(()=>{class t{constructor(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-organizations"]],decls:1,vars:0,template:function(o,s){1&o&&n._UZ(0,"router-outlet")},directives:[z.lC],styles:[""]}),t})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:_n},{path:":organizationId",component:W,data:{breadcrumb:"DISPLAYNAME"},children:[{path:"",redirectTo:"members",pathMatch:"full"},{path:"members",component:Mn,data:{breadcrumb:"Members"}},{path:"groups",component:pn,data:{breadcrumb:"Child Organizations"}},{path:"evidence",component:tn,data:{breadcrumb:"Evidence"}},{path:"assertions",component:U,data:{breadcrumb:"Assertions"}},{path:"activity",component:X,data:{breadcrumb:"Activity"}},{path:"source-suggestions",component:(()=>{class t{constructor(o){this.route=o,this.userId=+this.route.snapshot.params.userId}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(z.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["cvc-organizations-source-suggestions"]],decls:4,vars:1,consts:[[3,"cvcTitle"],["sourceSuggestionCardTitle",""],["nz-icon","","nzType","file-add"]],template:function(o,s){if(1&o&&(n.TgZ(0,"cvc-entity-table-card",0),n._UZ(1,"cvc-source-suggestions-table"),n.qZA(),n.YNc(2,bn,2,0,"ng-template",null,1,n.W1O)),2&o){const g=n.MAs(3);n.Q6J("cvcTitle",g)}},directives:[S._,yn.O,h.Ls,O.w],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),data:{breadcrumb:"Source Suggestions"}}]}]}];let Jn=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[z.Bz.forChild(Pn)],z.Bz]}),t})();var Qn=i(4182),Un=i(4618),In=i(4401),wn=i(6042),qn=i(1344),Ln=i(3098),En=i(3677),Nn=i(4546),Dn=i(1047),Yn=i(3610),Fn=i(6559),$n=i(7525),Hn=i(868),Vn=i(8481),Rn=i(404),D=i(8625),Gn=i(8054),Bn=i(7727),jn=i(4125),Y=i(9476),Wn=i(7946);let Kn=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[e.ez,u.WG,h.PV,_.HQ,jn.k,Y.L,Wn.x]]}),t})(),Xn=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[e.ez,f.KJ,h.PV,d.Jb,Kn]]}),t})();var kn=i(9441),nt=i(316),tt=i(767),ot=i(3630),et=i(9444),it=i(6286),at=i(3384),st=i(8018),rt=i(3580),ct=i(5453);let gt=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[e.ez,N.Rt]]}),t})(),lt=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[e.ez,r.vh,d.Jb,Z.zf,x.ZJ,p.A2,ct.N,rt.Q,st.e,at.h,it.y,gt,et.s]]}),t})();var pt=i(8960),dt=i(4292),zt=i(8762),mt=i(5630),ut=i(1356),vt=i(7026);let ft=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[e.ez,Xn,kn.s,tt.Q,nt.C,Jn,ot.X,Y.L,lt,pt.G,dt.t,Un.ve,N.Rt,In.mS,wn.sL,r.vh,qn.YM,Nn.U5,Ln.q6,En.b1,d.Jb,c.Ph,f.KJ,Yn.$6,Z.zf,$n.j,Fn.H0,_.HQ,Hn.we,Vn.X,Rn.cg,x.ZJ,u.WG,D.$L.forChild({formatter:{useClass:vt.x,provide:D.KP}}),Dn.o7,Qn.u5,zt.c,Gn.LV,Bn.EvidenceModule,P.Gb,p.A2,mt.D,ut.W]]}),t})()}}]);