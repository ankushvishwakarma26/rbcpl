"use strict";(self.webpackChunkintranet=self.webpackChunkintranet||[]).push([[6190],{6190:(re,m,a)=>{a.r(m),a.d(m,{TicketoverdueComponent:()=>_e});var s=a(6814),l=a(6223),u=a(9246),x=a(951),T=a(2681),g=a(7248),d=a(4807),v=a(1312),f=a(6521),h=a(7912),e=a(9212),C=a(1148),Z=a(377),A=a(7473),M=a(2425),b=a(5633),p=a(5219);const D=()=>[s.mk,s.sg,s.O5,s.H9,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.Q7,l.On,l.F,p.jx,a.e(9176).then(a.bind(a,9176)).then(n=>n.TenderchatComponent),g.E,d.w9,d.jq,v.V];function U(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"h2",4),e._uU(1,"Ticket Overdue List"),e.qZA(),e.TgZ(2,"div",5)(3,"div",6)(4,"input",7),e.NdJ("ngModelChange",function(o){e.CHM(t);const _=e.oxw();return e.KtG(_.service.searchvalue=o)}),e.qZA(),e.TgZ(5,"span",8),e.O4$(),e.TgZ(6,"svg",9),e._UZ(7,"path",10)(8,"path",11)(9,"path",12),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.service.searchvalue)}}function k(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"button",25),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,_=e.oxw(2);return e.KtG(_.opendetails(o.id))}),e._uU(2),e.qZA()()}if(2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.clientname)}}function q(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"button",27),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,_=e.oxw(2);return e.KtG(_.opendetails(o.id))}),e._uU(2),e.qZA()()}if(2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.name)}}function E(n,r){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"currency"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.AsE(" (",e.xi3(2,2,t.emdamount,"INR"),") (",e.xi3(3,5,t.emddate,"dd/MM/yy"),")")}}function y(n,r){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij("(",e.xi3(2,1,t.lastdateofsubmission,"dd/MM/yy"),")")}}function O(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr",20)(1,"td",21),e._uU(2),e.qZA(),e.TgZ(3,"td",21),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"div"),e._uU(7),e.qZA(),e.TgZ(8,"div"),e._uU(9),e.qZA(),e.TgZ(10,"div"),e._uU(11),e.qZA(),e.YNc(12,k,3,1,"div",22)(13,q,3,1,"div",22),e.qZA(),e.TgZ(14,"td")(15,"div"),e._uU(16),e.ALo(17,"date"),e.qZA()(),e.TgZ(18,"td",21)(19,"div",23),e._uU(20),e.ALo(21,"date"),e.ALo(22,"datefuturepipe"),e.qZA(),e.TgZ(23,"div",23),e._uU(24),e.ALo(25,"date"),e.ALo(26,"datefuturepipe"),e.qZA()(),e.TgZ(27,"td")(28,"div",23),e._uU(29),e.YNc(30,E,4,8,"span",22),e.qZA(),e.TgZ(31,"div",23),e._uU(32),e.YNc(33,y,3,4,"span",22),e.qZA()(),e.TgZ(34,"td")(35,"div"),e._uU(36),e.qZA(),e.TgZ(37,"div"),e._uU(38),e.ALo(39,"date"),e.qZA()(),e.TgZ(40,"td")(41,"button",24),e.NdJ("click",function(){const _=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.ViewImage(_))}),e._uU(42,"Action"),e.qZA()(),e.TgZ(43,"td")(44,"button",25),e.NdJ("click",function(){const _=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.Delete(_.id))}),e._UZ(45,"i",26),e.qZA()()()}if(2&n){const t=r.$implicit,i=r.index,o=e.oxw(2);e.xp6(2),e.Oqu(i+1),e.xp6(2),e.Oqu(t.id),e.xp6(3),e.Oqu(t.type),e.xp6(2),e.Oqu(t.tenderno),e.xp6(2),e.Oqu(t.categoryname),e.xp6(1),e.Q6J("ngIf",t.accode),e.xp6(1),e.Q6J("ngIf",!t.accode),e.xp6(3),e.Oqu(e.xi3(17,22,t.prebidmeetingdate,"dd/MM/yy")),e.xp6(3),e.Q6J("ngClass",o.service.calculatedateaging(t.tendersubmissiondate)<0?"text-danger":o.service.calculatedateaging(t.tendersubmissiondate)<604800?"text-purple":""),e.xp6(1),e.AsE("",e.xi3(21,25,t.tendersubmissiondate,"dd/MM/yy hh:mm a")," (",e.lcZ(22,28,t.tendersubmissiondate),")"),e.xp6(3),e.Q6J("ngClass",o.service.calculatedateaging(t.tenderopeningdate)<0?"text-danger":o.service.calculatedateaging(t.tenderopeningdate)<604800?"text-purple":""),e.xp6(1),e.AsE("",e.xi3(25,30,t.tenderopeningdate,"dd/MM/yy hh:mm a")," (",e.lcZ(26,33,t.tenderopeningdate),")"),e.xp6(4),e.Q6J("ngClass","Yes"==t.emdexemption?"text-muted":"No"==t.emdexemption&&t.emdcreateddate?"text-success":"text-danger"),e.xp6(1),e.hij("","Yes"==t.emdexemption?"EMD Not Required":"EMD"," "),e.xp6(1),e.Q6J("ngIf","No"==t.emdexemption),e.xp6(1),e.Q6J("ngClass","No"==t.samplerequired?"text-muted":"Yes"==t.samplerequired&&t.samplecreateddate?"text-success":"text-danger"),e.xp6(1),e.hij("","No"==t.samplerequired?"Sample Not Required":"Sample Required"," "),e.xp6(1),e.Q6J("ngIf","Yes"==t.samplerequired),e.xp6(3),e.Oqu(t.createdby),e.xp6(2),e.Oqu(e.xi3(39,35,t.createddate,"dd-MMM-yyyy hh:mm a"))}}function w(n,r){if(1&n&&(e.TgZ(0,"div",13)(1,"div",14)(2,"div",15)(3,"div",16)(4,"table",17)(5,"thead")(6,"tr")(7,"th",18),e._uU(8,"S.No."),e.qZA(),e.TgZ(9,"th",18),e._uU(10,"ID"),e.qZA(),e.TgZ(11,"th",18),e._uU(12,"Type/Category/Name"),e.qZA(),e.TgZ(13,"th",18),e._uU(14,"Pre-Bid Meet"),e.qZA(),e.TgZ(15,"th",18)(16,"div"),e._uU(17,"Tender Submission Date"),e.qZA(),e.TgZ(18,"div"),e._uU(19,"Tender Opening Date"),e.qZA()(),e.TgZ(20,"th",18),e._uU(21,"Sample R/Last Date"),e.qZA(),e.TgZ(22,"th",18),e._uU(23,"Last Update"),e.qZA(),e.TgZ(24,"th",18),e._uU(25,"Action"),e.qZA(),e.TgZ(26,"th",18),e._uU(27,"Delete"),e.qZA()()(),e.TgZ(28,"tbody"),e.YNc(29,O,46,38,"tr",19),e.ALo(30,"filter"),e.qZA()()()()()()),2&n){const t=e.oxw();e.xp6(29),e.Q6J("ngForOf",e.xi3(30,1,t.service.tenderlist,t.service.searchvalue))}}function J(n,r){if(1&n&&(e.TgZ(0,"div",28)(1,"p",29),e._uU(2,"Showing "),e.TgZ(3,"span"),e._uU(4,"1"),e.qZA(),e._uU(5," to "),e.TgZ(6,"span"),e._uU(7),e.qZA(),e._uU(8," of "),e.TgZ(9,"span"),e._uU(10),e.qZA(),e._uU(11," entries"),e.qZA()()),2&n){const t=e.oxw();e.xp6(7),e.Oqu(t.service.tenderlist.length),e.xp6(3),e.Oqu(t.service.tenderlist.length)}}function N(n,r){if(1&n&&e._uU(0),2&n){const t=e.oxw(2);e.AsE("Upload Files (",t.service.tenderdata.id,") (",t.service.tenderdata.accode?t.service.tenderdata.clientname:t.service.tenderdata.name,")")}}const I=()=>[s.sg,s.O5,l.YN,l.Kr,l.EJ,l.JJ,l.On,p.jx,f.p];function F(n,r){if(1&n&&(e.TgZ(0,"ng-option",62),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.item_code),e.xp6(1),e.Oqu(t.itemname)}}function K(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ng-select",59,60),e.NdJ("ngModelChange",function(o){e.CHM(t);const _=e.oxw(4);return e.KtG(_.service.tenderitemdata.itemcode=o)})("keyup",function(o){e.CHM(t);const _=e.oxw(4);return e.KtG(_.service.SearchItem(o))}),e.YNc(2,F,2,2,"ng-option",61),e.qZA()}if(2&n){const t=e.MAs(1),i=e.oxw(4);e.Q6J("ngClass",t.invalid?"is-invalid":"is-valid mb-2")("ngModel",i.service.tenderitemdata.itemcode),e.xp6(2),e.Q6J("ngForOf",i.service.filtereddata)}}function Q(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"input",63,64),e.NdJ("ngModelChange",function(o){e.CHM(t);const _=e.oxw(4);return e.KtG(_.service.tenderitemdata.item=o)}),e.qZA()}if(2&n){const t=e.MAs(1),i=e.oxw(4);e.Q6J("ngClass",t.invalid?"is-invalid":"is-valid mb-2")("ngModel",i.service.tenderitemdata.item)}}function L(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",14)(1,"form",null,44)(3,"div",33)(4,"div",45)(5,"div",35)(6,"label",46),e._uU(7,"Search Item "),e.TgZ(8,"span",47),e._uU(9,"Item not in List? "),e.TgZ(10,"button",48),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.service.CustomItem())}),e._uU(11,"Click here"),e.qZA()()(),e.YNc(12,K,3,3,"ng-select",49)(13,Q,2,2,"input",50),e.qZA()(),e.TgZ(14,"div",51)(15,"div",35)(16,"label",46),e._uU(17,"Quantity"),e.qZA(),e.TgZ(18,"input",52,53),e.NdJ("ngModelChange",function(o){e.CHM(t);const _=e.oxw(3);return e.KtG(_.service.tenderitemdata.qty=o)}),e.qZA()()(),e.TgZ(20,"div",51)(21,"div",35)(22,"label",46),e._uU(23,"Unit"),e.qZA(),e.TgZ(24,"input",54,55),e.NdJ("ngModelChange",function(o){e.CHM(t);const _=e.oxw(3);return e.KtG(_.service.tenderitemdata.unit=o)}),e.qZA()()(),e.TgZ(26,"div",51)(27,"div",35)(28,"label",46),e._uU(29,"Approx Value"),e.qZA(),e.TgZ(30,"input",56,57),e.NdJ("ngModelChange",function(o){e.CHM(t);const _=e.oxw(3);return e.KtG(_.service.tenderitemdata.firstamount=o)}),e.qZA()()()(),e.TgZ(32,"div",39)(33,"div",40)(34,"button",58),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.service.SubmitTenderItem())}),e._uU(35,"Submit"),e.qZA()()()()()}if(2&n){const t=e.MAs(2),i=e.MAs(19),o=e.MAs(25),_=e.MAs(31),c=e.oxw(3);e.xp6(12),e.Q6J("ngIf",!c.service.enableitemname),e.xp6(1),e.Q6J("ngIf",c.service.enableitemname),e.xp6(5),e.Q6J("ngModel",c.service.tenderitemdata.qty)("ngClass",i.invalid?"is-invalid":"is-valid mb-2"),e.xp6(6),e.Q6J("ngModel",c.service.tenderitemdata.unit)("ngClass",o.invalid?"is-invalid":"is-valid mb-2"),e.xp6(6),e.Q6J("ngModel",c.service.tenderitemdata.firstamount)("ngClass",_.invalid?"is-invalid":"is-valid mb-2"),e.xp6(4),e.Q6J("disabled",t.invalid)}}function P(n,r){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.itemname)}}function S(n,r){if(1&n&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.item)}}function Y(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr",67)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.YNc(4,P,2,1,"div",22)(5,S,2,1,"div",22),e.qZA(),e.TgZ(6,"td")(7,"div",68)(8,"input",69),e.NdJ("ngModelChange",function(o){const c=e.CHM(t).$implicit;return e.KtG(c.qty=o)}),e.qZA(),e.TgZ(9,"input",70),e.NdJ("ngModelChange",function(o){const c=e.CHM(t).$implicit;return e.KtG(c.unit=o)}),e.qZA(),e.TgZ(10,"button",71),e.NdJ("click",function(){const _=e.CHM(t).$implicit,c=e.oxw(4);return e.KtG(c.service.UpdateTenderItem(_))}),e._uU(11,"Update"),e.qZA()()(),e.TgZ(12,"td",18),e._uU(13),e.ALo(14,"currency"),e.qZA(),e.TgZ(15,"td",21)(16,"button",48),e.NdJ("click",function(){const _=e.CHM(t).$implicit,c=e.oxw(4);return e.KtG(c.service.EditItem(_))}),e._UZ(17,"i",72),e.qZA(),e._uU(18," | "),e.TgZ(19,"button",48),e.NdJ("click",function(){const _=e.CHM(t).$implicit,c=e.oxw(4);return e.KtG(c.service.DeleteItem(_))}),e._UZ(20,"i",26),e.qZA()()()}if(2&n){const t=r.$implicit,i=r.index;e.xp6(2),e.Oqu(i+1),e.xp6(2),e.Q6J("ngIf",t.itemcode),e.xp6(1),e.Q6J("ngIf",!t.itemcode),e.xp6(3),e.Q6J("ngModel",t.qty),e.xp6(1),e.Q6J("ngModel",t.unit),e.xp6(4),e.hij(" ",e.xi3(14,6,t.firstamount,"INR")," ")}}function G(n,r){if(1&n&&(e.TgZ(0,"div",14)(1,"table",65)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"S.No."),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Item"),e.qZA(),e.TgZ(8,"th",18),e._uU(9,"Quantity"),e.qZA(),e.TgZ(10,"th",18),e._uU(11,"Last Rate"),e.qZA(),e.TgZ(12,"th",18),e._uU(13,"Action"),e.qZA()()(),e.TgZ(14,"tbody"),e.YNc(15,Y,21,9,"tr",66),e.qZA(),e.TgZ(16,"tfoot",20),e._UZ(17,"td"),e.TgZ(18,"td"),e._uU(19,"Total"),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e._UZ(22,"td")(23,"td"),e.qZA()()()),2&n){const t=e.oxw(3);e.xp6(15),e.Q6J("ngForOf",t.service.tenderitemlist),e.xp6(6),e.Oqu(t.service.totalqty.toLocaleString("en-IN"))}}function R(n,r){1&n&&(e.TgZ(0,"div",81),e._uU(1,"Drag and drop files"),e.qZA())}function H(n,r){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.xp6(1),e.AsE("",t.name," - ",t.size," bytes ")}}function $(n,r){if(1&n&&(e.TgZ(0,"ul"),e.YNc(1,H,2,2,"li",82),e.qZA()),2&n){const t=e.oxw(5);e.xp6(1),e.Q6J("ngForOf",t.uploadedFiles)}}function W(n,r){if(1&n&&e.YNc(0,$,2,1,"ul",22),2&n){const t=e.oxw(4);e.Q6J("ngIf",t.uploadedFiles.length)}}function B(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",73)(1,"div",33)(2,"div",74)(3,"div",35)(4,"label",46),e._uU(5),e.qZA()()(),e.TgZ(6,"div",74)(7,"div",35)(8,"select",75),e.NdJ("ngModelChange",function(o){e.CHM(t);const _=e.oxw(3);return e.KtG(_.uploadfilename=o)}),e.TgZ(9,"option",76),e._uU(10,"Tender Document"),e.qZA(),e.TgZ(11,"option",77),e._uU(12,"Tender Notice"),e.qZA(),e.TgZ(13,"option",78),e._uU(14,"Specification"),e.qZA()()()()(),e.TgZ(15,"div",35)(16,"p-fileUpload",79),e.NdJ("onUpload",function(o){e.CHM(t);const _=e.oxw(3);return e.KtG(_.onUpload(o))}),e.YNc(17,R,2,0,"ng-template",80)(18,W,1,1,"ng-template",2),e.qZA()()()}if(2&n){const t=e.oxw(3);e.xp6(5),e.hij("Upload ",t.uploadfilename,""),e.xp6(3),e.Q6J("ngModel",t.uploadfilename),e.xp6(8),e.Q6J("url",t.imageservice.uploadurl+"/"+t.imageservice.id+"/"+t.uploadfilename)("multiple",!0)}}function j(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",92),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,_=e.oxw(3);return e.KtG(_.DeleteImage(o.id))}),e._UZ(1,"i",93),e.qZA()}}function z(n,r){if(1&n&&e._UZ(0,"p-image",94),2&n){const t=e.oxw().$implicit,i=e.oxw(3);e.Q6J("src",i.imageservice.imageurl+t.path)("preview",!0)}}function V(n,r){if(1&n&&(e.TgZ(0,"a",95),e._UZ(1,"img",96),e.qZA()),2&n){const t=e.oxw().$implicit,i=e.oxw(3);e.Q6J("href",i.imageservice.imageurl+t.path,e.LSH)}}function X(n,r){if(1&n&&(e.TgZ(0,"div",83)(1,"div",15)(2,"div",84)(3,"div",85)(4,"div",86),e._uU(5),e.qZA()(),e.TgZ(6,"div",87),e.YNc(7,j,2,0,"button",88),e.qZA()(),e.TgZ(8,"div",89),e.YNc(9,z,1,2,"p-image",90)(10,V,2,1,"a",91),e.qZA()()()),2&n){const t=r.$implicit,i=e.oxw(3);e.xp6(5),e.Oqu(t.type),e.xp6(2),e.Q6J("ngIf",i.isadmin),e.xp6(2),e.Q6J("ngIf","pdf"!=t.path.split(".").pop()),e.xp6(1),e.Q6J("ngIf","pdf"==t.path.split(".").pop())}}function ee(n,r){1&n&&(e.TgZ(0,"h1",97),e._uU(1,"No File Uploaded"),e.qZA())}function te(n,r){1&n&&(e.TgZ(0,"h1",97),e._uU(1,"No File Uploaded"),e.qZA())}function ne(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",31)(1,"div",32)(2,"div",33)(3,"div",34),e._UZ(4,"div",35),e.qZA(),e.TgZ(5,"div",34)(6,"div",35)(7,"button",36),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.service.AddTenderItem())}),e._uU(8,"Add New Item"),e.qZA()()(),e.TgZ(9,"div",34)(10,"div",35)(11,"button",37),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.AddImage())}),e._uU(12,"Add Image"),e.qZA()()(),e.YNc(13,L,36,9,"div",38)(14,G,24,2,"div",38)(15,B,19,4),e.EqZ(16,15,I),e.TgZ(18,"div",39)(19,"div",40)(20,"button",41),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.MovetoNext())}),e._uU(21,"Move to Qualification"),e.qZA()()(),e.SjG(22,X,11,4,"div",98,e.x6l,!1,ee,2,0),e.YNc(25,te,2,0,"h1",42),e.qZA()(),e.TgZ(26,"div",43),e._UZ(27,"app-tenderchat"),e.qZA()()}if(2&n){const t=e.oxw(2);e.xp6(13),e.um2(13,t.service.tenderitems?13:-1),e.xp6(1),e.um2(14,t.service.tenderitemlist?14:-1),e.xp6(2),e.cPc(1==t.uploadimage),e.xp6(4),e.Q6J("disabled",null==t.imageservice.rcuploadedlist||0==t.service.tenderitemlist.length),e.xp6(2),e.wJu(t.imageservice.rcuploadedlist),e.xp6(3),e.um2(25,null==t.imageservice.rcuploadedlist?25:-1)}}const ie=()=>({width:"100vw"});function oe(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"p-dialog",30),e.NdJ("visibleChange",function(o){e.CHM(t);const _=e.oxw();return e.KtG(_.service.ticketvisible=o)}),e.YNc(1,N,1,2,"ng-template",1)(2,ne,28,6,"ng-template",2),e.qZA()}if(2&n){const t=e.oxw();e.Akn(e.DdM(4,ie)),e.Q6J("visible",t.service.ticketvisible)("maximizable",!0)}}let _e=(()=>{class n{constructor(t,i,o,_,c){this.service=t,this.pservice=i,this.imageservice=o,this.toast=_,this.userservice=c,this.searchvalue="",this.visible=!1,this.isadmin=!1,this.uploadfilename="Tender_Document",this.panelOpenState=!1,this.uploadimage=!1,this.uploadedFiles=[]}ngOnInit(){"Admin"==this.userservice.GetRole()&&(this.isadmin=!0)}expendaccordion(t){this.visible=!0,this.service.tenderdata=t}MovetoNext(){this.service.tenderdata.ticketcreateddate=this.gettime(),this.service.tenderdata.ticketcreatedby=this.userservice.GetFullName(),this.service.CreateUpdate().subscribe(t=>{"success"==t.status?(this.toast.success(t.message,"Success"),this.service.ticketvisible=!1,this.service.LoadList(1,1e4,this.searchvalue,"Ticket"),this.LoadDashboard()):this.toast.warning(t.message,"Warning")},t=>{this.toast.error(t,"Error")})}LoadDashboard(){this.service.GetDashboardReport().subscribe(t=>{this.service.dashboarddata=t})}gettime(){let t=new Date,o=t.getTime()+Math.abs(6e4*t.getTimezoneOffset());return new Date(o).toISOString()}opendetails(t){}ViewImage(t){this.service.ticketvisible=!0,this.service.tenderdata=t,this.uploadimage=!1,this.imageservice.id=t.id,this.imageservice.RefreshFile(),this.service.GetTenderItems(),this.service.tenderchatid=t.id,this.service.Chatbyid(t.id),this.service.ReadChat(t.id,this.userservice.GetUserName(),this.userservice.GetFullName()),this.service.CalculateTotal(),this.service.tenderchatdata=new x.Y_,this.service.tenderchatdata.header="Ticket Overdue"}AddImage(){this.uploadimage=!this.uploadimage}Delete(t){1==confirm("Are You Sure want to Delete "+t)&&this.service.Delete(t).subscribe(i=>{"success"==i.status?(this.toast.success(i.message,"Success"),this.LoadDashboard()):this.toast.warning(i.message,"Warning")},i=>{this.toast.error(i,"Error")})}DeleteImage(t){1==confirm("Are You Sure want to Delete?")?this.imageservice.DeleteImage(t).subscribe(i=>{console.log(i),(i.status="success")?this.toast.success(i.result,"Success"):this.toast.error(i.result,"Error"),this.imageservice.RefreshFile()}):this.toast.warning("File Deletion Cancelled","Cancelled")}onUpload(t){for(let i of t.files)this.uploadedFiles.push(i);this.imageservice.RefreshFile(),this.toast.success("File Successfully Uploaded","Success")}static#e=this.\u0275fac=function(i){return new(i||n)(e.Y36(C.$),e.Y36(Z.h),e.Y36(A.D),e.Y36(M._W),e.Y36(b.K))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-ticketoverdue"]],standalone:!0,features:[e.jDz],decls:7,vars:3,consts:[[3,"visible","fullScreen","visibleChange"],["pTemplate","header"],["pTemplate","content"],["pTemplate","footer"],[1,"page-title"],[1,"ms-auto","text-muted"],[1,"input-icon"],["type","text","placeholder","Search.....",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-icon-addon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor","fill","none","stroke-linecap","round","stroke-linejoin","round",1,"icon"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"],["d","M21 21l-6 -6"],[1,"row","row-cards"],[1,"col-12"],[1,"card"],[1,"table-responsive"],["id","contentToConvert",1,"table","card-table","table-vcenter","datatable","table-sm","table-fixed"],[1,"text-center"],["class","strong text-center",4,"ngFor","ngForOf"],[1,"strong","text-center"],[1,"text-nowrap"],[4,"ngIf"],[3,"ngClass"],["type","button",1,"btn","btn-outline-info","btn-pill","strong",3,"click"],["type","button",1,"btn-link","strong",3,"click"],[1,"fa","fa-trash","text-danger"],["type","button",1,"btn-link","text-danger","strong",3,"click"],[1,"card-footer","d-flex","align-items-center"],[1,"m-0","strong"],[3,"visible","maximizable","visibleChange"],[1,"row","g-0"],[1,"col-12","col-lg-8","col-xl-8","border-end"],[1,"row"],[1,"col-md-4","text-center"],[1,"mb-3"],["type","submit",1,"btn","btn-primary","ms-auto",3,"click"],["type","button",1,"btn","btn-info","btn-pill",3,"click"],["class","col-12"],[1,"card-footer","text-end"],[1,"d-flex"],["type","submit",1,"btn","btn-success","ms-auto",3,"disabled","click"],["class","text-danger text-center"],[1,"col-12","col-lg-4","col-xl-4","d-flex","flex-column"],["myitemform","ngForm"],[1,"col-md-6"],[1,"form-label","required"],[1,"text-danger"],["type","button",1,"btn-link",3,"click"],["class","form-control","required","","placeholder","Search Item Name here","name","itemcode",3,"ngClass","ngModel","ngModelChange","keyup",4,"ngIf"],["type","text","type","text","required","","placeholder","Type Item Name here","name","item","class","form-control",3,"ngClass","ngModel","ngModelChange",4,"ngIf"],[1,"col-md-2"],["type","number","name","qty","required","","placeholder","Quantity",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["qty","ngModel"],["type","text","name","unit","required","","placeholder","Unit",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["unit","ngModel"],["type","number","name","firstamount","placeholder","Approx Value",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["firstamount","ngModel"],["type","submit",1,"btn","btn-primary","ms-auto",3,"disabled","click"],["required","","placeholder","Search Item Name here","name","itemcode",1,"form-control",3,"ngClass","ngModel","ngModelChange","keyup"],["itemcode","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","text","type","text","required","","placeholder","Type Item Name here","name","item",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["item","ngModel"],[1,"table","card-table","table-vcenter","datatable","table-sm","table-fixed"],["class","strong",4,"ngFor","ngForOf"],[1,"strong"],[1,"input-group","mb-2"],["type","number","placeholder","Quantity",1,"form-control",3,"ngModel","ngModelChange"],["type","text","placeholder","Unit",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn",3,"click"],[1,"fa","fa-edit"],[1,"col-md-12"],[1,"col-6"],[1,"form-select",3,"ngModel","ngModelChange"],["value","Tender_Document"],["value","Tender_Notice"],["value","Specification"],["name","demo[]",3,"url","multiple","onUpload"],["pTemplate","toolbar"],[1,"py-3"],[4,"ngFor","ngForOf"],[1,"col-md-3"],[1,"card-header"],[1,"row","text-center","strong"],[1,"mb-1"],[1,"card-actions","btn-actions"],["type","button","class","btn-link strong text-danger",3,"click",4,"ngIf"],[1,"card-body","p-0","text-center"],["width","100","height","100",3,"src","preview",4,"ngIf"],["class","text-center","target","_blank",3,"href",4,"ngIf"],["type","button",1,"btn-link","strong","text-danger",3,"click"],[1,"fa","fa-trash"],["width","100","height","100",3,"src","preview"],["target","_blank",1,"text-center",3,"href"],["src","https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg","width","100","height","100"],[1,"text-danger","text-center"],["class","col-md-3"]],template:function(i,o){1&i&&(e.TgZ(0,"p-sidebar",0),e.NdJ("visibleChange",function(c){return o.service.ticketoverduevisible=c}),e.YNc(1,U,10,1,"ng-template",1)(2,w,31,4,"ng-template",2)(3,J,12,2,"ng-template",3),e.qZA(),e.YNc(4,oe,3,5),e.EqZ(5,4,D)),2&i&&(e.Q6J("visible",o.service.ticketoverduevisible)("fullScreen",!0),e.xp6(5),e.cPc(1==o.service.ticketvisible))},dependencies:[s.ez,s.mk,s.sg,s.O5,s.H9,s.uU,l.u5,l.Fj,l.JJ,l.On,u.l,u.Y,p.jx,T.FilterPipe,h.DatefuturepipePipe,g.$,d.A0,v.S,f.O]})}return n})()}}]);