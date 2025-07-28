import axios, { CreateAxiosDefaults } from "axios";
import { authTokenService } from "../shared/services/authTokenService";

const axiosOptions: CreateAxiosDefaults = {
	baseURL: "http://localhost:3001",
	headers: { "Content-Type": "application/json", Accept: "application/json" },
	withCredentials: true,
};

export const api = axios.create(axiosOptions);

api.interceptors.request.use(async (config) => {
	authTokenService.getAccessToken().then((token) => {
		if (config?.headers && token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
	});

	return config;
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			console.log("Unauthorized, redirect to login...");
		}
	}
);
