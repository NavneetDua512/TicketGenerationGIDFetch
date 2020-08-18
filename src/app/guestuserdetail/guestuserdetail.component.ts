import { Component, OnInit } from '@angular/core';
import{ GuestUser } from '../models/GuestUser';
import { GuestUserService } from '../services/GuestUserService';

@Component({
  selector: 'app-guestuserdetail',
  templateUrl: './guestuserdetail.component.html',
  styleUrls: ['./guestuserdetail.component.css']
})
export class GuestuserdetailComponent implements OnInit {
  model:any={};
  guestUser:GuestUser;
  guestUsers:GuestUser[];
  constructor(private guestUserService:GuestUserService) { 
    this.guestUser=new GuestUser();
    this.guestUsers=[];

  }

  insertUser(){
    this.guestUserService.addGuestUser(this.model).subscribe((data)=>{
        //console.log(data);
      })
  }
fetchId(){
  this.guestUserService.fetchemail(this.model).subscribe((res)=>{
    console.log(res);
  })

  }

  addGuestUser(){
    this.insertUser();
    this.fetchId();
    // console.log("hi");
    // this.guestUserService.addGuestUser(this.model).subscribe((data)=>{
    //   console.log(data);
    // })
    // this.guestUserService.fetchemail(this.model.EmailID).subscribe((res)=>{
    //   console.log(res);
    // })
  }
  reset(){
    this.guestUser=new GuestUser();
  }

  ngOnInit(): void {
  }

}
