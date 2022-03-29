"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[3883],{3756:(R,h,e)=>{e.d(h,{x:()=>Q});var c=e(712),I=e(3154),E=e(8929),p=e(373),v=e(1059),M=e(4850),Z=e(13),n=e(5e3),l=e(592),D=e(404),P=e(2166),T=e(8054),C=e(4182),z=e(9808),O=e(2826),A=e(3193),g=e(8664),L=e(4022),f=e(3618),_=e(7469),m=e(2683),d=e(647),U=e(6949),u=e(4110),y=e(9714),S=e(9657);function K(a,r){if(1&a&&(n.ynx(0),n._UZ(1,"cvc-disease-tag",58),n.BQk()),2&a){const o=n.oxw().$implicit;n.xp6(1),n.Q6J("disease",o.disease)}}function N(a,r){1&a&&(n.TgZ(0,"i"),n._uU(1,"N/A"),n.qZA())}function B(a,r){if(1&a&&(n.TgZ(0,"span"),n._UZ(1,"cvc-drug-tag",61),n.qZA()),2&a){const o=r.$implicit;n.xp6(1),n.Q6J("drug",o)}}function W(a,r){if(1&a&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"titlecase"),n.qZA()),2&a){const o=n.oxw(2).$implicit;n.xp6(1),n.hij(" (",n.lcZ(2,1,o.drugInteractionType),") ")}}function J(a,r){if(1&a&&(n.TgZ(0,"p",59),n.YNc(1,B,2,1,"span",47),n.YNc(2,W,3,3,"span",60),n.qZA()),2&a){const o=n.oxw().$implicit;n.xp6(1),n.Q6J("ngForOf",o.drugs),n.xp6(1),n.Q6J("ngIf",o.drugs.length>1)}}function V(a,r){1&a&&(n.TgZ(0,"i"),n._uU(1,"N/A"),n.qZA())}function b(a,r){if(1&a&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._UZ(2,"cvc-assertion-tag",48),n.qZA(),n.TgZ(3,"td"),n._UZ(4,"cvc-gene-tag",49),n.qZA(),n.TgZ(5,"td"),n._UZ(6,"cvc-variant-tag",50),n.qZA(),n.TgZ(7,"td"),n.YNc(8,K,2,1,"ng-container",51),n.YNc(9,N,2,0,"ng-template",null,52,n.W1O),n.qZA(),n.TgZ(11,"td"),n.YNc(12,J,3,2,"p",53),n.YNc(13,V,2,0,"ng-template",null,54,n.W1O),n.qZA(),n.TgZ(15,"td",55),n._UZ(16,"i",56),n.qZA(),n.TgZ(17,"td",55),n._UZ(18,"i",57),n.ALo(19,"evidenceEnumDisplay"),n.ALo(20,"evidenceEnumDisplay"),n.qZA(),n.TgZ(21,"td",55),n._UZ(22,"i",57),n.ALo(23,"evidenceEnumDisplay"),n.ALo(24,"evidenceEnumDisplay"),n.qZA(),n.TgZ(25,"td",55),n._UZ(26,"i",57),n.ALo(27,"evidenceEnumDisplay"),n.qZA(),n.TgZ(28,"td",55),n._uU(29),n.ALo(30,"ifEmpty"),n.ALo(31,"formatAmp"),n.qZA(),n.qZA()),2&a){const o=r.$implicit,t=n.MAs(10),s=n.MAs(14);n.xp6(2),n.Q6J("assertion",o),n.xp6(2),n.Q6J("gene",o.gene),n.xp6(2),n.Q6J("variant",o.variant),n.xp6(2),n.Q6J("ngIf",o.disease.name)("ngIfElse",t),n.xp6(4),n.Q6J("ngIf",o.drugs.length>0)("ngIfElse",s),n.xp6(4),n.Q6J("nzTooltipTitle",o.summary),n.xp6(2),n.Q6J("nzType",n.xi3(19,15,o.assertionType,"icon-name"))("nzTooltipTitle",n.lcZ(20,18,o.assertionType)),n.xp6(4),n.Q6J("nzType",n.xi3(23,20,o.assertionDirection,"icon-name"))("nzTooltipTitle",n.lcZ(24,23,o.assertionDirection)),n.xp6(4),n.Q6J("nzType",n.xi3(27,25,o.clinicalSignificance,"icon-name"))("nzTooltipTitle",o.clinicalSignificanceevidenceEnumDisplay),n.xp6(3),n.hij(" ",n.xi3(30,28,n.xi3(31,31,o.ampLevel,"compact"),"--")," ")}}let Q=(()=>{class a{constructor(o){this.gql=o,this.initialPageSize=25,this.debouncedQuery=new E.xQ,this.tableView=!0,this.sortColumns=c.u4i}ngOnInit(){this.queryRef=this.gql.watch({first:this.initialPageSize,variantId:this.variantId,evidenceId:this.evidenceId,organizationId:this.organizationId,userId:this.userId,phenotypeId:this.phenotypeId,diseaseId:this.diseaseId,drugId:this.drugId,status:this.status,cardView:!this.tableView});let o=this.queryRef.valueChanges;this.isLoading$=o.pipe((0,p.j)("loading"),(0,v.O)(!0)),this.assertions$=o.pipe((0,p.j)("data","assertions","edges"),(0,M.U)(t=>t.map(s=>s.node))),this.totalCount$=o.pipe((0,p.j)("data","assertions","totalCount")),this.pageInfo$=o.pipe((0,p.j)("data","assertions","pageInfo")),this.debouncedQuery.pipe((0,Z.b)(500)).subscribe(t=>this.refresh()),this.textInputCallback=()=>{this.debouncedQuery.next()}}refresh(){var o;o=this.aidInput?this.aidInput.toUpperCase().startsWith("AID")?+this.aidInput.toUpperCase().replace("AID",""):+this.aidInput:void 0,this.queryRef.refetch({id:o,diseaseName:this.diseaseNameInput,geneName:this.geneNameInput,variantName:this.variantNameInput,drugName:this.drugNameInput,summary:this.summaryInput,assertionType:this.assertionTypeInput?this.assertionTypeInput:void 0,assertionDirection:this.assertionDirectionInput?this.assertionDirectionInput:void 0,clinicalSignificance:this.clinicalSignificanceInput?this.clinicalSignificanceInput:void 0,ampLevel:this.ampLevelInput?this.ampLevelInput:void 0,cardView:!this.tableView})}onModelChanged(){this.debouncedQuery.next()}onSortChanged(o){this.queryRef.refetch({sortBy:(0,I._)(o),cardView:!this.tableView})}ngOnDestroy(){this.debouncedQuery.unsubscribe()}loadMore(o){this.queryRef.fetchMore({variables:{after:o}})}}return a.\u0275fac=function(o){return new(o||a)(n.Y36(c.td))},a.\u0275cmp=n.Xpm({type:a,selectors:[["cvc-assertions-table"]],inputs:{evidenceId:"evidenceId",variantId:"variantId",organizationId:"organizationId",userId:"userId",phenotypeId:"phenotypeId",diseaseId:"diseaseId",drugId:"drugId",status:"status"},decls:80,vars:45,consts:[[3,"nzData","nzLoading","nzFrontPagination","nzShowPagination"],["assertionsTable",""],[3,"nzSortOrderChange"],["nzWidth","5%",3,"nzColumnKey","nzSortFn"],["nzWidth","10%",3,"nzColumnKey","nzSortFn"],["nzWidth","15%",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Assertion Type",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Assertion Direction",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","Clinical Significance",3,"nzColumnKey","nzSortFn"],["nzWidth","5%","nzAlign","center","nz-tooltip","","nzTooltipTitle","AMP/ASCO/CAP Category",3,"nzColumnKey","nzSortFn"],["placeholderText","Search AID",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Gene",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Variant",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Disease",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Drugs",3,"inputModel","onInputChanged","inputModelChange"],["placeholderText","Search Summary",3,"inputModel","onInputChanged","inputModelChange"],["nzWidth","5%","nzAlign","center"],["nzAllowClear","","nzPlaceHolder","Choose",3,"ngModel","ngModelChange"],["nzValue","PREDICTIVE","nzLabel","Predictive"],["nzValue","PROGNOSTIC","nzLabel","Prognostic"],["nzValue","DIAGNOSTIC","nzLabel","Diagnostic"],["nzValue","PREDISPOSING","nzLabel","Predisposing"],["nzValue","SUPPORTS","nzLabel","Supports"],["nzValue","DOES_NOT_SUPPORT","nzLabel","Does not Support"],["nzValue","NA","nzLabel","N/A"],["nzLabel","Predictive"],["nzValue","SENSITIVITYRESPONSE","nzLabel","Sensitivity/Response"],["nzValue","RESISTANCE","nzLabel","Resistance"],["nzValue","ADVERSE_RESPONSE","nzLabel","Adverse Response"],["nzValue","REDUCED SENSITIVITY","nzLabel","Reduced Sensitivity"],["nzLabel","Prognostic"],["nzValue","BETTER_OUTCOME","nzLabel","Better Outcome"],["nzValue","POOR_OUTCOME","nzLabel","Poor Outcome"],["nzLabel","Diagnostic"],["nzValue","POSITIVE","nzLabel","Positive"],["nzValue","NEGATIVE","nzLabel","Negative"],["nzLabel","Predisposing"],["nzValue","PATHOGENIC","nzLabel","Pathogenic"],["nzValue","LIKELY_PATHOGENIC","nzLabel","Likely Pathogenic"],["nzValue","BENIGN","nzLabel","Benign"],["nzValue","LIKELY_BENIGN","nzLabel","Likely Benign"],["nzValue","UNCERTAIN_SIGNIFICANCE","nzLabel","Uncertain Significance"],["nzValue","TIER_I_LEVEL_A","nzLabel","Tier I Level A"],["nzValue","TIER_I_LEVEL_B","nzLabel","Tier I Level B"],["nzValue","TIER_II_LEVEL_C","nzLabel","Tier II Level C"],["nzValue","TIER_II_LEVEL_D","nzLabel","Tier II Level D"],["nzValue","TIER_III","nzLabel","Tier III"],[4,"ngFor","ngForOf"],[3,"assertion"],[3,"gene"],[3,"variant"],[4,"ngIf","ngIfElse"],["diseaseElse",""],["nz-typography","",4,"ngIf","ngIfElse"],["drugsElse",""],["nzAlign","center"],["nz-icon","","nzType","align-left","nz-tooltip","","nzTooltipPlacement","top",3,"nzTooltipTitle"],["nz-icon","","nz-tooltip","","nzTooltipPlacement","top",3,"nzType","nzTooltipTitle"],[3,"disease"],["nz-typography",""],[4,"ngIf"],[3,"drug"]],template:function(o,t){if(1&o&&(n.TgZ(0,"nz-table",0,1),n.ALo(2,"ngrxPush"),n.ALo(3,"ngrxPush"),n.TgZ(4,"thead",2),n.NdJ("nzSortOrderChange",function(i){return t.onSortChanged(i)}),n.TgZ(5,"tr"),n.TgZ(6,"th",3),n._uU(7," AID "),n.qZA(),n.TgZ(8,"th",3),n._uU(9," Gene "),n.qZA(),n.TgZ(10,"th",4),n._uU(11," Variant "),n.qZA(),n.TgZ(12,"th",5),n._uU(13," Disease "),n.qZA(),n.TgZ(14,"th",5),n._uU(15," Drugs "),n.qZA(),n.TgZ(16,"th",3),n._uU(17," Summary "),n.qZA(),n.TgZ(18,"th",6),n._uU(19," AT "),n.qZA(),n.TgZ(20,"th",7),n._uU(21," AD "),n.qZA(),n.TgZ(22,"th",8),n._uU(23," CS "),n.qZA(),n.TgZ(24,"th",9),n._uU(25," CAT "),n.qZA(),n.qZA(),n.TgZ(26,"tr"),n.TgZ(27,"th"),n.TgZ(28,"cvc-clearable-input-filter",10),n.NdJ("inputModelChange",function(i){return t.aidInput=i}),n.qZA(),n.qZA(),n.TgZ(29,"th"),n.TgZ(30,"cvc-clearable-input-filter",11),n.NdJ("inputModelChange",function(i){return t.geneNameInput=i}),n.qZA(),n.qZA(),n.TgZ(31,"th"),n.TgZ(32,"cvc-clearable-input-filter",12),n.NdJ("inputModelChange",function(i){return t.variantNameInput=i}),n.qZA(),n.qZA(),n.TgZ(33,"th"),n.TgZ(34,"cvc-clearable-input-filter",13),n.NdJ("inputModelChange",function(i){return t.diseaseNameInput=i}),n.qZA(),n.qZA(),n.TgZ(35,"th"),n.TgZ(36,"cvc-clearable-input-filter",14),n.NdJ("inputModelChange",function(i){return t.drugNameInput=i}),n.qZA(),n.qZA(),n.TgZ(37,"th"),n.TgZ(38,"cvc-clearable-input-filter",15),n.NdJ("inputModelChange",function(i){return t.summaryInput=i}),n.qZA(),n.qZA(),n.TgZ(39,"th",16),n.TgZ(40,"nz-select",17),n.NdJ("ngModelChange",function(){return t.onModelChanged()})("ngModelChange",function(i){return t.assertionTypeInput=i}),n._UZ(41,"nz-option",18),n._UZ(42,"nz-option",19),n._UZ(43,"nz-option",20),n._UZ(44,"nz-option",21),n.qZA(),n.qZA(),n.TgZ(45,"th",16),n.TgZ(46,"nz-select",17),n.NdJ("ngModelChange",function(){return t.onModelChanged()})("ngModelChange",function(i){return t.assertionDirectionInput=i}),n._UZ(47,"nz-option",22),n._UZ(48,"nz-option",23),n._UZ(49,"nz-option",24),n.qZA(),n.qZA(),n.TgZ(50,"th",16),n.TgZ(51,"nz-select",17),n.NdJ("ngModelChange",function(){return t.onModelChanged()})("ngModelChange",function(i){return t.clinicalSignificanceInput=i}),n.TgZ(52,"nz-option-group",25),n._UZ(53,"nz-option",26),n._UZ(54,"nz-option",27),n._UZ(55,"nz-option",28),n._UZ(56,"nz-option",29),n._UZ(57,"nz-option",24),n.qZA(),n.TgZ(58,"nz-option-group",30),n._UZ(59,"nz-option",31),n._UZ(60,"nz-option",32),n._UZ(61,"nz-option",24),n.qZA(),n.TgZ(62,"nz-option-group",33),n._UZ(63,"nz-option",34),n._UZ(64,"nz-option",35),n.qZA(),n.TgZ(65,"nz-option-group",36),n._UZ(66,"nz-option",37),n._UZ(67,"nz-option",38),n._UZ(68,"nz-option",39),n._UZ(69,"nz-option",40),n._UZ(70,"nz-option",41),n.qZA(),n.qZA(),n.qZA(),n.TgZ(71,"th",16),n.TgZ(72,"nz-select",17),n.NdJ("ngModelChange",function(){return t.onModelChanged()})("ngModelChange",function(i){return t.ampLevelInput=i}),n._UZ(73,"nz-option",42),n._UZ(74,"nz-option",43),n._UZ(75,"nz-option",44),n._UZ(76,"nz-option",45),n._UZ(77,"nz-option",46),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(78,"tbody"),n.YNc(79,b,32,34,"tr",47),n.qZA(),n.qZA()),2&o){const s=n.MAs(1);n.Q6J("nzData",n.lcZ(2,41,t.assertions$))("nzLoading",n.lcZ(3,43,t.isLoading$))("nzFrontPagination",!1)("nzShowPagination",!1),n.xp6(6),n.Q6J("nzColumnKey",t.sortColumns.Id)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",t.sortColumns.GeneName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",t.sortColumns.VariantName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",t.sortColumns.DiseaseName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",t.sortColumns.DrugName)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",t.sortColumns.Summary)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",t.sortColumns.AssertionType)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",t.sortColumns.AssertionDirection)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",t.sortColumns.ClinicalSignificance)("nzSortFn",!0),n.xp6(2),n.Q6J("nzColumnKey",t.sortColumns.AmpLevel)("nzSortFn",!0),n.xp6(4),n.Q6J("inputModel",t.aidInput)("onInputChanged",t.textInputCallback),n.xp6(2),n.Q6J("inputModel",t.geneNameInput)("onInputChanged",t.textInputCallback),n.xp6(2),n.Q6J("inputModel",t.variantNameInput)("onInputChanged",t.textInputCallback),n.xp6(2),n.Q6J("inputModel",t.diseaseNameInput)("onInputChanged",t.textInputCallback),n.xp6(2),n.Q6J("inputModel",t.drugNameInput)("onInputChanged",t.textInputCallback),n.xp6(2),n.Q6J("inputModel",t.summaryInput)("onInputChanged",t.textInputCallback),n.xp6(2),n.Q6J("ngModel",t.assertionTypeInput),n.xp6(6),n.Q6J("ngModel",t.assertionDirectionInput),n.xp6(5),n.Q6J("ngModel",t.clinicalSignificanceInput),n.xp6(21),n.Q6J("ngModel",t.ampLevelInput),n.xp6(7),n.Q6J("ngForOf",s.data)}},directives:[l.N8,l.Om,l.$Z,l.Uo,l._C,l.qD,l.UX,D.SY,P.p,T.Vq,C.JJ,C.On,T.Ip,T.Yy,l.p0,z.sg,O.w,A.H,g.I,z.O5,L.n,f.ZU,_.u,m.w,d.Ls],pipes:[U.fM,z.rS,u.D,y.D,S.t],styles:["[_nghost-%COMP%]{display:block}"]}),a})()},9441:(R,h,e)=>{e.d(h,{s:()=>U});var c=e(9808),I=e(592),E=e(4546),p=e(1047),v=e(647),M=e(3618),Z=e(4182),n=e(6949),l=e(7946),D=e(3309),P=e(404),T=e(4867),C=e(3580),z=e(8018),O=e(8054),A=e(4125),g=e(9444),L=e(6042),f=e(897),_=e(209),m=e(8369),d=e(5e3);let U=(()=>{class u{}return u.\u0275fac=function(S){return new(S||u)},u.\u0275mod=d.oAB({type:u}),u.\u0275inj=d.cJS({imports:[[c.ez,Z.u5,n.WG,L.sL,I.HQ,E.U5,p.o7,v.PV,M.ZJ,P.cg,O.LV,A.k,g.s,D.U,T.Q,C.Q,z.e,m.W,_.i,f.$,l.x,A.k]]}),u})()},8369:(R,h,e)=>{e.d(h,{W:()=>f});var c=e(9808),I=e(325),E=e(8481),p=e(3610),v=e(647),M=e(7484),Z=e(3098),n=e(3309),l=e(4867),D=e(6286),P=e(8018),T=e(6949),C=e(9444),z=e(1894),O=e(8144),A=e(3580),g=e(5e3);let L=(()=>{class _{}return _.\u0275fac=function(d){return new(d||_)},_.\u0275mod=g.oAB({type:_}),_.\u0275inj=g.cJS({imports:[[c.ez,I.Bz,T.WG,M.vh,Z.q6,v.PV,z.Jb,O.zf,E.X,n.U,A.Q,l.Q,D.y,P.e,C.s]]}),_})(),f=(()=>{class _{}return _.\u0275fac=function(d){return new(d||_)},_.\u0275mod=g.oAB({type:_}),_.\u0275inj=g.cJS({imports:[[c.ez,I.Bz,E.X,p.$6,v.PV,L,C.s]]}),_})()}}]);