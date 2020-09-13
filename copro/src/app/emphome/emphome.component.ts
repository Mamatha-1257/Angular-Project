import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent implements OnInit {
  [x: string]: any;
  cy:any;
  sy:any;
  sm:any;
  sd:any;
  cd:any;
  cm:any;
  events:any;
  constructor(private eventService:EventsService,public router: Router) {

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
  ngOnInit(): void {
    console.log(this.events);
    this.eventService.getAllSeminars().subscribe((result:any) => {console.log(result);this.allSeminars=result;});
    this.eventService.getAllOtherEvents().subscribe((result:any) => {console.log(result);this.allOtherEvents=result;});
    this.eventService.getAllEvents().subscribe((result:any) => {console.log(result);this.events=result;});
  }


}
