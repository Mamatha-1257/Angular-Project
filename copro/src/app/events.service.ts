import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events:any;
  eventId:number;
  certificate:any;
  constructor(private httpClient: HttpClient) { }
    seteventdetails(event:any){
      return this.events = event;
    }
    geteventdetails(){
      return this.events;
    }
    getcertificatedetails(){
      return this.certificate;
    }
    setcertificatedetails(event:any){
      return this.certificate = event;
    }
    seteventId(Id:number){
      return this.eventId = Id;
    }
    geteventId(){
      return this.eventId;
    }

  postFile(eventForm, fileToUpload:File){
    const endpoint='RESTAPI/webapi/myresource/uploadImage';
    const formData:FormData=new FormData();
    console.log('in upload image')
    console.log(eventForm);
    formData.append('poster',fileToUpload,fileToUpload.name);
    formData.append('events',JSON.stringify(eventForm))
    return this.httpClient.post(endpoint,formData);

  }
  getAllEvents():any {
    console.log('done');
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllEvents');
  }
  getAllSeminars():any {
    console.log('done');
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllSeminars');
  }
  getAllWorkshops():any {
    console.log('done');
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllWorkshops');
  }
  getAllHackathons():any {
    console.log('done');
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllHackathons');
  }
  getAllSocialEvents():any {
    console.log('done');
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllSocialEvents');
  }
  getAllOtherEvents():any {
    console.log('done');
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllOtherEvents');
  }
  sendMailToEmployee(eventDomain:any){
    console.log('done in sendmail');
    return this.httpClient.get('RESTAPI/webapi/myresource/sendMailToEmployee/'+ eventDomain);
  }
  getCmpEvents(cmp:any){
    return  this.httpClient.get('RESTAPI/webapi/myresource/getCmpEvents/'+ cmp.compCode);
   }
   searchByEventName(selectedEvent:any){
    return  this.httpClient.get('RESTAPI/webapi/myresource/searchByEventName/'+ selectedEvent);
   }
   sendpaymentreceipt(mail:any,eventId:any){
     
    return  this.httpClient.get('RESTAPI/webapi/myresource/sendpaymentreceipt/'+ mail + '/' + eventId);
   }
   employeesForEvent(emp_events:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/employeesForEvent', emp_events);
  }
  getEmployeeByEvents(eventId:number){
    return  this.httpClient.get('RESTAPI/webapi/myresource/getEmployeeByEvents/'+ eventId);
   }
   updateEvent(editObject : any){
    return this.httpClient.put('RESTAPI/webapi/myresource/updateEvent', editObject);
  }
   deleteEvent(event:any){
    return this.httpClient.delete('RESTAPI/webapi/myresource/deleteEvent/'+ event.eventId);
   }
   feedback(feedback:any){
    return this.httpClient.post('RESTAPI/webapi/myresource/feedback', feedback);
   }
   getEmployeeFeedback(eventId:number){
    return  this.httpClient.get('RESTAPI/webapi/myresource/getEmployeeFeedback/'+ eventId);
   }
}
