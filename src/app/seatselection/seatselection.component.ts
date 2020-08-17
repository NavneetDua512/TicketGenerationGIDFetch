import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Seat } from '../models/seat';
import { Journey } from '../models/journey';
import { JourneyRoute } from '../models/journeyRoute';
import { Router } from '@angular/router';
import { Bus } from '../models/bus';
import { SelectBusService } from '../services/selectBus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.css']
})
export class SeatselectionComponent implements OnInit,OnDestroy{
  @Input('bus') bus:Bus;
  @Output('closeModal') closeModal = new EventEmitter()
  constructor() { }
  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
