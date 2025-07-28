import { useEffect, useState } from "react";
import { authTokenService } from "../shared/services/authTokenService";

export function useAuth() {
	const [isLoading, setIsLoading] = useState(true);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const token = await authTokenService.getAccessToken();
				// console.log("token", !!token);
				setIsAuthenticated(!!token);
			} catch (error) {
				console.error("Auth check error:", error);
			} finally {
				setIsLoading(false);
			}
		};

		checkAuth();
	}, []);

	return { isLoading, isAuthenticated };
}
