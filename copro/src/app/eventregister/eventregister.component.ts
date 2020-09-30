import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
@Component({
  selector: 'app-eventregister',
  templateUrl: './eventregister.component.html',
  styleUrls: ['./eventregister.component.css']
})

export class EventregisterComponent implements OnInit {
  [x: string]: any;
  imageUrl:String;
  fileToUpload:File=null;
  reader:FileReader;
  events:any;
  cmp:any;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment(new Date()).format('YYYY-MM-DD')
  constructor(private service:EventsService,private cmpservice:CompanyService,private router : Router) {
    this.cmp = this.cmpservice.getuserdetails();
    this.imageUrl='/assets/img/default-image.png';
    this.events = {company: {compCode:this.cmp.compCode,compName : '',mobile : '',hrMail: '',hrPassword : '',website : '',address:{ street:'',area:'',city:'',state:''}},eventName : '',eventTag: '',eventDomain : '',mobile:'',regFee:'',startDate:'',winner:'x',runner:'y',endDate:'',details:'',eventUrl : '', poster:'',
    address:{street:'', area:'', city:'', state:''}};
  }

  ngOnInit(): void {
  }
  handleFileInput(file:FileList){
    this.fileToUpload=file.item(0);
    this.reader=new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
  }
   OnSubmit(eventForm){
    this.service.postFile(this.events, this.fileToUpload).subscribe(
      data => {
        console.log('done in evnetts');
        this.imageUrl='/assets/image/default.png';

      }
    );
   // this.toastr.success('Registration Successful');
    alert('Registration successful!!!');
   // this.router.navigate(['cmphome']);
    //this.service.sendMailToEmployee(this.events.eventDomain).subscribe((result:any) => {console.log(result)});
    }

}
