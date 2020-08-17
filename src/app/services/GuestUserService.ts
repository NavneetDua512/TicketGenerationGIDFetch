import{HttpClient} from '@angular/common/http';
import {Injectable, ComponentFactoryResolver} from '@angular/core';
import{ GuestUser } from '../models/GuestUser';
import { Observable, observable } from 'rxjs';

@Injectable()
export class GuestUserService{
    guestUser;
    guestUsers:GuestUser[];
    constructor(private http:HttpClient ){
        this.guestUsers=[];
    }
    public getGuestUser(){
        return this.http.get("http://localhost:62545/api/GuestUser")
    }
    public addGuestUser(guestUser){
        return this.http.post("http://localhost:62545/api/GuestUser",guestUser)
    }
}