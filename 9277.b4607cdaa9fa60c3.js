"use strict";(self.webpackChunkintranet=self.webpackChunkintranet||[]).push([[9277],{7372:(Z,g,c)=>{c.d(g,{w:()=>m});var d=c(9212),u=c(9862),f=c(2425),b=c(5633),x=c(5218);let m=(()=>{class _{constructor(n,l,p,v){this.http=n,this.toast=l,this.service=p,this.sort=v,this.progressinvoice=!1,this.parthurl="http://10.10.9.190:1111/api/",this.erpurl="http://103.59.180.17:1112/api/ERP/"}viewinvoice(n){this.progressinvoice=!0,this.dmsdocument=null,this.documentname="View Invoice",this.GetDMSDocumentbyid(n).subscribe(l=>{"success"==l.status?window.open("http://103.59.180.17:1114/FTP DATA/"+l.invoice.filepath,"_blank"):(this.toast.error(l.message,"Error"),this.dmsdocument=null)})}closepdf(){this.invoice=!1,this.dmsdocument=null}GetTodayscall(n){return this.http.get(this.parthurl+"Parth?user="+n)}GetAllcall(n,l,p){return this.http.get(""!=p?this.parthurl+"Parth/AllRecording?start="+n+"&end="+l+"&user="+p:this.parthurl+"Parth/AllRecording?start="+n+"&end="+l)}GetUser(){return this.http.get(this.parthurl+"Parth/GetUser")}Recordingbycontact(n,l){return this.http.get(this.parthurl+"Parth/Recordingbycontact?contact1="+n+"&contact2="+l)}GetRecordingbyid(n){return this.http.get(this.parthurl+"Parth/GetRecordingbyid?id="+n)}GetRecordingbyactivity(n,l,p){return this.http.get(this.parthurl+"Parth/GetRecordingbyactivity?contact1="+n+"&contact2="+l+"&date="+p)}GetRecordingbytime(n,l){return this.http.get(""!=this.sort.orderby&&""!=this.sort.sortby?this.parthurl+"Parth/GetRecordingbytime?user="+n+"&date="+l+"&orderby="+this.sort.orderby+"&sortby="+this.sort.sortby:this.parthurl+"Parth/GetRecordingbytime?user="+n+"&date="+l)}GetRecordingbyday(n,l){return this.http.get(""!=this.sort.orderby&&""!=this.sort.sortby?this.parthurl+"Parth/GetRecordingbyday?user="+n+"&date="+l+"&orderby="+this.sort.orderby+"&sortby="+this.sort.sortby:this.parthurl+"Parth/GetRecordingbyday?user="+n+"&date="+l)}GetAudio(n){return this.http.get(this.parthurl+"Parth/GetAudio?filePath="+n)}Getdealbyid(n){return this.http.get(this.erpurl+"GetDealbyDealNoforDPL/"+n)}GetDealbyOrderid(n){return this.http.get(this.erpurl+"GetDealbyOrderNoforDPL/"+n)}GetInvoicelistbyaccode(n){return this.http.get(this.erpurl+"GetInvoicebyaccode/"+n)}GetInvoicebyinvoiceid(n){return this.http.get(this.erpurl+"GetInvoicebyId/"+n)}GetInvoicebyOrderno(n){return this.http.get(this.erpurl+"GetInvoicebyorderno/"+n)}GetOrderDetailsbyId(n){return this.http.get(this.erpurl+"GetOrderDetailsbyId/"+n)}GetOrderDetailsbyaccode(n){return this.http.get(this.erpurl+"GetOrderDetailsbyaccode/"+n)}GetDMSDocumentbyid(n){return this.http.get(this.erpurl+"GetDMSDocumentbyid/"+n)}ItemSearch(n){return this.http.get(""!=n?this.erpurl+"ItemSearch?Search="+n:this.erpurl+"ItemSearch")}GetCRMActivityReport(n,l,p,v){return this.http.get(""!=p?this.erpurl+"GetCRMActivityReport?startdate="+n+"&enddate="+l+"&user="+p+"&condition="+v:this.erpurl+"GetCRMActivityReport?startdate="+n+"&enddate="+l+"&condition="+v)}GetCRMActivitydaywise(n,l,p){return this.http.get(this.erpurl+"GetCRMActivitydaywise?startdate="+n+"&enddate="+l+"&user="+p)}GetCRMOrderbyid(n){return this.http.get(this.erpurl+"GetCRMOrderbyid/"+n)}GetInvoiceData(n){return this.http.get(this.erpurl+"GetInvoiceData/"+n)}static#e=this.\u0275fac=function(l){return new(l||_)(d.LFG(u.eN),d.LFG(f._W),d.LFG(b.K),d.LFG(x.K))};static#t=this.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},9277:(Z,g,c)=>{c.r(g),c.d(g,{GeroverdueComponent:()=>se});var d=c(6814),u=c(6223),f=c(6521),b=c(7248),x=c(9246),m=c(951),_=c(1312),e=c(9212),n=c(377),l=c(2425),p=c(7372),v=c(5633),T=c(7473),A=c(1148),C=c(5219);const G=()=>[d.mk,d.sg,d.H9,d.uU,u.Fj,u.JJ,u.On,x.Y,C.jx,Promise.resolve().then(c.bind(c,2681)).then(s=>s.FilterPipe)],y=()=>[d.mk,d.sg,d.O5,d.H9,d.uU,u._Y,u.Fj,u.JJ,u.JL,u.Q7,u.On,u.F,C.jx,b.E,f.p,c.e(9176).then(c.bind(c,9176)).then(s=>s.TenderchatComponent),_.V];function M(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"h2",4),e._uU(1,"GER Overdue List"),e.qZA(),e.TgZ(2,"div",5)(3,"div",6)(4,"input",7),e.NdJ("ngModelChange",function(r){e.CHM(t);const o=e.oxw(2);return e.KtG(o.searchvalue=r)}),e.qZA(),e.TgZ(5,"span",8),e.O4$(),e.TgZ(6,"svg",9),e._UZ(7,"path",10)(8,"path",11)(9,"path",12),e.qZA()()()()}if(2&s){const t=e.oxw(2);e.xp6(4),e.Q6J("ngModel",t.searchvalue)}}function D(s,a){if(1&s&&(e._uU(0),e.TgZ(1,"span",25),e._uU(2),e.qZA(),e.TgZ(3,"span",25),e._uU(4),e.qZA()),2&s){const t=e.oxw().$implicit;e.hij(" ",t.uid," "),e.xp6(1),e.Q6J("ngClass","P2P"==t.type?"text-muted":"text-danger"),e.xp6(1),e.hij("(",t.type,")"),e.xp6(1),e.Q6J("ngClass","F2"==t.buyeraddress?"text-purple":"F3"==t.buyeraddress?"text-yellow":"F4"==t.buyeraddress?"text-orange":""),e.xp6(1),e.hij("(",t.buyeraddress,")")}}function U(s,a){if(1&s&&(e._uU(0),e.TgZ(1,"span",25),e._uU(2),e.qZA()),2&s){const t=e.oxw().$implicit;e.hij(" ",t.diesticket," "),e.xp6(1),e.Q6J("ngClass","P2P"==t.type?"text-muted":"text-danger"),e.xp6(1),e.hij("(",t.type,")")}}function O(s,a){if(1&s&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"currency"),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(1),e.AsE("",t.quantity,"(",e.xi3(2,2,t.rate,"INR"),")")}}function E(s,a){if(1&s&&(e.TgZ(0,"div"),e._uU(1),e.ALo(2,"currency"),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA()),2&s){const t=e.oxw().$implicit;e.xp6(1),e.AsE("",t.quantity,"(",e.xi3(2,4,t.rate,"INR"),")"),e.xp6(3),e.AsE("",t.size," (",t.repeat,")")}}function P(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"tr",20)(1,"td",21),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.YNc(4,D,5,5)(5,U,3,3),e.qZA(),e.TgZ(6,"td")(7,"div")(8,"button",22),e.NdJ("click",function(){const o=e.CHM(t).$implicit,h=e.oxw(3);return e.KtG(h.opendetails(o.uid))}),e._uU(9),e.qZA()(),e.TgZ(10,"div",23),e._uU(11),e.qZA()(),e.TgZ(12,"td"),e.YNc(13,O,3,5,"div")(14,E,5,7),e.qZA(),e.TgZ(15,"td")(16,"div"),e._uU(17),e.ALo(18,"date"),e.qZA()(),e.TgZ(19,"td")(20,"div"),e._uU(21),e.qZA(),e.TgZ(22,"div"),e._uU(23),e.ALo(24,"date"),e.qZA()(),e.TgZ(25,"td")(26,"button",24),e.NdJ("click",function(){const o=e.CHM(t).$implicit,h=e.oxw(3);return e.KtG(h.expendaccordion(o))}),e._uU(27,"Action"),e.qZA()()()}if(2&s){const t=a.$implicit,i=a.index;e.xp6(2),e.Oqu(i+1),e.xp6(2),e.um2(4,"P2P"==t.type?4:5),e.xp6(5),e.Oqu(t.name),e.xp6(2),e.Oqu(t.itemname),e.xp6(2),e.um2(13,"P2P"==t.type?13:14),e.xp6(4),e.Oqu(e.xi3(18,8,t.eta,"dd/MM/yy")),e.xp6(4),e.Oqu(t.poby),e.xp6(2),e.Oqu(e.xi3(24,11,t.podate,"dd-MMM-yyyy hh:mm a"))}}function q(s,a){if(1&s&&(e.TgZ(0,"div",13)(1,"div",14)(2,"div",15)(3,"div",16)(4,"table",17)(5,"thead")(6,"tr")(7,"th",18),e._uU(8,"S.No."),e.qZA(),e.TgZ(9,"th",18),e._uU(10,"UID"),e.qZA(),e.TgZ(11,"th",18),e._uU(12,"Vender Name/Item Name"),e.qZA(),e.TgZ(13,"th",18),e._uU(14,"Rate/Qty"),e.qZA(),e.TgZ(15,"th",18),e._uU(16,"ETA"),e.qZA(),e.TgZ(17,"th",18),e._uU(18,"Last Update"),e.qZA(),e.TgZ(19,"th",18),e._uU(20,"Action"),e.qZA()()(),e.TgZ(21,"tbody"),e.YNc(22,P,28,14,"tr",19),e.ALo(23,"filter"),e.qZA()()()()()()),2&s){const t=e.oxw(2);e.xp6(22),e.Q6J("ngForOf",e.xi3(23,1,t.service.p2plistoverduelist,t.searchvalue))}}function w(s,a){if(1&s&&(e.TgZ(0,"div",26)(1,"p",27),e._uU(2,"Showing "),e.TgZ(3,"span"),e._uU(4,"1"),e.qZA(),e._uU(5," to "),e.TgZ(6,"span"),e._uU(7),e.qZA(),e._uU(8," of "),e.TgZ(9,"span"),e._uU(10),e.qZA(),e._uU(11," entries"),e.qZA()()),2&s){const t=e.oxw(3);e.xp6(7),e.Oqu(t.service.p2plistoverduelist.length),e.xp6(3),e.Oqu(t.service.p2plistoverduelist.length)}}function R(s,a){1&s&&e.YNc(0,w,12,2,"ng-template",3)}function I(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"p-sidebar",0),e.NdJ("visibleChange",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.service.geroverduevisible=r)}),e.YNc(1,M,10,1,"ng-template",1)(2,q,24,4,"ng-template",2)(3,R,1,0,null,3),e.qZA()}if(2&s){const t=e.oxw();e.Q6J("visible",t.service.geroverduevisible)("fullScreen",!0),e.xp6(3),e.um2(3,t.service.p2plistoverduelist?3:-1)}}function N(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",58)(1,"button",24),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.movetoback(r.service.p2pitemdata.Id,"PO"))}),e._uU(2,"Back to PO"),e.qZA()()}}function F(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",58)(1,"button",59),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.Cancel("Cancel"))}),e._uU(2,"Cancel"),e.qZA()()}}function L(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",60)(1,"button",61),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.GetPODetails(r.service.p2pitemdata.pono))}),e._uU(2),e.qZA()()}if(2&s){const t=e.oxw(2);e.xp6(2),e.Oqu(t.service.p2pitemdata.pono)}}function S(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",60)(1,"button",62),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.service.PrintPObypono(r.service.p2pitemdata.pono))}),e.O4$(),e.TgZ(2,"svg",63),e._UZ(3,"path",10)(4,"path",64)(5,"path",65)(6,"path",66),e.qZA()()()}}function J(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",67)(1,"label",42),e._uU(2,"Cancel Reason"),e.qZA(),e.TgZ(3,"textarea",69,70),e.NdJ("ngModelChange",function(r){e.CHM(t);const o=e.oxw(3);return e.KtG(o.service.p2pitemdata.cancelledreason=r)}),e._uU(5,"                    "),e.qZA()()}if(2&s){const t=e.MAs(4),i=e.oxw(3);e.xp6(3),e.Q6J("ngClass",t.invalid?"is-invalid":"is-valid mb-2")("ngModel",i.service.p2pitemdata.cancelledreason)}}function K(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",67)(1,"label",42),e._uU(2,"Reject Reason"),e.qZA(),e.TgZ(3,"textarea",71,72),e.NdJ("ngModelChange",function(r){e.CHM(t);const o=e.oxw(3);return e.KtG(o.service.p2pitemdata.rejectedreason=r)}),e._uU(5,"                      "),e.qZA()()}if(2&s){const t=e.MAs(4),i=e.oxw(3);e.xp6(3),e.Q6J("ngClass",t.invalid?"is-invalid":"is-valid mb-2")("ngModel",i.service.p2pitemdata.rejectedreason)}}function Q(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",67)(1,"form",36,68),e.NdJ("ngSubmit",function(){e.CHM(t);const r=e.MAs(2),o=e.oxw(2);return e.KtG(r.form.valid&&o.CancelOrReject(r))}),e.TgZ(3,"div",56),e.YNc(4,J,6,2,"div",35)(5,K,6,2,"div",35),e.TgZ(6,"div",53)(7,"div",54)(8,"button",55),e._uU(9),e.qZA()()()()()()}if(2&s){const t=e.MAs(2),i=e.oxw(2);e.xp6(4),e.um2(4,"Cancel"==i.canceltype?4:-1),e.xp6(1),e.um2(5,"Reject"==i.canceltype?5:-1),e.xp6(3),e.Q6J("disabled",t.invalid),e.xp6(1),e.Oqu(i.canceltype)}}function j(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"tr",75)(1,"td",74),e._uU(2),e.qZA(),e.TgZ(3,"td",76)(4,"div")(5,"button",22),e.NdJ("click",function(){const o=e.CHM(t).$implicit,h=e.oxw(3);return e.KtG(h.service.PrintPObypono(o.order_no))}),e._uU(6),e.qZA()()(),e.TgZ(7,"td",76)(8,"div"),e._uU(9),e.qZA()(),e.TgZ(10,"td",76)(11,"div"),e._uU(12),e.ALo(13,"currency"),e.qZA()(),e.TgZ(14,"td",76)(15,"div"),e._uU(16),e.ALo(17,"currency"),e.qZA()(),e.TgZ(18,"td",76)(19,"div"),e._uU(20),e.ALo(21,"date"),e.qZA()(),e.TgZ(22,"td",76)(23,"div"),e._uU(24),e.ALo(25,"date"),e.qZA()(),e.TgZ(26,"td",76)(27,"div"),e._uU(28),e.ALo(29,"currency"),e.qZA()()()}if(2&s){const t=a.$implicit,i=a.$index;e.xp6(2),e.hij(" ",i+1," "),e.xp6(4),e.Oqu(t.itemname),e.xp6(3),e.Oqu(t.item_qty),e.xp6(3),e.Oqu(e.xi3(13,8,t.item_rate,"INR")),e.xp6(4),e.Oqu(e.xi3(17,11,t.item_amt,"INR")),e.xp6(4),e.Oqu(e.xi3(21,14,t.ord_date,"dd-MMM-yyyy")),e.xp6(4),e.Oqu(e.xi3(25,17,t.eta,"dd-MMM-yyyy")),e.xp6(4),e.Oqu(e.xi3(29,20,t.Received,"INR"))}}function Y(s,a){if(1&s&&(e.TgZ(0,"div",67)(1,"div",16)(2,"table",73)(3,"thead")(4,"tr")(5,"th",74),e._uU(6,"S.No."),e.qZA(),e.TgZ(7,"th",18),e._uU(8,"Item Name"),e.qZA(),e.TgZ(9,"th",18),e._uU(10,"Quantity"),e.qZA(),e.TgZ(11,"th",18),e._uU(12,"Rate"),e.qZA(),e.TgZ(13,"th",18),e._uU(14,"Amount"),e.qZA(),e.TgZ(15,"th",18),e._uU(16,"Created Date"),e.qZA(),e.TgZ(17,"th",18),e._uU(18,"ETA"),e.qZA(),e.TgZ(19,"th",18),e._uU(20,"Received"),e.qZA()()(),e.TgZ(21,"tbody"),e.SjG(22,j,30,23,"tr",77,e.x6l),e.qZA()()()()),2&s){const t=e.oxw(2);e.xp6(22),e.wJu(t.service.popendingitemlist)}}function k(s,a){1&s&&(e.TgZ(0,"div",78),e._uU(1,"Drag and drop files"),e.qZA())}function W(s,a){if(1&s&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&s){const t=a.$implicit;e.xp6(1),e.AsE("",t.name," - ",t.size," bytes ")}}function B(s,a){if(1&s&&(e.TgZ(0,"ul"),e.YNc(1,W,2,2,"li",80),e.qZA()),2&s){const t=e.oxw(3);e.xp6(1),e.Q6J("ngForOf",t.uploadedFiles)}}function H(s,a){if(1&s&&e.YNc(0,B,2,1,"ul",79),2&s){const t=e.oxw(2);e.Q6J("ngIf",t.uploadedFiles.length)}}function $(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"button",89),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,o=e.oxw(2);return e.KtG(o.DeleteImage(r.id))}),e.O4$(),e.TgZ(1,"svg",9),e._UZ(2,"path",10)(3,"path",90)(4,"path",91),e.qZA()()}}function z(s,a){if(1&s&&e._UZ(0,"p-image",92),2&s){const t=e.oxw().$implicit,i=e.oxw(2);e.Q6J("src",i.imageservice.imageurl+t.path)("preview",!0)}}function V(s,a){if(1&s&&(e.TgZ(0,"a",93),e._UZ(1,"img",94),e.qZA()),2&s){const t=e.oxw().$implicit,i=e.oxw(2);e.Q6J("href",i.imageservice.imageurl+t.path,e.LSH)}}function X(s,a){if(1&s&&(e.TgZ(0,"div",81)(1,"div",15)(2,"div",82)(3,"h3",83),e._uU(4),e.qZA(),e.TgZ(5,"div",84),e.YNc(6,$,5,0,"button",85),e.qZA()(),e.TgZ(7,"div",86),e.YNc(8,z,1,2,"p-image",87)(9,V,2,1,"a",88),e.qZA()()()),2&s){const t=a.$implicit,i=e.oxw(2);e.xp6(4),e.Oqu(t.type),e.xp6(2),e.Q6J("ngIf",i.isadmin),e.xp6(2),e.Q6J("ngIf","pdf"!=t.path.split(".").pop()),e.xp6(1),e.Q6J("ngIf","pdf"==t.path.split(".").pop())}}function ee(s,a){1&s&&(e.TgZ(0,"h1",95),e._uU(1,"No File Uploaded"),e.qZA())}const te=()=>({width:"100vw"});function ie(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"p-dialog",28),e.NdJ("visibleChange",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.visible=r)}),e.TgZ(1,"div",29)(2,"div",30)(3,"div",13)(4,"div",31)(5,"label",32),e._uU(6),e.qZA(),e.TgZ(7,"label",32),e._uU(8),e.qZA()(),e.TgZ(9,"div",31)(10,"label",32),e._uU(11),e.qZA(),e.TgZ(12,"label",32),e._uU(13),e.ALo(14,"currency"),e.qZA()()(),e.TgZ(15,"div",13),e.YNc(16,N,3,0,"div",33)(17,F,3,0,"div",33)(18,L,3,1,"div",34)(19,S,7,0,"div",34)(20,Q,10,4,"div",35),e.qZA(),e.YNc(21,Y,24,0,"div",35),e.TgZ(22,"div",14)(23,"form",36,37),e.NdJ("ngSubmit",function(){e.CHM(t);const r=e.MAs(24),o=e.oxw();return e.KtG(r.form.valid&&o.updateger(r))}),e.TgZ(25,"div",13),e._UZ(26,"input",38)(27,"input",39),e.TgZ(28,"div",40)(29,"div",41)(30,"label",42),e._uU(31,"GER Number"),e.qZA(),e.TgZ(32,"input",43,44),e.NdJ("ngModelChange",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.service.p2pitemdata.ger=r)}),e.qZA()()(),e.TgZ(34,"div",45)(35,"div",41)(36,"label",42),e._uU(37,"Upload Purchase Invoice"),e.qZA(),e.TgZ(38,"input",46,47),e.NdJ("ngModelChange",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.service.p2pitemdata.purchaseinvoice=r)}),e.qZA(),e.TgZ(40,"p-fileUpload",48),e.NdJ("onUpload",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.onUpload(r))}),e.YNc(41,k,2,0,"ng-template",49)(42,H,1,1,"ng-template",2),e.qZA()()(),e.TgZ(43,"div",50)(44,"div",41)(45,"label",42),e._uU(46,"Remarks"),e.qZA(),e.TgZ(47,"textarea",51,52),e.NdJ("ngModelChange",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.service.p2pdata.gerremarks=r)}),e._uU(49,"              "),e.qZA()(),e.TgZ(50,"div",53)(51,"div",54)(52,"button",55),e._uU(53,"Submit"),e.qZA()()()()()()(),e.TgZ(54,"div",56),e.SjG(55,X,10,4,"div",96,e.x6l,!1,ee,2,0),e.qZA()(),e.TgZ(58,"div",57),e._UZ(59,"app-tenderchat"),e.qZA()()()}if(2&s){const t=e.MAs(24),i=e.MAs(33),r=e.MAs(48),o=e.oxw();e.Akn(e.DdM(28,te)),e.Q6J("visible",o.visible)("maximizable",!0),e.xp6(6),e.hij("Vender : ",o.service.p2pitemdata.name,""),e.xp6(2),e.hij("Quantity : ",o.service.p2pitemdata.quantity,""),e.xp6(3),e.hij("Item Name : ",o.service.p2pitemdata.itemname,""),e.xp6(2),e.hij("Rate : ",e.xi3(14,25,o.service.p2pitemdata.rate,"INR"),""),e.xp6(3),e.Q6J("ngIf",o.isadmin),e.xp6(1),e.Q6J("ngIf",o.iscancel),e.xp6(1),e.Q6J("ngIf",o.service.p2pitemdata.pono),e.xp6(1),e.Q6J("ngIf",o.service.p2pitemdata.pono),e.xp6(1),e.um2(20,o.cancelledorrejectvisible?20:-1),e.xp6(1),e.um2(21,o.podetailslist?21:-1),e.xp6(5),e.Q6J("value",o.service.p2pitemdata.Id),e.xp6(1),e.Q6J("value",o.service.p2pitemdata.uid),e.xp6(5),e.Q6J("ngClass",i.invalid?"is-invalid":"is-valid mb-2")("ngModel",o.service.p2pitemdata.ger),e.xp6(6),e.Q6J("ngModel",o.service.p2pitemdata.purchaseinvoice),e.xp6(2),e.Q6J("url",o.imageservice.uploadurl+"/"+o.service.p2pitemdata.uid+"/Purchase_Invoice")("multiple",!0),e.xp6(7),e.Q6J("ngClass",r.invalid?"is-invalid":"is-valid mb-2")("ngModel",o.service.p2pdata.gerremarks),e.xp6(5),e.Q6J("disabled",t.invalid),e.xp6(3),e.wJu(o.imageservice.rcuploadedlist)}}let se=(()=>{class s{constructor(t,i,r,o,h,re){this.service=t,this.toast=i,this.erpservice=r,this.userservice=o,this.imageservice=h,this.tenderservice=re,this.isadmin=!1,this.iscancel=!1,this.searchvalue="",this.panelOpenState=!1,this.uploadedFiles=[],this.cancelledorrejectvisible=!1,this.visible=!1,this.count=0,this.gerbutton=!0,this.podetailslist=!1}ngOnInit(){"Admin"==this.userservice.GetRole()&&(this.isadmin=!0,this.iscancel=!0),"pc2@desmat.com"==this.userservice.GetUserName()&&(this.isadmin=!0),this.enablepobutton()}opendetails(t){this.service.GetP2Pbyid(t).subscribe(i=>{this.service.p2pdata=i.data}),this.service.detail=!0,null!=this.service.p2pdata.accountdate?this.service.p2pdata.status=10:null!=this.service.p2pdata.movementdate?this.service.p2pdata.status=9:null!=this.service.p2pdata.mrndate?this.service.p2pdata.status=8:null!=this.service.p2pdata.mandate?this.service.p2pdata.status=7:null!=this.service.p2pdata.gerdate?this.service.p2pdata.status=6:null!=this.service.p2pdata.podate?this.service.p2pdata.status=5:null!=this.service.p2pdata.approvaldate||null!=this.service.p2pdata.quotationdate?this.service.p2pdata.status=4:null!=this.service.p2pdata.updateddate?this.service.p2pdata.status=2:null!=this.service.p2pdata.createddate&&(this.service.p2pdata.status=1),this.service.GetP2PItemListbyid(t).subscribe(i=>{console.log(i),"success"==i.status&&(this.service.p2pitemlist=i.data)}),this.service.GetP2PApprovedItemListbyid(t).subscribe(i=>{console.log(i),"success"==i.status&&(this.service.p2papproveditemlist=i.data)}),this.imageservice.GetDocumentsbyid(t).subscribe(i=>{"success"==i.status&&(this.imageservice.rcuploadedlist=i.data),console.log(i)})}LoadOverdueList(){this.service.P2PItemList("GEROverdue").subscribe(t=>{console.log(t),"success"==t.status&&(this.service.p2plistoverduelist=t.data)},t=>{this.toast.error(t)})}LoadDashboard(){this.service.GetDashboardReport().subscribe(t=>{this.service.dashboarddata=t})}ApproveItem(t){this.service.p2pitemdata=t,this.service.ApproveQuotation().subscribe(i=>{"approved"==i.status?this.toast.success(i.message,"Approved"):"rejected"==i.status?this.toast.warning(i.message,"Rejected"):"cancelled"==i.status&&this.toast.error(i.message,"Error"),this.enablepobutton()},i=>{this.toast.error(i,"Error")})}movetoquotation(){1==confirm("Are You Sure want to Move Item to Quotation?")&&(this.service.p2pdata.quotationby=null,this.service.p2pdata.quotationdate=null,this.service.p2pdata.approvedby=null,this.service.p2pdata.approvaldate=null,this.service.p2pdata.poby=null,this.service.p2pdata.podate=null,this.service.p2pdata.gerby=null,this.service.p2pdata.gerdate=null,this.service.p2pdata.manby=null,this.service.p2pdata.mandate=null,this.service.p2pdata.mrnby=null,this.service.p2pdata.mrndate=null,this.service.p2pdata.movementby=null,this.service.p2pdata.movementdate=null,this.service.p2pdata.accountby=null,this.service.p2pdata.accountdate=null,this.service.CreateUpdate().subscribe(t=>{"success"==t.status?(this.toast.warning("Item Moved Successfully","Success"),this.service.demandoverduevisible=!1,this.service.quotationoverduevisible=!1,this.service.approvaloverduevisible=!1,this.service.pooverduevisible=!1,this.service.geroverduevisible=!1,this.service.manoverduevisible=!1,this.service.mrnoverduevisible=!1,this.service.accountoverduevisible=!1,this.service.movementoverduevisible=!1,this.LoadDashboard(),this.LoadOverdueList()):this.toast.warning(t.message,"Warning")}))}gettime(){let t=new Date,r=t.getTime()+Math.abs(6e4*t.getTimezoneOffset());return new Date(r).toISOString()}confirmquotation(t,i){console.log(t,i),this.service.p2pdata=t,"Quotation"==i?(this.service.p2pdata.quotationby=this.userservice.GetFullName(),this.service.p2pdata.quotationdate=this.gettime()):"Approval"==i?(this.service.p2pdata.approvedby=this.userservice.GetFullName(),this.service.p2pdata.approvaldate=this.gettime()):"PO"==i?(this.service.p2pdata.poby=this.userservice.GetFullName(),this.service.p2pdata.podate=this.gettime()):"GER"==i?(this.service.p2pdata.gerby=this.userservice.GetFullName(),this.service.p2pdata.gerdate=this.gettime()):"MAN"==i?(this.service.p2pdata.manby=this.userservice.GetFullName(),this.service.p2pdata.mandate=this.gettime()):"MRN"==i?(this.service.p2pdata.mrnby=this.userservice.GetFullName(),this.service.p2pdata.mrndate=this.gettime()):"Movement"==i?(this.service.p2pdata.movementby=this.userservice.GetFullName(),this.service.p2pdata.movementdate=this.gettime()):"Account"==i&&(this.service.p2pdata.accountby=this.userservice.GetFullName(),this.service.p2pdata.accountdate=this.gettime()),this.service.CreateUpdate().subscribe(r=>{"success"==r.status&&("Quotation"==i?(this.service.quotationoverduevisible=!1,this.toast.success("Quotation Submitted Successfully","Success")):"Approval"==i?(this.service.approvaloverduevisible=!1,this.toast.success("Quotation Approved Successfully","Success")):"PO"==i?(this.service.pooverduevisible=!1,this.toast.success("PO Submitted Successfully","Success")):"GER"==i?(this.service.geroverduevisible=!1,this.toast.success("GER Submitted Successfully","Success")):"MAN"==i?(this.service.manoverduevisible=!1,this.toast.success("MAN Submitted Successfully","Success")):"MRN"==i?(this.service.mrnoverduevisible=!1,this.toast.success("MRN Submitted Successfully","Success")):"Movement"==i?(this.service.movementoverduevisible=!1,this.toast.success("Movement Submitted Successfully","Success")):"Account"==i&&(this.service.accountoverduevisible=!1,this.toast.success("Account Submitted Successfully","Success")),this.LoadOverdueList(),this.LoadDashboard())})}expendaccordion(t){this.service.p2pitemdata=new m.bY,this.service.p2pitemdata=t,this.imageservice.id=t.uid,this.imageservice.RefreshFile(),this.podetailslist=!1,this.visible=!0,this.tenderservice.tenderchatid=t.uid,this.tenderservice.Chatbyid(t.uid),this.tenderservice.ReadChat(t.uid,this.userservice.GetUserName(),this.userservice.GetFullName()),this.tenderservice.tenderchatdata=new m.Y_,this.tenderservice.tenderchatdata.header="GER Overdue",this.tenderservice.tenderchatdata.type="P2P"}onUpload(t){for(let i of t.files)this.uploadedFiles.push(i);this.service.p2pitemdata.purchaseinvoice="Yes",this.imageservice.id=this.service.p2pitemdata.uid,this.service.CreateUpdateQuotation().subscribe(i=>{"success"==i.status?(this.toast.success("Purchase Invoice Uploaded Successfully","Success"),this.imageservice.RefreshFile()):this.toast.warning(i.message,"Warning")},i=>{this.toast.error(i,"Error")})}Cancel(t){this.cancelledorrejectvisible=!this.cancelledorrejectvisible,this.canceltype=t}CancelOrReject(t){this.service.p2pitemdata.itemstatus="Cancelled",this.service.CreateUpdateQuotation().subscribe(i=>{"success"==i.status?(this.toast.success(i.message,"Success"),this.LoadDashboard(),this.LoadOverdueList(),this.visible=!1):this.toast.warning(i.message,"Warning")},i=>{this.toast.error(i,"Error")})}movetoback(t,i){1==confirm("Are You Sure want to Move Item to "+i+"?")&&this.service.BacktoItemOverdue(t,i).subscribe(r=>{"success"==r.status?(this.toast.success(r.message,"Success"),this.LoadDashboard(),this.LoadOverdueList(),this.visible=!1):this.toast.error(r.message,"Error")})}DeleteImage(t){1==confirm("Are You Sure want to Delete?")?this.imageservice.DeleteImage(t).subscribe(i=>{console.log(i),(i.status="success")?(this.toast.success(i.result,"Success"),this.service.p2pitemdata.purchaseinvoice=""):this.toast.error(i.result,"Error"),this.imageservice.RefreshFile()}):this.toast.warning("File Deletion Cancelled","Cancelled")}expendtab(t,i){1==t?(this.service.p2pdata=i,this.service.p2pitemlist=[],this.enablepo=!1,this.service.p2pitemdata=new m.bY,this.GetItemListbyid(i.id)):(this.service.p2pdata=i,this.service.p2pitemlist=[],this.enablepo=!1,this.service.p2pitemdata=new m.bY)}GetItemListbyid(t){this.service.GetP2PItemListbyid(t).subscribe(i=>{"success"==i.status&&(this.service.p2pitemlist=i.data,this.enablepobutton())})}enablepobutton(){this.count=0,this.service.p2pitemlist.forEach(i=>{i.ger&&1==i.status&&this.count++}),this.gerbutton=!(this.count>0)}populatepo(t){this.service.p2pitemdata=t,this.enablepo=!this.enablepo}updateger(t){t.valid?(this.service.p2pitemdata.gerdate=this.gettime(),this.service.p2pitemdata.gerby=this.userservice.GetFullName(),this.service.CreateUpdateQuotation().subscribe(i=>{"success"==i.status?(this.toast.success(i.message,"Success"),this.service.p2plistoverduelist=null,this.visible=!1,this.LoadDashboard(),this.LoadOverdueList()):this.toast.warning(i.message,"Warning")},i=>{this.toast.error(i,"Error")})):this.toast.warning("Please Update GER Number","Warning")}GetPODetails(t){this.podetailslist=!this.podetailslist,this.service.popendingitemlist=null,this.service.GetPObyid(t).subscribe(i=>{"success"==i.status&&(this.service.popendingitemlist=i.data,console.log(i))})}static#e=this.\u0275fac=function(i){return new(i||s)(e.Y36(n.h),e.Y36(l._W),e.Y36(p.w),e.Y36(v.K),e.Y36(T.D),e.Y36(A.$))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-geroverdue"]],standalone:!0,features:[e.jDz],decls:6,vars:2,consts:[[3,"visible","fullScreen","visibleChange"],["pTemplate","header"],["pTemplate","content"],["pTemplate","footer"],[1,"page-title"],[1,"ms-auto","text-muted"],[1,"input-icon"],["type","text","placeholder","Search.....",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-icon-addon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"],["d","M21 21l-6 -6"],[1,"row","row-cards"],[1,"col-12"],[1,"card"],[1,"table-responsive"],["id","contentToConvert",1,"table","card-table","table-vcenter","datatable","table-sm","table-fixed"],[1,"text-center"],["class","strong text-center",4,"ngFor","ngForOf"],[1,"strong","text-center"],[1,"text-nowrap"],["type","button",1,"btn-link","strong",3,"click"],[1,"text-danger"],["type","button",1,"btn","btn-outline-info","btn-pill","strong",3,"click"],[3,"ngClass"],[1,"card-footer","d-flex","align-items-center"],[1,"m-0","strong"],["header","GER Overdue Form",3,"visible","maximizable","visibleChange"],[1,"row","g-0"],[1,"col-12","col-lg-9","col-xl-9","border-end"],[1,"col-md-6","strong","text-center"],[1,"form-label"],["class","col-md-4 text-center",4,"ngIf"],["class","col-md-2",4,"ngIf"],["class","col-md-12"],["autocomplete","off",3,"ngSubmit"],["mygerForm","ngForm"],["type","hidden","name","Id",3,"value"],["type","hidden","name","uid",3,"value"],[1,"col-sm-12","col-md-3"],[1,"mb-3"],[1,"form-label","required"],["required","","type","text","required","","placeholder","GER Number","name","ger",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["ger","ngModel"],[1,"col-sm-12","col-md-5"],["type","hidden","required","","name","purchaseinvoice",1,"form-control",3,"ngModel","ngModelChange"],["purchaseinvoice","ngModel"],["name","demo[]",3,"url","multiple","onUpload"],["pTemplate","toolbar"],[1,"col-md-4"],["rows","3","placeholder","Remarks","name","gerremarks",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["gerremarks","ngModel"],[1,"card-footer","text-end"],[1,"d-flex"],["type","submit",1,"btn","btn-primary","ms-auto",3,"disabled"],[1,"row"],[1,"col-12","col-lg-3","col-xl-3","d-flex","flex-column"],[1,"col-md-4","text-center"],["type","button",1,"btn","btn-outline-warning","btn-pill","strong",3,"click"],[1,"col-md-2"],["type","button",1,"btn-link","strong","ms-auto",3,"click"],["type","button",1,"btn","btn-primary","btn-icon",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icon-tabler-printer"],["d","M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2"],["d","M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4"],["d","M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z"],[1,"col-md-12"],["cancelForm","ngForm"],["rows","3","placeholder","Type Your Cancellation Reason here....","name","cancelledreason",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["cancelledreason","ngModel"],["rows","3","placeholder","Type Your Rejection Reason here....","name","rejectedreason",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["rejectedreason","ngModel"],[1,"table","card-table","table-vcenter","datatable","table-sm","table-fixed","cell-border"],[1,"w-1"],[1,"strong"],[1,"text-nowrap","text-center"],["class","strong"],[1,"py-3"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"col-2"],[1,"card-header"],[1,"card-title"],[1,"card-actions","btn-actions"],["type","button","class","btn-action text-danger",3,"click",4,"ngIf"],[1,"card-body","p-0"],["width","250","height","250",3,"src","preview",4,"ngIf"],["class","text-center","target","_blank",3,"href",4,"ngIf"],["type","button",1,"btn-action","text-danger",3,"click"],["d","M18 6l-12 12"],["d","M6 6l12 12"],["width","250","height","250",3,"src","preview"],["target","_blank",1,"text-center",3,"href"],["src","https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg","width","250","height","250"],[1,"text-danger","text-center"],["class","col-2"]],template:function(i,r){1&i&&(e.YNc(0,I,4,3),e.EqZ(1,0,G),e.YNc(3,ie,60,29),e.EqZ(4,3,y)),2&i&&(e.xp6(1),e.cPc(1==r.service.geroverduevisible),e.xp6(3),e.cPc(1==r.visible))},dependencies:[d.ez,u.u5,x.l,b.$,f.O,_.S],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]})}return s})()}}]);