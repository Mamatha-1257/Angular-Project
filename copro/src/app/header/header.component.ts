import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private empService:EmployeeService, private cmpService:CompanyService, private router:Router) {
  }

  ngOnInit(): void {
  }
  userck():boolean {
    if(this.empService.getEmpdetails() == null && this.cmpService.getuserdetails() == null){
      return false;
    }
    return true;
  }
  empck():boolean{
    if(this.empService.getEmpdetails() == null){
      return false;
    }
    return true;

  }
  logout(){
    this.empService.emptyobject();
    this.cmpService.emptyobject();
    this.router.navigate(['home']);
  }

}
