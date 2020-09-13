import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  company:any;
  compName:any;
  constructor(private httpClient: HttpClient) { }
   setuserdetails(user:any){
     return this.company = user;
   }
   getuserdetails(){
     return this.company;
   }

   setcompName(user:any){
    return this.compName = user;
  }
  getcompName(){
    return this.compName;
  }
  registerCompany(company : any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/registerCompany', company);
  }
  companyLogin(hrMail,password):any{
    return this.httpClient.get('RESTAPI/webapi/myresource/loginCompany/'+ hrMail + '/' + password);
  }
  emptyobject(){
    this.company = null;
  }
  sendOtp(mobile:any){
    console.log('in service');
    return this.httpClient.get('RESTAPI/webapi/myresource/sendOtp/'+ mobile);
  }
}
