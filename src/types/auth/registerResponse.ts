import { IRegisterRequest } from "./registerRequest";

export interface IRegisterResponse {
    data: IRegisterRequest
    token: string
}