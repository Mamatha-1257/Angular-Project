import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import * as $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})

export class EventregistrationComponent implements OnInit {
  [x: string]: any;
  event:any;
  object:any;
  mail:any;
  eventId:any;
  constructor(private service:EventsService) {
    this.event = this.service.geteventdetails();
    this.eventId = this.event.eventId;
  }

  ngOnInit(): void {
   
  }
    sendpay(){
    alert('in send pay');
  }
  async pay(amount) {
  
     var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: async function (token: any) {
        this.object = token;
        this.mail = token.email;
        
        //this.sendpay();
      //  alert('Registered,Payment Successful!!');
       // this.service.sendpaymentreceipt(this.mail,this.eventId).subscribe((result:any) => {console.log(result);this.mail=result;});
      },
      
    });
    
    await handler.open({
      name: 'Co@Pro',
      description: 'Event Registration Payment',
      amount: this.event.regFee * 100,
        
    },
     this.sendpay()
    );
       
}

/* sendpayment(regfee:any){
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
    locale: 'auto',
    token: function (token: any) {
      this.object = token;
      this.mail = token.email;
      console.log("In pay");
      console.log(this.object);
     // alert('Registered,Payment Successful!!');
    }

  });

  handler.open({
    name: 'Co@Pro',
    description: 'Event Registration Payment',
    amount: this.event.regFee * 100,
      });
  alert('completed');
  // this.service.sendpaymentreceipt(this.object.email,this.eventId).subscribe((result:any) => {console.log(result);this.mail=result;});
   console.log("in service");
   console.log(this.object);

      }*/
      

 }
