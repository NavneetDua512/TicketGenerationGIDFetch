import { Component, OnInit } from '@angular/core';
import{ GuestUser } from '../models/GuestUser';
import { GuestUserService } from '../services/GuestUserService';

@Component({
  selector: 'app-guestuserdetail',
  templateUrl: './guestuserdetail.component.html',
  styleUrls: ['./guestuserdetail.component.css']
})
export class GuestuserdetailComponent implements OnInit {

  guestUser:GuestUser;
  guestUsers:GuestUser[];
  constructor(private guestUserService:GuestUserService) { 
    this.guestUser=new GuestUser();
    this.guestUsers=[];

  }
  addGuestUser(){
    console.log("hi");
    this.guestUserService.addGuestUser(this.guestUser).subscribe((data)=>{
      console.log(data);
    })
    this.guestUser=new GuestUser();
  }
  reset(){
    this.guestUser=new GuestUser();
  }

  ngOnInit(): void {
  }

}
