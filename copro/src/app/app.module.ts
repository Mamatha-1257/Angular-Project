import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'; // for forms
import {HttpClientModule} from '@angular/common/http'; // for urls
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { EmpregisterComponent } from './empregister/empregister.component';
import { CompanyregisterComponent } from './companyregister/companyregister.component';
import { CompanyhomeComponent } from './companyhome/companyhome.component';
import { ShowallempComponent } from './showallemp/showallemp.component';
import { EventregisterComponent } from './eventregister/eventregister.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { HackathonsComponent } from './hackathons/hackathons.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { SocialeventsComponent } from './socialevents/socialevents.component';
import { OthereventsComponent } from './otherevents/otherevents.component';
import { ViewMyEventsComponent } from './view-my-events/view-my-events.component';
import { ViewEmpProfileComponent } from './view-emp-profile/view-emp-profile.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { SearchByEventNameComponent } from './search-by-event-name/search-by-event-name.component';
import { EmployeesForEventComponent } from './employees-for-event/employees-for-event.component';
import { EmpevntsComponent } from './empevnts/empevnts.component';
import { HeaderComponent } from './header/header.component';
import { GetcompcodeComponent } from './getcompcode/getcompcode.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { FeedbackComponent } from './feedback/feedback.component';
import { CertificateComponent } from './certificate/certificate.component';

const appRoot:Routes =[{path:'',component:LogoComponent},
{path:'home',component:HomeComponent},
{path:'login/cmpregister',component:CompanyregisterComponent},
{path:'cmpregister',component:CompanyregisterComponent},
{path:'login',component:LoginComponent},
{path:'cmphome',component:CompanyhomeComponent},
{path:'emphome',component:EmphomeComponent},
{path:'showemp',component:ShowallempComponent},
{path:'myevents',component:EmpevntsComponent},
{path:'postevent',component:EventregisterComponent},
{path:'viewMyEvents',component:ViewMyEventsComponent},
{path:'viewMyEvents/employeesForEvent',component:EmployeesForEventComponent},
{path:'searchByEventName',component:SearchByEventNameComponent},
{path:'viewEmpProfile',component:ViewEmpProfileComponent},
{path:'seminars',component:SeminarsComponent},
{path:'socialevents',component:SocialeventsComponent},
{path:'hackathons',component:HackathonsComponent},
{path:'others',component:OthereventsComponent},
{path:'workshops',component:WorkshopsComponent},
{path:'pay',component:MakePaymentComponent},
{path:'certificate',component:CertificateComponent},
{path:'seminars/eventregistration',component:EventregistrationComponent},
{path:'workshops/eventregistration',component:EventregistrationComponent},
{path:'socialevents/eventregistration',component:EventregistrationComponent},
{path:'hackathons/eventregistration',component:EventregistrationComponent},
{path:'others/eventregistration',component:EventregistrationComponent},
{path:'seminars/eventregistration/pay',component:MakePaymentComponent},
{path:'workshops/eventregistration/pay',component:MakePaymentComponent},
{path:'socialevents/eventregistration/pay',component:MakePaymentComponent},
{path:'hackathons/eventregistration/pay',component:MakePaymentComponent},
{path:'others/eventregistration/pay',component:MakePaymentComponent},
{path:'getcompcode',component:GetcompcodeComponent},
{path:'getcompcode/cmphome',component:CompanyhomeComponent},
{path:'viewMyEvents/feedback',component:FeedbackComponent},
{path:'myevents/certificate',component:CertificateComponent}
]







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoComponent,
    LoginComponent,
    EmpregisterComponent,
    CompanyregisterComponent,
    CompanyhomeComponent,
    ShowallempComponent,
    EventregisterComponent,
    EmphomeComponent,
    SeminarsComponent,
    HackathonsComponent,
    WorkshopsComponent,
    SocialeventsComponent,
    OthereventsComponent,
    ViewMyEventsComponent,
    ViewEmpProfileComponent,
    EventregistrationComponent,
    MakePaymentComponent,
    SearchByEventNameComponent,
    EmployeesForEventComponent,
    EmpevntsComponent,
    HeaderComponent,
    GetcompcodeComponent,
    FeedbackComponent,
    CertificateComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoot),
    AppRoutingModule,
    NgbModule,
    NgOtpInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
