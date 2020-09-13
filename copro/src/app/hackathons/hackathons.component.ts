import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ThrowStmt } from '@angular/compiler';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-hackathons',
  templateUrl: './hackathons.component.html',
  styleUrls: ['./hackathons.component.css']
})
export class HackathonsComponent implements OnInit {
  allevents:any;
  emp_event:any;
  emp:any;
  event:any;
  cy:any;
  sy:any;
  sm:any;
  sd:any;
  cd:any;
  cm:any;
  constructor(private eventService:EventsService, private cmpService:CompanyService, private router:Router, private empService:EmployeeService) {
    this.emp_event = {empName:'',companyName:this.cmpService.getcompName(),empMail:'',empId:'',id:'',eventId:''};
  }

  ngOnInit(): void {
    console.log(this.emp_event);
    this.eventService.getAllHackathons().subscribe((result:any) => {console.log(result);this.allevents=result;});
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
