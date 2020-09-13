import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cmplogin',
  templateUrl: './cmplogin.component.html',
  styleUrls: ['./cmplogin.component.css']
})
export class CmploginComponent implements OnInit {
  company:any;
  loginComapny:any;

  constructor(private service: CompanyService, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
    companyLogin(companyLoginForm: any) {
      console.log(companyLoginForm);
      //this.service.companyLogin(companyLoginForm.hrMail, companyLoginForm.hrPassword).subscribe((data: any) => {this.company = data; console.log(this.company);});
      this.service.companyLogin(companyLoginForm.hrMail, companyLoginForm.hrPassword).subscribe((data: any) =>
      {this.company = data;
        console.log(this.company);
        this.service.setuserdetails(this.company);
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
  }
