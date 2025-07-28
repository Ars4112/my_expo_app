import { IRegisterRequest } from "../auth/registerRequest";

export interface IResponseUser extends IRegisterRequest {
	id: number;
}
