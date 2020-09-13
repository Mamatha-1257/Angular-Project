import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  closeResult: string;
  cy:any;
  sy:any;
  sm:any;
  sd:any;
  cd:any;
  cm:any;
  allSeminars: any;
  displaySeminars : any;
  allOtherEvents: any;
  constructor(private modalService: NgbModal, private eventService:EventsService) {
  }

    

  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }

  

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    } else {

      return  `with: ${reason}`;

    }

  }

  calTime(startDate:any){
    console.log(startDate);
    this.cy=new Date().getFullYear();
    this.sy=new Date(startDate).getFullYear();
    this.cm=new Date().getMonth();
    this.sy=new Date(startDate).getMonth();
    this.cd=new Date().getDate();
    this.sd=new Date(startDate).getDate();
    if (this.sy >= this.cy){
      if (this.sm >= this.cm) {
        if (this.sd > this.cd) {
          return true;
        }
      }
    }
      }
  ngOnInit(): void {
    this.eventService.getAllSeminars().subscribe((result:any) => {console.log(result);this.allSeminars=result;});
    this.eventService.getAllOtherEvents().subscribe((result:any) => {console.log(result);this.allOtherEvents=result;});
  }

}