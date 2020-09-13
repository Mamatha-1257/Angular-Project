import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  object: any;
  loginComapny: any;
  company: any;
  employee: any;
  empname: any;
  myEmp: any;
  constructor(private service: CompanyService, private router: Router, private empservice: EmployeeService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
  }

  /*companyLogin(companyLoginForm: any) {
    console.log(companyLoginForm);
    //this.service.companyLogin(companyLoginForm.hrMail, companyLoginForm.hrPassword).subscribe((data: any) => {this.company = data; console.log(this.company);});
    this.service.companyLogin(companyLoginForm.hrMail, companyLoginForm.hrPassword).subscribe((data: any) =>
    {this.
      company = data;
      console.log(this.company);
      this.service.setuserdetails(this.company);
      this.service.setcompName(this.company.compName);
      console.log(this.service.getcompName());
    if (this.company != null) {
      console.log("Login successful");
      this.router.navigate(['cmphome']);
    }
    else{
      this.toastr.show('error', 'Invalid Credentials');
     // alert('Invalid credentials ...!')
    }

  });
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

}*/
  Login(LoginForm: any) {
    // this.service.Login(LoginForm.Mail, LoginForm.Password).subscribe((data: any) => {
    //this.object = data; console.log(this.object);
    // if (this.object.toString() === "employee") {
    this.empservice.employeeLogin(LoginForm.Mail, LoginForm.Password).subscribe((data: any) => {
      this.employee = data;
      if (this.employee !== null) {
        console.log(this.employee);
        this.empname = "Hi!!  " + this.employee.empName;
        this.empservice.setEmpdetails(this.employee);
        this.router.navigate(['emphome']);
      }
      else {
        this.service.companyLogin(LoginForm.Mail, LoginForm.Password).subscribe((data: any) => {
          this.company = data;
          if (this.company !== null) {
            console.log(this.company);
            this.service.setuserdetails(this.company);
            this.service.setcompName(this.company.compName);
            console.log(this.service.getcompName());
            this.router.navigate(['cmphome']);
          }
          else {
            alert('Invalid credentials');
          }
        });
      }
    });
  }
  /* else if (this.object.toString() === "company") {
     console.log('inside cmp');
     this.service.companyLogin(LoginForm.Mail, LoginForm.Password).subscribe((data: any) => {
     this.
       company = data;
       console.log(this.company);
       this.service.setuserdetails(this.company);
       this.service.setcompName(this.company.compName);
       console.log(this.service.getcompName());
       this.router.navigate(['cmphome']);
     });
   } else {
     this.toastr.show('error', 'Invalid Credentials');
     alert('Invalid credentials');
   }
 });*/
}
