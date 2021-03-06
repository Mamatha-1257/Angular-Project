import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { EmployeeService } from '../employee.service';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seminars',
  templateUrl: './seminars.component.html',
  styleUrls: ['./seminars.component.css']
})
export class SeminarsComponent implements OnInit {
   events:any;
   emp_event:any;
   emp:any;
   event:any;
   cy:any;
   sy:any;
   sm:any;
   sd:any;
   cd:any;
   cm:any;
  constructor(private eventService:EventsService,private cmpService:CompanyService, private empService:EmployeeService,public router:Router) {
    this.emp_event = {empName:'',companyName:this.cmpService.getcompName(),empMail:'',empId:'',id:'',eventId:''};
  }

  ngOnInit(): void {
    this.eventService.getAllSeminars().subscribe((result:any) => {console.log(result);this.events=result;});
  }
  calTime(startDate:any){
    var date1 = startDate.split('-')
    startDate = date1[1] + '/' +date1[0] +'/' +date1[2];
    this.cy=new Date().getFullYear().toString();
    this.sy=new Date(startDate).getFullYear().toString();
    this.cm=new Date().getMonth().toString();
    this.sm=new Date(startDate).getMonth().toString();
    this.cd=new Date().getDate().toString();
   this.sd= new Date(startDate).getDate().toString();
    if (Number(this.sy) >= Number(this.cy)){
      if (Number(this.sm) >= Number(this.cm)) {
        if (Number(this.sd) > Number(this.cd)){
          return true;
        }
      }
    }
      }

  eventRegister(event:any){
    this.eventService.seteventdetails(event);
    this.emp = this.empService.getEmpdetails();
    this.event = this.eventService.geteventdetails();
    this.emp_event.empId = this.emp.empId;
    this.emp_event.empName = this.emp.empName;
    this.emp_event.empMail = this.emp.empMail;
    this.emp_event.eventId = this.event.eventId;
    this.eventService.employeesForEvent(this.emp_event).subscribe((data:any) => {console.log(data);});
}
}
