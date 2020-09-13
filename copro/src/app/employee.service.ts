import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee:any;


  constructor(private httpClient: HttpClient) { }
  setEmpdetails(user:any){
    return this.employee = user;
  }
  getEmpdetails(){
    return this.employee;
  }

  registerEmployee(employee : any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/registerEmployee', employee);
  }
  getAllEmployees(cmp:any){
    return  this.httpClient.get('RESTAPI/webapi/myresource/getAllEmployees/'+ cmp.compCode);
   }
   AcceptEmp(editObject: any){
    return this.httpClient.put('RESTAPI/webapi/myresource/AcceptEmp/',editObject);
  }
  RejectEmp(editObject: any){
    return this.httpClient.put('RESTAPI/webapi/myresource/RejectEmp/',editObject);
  }
  getEmpEvents(emp:any){
    return  this.httpClient.get('RESTAPI/webapi/myresource/getEmpEvents/'+ emp.empId);
   }
  deleteEmp(emp:any){
    return this.httpClient.delete('RESTAPI/webapi/myresource/deleteEmp/'+ emp.empId);
   }
   employeeLogin(empMail,empPassword):any{
    return this.httpClient.get('RESTAPI/webapi/myresource/loginEmployee/'+ empMail + '/' + empPassword);
  }
   getEmpByID(emp:any):any{
    return this.httpClient.get('RESTAPI/webapi/myresource/getEmpByID/' + emp.empId);
   }
   updateEmp(editObject : any){
    return this.httpClient.put('RESTAPI/webapi/myresource/updateEmp', editObject);

   }
   emptyobject(){
    this.employee = null;
  }

}
