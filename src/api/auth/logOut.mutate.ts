import { AuthRoutes } from "@/src/shared/constants/routes/auth";
import { authTokenService } from "@/src/shared/services/authTokenService";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { api } from "../axios";
import { QueryKeys } from "@/src/shared/constants/queryKeys";
import { Endpoints } from "@/src/shared/constants/endpoints";

export const useLogOutMutation = () => {
	return useMutation({
		mutationKey: [QueryKeys.logOut],
		mutationFn: () => {
			return api.post<{ message: string }>(Endpoints.logOut);
		},
		onSuccess: async () => {
			try {
				await authTokenService.removeAccessToken();
				router.replace(AuthRoutes.LOGIN);
			} catch (error) {
				console.error(error);
			}
		},
		onError: (error) => {
			console.error("Ошибка вылогирования:", error);
		},
	});
};
