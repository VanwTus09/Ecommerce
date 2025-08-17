import type { Destination } from "./Destination";

export interface Tour extends Destination  {
   tour_code: string,
    time_trip: string,
    departure_day : Date,
}