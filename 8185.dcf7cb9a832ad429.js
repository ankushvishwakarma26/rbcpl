"use strict";(self.webpackChunkintranet=self.webpackChunkintranet||[]).push([[8185],{9991:(C,h,r)=>{r.r(h),r.d(h,{JobComponent:()=>P});var l=r(6814),d=r(6223),Z=r(2681),_=r(951),g=r(9246),b=r(8915),m=r(1480),v=r(1687),e=r(9212),u=r(6306),f=r(9862),T=r(5218),M=r(868);let x=(()=>{class a{constructor(t,o,i){this.http=t,this.sort=o,this.api=i,this.url="http://103.59.180.17:1112/api/",this.erpurl="http://103.59.180.17:1111/api/",this.joblist=[],this.jobdata=new _.oI}GetJobList(t,o,i,n){return""!=i&&""!=n?this.http.get(this.url+"Job?PageNumber="+t+"&PageSize="+o+"&Search="+i+"&status="+n).pipe((0,u.K)(this.api.handleError)):""!=i&&""==n?this.http.get(this.url+"Job?PageNumber="+t+"&PageSize="+o+"&Search="+i).pipe((0,u.K)(this.api.handleError)):""==i&&""!=n?this.http.get(this.url+"Job?PageNumber="+t+"&PageSize="+o+"&status="+n).pipe((0,u.K)(this.api.handleError)):this.http.get(this.url+"Job?PageNumber="+t+"&PageSize="+o).pipe((0,u.K)(this.api.handleError))}CreateUpdate(){return this.http.post(this.url+"Job",this.jobdata).pipe((0,u.K)(this.api.handleError))}Delete(t){return this.http.get(this.url+"Job/Delete/"+t).pipe((0,u.K)(this.api.handleError))}static#e=this.\u0275fac=function(o){return new(o||a)(e.LFG(f.eN),e.LFG(T.K),e.LFG(M.s))};static#t=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var A=r(2425),U=r(5633),q=r(5219);function J(a,c){if(1&a&&e._uU(0),2&a){const t=e.oxw().$implicit;e.AsE(" (",t.preference," ","Both"!=t.preference?"Only":"",") ")}}function j(a,c){if(1&a&&(e.TgZ(0,"a",71),e._uU(1),e.qZA()),2&a){const t=c.$implicit;e.xp6(1),e.Oqu(t)}}function y(a,c){if(1&a){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",47)(2,"div",48)(3,"div",49)(4,"div",50),e._uU(5),e.ALo(6,"uppercase"),e.qZA()()(),e.TgZ(7,"div",3)(8,"div",51)(9,"div",20)(10,"div",3)(11,"h3",52)(12,"button",53),e.NdJ("click",function(){const n=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.View(n))}),e._uU(13),e.YNc(14,J,1,2),e.qZA()()(),e.TgZ(15,"div",54),e._uU(16),e.ALo(17,"currency"),e.ALo(18,"currency"),e.qZA()(),e.TgZ(19,"div",55)(20,"div",56)(21,"div",57)(22,"div",58),e.O4$(),e.TgZ(23,"svg",59),e._UZ(24,"path",10)(25,"path",60)(26,"path",61)(27,"path",62)(28,"path",63),e.qZA(),e._uU(29),e.qZA(),e.kcU(),e.TgZ(30,"div",58),e.O4$(),e.TgZ(31,"svg",64),e._UZ(32,"path",10)(33,"path",65)(34,"path",66),e.qZA(),e._uU(35),e.qZA()(),e.kcU(),e.TgZ(36,"div",67)(37,"div",58),e.O4$(),e.TgZ(38,"svg",59),e._UZ(39,"path",10)(40,"path",60)(41,"path",61)(42,"path",62)(43,"path",63),e.qZA(),e._uU(44),e.qZA(),e.kcU(),e.TgZ(45,"div",68),e.O4$(),e.TgZ(46,"svg",64),e._UZ(47,"path",10)(48,"path",65)(49,"path",66),e.qZA(),e._uU(50),e.qZA()()(),e.kcU(),e.TgZ(51,"div",69)(52,"div",70),e.SjG(53,j,2,1,"a",72,e.x6l),e.qZA()()()()()()()}if(2&a){const t=c.$implicit,o=e.oxw();e.xp6(5),e.Oqu(e.lcZ(6,11,t.name.substring(0,1))),e.xp6(8),e.hij("",t.name," "),e.xp6(1),e.um2(14,"Both"!=t.preference?14:-1),e.xp6(2),e.AsE("",e.xi3(17,13,t.salaryfrom,"INR")," - ",e.xi3(18,16,t.salaryto,"INR"),""),e.xp6(13),e.AsE(" ",t.agefrom," Years - ",t.ageto," Years"),e.xp6(6),e.hij(" ",t.location,""),e.xp6(9),e.AsE(" ",t.agefrom," Years - ",t.ageto," Years"),e.xp6(6),e.hij(" ",t.location,""),e.xp6(3),e.wJu(o.SplitSkills(t.skills))}}function w(a,c){1&a&&e._uU(0," Edit ")}function N(a,c){1&a&&e._uU(0," Post ")}function k(a,c){if(1&a&&e._uU(0),2&a){const t=e.oxw(2);e.hij(" (",t.service.jobdata.name,") ")}}function S(a,c){if(1&a&&(e.TgZ(0,"h2"),e.YNc(1,w,1,0)(2,N,1,0),e._uU(3," Job Description "),e.YNc(4,k,1,1),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.um2(1,t.service.jobdata.id?1:2),e.xp6(3),e.um2(4,t.service.jobdata.name?4:-1)}}function E(a,c){if(1&a&&(e.TgZ(0,"h2",79),e._uU(1),e.ALo(2,"date"),e.qZA()),2&a){const t=e.oxw(3);e.xp6(1),e.AsE("Last Update : ",t.service.jobdata.updatedby," (",e.xi3(2,2,t.service.jobdata.updateddate,"dd-MMM-yyyy hh:mm a"),")")}}function G(a,c){if(1&a){const t=e.EpF();e.TgZ(0,"div",75)(1,"div",18),e.YNc(2,E,3,5,"h2",76),e.TgZ(3,"button",77),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.EnableEdit())}),e._uU(4,"Edit"),e.qZA(),e.TgZ(5,"button",78),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.Delete(i.service.jobdata))}),e._uU(6,"Delete"),e.qZA()()()}if(2&a){const t=e.oxw(2);e.xp6(2),e.Q6J("ngIf",t.service.jobdata.updateddate)}}function L(a,c){if(1&a&&(e.TgZ(0,"div",20)(1,"div",15)(2,"div",80)(3,"h3"),e._uU(4),e.qZA()()(),e.TgZ(5,"div",15)(6,"div",80)(7,"h3"),e._uU(8),e.qZA()()(),e.TgZ(9,"div",15)(10,"div",80)(11,"h3"),e._uU(12),e.qZA()()(),e.TgZ(13,"div",15)(14,"div",80)(15,"h3"),e._uU(16),e.qZA()()(),e.TgZ(17,"div",15)(18,"div",80)(19,"h3"),e._uU(20),e.qZA()()(),e.TgZ(21,"div",15)(22,"div",80)(23,"h3"),e._uU(24),e.qZA()()(),e.TgZ(25,"div",15)(26,"div",80)(27,"h3"),e._uU(28),e.qZA()()(),e.TgZ(29,"div",15)(30,"div",80)(31,"h3"),e._uU(32),e.qZA()()(),e.TgZ(33,"div",15)(34,"div",80)(35,"h3"),e._uU(36),e.qZA()()(),e.TgZ(37,"div",15)(38,"div",80)(39,"h3"),e._uU(40),e.ALo(41,"currency"),e.ALo(42,"currency"),e.qZA()()(),e.TgZ(43,"div",15)(44,"div",80)(45,"h2"),e._uU(46,"Job Description"),e.qZA(),e._UZ(47,"div",81),e.qZA()()()),2&a){const t=e.oxw(2);e.xp6(4),e.hij("Job Name : ",t.service.jobdata.name,""),e.xp6(4),e.hij("Preference : ",t.service.jobdata.preference,""),e.xp6(4),e.hij("Marital Status : ",t.service.jobdata.maritalstatus,""),e.xp6(4),e.hij("Additional Requirement : ",t.service.jobdata.skills,""),e.xp6(4),e.hij("Educational Qualification: ",t.service.jobdata.qualification,""),e.xp6(4),e.hij("Experience : ",t.service.jobdata.experience,""),e.xp6(4),e.hij("Department : ",t.service.jobdata.department,""),e.xp6(4),e.hij("Location : ",t.service.jobdata.location,""),e.xp6(4),e.AsE("Age from ",t.service.jobdata.agefrom," Years - ",t.service.jobdata.ageto," Years"),e.xp6(4),e.AsE("Salary from ",e.xi3(41,13,t.service.jobdata.salaryfrom,"INR")," - ",e.xi3(42,16,t.service.jobdata.salaryto,"INR"),""),e.xp6(7),e.Q6J("innerHTML",t.service.jobdata.description,e.oJD)}}function D(a,c){if(1&a){const t=e.EpF();e.TgZ(0,"form",null,82)(2,"div",20)(3,"div",15)(4,"div",80)(5,"label",83),e._uU(6,"Job Name"),e.qZA(),e.TgZ(7,"input",84,85),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.name=i)}),e.qZA()()(),e.TgZ(9,"div",86)(10,"div",80)(11,"label",83),e._uU(12,"Preference"),e.qZA(),e.TgZ(13,"select",87,88),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.preference=i)}),e.TgZ(15,"option",32),e._uU(16,"---Select Preference---"),e.qZA(),e.TgZ(17,"option",89),e._uU(18,"Male"),e.qZA(),e.TgZ(19,"option",90),e._uU(20,"Female"),e.qZA(),e.TgZ(21,"option",91),e._uU(22,"Both"),e.qZA()()()(),e.TgZ(23,"div",86)(24,"div",80)(25,"label",83),e._uU(26,"Marital Status"),e.qZA(),e.TgZ(27,"select",92,93),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.maritalstatus=i)}),e.TgZ(29,"option",32),e._uU(30,"---Select Marital Status---"),e.qZA(),e.TgZ(31,"option",94),e._uU(32,"Single"),e.qZA(),e.TgZ(33,"option",95),e._uU(34,"Married"),e.qZA(),e.TgZ(35,"option",91),e._uU(36,"Both"),e.qZA()()()(),e.TgZ(37,"div",86)(38,"div",80)(39,"label",83),e._uU(40,"Additional Requirement"),e.qZA(),e.TgZ(41,"input",96,97),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.skills=i)}),e.qZA()()(),e.TgZ(43,"div",98)(44,"div",80)(45,"label",83),e._uU(46,"Educational Qualification"),e.qZA(),e.TgZ(47,"select",99,100),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.qualification=i)}),e.TgZ(49,"option",32),e._uU(50,"---Select Educational---"),e.qZA(),e.TgZ(51,"option",101),e._uU(52,"Post Graduation"),e.qZA(),e.TgZ(53,"option",102),e._uU(54,"Graduation"),e.qZA(),e.TgZ(55,"option",103),e._uU(56,"Diploma"),e.qZA(),e.TgZ(57,"option",104),e._uU(58,"ITI"),e.qZA(),e.TgZ(59,"option",105),e._uU(60,"12th"),e.qZA(),e.TgZ(61,"option",106),e._uU(62,"10th"),e.qZA(),e.TgZ(63,"option",107),e._uU(64,"8th or Below"),e.qZA()()()(),e.TgZ(65,"div",98)(66,"div",80)(67,"label",83),e._uU(68,"Experience"),e.qZA(),e.TgZ(69,"input",108,109),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.experience=i)}),e.qZA()()(),e.TgZ(71,"div",98)(72,"div",80)(73,"label",83),e._uU(74,"Department"),e.qZA(),e.TgZ(75,"select",110,111),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.department=i)}),e.TgZ(77,"option",32),e._uU(78,"---Select Department---"),e.qZA(),e.TgZ(79,"option",112),e._uU(80,"Sales"),e.qZA(),e.TgZ(81,"option",113),e._uU(82,"Operation"),e.qZA(),e.TgZ(83,"option",114),e._uU(84,"HR"),e.qZA(),e.TgZ(85,"option",115),e._uU(86,"Admin"),e.qZA(),e.TgZ(87,"option",116),e._uU(88,"IT"),e.qZA(),e.TgZ(89,"option",117),e._uU(90,"Accounts"),e.qZA(),e.TgZ(91,"option",118),e._uU(92,"Back Office"),e.qZA(),e.TgZ(93,"option",119),e._uU(94,"GSD"),e.qZA(),e.TgZ(95,"option",120),e._uU(96,"EA"),e.qZA(),e.TgZ(97,"option",121),e._uU(98,"Office Boy"),e.qZA(),e.TgZ(99,"option",122),e._uU(100,"Driver"),e.qZA(),e.TgZ(101,"option",122),e._uU(102,"Driver"),e.qZA(),e.TgZ(103,"option",123),e._uU(104,"Supervisor"),e.qZA(),e.TgZ(105,"option",124),e._uU(106,"Other"),e.qZA()()()(),e.TgZ(107,"div",98)(108,"div",80)(109,"label",83),e._uU(110,"Location"),e.qZA(),e.TgZ(111,"input",125,126),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.location=i)}),e.qZA()()(),e.TgZ(113,"div",127)(114,"div",80)(115,"label",128),e._uU(116,"Age Group"),e.qZA(),e.TgZ(117,"div",129)(118,"div",127)(119,"label",79),e._uU(120,"Age From"),e.qZA(),e.TgZ(121,"input",130,131),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.agefrom=i)}),e.qZA()(),e.TgZ(123,"div",127)(124,"label",79),e._uU(125,"Age To"),e.qZA(),e.TgZ(126,"input",132,133),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.ageto=i)}),e.qZA()()()()(),e.TgZ(128,"div",127)(129,"div",80)(130,"label",128),e._uU(131,"Salary Range"),e.qZA(),e.TgZ(132,"div",129)(133,"div",127)(134,"label",79),e._uU(135,"Salary From"),e.qZA(),e.TgZ(136,"input",134,135),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.salaryfrom=i)}),e.qZA()(),e.TgZ(138,"div",127)(139,"label",79),e._uU(140,"Salary To"),e.qZA(),e.TgZ(141,"input",136,137),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.salaryto=i)}),e.qZA()()()()(),e.TgZ(143,"div",15)(144,"div",80)(145,"label",83),e._uU(146,"Job Description"),e.qZA(),e.TgZ(147,"div",138),e._UZ(148,"ngx-editor-menu",139),e.TgZ(149,"ngx-editor",140),e.NdJ("ngModelChange",function(i){e.CHM(t);const n=e.oxw(2);return e.KtG(n.service.jobdata.description=i)}),e.qZA()()()()(),e.TgZ(150,"div",75)(151,"div",18)(152,"button",141),e.NdJ("click",function(){e.CHM(t);const i=e.MAs(1),n=e.oxw(2);return e.KtG(n.Submit(i))}),e._uU(153,"Submit"),e.qZA()()()()}if(2&a){const t=e.MAs(1),o=e.MAs(8),i=e.MAs(14),n=e.MAs(28),p=e.MAs(42),F=e.MAs(48),I=e.MAs(70),K=e.MAs(76),H=e.MAs(112),Q=e.MAs(122),Y=e.MAs(127),B=e.MAs(137),z=e.MAs(142),s=e.oxw(2);e.xp6(7),e.Q6J("ngModel",s.service.jobdata.name)("ngClass",o.invalid?"is-invalid":"is-valid mb-2"),e.xp6(6),e.Q6J("ngModel",s.service.jobdata.preference)("ngClass",i.invalid?"is-invalid":"is-valid mb-2"),e.xp6(14),e.Q6J("ngModel",s.service.jobdata.maritalstatus)("ngClass",n.invalid?"is-invalid":"is-valid mb-2"),e.xp6(14),e.Q6J("ngModel",s.service.jobdata.skills)("ngClass",p.invalid?"is-invalid":"is-valid mb-2"),e.xp6(6),e.Q6J("ngModel",s.service.jobdata.qualification)("ngClass",F.invalid?"is-invalid":"is-valid mb-2"),e.xp6(22),e.Q6J("ngModel",s.service.jobdata.experience)("ngClass",I.invalid?"is-invalid":"is-valid mb-2"),e.xp6(6),e.Q6J("ngModel",s.service.jobdata.department)("ngClass",K.invalid?"is-invalid":"is-valid mb-2"),e.xp6(36),e.Q6J("ngModel",s.service.jobdata.location)("ngClass",H.invalid?"is-invalid":"is-valid mb-2"),e.xp6(10),e.Q6J("ngModel",s.service.jobdata.agefrom)("ngClass",Q.invalid?"is-invalid":"is-valid mb-2"),e.xp6(5),e.Q6J("ngModel",s.service.jobdata.ageto)("ngClass",Y.invalid?"is-invalid":"is-valid mb-2"),e.xp6(10),e.Q6J("ngModel",s.service.jobdata.salaryfrom)("ngClass",B.invalid?"is-invalid":"is-valid mb-2"),e.xp6(5),e.Q6J("ngModel",s.service.jobdata.salaryto)("ngClass",z.invalid?"is-invalid":"is-valid mb-2"),e.xp6(7),e.Q6J("editor",s.editor)("toolbar",s.toolbar),e.xp6(1),e.Q6J("editor",s.editor)("ngModel",s.service.jobdata.description)("disabled",!1),e.xp6(3),e.Q6J("disabled",t.invalid)}}function O(a,c){if(1&a&&e.YNc(0,G,7,1,"div",73)(1,L,48,19,"div",74)(2,D,154,30,"form"),2&a){const t=e.oxw();e.um2(0,t.service.jobdata.id?0:-1),e.xp6(1),e.um2(1,t.service.jobdata.id&&!t.enableedit?1:-1),e.xp6(1),e.um2(2,!t.service.jobdata.id||t.enableedit?2:-1)}}let P=(()=>{class a{constructor(t,o,i,n){this.service=t,this.toast=o,this.userservice=i,this.datePipe=n,this.p=1,this.psize=100,this.total=0,this.frompage=1,this.topage=100,this.searchvalue="",this.status="",this.loader=!1,this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["link","image"],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]],this.jobvisible=!1,this.enableedit=!1}ngOnInit(){this.editor=new b.ML,this.GetJobList(),this.subscription=(0,v.F)(3e3).subscribe(t=>{this.GetJobList()})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}GetJobList(){this.service.GetJobList(this.p,this.psize,this.searchvalue,this.status).subscribe(t=>{this.service.joblist=t.data,this.total=t.totalRecords,this.frompage=this.p*this.psize-(this.psize-1),this.topage=this.total>this.p*this.psize?this.p*this.psize:this.total},t=>{this.toast.error(t,"Error")})}Create(){this.jobvisible=!0,this.service.jobdata=new _.oI,this.service.jobdata.recruitby=this.userservice.GetFullName(),this.service.jobdata.email=this.userservice.GetUserName(),this.service.jobdata.recruitdate=this.datePipe.transform(new Date,"yyyy-MM-dd")}EnableEdit(){this.enableedit=!this.enableedit}Edit(t){this.jobvisible=!0,this.enableedit=!0,this.service.jobdata=t,t.expectstartdate&&(this.service.jobdata.expectstartdate=this.datePipe.transform(t.expectstartdate,"yyyy-MM-dd"))}View(t){this.jobvisible=!0,this.service.jobdata=t,t.expectstartdate&&(this.service.jobdata.expectstartdate=this.datePipe.transform(t.expectstartdate,"yyyy-MM-dd"))}Submit(t){t.valid&&(this.service.jobdata.id?(this.service.jobdata.updatedby=this.userservice.GetFullName(),this.service.jobdata.updateddate=new Date):(this.service.jobdata.status="Pending",this.service.jobdata.createdby=this.userservice.GetFullName(),this.service.jobdata.createddate=new Date),this.service.CreateUpdate().subscribe(o=>{"success"==o.status?(this.toast.success(o.message,"Success"),this.jobvisible=!1,this.service.jobdata=new _.oI,this.GetJobList()):this.toast.warning(o.message,"Warning")}))}Delete(t){1==confirm("Are You Sure want to Delete "+t.name+"?")&&this.service.Delete(t.id).subscribe(o=>{"success"==o.status?(this.toast.success(o.message,"Success"),this.GetJobList(),this.jobvisible=!1):this.toast.warning(o.message,"Warning")})}SplitSkills(t){return t.replace(""," ").split(",")}static#e=this.\u0275fac=function(o){return new(o||a)(e.Y36(x),e.Y36(A._W),e.Y36(U.K),e.Y36(l.uU))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-job"]],standalone:!0,features:[e.jDz],decls:76,vars:11,consts:[[1,"page-header","d-print-none"],[1,"container-xl"],[1,"row","g-2","align-items-center"],[1,"col"],[1,"page-pretitle"],[1,"page-title"],[1,"col-auto","ms-auto","d-print-none"],[1,"btn-list"],["type","button",1,"btn","btn-primary","d-sm-inline-block",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M12 5l0 14"],["d","M5 12l14 0"],[1,"page-body"],[1,"row","g-4"],[1,"col-12"],[1,"card"],[1,"card-body","border-bottom","py-3"],[1,"d-flex"],[1,"text-muted"],[1,"row"],[1,"col-5"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","10"],["value","20"],["value","50"],["value","100"],["value","200"],["value","500"],["value","1000"],[1,"col-7"],[1,"form-select",3,"ngModel","change"],["value",""],["value","Pending"],["value","Hired"],[1,"ms-auto","text-muted"],[1,"input-icon"],["type","text","placeholder","Search.....",1,"form-control",3,"ngModel","ngModelChange","click"],[1,"input-icon-addon"],["d","M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"],["d","M21 21l-6 -6"],[1,"space-y","card-body-scrollable","card-body-scrollable-shadow",2,"height","32rem"],[1,"card-footer","d-flex","align-items-center"],[1,"m-0","text-muted"],[3,"visible","fullScreen","visibleChange"],["pTemplate","header"],["pTemplate","content"],[1,"row","g-0"],[1,"col-auto"],[1,"card-body"],[1,"avatar","avatar-md"],[1,"card-body","ps-0"],[1,"mb-0"],["type","button",1,"btn-link","strong",3,"click"],[1,"col-auto","fs-3","text-green","strong"],[1,"row","strong"],[1,"col-md"],[1,"mt-3","list-inline","list-inline-dots","mb-0","text-secondary","d-sm-block","d-none"],[1,"list-inline-item"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-user-share"],["d","M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"],["d","M6 21v-2a4 4 0 0 1 4 -4h3"],["d","M16 22l5 -5"],["d","M21 21.5v-4.5h-4.5"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-inline"],["d","M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"],["d","M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"],[1,"mt-3","list","mb-0","text-secondary","d-block","d-sm-none"],[1,"list-item"],[1,"col-md-auto"],[1,"mt-3","badges"],[1,"badge","badge-outline","text-secondary","fw-normal","badge-pill"],["class","badge badge-outline text-secondary fw-normal badge-pill"],["class","card-footer text-end"],["class","row"],[1,"card-footer","text-end"],["class","form-label",4,"ngIf"],["type","submit",1,"btn","btn-primary","ms-auto",3,"click"],["type","submit",1,"btn","btn-danger","ms-auto",3,"click"],[1,"form-label"],[1,"mb-3"],[3,"innerHTML"],["jobform","ngForm"],[1,"form-label","required"],["type","text","required","","name","name","placeholder","Type Job Name","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["name","ngModel"],[1,"col-4"],["type","text","required","","name","preference","placeholder","Preference","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["preference","ngModel"],["value","Male"],["value","Female"],["value","Both"],["type","text","required","","name","maritalstatus","placeholder","Marital Status","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["maritalstatus","ngModel"],["value","Single"],["value","Married"],["type","text","required","","name","skills","placeholder","Skills","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["skills","ngModel"],[1,"col-3"],["type","text","required","","name","qualification","placeholder","Qualification","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["qualification","ngModel"],["value","Post Graduation"],["value","Graduation"],["value","Diploma"],["value","ITI"],["value","12th"],["value","10th"],["value","8th or Below"],["type","text","required","","name","experience","placeholder","Experience","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["experience","ngModel"],["type","text","required","","name","department","placeholder","Department","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["department","ngModel"],["value","Sales"],["value","Operation"],["value","HR"],["value","Admin"],["value","IT"],["value","Accounts"],["value","Back Office"],["value","GSD"],["value","EA"],["value","Office Boy"],["value","Driver"],["value","Supervisor"],["value","Other"],["type","text","required","","name","location","placeholder","Location","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["location","ngModel"],[1,"col-6"],[1,"form-label","required","text-center"],[1,"row","g-2"],["type","number","required","","name","agefrom","placeholder","Age From","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["agefrom","ngModel"],["type","number","required","","name","ageto","placeholder","Age To","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["ageto","ngModel"],["type","number","required","","name","salaryfrom","placeholder","Salary From","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["salaryfrom","ngModel"],["type","number","required","","name","salaryto","placeholder","Salary To","autocomplete","off",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["salaryto","ngModel"],[1,"NgxEditor__Wrapper"],[3,"editor","toolbar"],["name","description","placeholder","Type here...",3,"editor","ngModel","disabled","ngModelChange"],["type","submit",1,"btn","btn-primary","ms-auto",3,"disabled","click"],["class","card"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._uU(5," Overview "),e.qZA(),e.TgZ(6,"h2",5),e._uU(7," JD "),e.qZA()(),e.TgZ(8,"div",6)(9,"div",7)(10,"button",8),e.NdJ("click",function(){return i.Create()}),e.O4$(),e.TgZ(11,"svg",9),e._UZ(12,"path",10)(13,"path",11)(14,"path",12),e.qZA(),e._uU(15," Post JD "),e.qZA()()()()()(),e.kcU(),e.TgZ(16,"div",13)(17,"div",1),e._UZ(18,"div",14),e.TgZ(19,"div",15)(20,"div",16)(21,"div",17)(22,"div",18)(23,"div",19)(24,"div",20)(25,"div",21)(26,"select",22),e.NdJ("ngModelChange",function(p){return i.psize=p})("change",function(){return i.GetJobList()}),e.TgZ(27,"option",23),e._uU(28,"10"),e.qZA(),e.TgZ(29,"option",24),e._uU(30,"20"),e.qZA(),e.TgZ(31,"option",25),e._uU(32,"50"),e.qZA(),e.TgZ(33,"option",26),e._uU(34,"100"),e.qZA(),e.TgZ(35,"option",27),e._uU(36,"200"),e.qZA(),e.TgZ(37,"option",28),e._uU(38,"500"),e.qZA(),e.TgZ(39,"option",29),e._uU(40,"1000"),e.qZA()()(),e.TgZ(41,"div",30)(42,"select",31),e.NdJ("change",function(){return i.GetJobList()}),e.TgZ(43,"option",32),e._uU(44,"All"),e.qZA(),e.TgZ(45,"option",33),e._uU(46,"Pending"),e.qZA(),e.TgZ(47,"option",34),e._uU(48,"Hired"),e.qZA()()()()(),e.TgZ(49,"div",35)(50,"div",36)(51,"input",37),e.NdJ("ngModelChange",function(p){return i.searchvalue=p})("click",function(){return i.GetJobList()}),e.qZA(),e.TgZ(52,"span",38),e.O4$(),e.TgZ(53,"svg",9),e._UZ(54,"path",10)(55,"path",39)(56,"path",40),e.qZA()()()()()(),e.kcU(),e.TgZ(57,"div",41),e.SjG(58,y,55,19,"div",142,e.x6l),e.ALo(60,"filter"),e.qZA(),e.TgZ(61,"div",42)(62,"p",43),e._uU(63,"Showing "),e.TgZ(64,"span"),e._uU(65),e.qZA(),e._uU(66," to "),e.TgZ(67,"span"),e._uU(68),e.qZA(),e._uU(69," of "),e.TgZ(70,"span"),e._uU(71),e.qZA(),e._uU(72," entries "),e.qZA()()()()()(),e.TgZ(73,"p-sidebar",44),e.NdJ("visibleChange",function(p){return i.jobvisible=p}),e.YNc(74,S,5,2,"ng-template",45)(75,O,3,3,"ng-template",46),e.qZA()),2&o&&(e.xp6(26),e.Q6J("ngModel",i.psize),e.xp6(16),e.Q6J("ngModel",i.status),e.xp6(9),e.Q6J("ngModel",i.searchvalue),e.xp6(7),e.wJu(e.xi3(60,8,i.service.joblist,i.searchvalue)),e.xp6(7),e.Oqu(i.frompage),e.xp6(3),e.Oqu(i.topage),e.xp6(3),e.Oqu(i.total),e.xp6(2),e.Q6J("visible",i.jobvisible)("fullScreen",!0))},dependencies:[l.ez,l.mk,l.O5,l.gd,l.H9,l.uU,d.u5,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.Q7,d.On,d.F,Z.FilterPipe,g.l,g.Y,q.jx,b.FP,b.tP,b.Mn,m.Gg]})}return a})()},8468:(C,h,r)=>{r.d(h,{x:()=>_});var l=r(9212),d=r(4713),Z=r(2332);let _=(()=>{class g extends d.s{pathId;ngOnInit(){this.pathId="url(#"+(0,Z.Th)()+")"}static \u0275fac=(()=>{let m;return function(e){return(m||(m=l.n5z(g)))(e||g)}})();static \u0275cmp=l.Xpm({type:g,selectors:[["TimesCircleIcon"]],standalone:!0,features:[l.qOj,l.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(v,e){1&v&&(l.O4$(),l.TgZ(0,"svg",0)(1,"g"),l._UZ(2,"path",1),l.qZA(),l.TgZ(3,"defs")(4,"clipPath",2),l._UZ(5,"rect",3),l.qZA()()()),2&v&&(l.Tol(e.getClassNames()),l.uIk("aria-label",e.ariaLabel)("aria-hidden",e.ariaHidden)("role",e.role),l.xp6(1),l.uIk("clip-path",e.pathId),l.xp6(3),l.Q6J("id",e.pathId))},encapsulation:2})}return g})()}}]);