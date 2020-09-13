import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent implements OnInit {
  employee:any;
  empname:any;
   myEmp:any;

  constructor(private router : Router,private empservice: EmployeeService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  employeeLogin(employeeLoginForm: any) {
    console.log(employeeLoginForm);
    //this.service.companyLogin(companyLoginForm.hrMail, companyLoginForm.hrPassword).subscribe((data: any) => {this.company = data; console.log(this.company);});
    this.empservice.employeeLogin(employeeLoginForm.empMail, employeeLoginForm.empPassword).subscribe((data: any) =>
    {this.employee = data;
      console.log(this.employee);
      this.empname = "Hi!!  " + this.employee.empName ;
      this.empservice.setEmpdetails(this.employee);
    if (this.employee != null) {
      console.log("Login successful");
      this.router.navigate(['emphome']);
    }
    else{
      console.log("unsuccessful");
      this.toastr.show('error', 'Invalid Credentials');
    }

  });

  }

}
