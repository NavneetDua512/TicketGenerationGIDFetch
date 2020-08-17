import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes}from '@angular/router';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import{WalletService} from './services/walletService';
import {CancelService} from './services/cancelService'
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CancelledBookingsComponent } from './cancelled-bookings/cancelled-bookings.component';
import { CurrentBookingsComponent } from './current-bookings/current-bookings.component';
import{PreviousBookingsComponent} from './previous-bookings/previous-bookings.component';
import{PreviousService} from './services/previousBooking';
import { from } from 'rxjs';

var myRoutes:Routes=[
  {path:"bookings",component:BookingsComponent,children:[
    {path:"cancelled-bookings",component:CancelledBookingsComponent},
    {path:"current-bookings",component:CurrentBookingsComponent},
    {path:"previous-bookings",component:PreviousBookingsComponent}
  ]},
  {path:"profile",component:ProfileComponent},
  {path:"wallet",component:WalletComponent},
  {path:"change-password",component:ChangePasswordComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    BookingsComponent,
    ProfileComponent,
    WalletComponent,
    ChangePasswordComponent,
    CancelledBookingsComponent,
    CurrentBookingsComponent,
    PreviousBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [WalletService,CancelService,PreviousService],
  bootstrap: [AppComponent]
})
export class AppModule { }
