import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { AuthToken } from "../constants/authToken";

const isWeb = Platform.OS === "web";

class AuthTokenService {
	async getAccessToken() {
		if (isWeb) {
			return localStorage.getItem(AuthToken.ACCESS_TOKEN);
		}
		return await SecureStore.getItemAsync(AuthToken.ACCESS_TOKEN);
	}

	async saveAccessToken(accessToken: string) {
		if (isWeb) {
			return localStorage.setItem(AuthToken.ACCESS_TOKEN, accessToken);
		}
		return await SecureStore.setItemAsync(AuthToken.ACCESS_TOKEN, accessToken);
	}

	async removeAccessToken() {
		if (isWeb) {
			return localStorage.removeItem(AuthToken.ACCESS_TOKEN);
		}
		return await SecureStore.deleteItemAsync(AuthToken.ACCESS_TOKEN);
	}
}

export const authTokenService = new AuthTokenService();


