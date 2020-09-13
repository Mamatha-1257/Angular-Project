import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-search-by-event-name',
  templateUrl: './search-by-event-name.component.html',
  styleUrls: ['./search-by-event-name.component.css']
})
export class SearchByEventNameComponent implements OnInit {
   emp:any;
   event:any;
  constructor(private eventservice:EventsService, private cmpservice:CompanyService) { }

  ngOnInit(): void {
  }
  searchByEventName(selectedEventForm:any){
    console.log(selectedEventForm);
    this.eventservice.searchByEventName(selectedEventForm.eventName).subscribe((data:any)=>
    {this.event = data; console.log(this.event);
    if(this.event === null){
      alert("Sorry! No such Event Name...")
    }});

  }

}
