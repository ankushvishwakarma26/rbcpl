"use strict";(self.webpackChunkintranet=self.webpackChunkintranet||[]).push([[3455],{3455:(y,p,s)=>{s.r(p),s.d(p,{LoginhistoryComponent:()=>b});var g=s(6814),d=s(6472),a=s(6223),t=s(9212),c=s(5633),u=s(2425),h=s(5218);function m(n,r){1&n&&(t.TgZ(0,"div",37)(1,"div",38),t._UZ(2,"div",39),t.TgZ(3,"div",40),t._uU(4,"Loading Data......."),t.qZA(),t.TgZ(5,"div",41),t._UZ(6,"div",42),t.qZA()()())}function Z(n,r){if(1&n&&(t.TgZ(0,"div")(1,"a",49),t._uU(2,"View"),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hYB("href","https://www.google.com/maps?q=",e.longitude,",",e.latitude,"",t.LSH)}}function v(n,r){if(1&n&&(t.TgZ(0,"tr",47)(1,"td",48),t._uU(2),t.qZA(),t.TgZ(3,"td",48)(4,"div"),t._uU(5),t.qZA(),t.TgZ(6,"div"),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"div"),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"div"),t._uU(13),t.qZA()(),t.TgZ(14,"td")(15,"div")(16,"a",49),t._uU(17),t.qZA()()(),t.TgZ(18,"td")(19,"div"),t._uU(20),t.qZA(),t.YNc(21,Z,3,2,"div",50),t.qZA(),t.TgZ(22,"td")(23,"div"),t._uU(24),t.ALo(25,"date"),t.qZA()()()),2&n){const e=r.$implicit,i=r.index;t.xp6(2),t.Oqu(i+1),t.xp6(3),t.Oqu(e.fullname),t.xp6(2),t.Oqu(e.username),t.xp6(3),t.Oqu(e.logintype),t.xp6(3),t.Oqu(e.logon),t.xp6(3),t.MGl("href","https://whatismyipaddress.com/ip/",e.ipaddress,"",t.LSH),t.xp6(1),t.Oqu(e.ipaddress),t.xp6(3),t.Oqu(e.machine),t.xp6(1),t.Q6J("ngIf"," "!=e.longitude&&" "!=e.latitude&&e.longitude&&e.latitude),t.xp6(3),t.Oqu(t.xi3(25,10,e.logindate,"dd-MMM-yyyy hh:mm a"))}}const T=(n,r,e)=>({itemsPerPage:n,currentPage:r,totalItems:e});function f(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"table",43)(1,"thead")(2,"tr")(3,"th",44),t._uU(4,"S.No."),t.qZA(),t.TgZ(5,"th",38)(6,"button",45),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sortby("fullname"))}),t._uU(7,"User"),t.qZA()(),t.TgZ(8,"th",38)(9,"button",45),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sortby("logintype"))}),t._uU(10,"Login Type"),t.qZA()(),t.TgZ(11,"th",38)(12,"button",45),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sortby("logon"))}),t._uU(13,"Visited by"),t.qZA()(),t.TgZ(14,"th",38)(15,"button",45),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sortby("ipaddress"))}),t._uU(16,"IP Address"),t.qZA()(),t.TgZ(17,"th",38),t._uU(18,"Machine/Location"),t.qZA(),t.TgZ(19,"th",38)(20,"button",45),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sortby("logindate"))}),t._uU(21,"Login Date"),t.qZA()()()(),t.TgZ(22,"tbody"),t.YNc(23,v,26,13,"tr",46),t.ALo(24,"paginate"),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(23),t.Q6J("ngForOf",t.xi3(24,1,e.service.loginhistory,t.kEZ(4,T,e.psize,e.p,e.total)))}}let b=(()=>{class n{constructor(e,i,o){this.service=e,this.toast=i,this.sort=o,this.p=1,this.psize=10,this.total=0,this.frompage=1,this.topage=100,this.searchvalue="",this.status="Pending",this.loader=!1,this.searchloader=!1}ngOnInit(){this.LoadList(),this.getLocation()}getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{e&&(this.lat=e.coords.latitude,this.lng=e.coords.longitude)},e=>console.log(e)):alert("Geolocation is not supported by this browser.")}sortby(e){this.sort.orderby=e,this.sort.sortby="asc"==this.sort.sortby?"desc":"asc",this.LoadList()}LoadList(){this.service.GetLoginHistory(this.p,this.psize,this.searchvalue).subscribe(e=>{this.service.loginhistory=e.data,this.total=e.totalRecords,this.frompage=this.p*this.psize-(this.psize-1),this.topage=this.total>this.p*this.psize?this.p*this.psize:this.total},e=>{this.toast.error(e)})}pageChangeEvent(e){this.p=e,this.LoadList()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(c.K),t.Y36(u._W),t.Y36(h.K))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-loginhistory"]],standalone:!0,features:[t.jDz],decls:57,vars:7,consts:[[1,"page-header","d-print-none"],[1,"container-xl"],[1,"row","g-2","align-items-center"],[1,"col"],[1,"page-pretitle"],[1,"page-title"],[1,"col-auto","ms-auto","d-print-none"],[1,"btn-list"],[1,"page-body"],[1,"col-12"],[1,"card"],[1,"card-body","border-bottom","py-3"],[1,"d-flex"],[1,"text-muted"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","10"],["value","20"],["value","50"],["value","100"],["value","200"],["value","500"],["value","1000"],[1,"ms-auto","text-muted"],[1,"input-icon"],["type","text","placeholder","Search.....",1,"form-control",3,"ngModel","ngModelChange","keydown.enter"],[1,"input-icon-addon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"],["d","M21 21l-6 -6"],[1,"table-responsive",2,"height","27rem"],["class","page-center container container-slim py-4",4,"ngIf"],["class","table card-table table-vcenter datatable table-sm table-fixed",4,"ngIf"],[1,"card-footer","d-flex","align-items-center"],[1,"m-0","text-muted"],[1,"pagination","m-0","ms-auto"],[3,"pageChange"],[1,"page-center","container","container-slim","py-4"],[1,"text-center"],[1,"mb-3"],[1,"text-muted","mb-3"],[1,"progress","progress-sm"],[1,"progress-bar","progress-bar-indeterminate"],[1,"table","card-table","table-vcenter","datatable","table-sm","table-fixed"],[1,"w-1","text-center"],[1,"table-sort",3,"click"],["class","strong text-center",4,"ngFor","ngForOf"],[1,"strong","text-center"],[1,"text-nowrap"],["target","_blank",3,"href"],[4,"ngIf"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._uU(5," Overview "),t.qZA(),t.TgZ(6,"h2",5),t._uU(7," Login History "),t.qZA()(),t.TgZ(8,"div",6),t._UZ(9,"div",7),t.qZA()()()(),t.TgZ(10,"div",8)(11,"div",1)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"select",14),t.NdJ("ngModelChange",function(l){return o.psize=l})("change",function(){return o.LoadList()}),t.TgZ(18,"option",15),t._uU(19,"10"),t.qZA(),t.TgZ(20,"option",16),t._uU(21,"20"),t.qZA(),t.TgZ(22,"option",17),t._uU(23,"50"),t.qZA(),t.TgZ(24,"option",18),t._uU(25,"100"),t.qZA(),t.TgZ(26,"option",19),t._uU(27,"200"),t.qZA(),t.TgZ(28,"option",20),t._uU(29,"500"),t.qZA(),t.TgZ(30,"option",21),t._uU(31,"1000"),t.qZA()()(),t.TgZ(32,"div",22)(33,"div",23)(34,"input",24),t.NdJ("ngModelChange",function(l){return o.searchvalue=l})("keydown.enter",function(){return o.LoadList()}),t.qZA(),t.TgZ(35,"span",25),t.O4$(),t.TgZ(36,"svg",26),t._UZ(37,"path",27)(38,"path",28)(39,"path",29),t.qZA()()()()()(),t.kcU(),t.TgZ(40,"div",30),t.YNc(41,m,7,0,"div",31)(42,f,25,8,"table",32),t.qZA(),t.TgZ(43,"div",33)(44,"p",34),t._uU(45,"Showing "),t.TgZ(46,"span"),t._uU(47),t.qZA(),t._uU(48," to "),t.TgZ(49,"span"),t._uU(50),t.qZA(),t._uU(51," of "),t.TgZ(52,"span"),t._uU(53),t.qZA(),t._uU(54," entries "),t.qZA(),t.TgZ(55,"ul",35)(56,"pagination-controls",36),t.NdJ("pageChange",function(l){return o.pageChangeEvent(l)}),t.qZA()()()()()()()),2&i&&(t.xp6(17),t.Q6J("ngModel",o.psize),t.xp6(17),t.Q6J("ngModel",o.searchvalue),t.xp6(7),t.Q6J("ngIf",o.loader),t.xp6(1),t.Q6J("ngIf",!o.loader),t.xp6(5),t.Oqu(o.frompage),t.xp6(3),t.Oqu(o.topage),t.xp6(3),t.Oqu(o.total))},dependencies:[g.ez,g.sg,g.O5,g.uU,a.u5,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.On,d.JX,d._s,d.LS]})}return n})()}}]);