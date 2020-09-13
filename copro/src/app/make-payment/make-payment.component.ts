import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
 // [x: string]: any;

 event:any;
 eventId:any;
emp:any;
 
  constructor(private service:EventsService,private empservice: EmployeeService,private router:Router) {
    this.event = this.service.geteventdetails();
    this.eventId = this.event.eventId;
    this.emp = this.empservice.getEmpdetails();
   }

  ngOnInit(): void {
  }
 pay(payForm:any){
  console.log(payForm);
  //this.toastr.success('Registration Successful', 'Welcome to Co@Pro!!!');
  alert('Payment successful,Details will be mailed!!!');
  this.router.navigate(['emphome']);
  this.service.sendpaymentreceipt(this.emp.empMail,this.eventId).subscribe((result:any) => {console.log(result);this.emp.empMail=result;});
 }
}