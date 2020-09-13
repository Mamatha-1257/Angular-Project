import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {
  empPassword:any;
  confirmPassword:any;
  employee : any;
  constructor( private service : EmployeeService,private router : Router,private toastr: ToastrService) {
    this.employee = {empId:'', empName:'', companyCode:'', empMail:'', empPassword:'', mobile:'', interest1:'', interest2:'', interest3:'',status:'pending'};
   }

  ngOnInit(): void {
  }

  registerEmployee(employeeForm: any) : void {
    console.log(employeeForm);
    if (this.empPassword === this.confirmPassword) {
      this.employee.empPassword = this.empPassword;
    this.service.registerEmployee(this.employee).subscribe((data: any) => {console.log(data);});
    //this.toastr.success('Registration Successful', 'Welcome to Co@Pro!!!');
    alert('Registration Successful, Welcome to Co@Pro!!!');
    this.router.navigate(['home']);
  }
  else {
   alert("Password mismatch !!!");
   //this.toastr.show('error', 'Password mismatch');
  }
}
}
