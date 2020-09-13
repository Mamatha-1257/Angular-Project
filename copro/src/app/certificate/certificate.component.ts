import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
import { EmployeeService } from '../employee.service';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  emp:any;
  event:any;
  cmpName:any;
  certificate:any;
  constructor(private service: EmployeeService,private router:Router,private eventservice: EventsService, private cmpService:CompanyService) {}
  ngOnInit(){
    this.certificate=this.eventservice.getcertificatedetails();
   this.emp = this.service.getEmpdetails();
   this.event = this.eventservice.geteventdetails();
   this.event.winner = this.event.winner.toUpperCase();
   this.event.runner = this.event.runner.toUpperCase();
   console.log(this.event);
  this.cmpName = this.cmpService.getcompName();
  }
  title = 'html-to-pdf-angular-application';
public convetToPDF()
{
var data = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 90;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;

const contentDataURL = canvas.toDataURL('image/jpeg')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'JPEG', -30, position, imgWidth, imgHeight)
pdf.save('new-file.pdf'); // Generated PDF
});
}
}
