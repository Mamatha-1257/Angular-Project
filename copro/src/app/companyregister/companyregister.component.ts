import { Component, OnInit, AbstractType } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-companyregister',
  templateUrl: './companyregister.component.html',
  styleUrls: ['./companyregister.component.css']
})
export class CompanyregisterComponent implements OnInit {
  hrPassword:any;
  cmpconfirmPassword:any;
  company : any;
  empPassword:any;
  empconfirmPassword:any;
  employee : any;

  title = 'email-validation-tutorial';
  userEmails = new FormGroup({
	primaryEmail: new FormControl('',[
  	Validators.required,
  	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  });

  constructor( private service : CompanyService,private router : Router,private toastr: ToastrService, private empService: EmployeeService) {
    this.hrPassword ='',
    this.cmpconfirmPassword = '';
  this.company = { compCode : this.generateCompanyCode(), compName : '',mobile : '',hrMail: '',hrPassword : '',website : '',address:{ street:'',area:'',city:'',state:''}};
  this.employee = {empId:'', empName:'', companyCode:'', empMail:'', empPassword:'', mobile:'', interest1:'', interest2:'', interest3:'',status:'pending'};
  }
  ngOnInit(): void {}

  generateCompanyCode() : any {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let companyCode = "";
    for (let i = 0; i <= 6; i ++) {
      companyCode += characters.charAt(Math.floor(Math.random() * 36));
    }
    return companyCode;
  }

  registerCompany(companyForm: any,) : void {
    console.log(companyForm);
    if (this.hrPassword === this.cmpconfirmPassword) {
      this.company.hrPassword = this.hrPassword;
    this.service.registerCompany(this.company).subscribe((data: number) => {console.log(data);
    if (data === 0){
      alert('User already exists!')
    }
    else{
      this.router.navigate(['home']);
      //this.toastr.success('Registration Successful, Welcome to Co@Pro!!!');
      alert('Registration Successful, Welcome to Co@Pro!!!');

    }
    });

  }


    else {
      alert("Password mismatch !!!");
      //this.toastr.show('error', 'Password mismatch');
    }
  }
  registerEmployee(employeeForm: any) : void {
    console.log(employeeForm);
    if (this.empPassword === this.empconfirmPassword) {
      this.employee.empPassword = this.empPassword;
    this.empService.registerEmployee(this.employee).subscribe((data: any) => {console.log(data);
      if (data === 0){
        alert('User already exists!')
      }
      else{
        this.router.navigate(['home']);
        alert('Registration successful!!');
      }
    });

    //this.toastr.success('Registration Successful', 'Welcome to Co@Pro!!!');
   // alert('Registration Successful, Welcome to Co@Pro!!!');

  }
  else {
   alert("Password mismatch !!!");
   //this.toastr.show('error', 'Password mismatch');
  }
}

  get primEmail(){

    console.log(this.company);
    return this.userEmails.get('primaryEmail')

  }
}
