import {Bus} from "./bus";
import {Seat} from "./seat";

export class Booking{
    TicketID:number;
    FromLocation:string;
    ToLocation:string;
    bus:Bus;
    seat_book_User:SeatBook;
}

    export class SeatBook{
        SeatNo:number;
        BookingUserID:number;
        seats:Seat[];

    }
