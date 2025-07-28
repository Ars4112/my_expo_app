import { authTokenService } from "@/src/shared/services/authTokenService";
import { ILoginRequest } from "@/src/types/auth/loginRequest";
import { IRegisterResponse } from "@/src/types/auth/registerResponse";
import { useMutation } from "@tanstack/react-query";
import { api } from "../axios";
import { router } from "expo-router";
import { ProfileRoutes } from "@/src/shared/constants/routes/profile";

export const useLoginMutation = () => {
	return useMutation({
		mutationKey: ["logIn"],
		mutationFn: (body: ILoginRequest) => {
			if (!body) {
				throw new Error("Не переданы данные");
			}
			return api.post<IRegisterResponse>("/auth/login", body).then((res) => res.data);
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
