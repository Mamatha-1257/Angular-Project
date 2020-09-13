import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-employees-for-event',
  templateUrl: './employees-for-event.component.html',
  styleUrls: ['./employees-for-event.component.css']
})
export class EmployeesForEventComponent implements OnInit {
  empList:any;
  eventId:number;
  constructor(private service: EventsService) {}

  ngOnInit(): void {
    this.eventId = this.service.geteventId();
    this.service.getEmployeeByEvents(this.eventId).subscribe((result:any) => {console.log(result);this.empList=result;});
  }

}
