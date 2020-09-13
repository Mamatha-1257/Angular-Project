import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
declare var jQuery:any;
@Component({
  selector: 'app-getcompcode',
  templateUrl: './getcompcode.component.html',
  styleUrls: ['./getcompcode.component.css']
})
export class GetcompcodeComponent implements OnInit {
cmp:any;
userotp:string;
generatedOtp:any;
phone:any;
  constructor(private service:CompanyService,private router:Router) { 
    this.cmp = this.service.getuserdetails();
    this.phone = this.cmp.mobile.slice(0,2)+"******"+this.cmp.mobile.slice(8,10);

  }

  verifyOtp(){
    if (this.userotp !== this.generatedOtp.toString()){ 
     alert('Enter valid otp');
    } 
    else{
      jQuery('#code').modal('show');
    }
  }
  
  ngOnInit(): void {
    console.log("in oninit");
    this.service.sendOtp(this.cmp.mobile).subscribe((result:any) => {console.log(result); 
      this.generatedOtp = result;});
  }
  submit() {
    this.router.navigate(['cmphome'])
  }
  otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: true,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };
  onOtpChange(otp) {
    this.otp = otp;
    console.log(this.otp);
  this.userotp = this.otp;
  }
  
   
 
  setVal(val) {
    this.ngOtpInput.setValue(val);
  }

  toggleDisable(){
    if(this.ngOtpInput.otpForm){
      if(this.ngOtpInput.otpForm.disabled){
        this.ngOtpInput.otpForm.enable();
      }else{
        this.ngOtpInput.otpForm.disable();
      }
    }
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }
  
}