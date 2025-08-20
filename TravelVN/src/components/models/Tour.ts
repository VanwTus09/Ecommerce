import type { ApiResponse } from "./Api-response";
import type { Destination } from "./Destination";

export interface Tour extends Destination , ApiResponse {
   tour_code: string,
    time_trip: string,
    departure_day : Date,
    cost : number,
    transportation: string,
    schedule: string,
    slots : number,
    notes : string,
    comments : [],
    place_starting: string,
}