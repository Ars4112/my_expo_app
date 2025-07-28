import { router } from "expo-router";
import { PropsWithChildren, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { AuthRoutes } from "../shared/constants/routes/auth";

export const AuthWrapper = ({ children }: PropsWithChildren) => {
	const { isLoading, isAuthenticated } = useAuth();

	useEffect(() => {
		if (!isAuthenticated && !isLoading) {
			router.replace(AuthRoutes.LOGIN);
		}
	}, [isAuthenticated, isLoading]);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: "center" }}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return children;
};
