import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectseat',
  templateUrl: './selectseat.component.html',
  styleUrls: ['./selectseat.component.css']
})
export class SelectSeatComponent implements OnInit {
NoOfSeats:number;
clickonce:boolean;
clickonce1:boolean;
clickonce2:boolean;
clickonce3:boolean;
clickonce4:boolean;
clickonce5:boolean;
  constructor() {
    this.NoOfSeats=40;
    this.clickonce=true;
    this.clickonce1=true;
    this.clickonce2=true;
    this.clickonce3=true;
    this.clickonce4=true;
    this.clickonce5=true;
   }

   descSeat(){
     if(this.clickonce)
    this.NoOfSeats--;
    else
    this.NoOfSeats++;
  this.clickonce=!this.clickonce;
   }
   descSeat1(){
    if(this.clickonce1)
   this.NoOfSeats--;
   else
   this.NoOfSeats++;
 this.clickonce1=!this.clickonce1;
  }
  descSeat2(){
    if(this.clickonce2)
   this.NoOfSeats--;
   else
   this.NoOfSeats++;
 this.clickonce2=!this.clickonce2;
  }
  descSeat3(){
    if(this.clickonce3)
   this.NoOfSeats--;
   else
   this.NoOfSeats++;
 this.clickonce3=!this.clickonce3;
  }
  descSeat4(){
    if(this.clickonce4)
   this.NoOfSeats--;
   else
   this.NoOfSeats++;
 this.clickonce4=!this.clickonce4;
  }
  descSeat5(){
    if(this.clickonce5)
   this.NoOfSeats--;
   else
   this.NoOfSeats++;
 this.clickonce5=!this.clickonce5;
  }
  ngOnInit(): void {
  }

}
