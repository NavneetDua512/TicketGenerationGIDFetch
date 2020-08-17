import { Bus } from "./bus";
import { Seat } from "./seat";
import { JourneyRoute } from "./journeyRoute";

export class Journey {
    bus:Bus;
    seats:seat[];
    fare:number;
    journeyroute:JourneyRoute;
}

export class seat {
    seat:string;
}