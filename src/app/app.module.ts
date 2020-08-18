import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectSeatComponent } from './selectseat/selectseat.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginService } from './services/loginService';
import {HttpClientModule} from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PaymentComponent } from './payment/payment.component';
import { PassengercomponentComponent } from './passengercomponent/passengercomponent.component';
import { GuestuserdetailComponent } from './guestuserdetail/guestuserdetail.component';
import { GuestUserService } from './services/GuestUserService';
import { SeatlayoutComponent } from './seatlayout/seatlayout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TicketgenerationComponent } from './ticketgeneration/ticketgeneration.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectSeatComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    PaymentdetailsComponent,
    PaymentComponent,
    PassengercomponentComponent,
    GuestuserdetailComponent,
    SeatlayoutComponent,
    ForgotpasswordComponent,
    TicketgenerationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,GuestUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
