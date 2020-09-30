import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { CompanyService } from '../company.service';
import * as moment from 'moment';

declare var jQuery:any;
@Component({
  selector: 'app-view-my-events',
  templateUrl: './view-my-events.component.html',
  styleUrls: ['./view-my-events.component.css']
})
export class ViewMyEventsComponent implements OnInit {
  myEvents:any;
  cmp:any;
  ent:any
  cy:any;
  ey:any;
  em:any;
  ed:any;
  cd:any;
  cm:any;
  editObject:any;
  minDate = moment(new Date()).format('YYYY-MM-DD')
  constructor(private eventService: EventsService, private cmpservice:CompanyService) {
    this.editObject = {eventName : '',eventTag: '',eventDomain : '',mobile:'',regFee:'',StartDate:'',endDate:'',details:'',eventUrl : '', winner:'',runner:'',poster:'',
   address:{street:'', area:'', city:'', state:''}};
  }

 ngOnInit(): void {
   this.cmp = this.cmpservice.getuserdetails();
   this.cmpservice.setuserdetails(this.cmp);
   this.eventService.getCmpEvents(this.cmp).subscribe((result:any) => {console.log(result);this.myEvents=result;});
 }
 calTime(endDate:any){
  var date1 = endDate.split('-')
  endDate = date1[1] + '/' +date1[0] +'/' +date1[2];
  this.cy=new Date().getFullYear().toString();
  this.ey=new Date(endDate).getFullYear().toString();
  this.cm=new Date().getMonth().toString();
  this.em=new Date(endDate).getMonth().toString();
  this.cd=new Date().getDate().toString();
 this.ed= new Date(endDate).getDate().toString();
  if (Number(this.ey) <= Number(this.cy)){

    if (Number(this.em) <= Number(this.cm)) {

      if (Number(this.ed) <= Number(this.cd)) {

        return true;
      }
    }
  }
    }
 showEditPopup(editEvent:any){
  this.editObject = editEvent;
  jQuery('#eventModel').modal('show');
}
updateEvent(){
  this.eventService.updateEvent(this.editObject).subscribe();
  console.log(this.editObject);
}
deleteEvent(event:any){
  this.eventService.deleteEvent(event).subscribe((result:any) =>{
 const i= this.ent.findIndex((element) => {return element.eventId === event.eventId}
  );
     this.ent.splice(i,1);
  });
}
setEventId(eventId:number){
  this.eventService.seteventId(eventId);
}
}
