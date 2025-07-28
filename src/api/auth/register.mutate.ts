import { authTokenService } from "@/src/shared/services/authTokenService";
import { IRegisterRequest } from "@/src/types/auth/registerRequest";
import { IRegisterResponse } from "@/src/types/auth/registerResponse";
import { useMutation } from "@tanstack/react-query";
import { api } from "../axios";
import { router } from "expo-router";
import { ProfileRoutes } from "@/src/shared/constants/routes/profile";

export const useRegisterMutation = () => {
	return useMutation({
		mutationKey: ["registration"],
		mutationFn: (body: IRegisterRequest) => {
			if (!body) {
				throw new Error("Не переданы данные");
			}
			return api.post<IRegisterResponse>("/auth/register", body).then((res) => res.data);
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
			console.error("Ошибка регистрации:", error);
		},
	});
};
