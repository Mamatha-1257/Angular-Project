import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-showallemp',
  templateUrl: './showallemp.component.html',
  styleUrls: ['./showallemp.component.css']
})
export class ShowallempComponent implements OnInit {
   emp:any
   editObject:any;
   cmp:any;
  constructor(private service:EmployeeService,private cmpservice:CompanyService) { 
  }
  
  ngOnInit(): void {
      this.cmp = this.cmpservice.getuserdetails();
      this.service.getAllEmployees(this.cmp).subscribe((result:any) => {console.log(result);this.emp=result;});
      
   }
   AcceptEmp(emp:any){
    this.editObject = emp;
    this.editObject.status = "Accepted";
    this.service.AcceptEmp(this.editObject).subscribe();
    console.log(this.editObject);
  }
  RejectEmp(emp:any){
    this.editObject = emp;
    this.editObject.status = "Rejected";
    this.service.AcceptEmp(this.editObject).subscribe();
    console.log(this.editObject);
  }
  deleteEmp(employee:any){
    this.service.deleteEmp(employee).subscribe((result:any) =>{
   const i= this.emp.findIndex((element) => {return element.empId === employee.empId}
    );
       this.emp.splice(i,1);
    });
    
  }
}