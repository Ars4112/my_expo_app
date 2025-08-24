import { authTokenService } from "@/src/shared/services/authTokenService";
import { ILoginRequest } from "@/src/types/auth/loginRequest";
import { IRegisterResponse } from "@/src/types/auth/registerResponse";
import { useMutation } from "@tanstack/react-query";
import { api } from "../axios";
import { router } from "expo-router";
import { ProfileRoutes } from "@/src/shared/constants/routes/profile";
import { QueryKeys } from "@/src/shared/constants/queryKeys";
import { Endpoints } from "@/src/shared/constants/endpoints";

export const useLoginMutation = () => {
	return useMutation({
		mutationKey: [QueryKeys.logIn],
		mutationFn: (body: ILoginRequest) => {
			if (!body) {
				throw new Error("Не переданы данные");
			}
			return api.post<IRegisterResponse>(Endpoints.login, body).then((res) => res.data);
		},
		onSuccess: async (response) => {
			try {
				await authTokenService.saveAccessToken(response.token);
				router.replace(ProfileRoutes.PROFILE);
			} catch (error) {
				console.error(error);
			}
		},
		onError: (error) => {
			console.error("Ошибка аутентификации:", error);
		},
	});
};
