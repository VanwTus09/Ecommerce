import type { ApiResponse } from './Api-response';
export interface User extends ApiResponse {
    username : string,
    email : string,
    password : string,
}