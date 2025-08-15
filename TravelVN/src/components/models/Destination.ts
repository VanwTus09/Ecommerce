import type { ApiResponse } from "./Api-response";

export interface Destination extends ApiResponse {
    name : string,
    desciption : string,
    Region : Regions,
    imageUrl : string,
}
export type Regions = "Northern VN" | "Southern VN" | "Central VN" 