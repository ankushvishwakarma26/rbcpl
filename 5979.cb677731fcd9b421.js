"use strict";(self.webpackChunkintranet=self.webpackChunkintranet||[]).push([[5979],{5979:(m,l,o)=>{o.r(l),o.d(l,{SaleorderComponent:()=>h});var i=o(6814),d=o(6223),e=o(9212),g=o(266),u=o(5633),p=o(2425);function c(a,s){1&a&&(e.TgZ(0,"div",32)(1,"div",33),e._UZ(2,"div",34),e.TgZ(3,"div",35),e._uU(4,"Loading Data......."),e.qZA(),e.TgZ(5,"div",36),e._UZ(6,"div",37),e.qZA()()())}function Z(a,s){if(1&a&&(e.TgZ(0,"tr",41)(1,"td",42),e._uU(2),e.qZA(),e.TgZ(3,"td",33)(4,"div")(5,"div"),e._uU(6),e.qZA(),e.TgZ(7,"div"),e._uU(8),e.qZA()()(),e.TgZ(9,"td",43)(10,"div"),e._uU(11),e.qZA(),e.TgZ(12,"div"),e._uU(13),e.ALo(14,"currency"),e.qZA()(),e.TgZ(15,"td",43)(16,"div"),e._uU(17),e.qZA(),e.TgZ(18,"div"),e._uU(19),e.ALo(20,"date"),e.qZA()(),e.TgZ(21,"td",43)(22,"div"),e._uU(23),e.qZA(),e.TgZ(24,"div"),e._uU(25),e.qZA()()()),2&a){const t=s.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(4),e.Oqu(t.name),e.xp6(2),e.Oqu(t.station),e.xp6(3),e.Oqu(t.orderno),e.xp6(2),e.Oqu(e.xi3(14,9,t.invoiceamount,"INR")),e.xp6(4),e.Oqu(t.invoiceno),e.xp6(2),e.Oqu(e.xi3(20,12,t.invoicedate,"dd-MMM-yy hh:mm a")),e.xp6(4),e.Oqu(t.weight),e.xp6(2),e.Oqu(t.nofocartons)}}function _(a,s){if(1&a&&(e.TgZ(0,"table",38)(1,"thead")(2,"tr")(3,"th",39),e._uU(4,"S.No."),e.qZA(),e.TgZ(5,"th",33),e._uU(6,"Order ID"),e.qZA(),e.TgZ(7,"th",33),e._uU(8,"Customer Name"),e.qZA(),e.TgZ(9,"th",33),e._uU(10,"Date"),e.qZA(),e.TgZ(11,"th",33),e._uU(12,"Total Quantity"),e.qZA(),e.TgZ(13,"th",33),e._uU(14,"Total Amount"),e.qZA(),e.TgZ(15,"th",33),e._uU(16,"Remarks"),e.qZA(),e.TgZ(17,"th",33),e._uU(18,"Created by"),e.qZA(),e.TgZ(19,"th",33),e._uU(20,"Action"),e.qZA()()(),e.TgZ(21,"tbody"),e.YNc(22,Z,26,15,"tr",40),e.qZA()()),2&a){const t=e.oxw();e.xp6(22),e.Q6J("ngForOf",t.leavelist)}}let h=(()=>{class a{constructor(t,r,n){this.route=t,this.userservice=r,this.toast=n,this.currentdate=new Date,this.p=1,this.total=0,this.frompage=1,this.topage=100,this.searchvalue="",this.status="",this.loader=!1,this.searchloader=!1}ngAfterViewInit(){var t=this.userservice.GetTokenExpiry();console.log(t),null!=t?this.userservice.isTokenExpired(t)&&(this.toast.error("Login Expired!!! Please Re-login again"),setTimeout(()=>{this.route.navigate(["/login"])},1e3)):this.route.navigate(["/login"])}ngOnInit(){}onsearchtextchanged(){}pageChangeEvent(t){this.p=t}calculatedateaging(t){let r=new Date;return t=new Date(t),Math.floor((Date.UTC(r.getFullYear(),r.getMonth(),r.getDate())-Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()))/864e5)>0}static#e=this.\u0275fac=function(r){return new(r||a)(e.Y36(g.F0),e.Y36(u.K),e.Y36(p._W))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-saleorder"]],standalone:!0,features:[e.jDz],decls:53,vars:6,consts:[[1,"page-header","d-print-none"],[1,"container-xl"],[1,"row","g-2","align-items-center"],[1,"col"],[1,"page-pretitle"],[1,"page-title"],[1,"col-auto","ms-auto","d-print-none"],[1,"btn-list"],["routerLink","/createneworder","data-bs-toggle","modal","data-bs-target","#modal-report",1,"btn","btn-primary","d-none","d-sm-inline-block"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M12 5l0 14"],["d","M5 12l14 0"],["routerLink","/createneworder","data-bs-toggle","modal","data-bs-target","#modal-report","aria-label","Create new report",1,"btn","btn-primary","d-sm-none","btn-icon"],[1,"page-body"],[1,"col-12"],[1,"card"],[1,"card-body","border-bottom","py-3"],[1,"d-flex"],[1,"text-muted"],[1,"card-title"],[1,"ms-auto","text-muted"],[1,"input-icon"],["type","text","placeholder","Search.....",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-icon-addon"],["d","M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"],["d","M21 21l-6 -6"],[1,"table-responsive",2,"height","27rem"],["class","page-center container container-slim py-4",4,"ngIf"],["class","table card-table table-vcenter datatable table-sm",4,"ngIf"],[1,"card-footer","d-flex","align-items-center"],[1,"m-0","text-muted"],[1,"page-center","container","container-slim","py-4"],[1,"text-center"],[1,"mb-3"],[1,"text-muted","mb-3"],[1,"progress","progress-sm"],[1,"progress-bar","progress-bar-indeterminate"],[1,"table","card-table","table-vcenter","datatable","table-sm"],[1,"w-1","text-center"],["class","strong",4,"ngFor","ngForOf"],[1,"strong"],[1,"text-nowrap","text-center"],[1,"text-center","text-center"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._uU(5," Overview "),e.qZA(),e.TgZ(6,"h2",5),e._uU(7," Sale Order "),e.qZA()(),e.TgZ(8,"div",6)(9,"div",7)(10,"a",8),e.O4$(),e.TgZ(11,"svg",9),e._UZ(12,"path",10)(13,"path",11)(14,"path",12),e.qZA(),e._uU(15," Create "),e.qZA(),e.kcU(),e.TgZ(16,"a",13),e.O4$(),e.TgZ(17,"svg",9),e._UZ(18,"path",10)(19,"path",11)(20,"path",12),e.qZA()()()()()()(),e.kcU(),e.TgZ(21,"div",14)(22,"div",1)(23,"div",15)(24,"div",16)(25,"div",17)(26,"div",18)(27,"div",19)(28,"h2",20),e._uU(29,"Sale Order "),e.qZA()(),e.TgZ(30,"div",21)(31,"div",22)(32,"input",23),e.NdJ("ngModelChange",function(v){return n.searchvalue=v}),e.qZA(),e.TgZ(33,"span",24),e.O4$(),e.TgZ(34,"svg",9),e._UZ(35,"path",10)(36,"path",25)(37,"path",26),e.qZA()()()()()(),e.kcU(),e.TgZ(38,"div",27),e.YNc(39,c,7,0,"div",28)(40,_,23,1,"table",29),e.qZA(),e.TgZ(41,"div",30)(42,"p",31),e._uU(43,"Showing "),e.TgZ(44,"span"),e._uU(45),e.qZA(),e._uU(46," to "),e.TgZ(47,"span"),e._uU(48),e.qZA(),e._uU(49," of "),e.TgZ(50,"span"),e._uU(51),e.qZA(),e._uU(52," entries"),e.qZA()()()()()()),2&r&&(e.xp6(32),e.Q6J("ngModel",n.searchvalue),e.xp6(7),e.Q6J("ngIf",n.loader),e.xp6(1),e.Q6J("ngIf",!n.loader),e.xp6(5),e.Oqu(n.frompage),e.xp6(3),e.Oqu(n.topage),e.xp6(3),e.Oqu(n.total))},dependencies:[i.ez,i.sg,i.O5,i.H9,i.uU,d.u5,d.Fj,d.JJ,d.On]})}return a})()}}]);