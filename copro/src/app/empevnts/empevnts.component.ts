import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
declare var jQuery:any;
@Component({
  selector: 'app-empevnts',
  templateUrl: './empevnts.component.html',
  styleUrls: ['./empevnts.component.css']
})
export class EmpevntsComponent implements OnInit {
  myEvents:any;
  emp:any;
  cy:any;
  ey:any;
  em:any;
  ed:any;
  cd:any;
  cm:any;
  event:any;
  endDate : String;
  feedback:any;
  certificate:any;
  constructor(private service: EmployeeService,private router:Router,private eventservice: EventsService) {
    this.feedback = {empId:'',empName:'',eventId:'',rating:'',comments:'',empMail:''};
    this.certificate = {empName:'',eventName:'',eventDomain:'',issueDate:'',compName:''};
  }


  ngOnInit(): void {
    this.emp = this.service.getEmpdetails();
    this.event = this.eventservice.geteventdetails();
    this.service.getEmpEvents(this.emp).subscribe((result:any) => {console.log(result);this.myEvents=result;});
    console.log(this.emp);
    this.certificate.empName = this.emp.empName.toUpperCase();

    this.feedback.empId = this.emp.empId;
    this.feedback.empName = this.emp.empName;
    this.feedback.empMail = this.emp.empMail;
    this.feedback.eventId = this.event.eventId;


  }
  calTime(endDate:any){
    var date1 = endDate.split('-')
    endDate = date1[1] + '/' +date1[0] +'/' +date1[2];
    this.cy=new Date().getFullYear().toString();
    this.ey=new Date(endDate).getFullYear().toString();
    this.cm=new Date().getMonth().toString();
    this.em=new Date(endDate).getMonth().toString();
    this.cd=new Date().getDate().toString();
   this.ed= new Date(endDate).getDate().toString();
    if (Number(this.ey) <= Number(this.cy)){

      if (Number(this.em) <= Number(this.cm)) {

        if (Number(this.ed) <= Number(this.cd)) {

          return true;
        }
      }
    }
      }
  showEditPopup(reqevent:any){
    console.log(reqevent);
    this.feedback.eventId = reqevent.eventId;
    jQuery('#feedback').modal('show');
  }
  submitFeedback(form:any) {
    this.feedback.rating = form.rate;
    this.feedback.comments = form.comments;
    this.eventservice.feedback(this.feedback).subscribe((data: any) => {console.log(data);});
    console.log(this.feedback);
    alert('Thanks for feedback!!!  Co@Pro');
    this.router.navigate(['emphome']);
  }
   viewCertificate(event:any){
    this.certificate.eventName = event.eventName;
    this.certificate.eventDomain = event.eventDomain;
    this.certificate.issueDate = event.endDate;
    this.eventservice.seteventdetails(event);
    this.eventservice.setcertificatedetails(this.certificate);
    this.router.navigate(['certificate']);
  }

}
