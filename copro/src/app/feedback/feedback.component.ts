import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  empList:any;
  eventId:number;
  constructor(private service: EventsService) {}

  ngOnInit(): void {
    this.eventId = this.service.geteventId();
    this.service.getEmployeeFeedback(this.eventId).subscribe((result:any) => {console.log(result);this.empList=result;});
  }

  

}
