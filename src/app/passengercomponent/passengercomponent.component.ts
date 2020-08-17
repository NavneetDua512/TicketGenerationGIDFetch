import { Component, OnInit } from '@angular/core';
import {Passenger} from '../models/passenger';

@Component({
  selector: 'app-passengercomponent',
  templateUrl: './passengercomponent.component.html',
  styleUrls: ['./passengercomponent.component.css']
})
export class PassengercomponentComponent implements OnInit {
passenger:Passenger;
// Name:string;
//     Gender:string;
//     Age:number;
//     EmailId:string;
//     PhoneNo:string;
constructor(){
  // constructor(name?:string,gender?:string,age?:number,emailId?:string,phoneNo?:string) { 
    // this.Name=name;
    // this.Gender=gender;
    // this.Age=age;
    // this.EmailId=emailId;
    // this.PhoneNo=phoneNo;
    
  }
  

  addDetails(){
    
  }

  ngOnInit(): void {
    
    }
  }


