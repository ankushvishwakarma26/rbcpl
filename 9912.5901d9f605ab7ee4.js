"use strict";(self.webpackChunkintranet=self.webpackChunkintranet||[]).push([[9912],{9912:(x,C,a)=>{a.d(C,{z:()=>Q});var y=a(951),i=a(6306),N=a(1687),n=a(9212),U=a(9862),O=a(2425),I=a(5633),A=a(868),W=a(6814);let Q=(()=>{class h{constructor(t,e,s,r,d){this.http=t,this.toast=e,this.service=s,this.api=r,this.datePipe=d,this.pmslist=[],this.pmsdata=new y.Lc,this.pmsqclist=[],this.pmsqcdata=new y.Py,this.pmsoverduelist=[],this.pmsplanninglist=[],this.pmsplanningdata=new y.Fc,this.pmsplanningitemslist=[],this.pmsplanningitemsdata=new y.S_,this.startdate=this.datePipe.transform(new Date,"yyyy-MM-dd"),this.enddate=this.datePipe.transform((new Date).setDate((new Date).getDate()+1),"yyyy-MM-dd"),this.supervisor="",this.printmonitoringvisible=!1,this.url="http://103.59.180.17:1112/api/",this.status="Pending",this.machinelist=[],this.imagedate=this.datePipe.transform(new Date,"yyyy-MM-dd"),this.imagestartdate=this.datePipe.transform(new Date(this.imagedate),"yyyy-MM-ddT06:00"),this.imageenddate=this.datePipe.transform(new Date(this.imagedate).setDate(new Date(this.imagedate).getDate()+1),"yyyy-MM-ddT08:00"),this.pmsimagevisible=!1,this.daystart=this.datePipe.transform(new Date,"yyyy-MM-ddT08:00"),this.dayend=this.datePipe.transform(new Date,"yyyy-MM-ddT22:30"),this.nightstart=this.datePipe.transform(new Date,"yyyy-MM-ddT20:00"),this.nightend=this.datePipe.transform(new Date,"yyyy-MM-ddT20:00"),this.location="F3",this.todaydate=this.datePipe.transform(new Date,"yyyy-MM-ddTHH:mm"),this.currentdate=this.datePipe.transform(new Date,"yyyy-MM-dd"),this.dayornight="Day",this.p=1,this.psize=100,this.total=0,this.frompage=1,this.topage=100,this.searchvalue="",this.loader=!1}GetPMSList(t,e,s){return""!=s&&""!=this.status&&""!=this.supervisor?this.http.get(this.url+"PMS?PageNumber="+t+"&PageSize="+e+"&SearchText="+s+"&status="+this.status+"&startdate="+this.startdate+"&enddate="+this.enddate+"&supervisor="+this.supervisor).pipe((0,i.K)(this.api.handleError)):""!=s&&""!=this.status&&""==this.supervisor?this.http.get(this.url+"PMS?PageNumber="+t+"&PageSize="+e+"&SearchText="+s+"&status="+this.status+"&startdate="+this.startdate+"&enddate="+this.enddate).pipe((0,i.K)(this.api.handleError)):""!=s&&""==this.status&&""!=this.supervisor?this.http.get(this.url+"PMS?PageNumber="+t+"&PageSize="+e+"&SearchText="+s+"&startdate="+this.startdate+"&enddate="+this.enddate+"&supervisor="+this.supervisor).pipe((0,i.K)(this.api.handleError)):""==s&&""!=this.status&&""!=this.supervisor?this.http.get(this.url+"PMS?PageNumber="+t+"&PageSize="+e+"&status="+this.status+"&startdate="+this.startdate+"&enddate="+this.enddate+"&supervisor="+this.supervisor).pipe((0,i.K)(this.api.handleError)):""==s&&""==this.status&&""!=this.supervisor?this.http.get(this.url+"PMS?PageNumber="+t+"&PageSize="+e+"&startdate="+this.startdate+"&enddate="+this.enddate+"&supervisor="+this.supervisor).pipe((0,i.K)(this.api.handleError)):""==s&&""!=this.status&&""==this.supervisor?this.http.get(this.url+"PMS?PageNumber="+t+"&PageSize="+e+"&status="+this.status+"&startdate="+this.startdate+"&enddate="+this.enddate).pipe((0,i.K)(this.api.handleError)):""!=s&&""==this.status&&""!=this.supervisor?this.http.get(this.url+"PMS?PageNumber="+t+"&PageSize="+e+"&SearchText="+s+"&startdate="+this.startdate+"&enddate="+this.enddate+"&supervisor="+this.supervisor).pipe((0,i.K)(this.api.handleError)):""!=s&&""==this.status&&""==this.supervisor?this.http.get(this.url+"PMS?PageNumber="+t+"&PageSize="+e+"&SearchText="+s+"&startdate="+this.startdate+"&enddate="+this.enddate).pipe((0,i.K)(this.api.handleError)):this.http.get(this.url+"PMS?PageNumber="+t+"&PageSize="+e+"&startdate="+this.startdate+"&enddate="+this.enddate).pipe((0,i.K)(this.api.handleError))}CreatePMS(t){return this.http.post(this.url+"PMS",t).pipe((0,i.K)(this.api.handleError))}CreateUpdate(){return this.http.post(this.url+"PMS/CreateUpdate",this.pmsdata).pipe((0,i.K)(this.api.handleError))}CreateUpdatePMSQC(){return this.http.post(this.url+"PMS/CreateUpdatePMSQC",this.pmsqcdata).pipe((0,i.K)(this.api.handleError))}Delete(t){return this.http.get(this.url+"PMS/Delete/"+t).pipe((0,i.K)(this.api.handleError))}DeleteQC(t){return this.http.get(this.url+"PMS/DeleteQC/"+t).pipe((0,i.K)(this.api.handleError))}GetPlanningList(){return this.http.get(this.url+"PMS/GetPlanningList").pipe((0,i.K)(this.api.handleError))}GetPlanningOverduebyid(t){return this.http.get(this.url+"PMS/GetPlanningOverduebyid/"+t).pipe((0,i.K)(this.api.handleError))}GetPMSQCList(){return this.http.get(this.url+"PMS/GetPMSQCList").pipe((0,i.K)(this.api.handleError))}GetPMSQCbyid(t){return this.http.get(this.url+"PMS/GetPMSQCbyid/"+t).pipe((0,i.K)(this.api.handleError))}GetActiveMachine(){return this.http.get(this.url+"PMS/GetActiveMachine").pipe((0,i.K)(this.api.handleError))}GetShift(){return this.http.get(this.url+"PMS/GetShift").pipe((0,i.K)(this.api.handleError))}SearchItem(t,e){return this.http.get(this.url+"PMS/SearchItem?Search="+t+"&type="+e).pipe((0,i.K)(this.api.handleError))}GetPMSbyid(t){return this.http.get(this.url+"PMS/GetPMSbyid/"+t).pipe((0,i.K)(this.api.handleError))}GetPMSQualitybyid(t){return this.http.get(this.url+"PMS/GetPMSQualitybyid/"+t).pipe((0,i.K)(this.api.handleError))}GetPMSPlanningbyid(t){return this.http.get(this.url+"PMS/GetPMSPlanningbyid/"+t).pipe((0,i.K)(this.api.handleError))}UpdatePMSPlanning(){return this.http.post(this.url+"PMS/UpdatePMSPlanning",this.pmsplanningdata).pipe((0,i.K)(this.api.handleError))}UpdatePMSPlanninItems(){return this.http.post(this.url+"PMS/UpdatePMSPlanninItems",this.pmsplanningitemsdata).pipe((0,i.K)(this.api.handleError))}DeletePMS(t){return this.http.get(this.url+"PMS/DeletePMS/"+t).pipe((0,i.K)(this.api.handleError))}GetProductionMonitoringSheet(t,e,s,r){return this.http.get(this.url+"PMS/GetProductionMonitoringSheet?startdate="+t+"&enddate="+e+"&location="+s+"&supervisor="+r).pipe((0,i.K)(this.api.handleError))}GetProductionShift(){return this.http.get(this.url+"PMS/GetProductionShift").pipe((0,i.K)(this.api.handleError))}GetSupervisor(){return this.http.get(this.url+"PMS/GetSupervisor").pipe((0,i.K)(this.api.handleError))}UpdatePMSActualPlanning(){return this.http.post(this.url+"PMS/UpdatePMSActualPlanning",this.pmsplanningdata).pipe((0,i.K)(this.api.handleError))}UpdateMachineStatus(){return this.http.post(this.url+"PMS/UpdateMachineStatus",this.pmsplanningdata).pipe((0,i.K)(this.api.handleError))}MachineStatusbyid(t){return this.http.get(this.url+"PMS/MachineStatusbyid/"+t).pipe((0,i.K)(this.api.handleError))}GetPMSImage(){return this.http.get(this.url+"PMS/GetPMSImage?startdate="+this.imagestartdate+"&enddate="+this.imageenddate).pipe((0,i.K)(this.api.handleError))}GetPMSImageData(){this.pmsimagevisible=!0,this.imagestartdate=this.datePipe.transform(new Date(this.imagedate),"yyyy-MM-ddT06:00"),this.imageenddate=this.datePipe.transform(new Date(this.imagedate).setDate(new Date(this.imagedate).getDate()+1),"yyyy-MM-ddT08:00"),this.GetPMSImage().subscribe(t=>{"success"==t.status?this.imagedata=t.data:this.toast.warning(t.message,"Warning")})}DayorNight(t,e){return this.daystart=this.datePipe.transform(new Date(t),"yyyy-MM-ddT05:59"),this.dayend=this.datePipe.transform(new Date(e),"yyyy-MM-ddT23:59"),this.nightstart=this.datePipe.transform(new Date(t),"yyyy-MM-ddT19:59"),this.nightend=this.datePipe.transform(new Date(e),"yyyy-MM-ddT08:01"),this.nightstart<t&&e<this.nightend?"Night":new Date(this.daystart)<new Date(t)&&new Date(e)<new Date(this.dayend)?"Day":""}CheckShift(t,e){const s=this.datePipe.transform(new Date(t),"yyyy-MM-ddT08:00"),r=this.datePipe.transform(new Date(e),"yyyy-MM-ddT10:00"),d=this.datePipe.transform(new Date(t),"yyyy-MM-ddT10:00"),p=this.datePipe.transform(new Date(e),"yyyy-MM-ddT12:00"),o=this.datePipe.transform(new Date(t),"yyyy-MM-ddT12:00"),M=this.datePipe.transform(new Date(e),"yyyy-MM-ddT14:00"),D=this.datePipe.transform(new Date(t),"yyyy-MM-ddT14:00"),u=this.datePipe.transform(new Date(e),"yyyy-MM-ddT16:00"),P=this.datePipe.transform(new Date(t),"yyyy-MM-ddT16:00"),l=this.datePipe.transform(new Date(e),"yyyy-MM-ddT18:00"),f=this.datePipe.transform(new Date(t),"yyyy-MM-ddT18:00"),w=this.datePipe.transform(new Date(e),"yyyy-MM-ddT20:00"),m=this.datePipe.transform(new Date(t),"yyyy-MM-ddT20:00"),g=this.datePipe.transform(new Date(e),"yyyy-MM-ddT22:00"),c=this.datePipe.transform(new Date(t),"yyyy-MM-ddT22:00"),S=this.datePipe.transform(new Date(e),"yyyy-MM-ddT00:00"),T=this.datePipe.transform(new Date(t),"yyyy-MM-ddT00:00"),E=this.datePipe.transform(new Date(e),"yyyy-MM-ddT02:00"),v=this.datePipe.transform(new Date(t),"yyyy-MM-ddT02:00"),K=this.datePipe.transform(new Date(e),"yyyy-MM-ddT04:00"),G=this.datePipe.transform(new Date(t),"yyyy-MM-ddT04:00"),_=this.datePipe.transform(new Date(e),"yyyy-MM-ddT06:00"),b=this.datePipe.transform(new Date(t),"yyyy-MM-ddT06:00"),L=this.datePipe.transform(new Date(e),"yyyy-MM-ddT08:00");return new Date(t)>=new Date(c)&&new Date(e)<=new Date(S)?"N-2":new Date(t)>=new Date(m)&&new Date(e)<=new Date(g)?"N-1":new Date(t)>=new Date(T)&&new Date(e)<=new Date(E)?"N-3":new Date(t)>=new Date(v)&&new Date(e)<=new Date(K)?"N-4":new Date(t)>=new Date(G)&&new Date(e)<=new Date(_)?"N-5":new Date(t)>=new Date(b)&&new Date(e)<=new Date(L)?"N-6":new Date(t)>=new Date(s)&&new Date(e)<=new Date(r)?"D-1":new Date(t)>=new Date(d)&&new Date(e)<=new Date(p)?"D-2":new Date(t)>=new Date(o)&&new Date(e)<=new Date(M)?"D-3":new Date(t)>=new Date(D)&&new Date(e)<=new Date(u)?"D-4":new Date(t)>=new Date(P)&&new Date(e)<=new Date(l)?"D-5":new Date(t)>=new Date(f)&&new Date(e)<=new Date(w)?"D-6":0}CheckShiftPlanning(t,e){const s=this.datePipe.transform(new Date(t),"yyyy-MM-ddT07:59"),r=this.datePipe.transform(new Date(e),"yyyy-MM-ddT10:00"),d=this.datePipe.transform(new Date(t),"yyyy-MM-ddT09:59"),p=this.datePipe.transform(new Date(e),"yyyy-MM-ddT12:00"),o=this.datePipe.transform(new Date(t),"yyyy-MM-ddT11:59"),M=this.datePipe.transform(new Date(e),"yyyy-MM-ddT14:00"),D=this.datePipe.transform(new Date(t),"yyyy-MM-ddT13:59"),u=this.datePipe.transform(new Date(e),"yyyy-MM-ddT16:00"),P=this.datePipe.transform(new Date(t),"yyyy-MM-ddT15:59"),l=this.datePipe.transform(new Date(e),"yyyy-MM-ddT18:00"),f=this.datePipe.transform(new Date(t),"yyyy-MM-ddT17:59"),w=this.datePipe.transform(new Date(e),"yyyy-MM-ddT20:01"),m=this.datePipe.transform(new Date(t),"yyyy-MM-ddT19:59"),g=this.datePipe.transform(new Date(e),"yyyy-MM-ddT22:00"),c=this.datePipe.transform(new Date(t),"yyyy-MM-ddT21:59"),S=this.datePipe.transform(new Date(e),"yyyy-MM-ddT00:00"),T=this.datePipe.transform(new Date(t),"yyyy-MM-ddT23:59"),E=this.datePipe.transform(new Date(e),"yyyy-MM-ddT02:00"),v=this.datePipe.transform(new Date(t),"yyyy-MM-ddT01:59"),K=this.datePipe.transform(new Date(e),"yyyy-MM-ddT04:00"),G=this.datePipe.transform(new Date(t),"yyyy-MM-ddT03:59"),_=this.datePipe.transform(new Date(e),"yyyy-MM-ddT06:00"),b=this.datePipe.transform(new Date(t),"yyyy-MM-ddT05:59"),L=this.datePipe.transform(new Date(e),"yyyy-MM-ddT08:00");return new Date(t)>new Date(s)&&new Date(e)<new Date(r)?"D-1":new Date(t)>new Date(d)&&new Date(e)<new Date(p)?"D-2":new Date(t)>new Date(o)&&new Date(e)<new Date(M)?"D-3":new Date(t)>new Date(D)&&new Date(e)<new Date(u)?"D-4":new Date(t)>new Date(P)&&new Date(e)<new Date(l)?"D-5":new Date(t)>new Date(f)&&new Date(e)<new Date(w)?"D-6":new Date(t)>new Date(c)&&new Date(e)<=new Date(S)?"N-2":new Date(t)>new Date(m)&&new Date(e)<=new Date(g)?"N-1":new Date(t)>new Date(T)&&new Date(e)<new Date(E)?"N-3":new Date(t)>new Date(v)&&new Date(e)<new Date(K)?"N-4":new Date(t)>new Date(G)&&new Date(e)<new Date(_)?"N-5":new Date(t)>new Date(b)&&new Date(e)<new Date(L)?"N-6":0}GetSupervisorList(){this.GetSupervisor().subscribe(t=>{this.supervisorlist=t})}LoadData(){this.daystart=this.datePipe.transform(this.currentdate,"yyyy-MM-ddT06:00"),this.dayend=this.datePipe.transform(this.currentdate,"yyyy-MM-ddT22:30"),this.nightstart=this.datePipe.transform(this.currentdate,"yyyy-MM-ddT13:59"),this.nightend=this.datePipe.transform(new Date(this.currentdate).setDate(new Date(this.currentdate).getDate()+1),"yyyy-MM-ddT08:01"),"All"==this.dayornight?(this.startdate=this.daystart,this.enddate=this.nightend):"Day"==this.dayornight?(this.startdate=this.daystart,this.enddate=this.dayend):(this.startdate=this.nightstart,this.enddate=this.nightend),this.subscripton&&this.subscripton.unsubscribe(),this.LoadList(),this.subscripton=(0,N.F)(3e5).subscribe(t=>{this.LoadList()})}LoadPMSData(){this.daystart=this.datePipe.transform(this.currentdate,"yyyy-MM-ddT06:00"),this.dayend=this.datePipe.transform(this.currentdate,"yyyy-MM-ddT22:30"),this.nightstart=this.datePipe.transform(this.currentdate,"yyyy-MM-ddT13:59"),this.nightend=this.datePipe.transform(new Date(this.currentdate).setDate(new Date(this.currentdate).getDate()+1),"yyyy-MM-ddT08:01"),"All"==this.dayornight?(this.startdate=this.daystart,this.enddate=this.nightend):"Day"==this.dayornight?(this.startdate=this.daystart,this.enddate=this.dayend):(this.startdate=this.nightstart,this.enddate=this.nightend),this.GetProductionMonitoringSheetList()}GetProductionMonitoringSheetList(){this.pmsplanninglist=[],this.loader=!0,this.GetProductionMonitoringSheet(this.startdate,this.enddate,this.location,this.supervisor).subscribe(t=>{this.loader=!1,"success"==t.status?(this.pmsplanninglist=t.data,this.intervals=t.intervals,this.intervalcount=t.intervals.length):this.toast.warning(t.message,"Warning")})}GetPMSData(){var t=this.datePipe.transform(this.currentdate,"yyyy-MM-ddT08:00"),e=this.datePipe.transform(this.currentdate,"yyyy-MM-ddT20:00"),s=this.datePipe.transform(this.currentdate,"yyyy-MM-ddT00:00");this.currentdate>s&&this.currentdate<t&&(this.currentdate=this.datePipe.transform((new Date).setDate((new Date).getDate()-1),"yyyy-MM-dd")),this.dayornight=this.todaydate>=t&&e>=this.todaydate?"Day":"Night",this.LoadData()}LoadList(){this.loader=!0,this.GetPMSList(this.p,this.psize,this.searchvalue).subscribe(t=>{this.loader=!1,this.pmsplanninglist=t.data,this.total=t.totalrecords,this.frompage=this.p*this.psize-(this.psize-1),this.topage=this.total>this.p*this.psize?this.p*this.psize:this.total},t=>{this.loader=!1,this.toast.error(t)})}static#t=this.\u0275fac=function(e){return new(e||h)(n.LFG(U.eN),n.LFG(O._W),n.LFG(I.K),n.LFG(A.s),n.LFG(W.uU))};static#e=this.\u0275prov=n.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()}}]);