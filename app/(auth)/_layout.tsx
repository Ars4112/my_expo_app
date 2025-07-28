import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: true,
				headerTitle: "",
				headerBackTitle: "",
				headerBackVisible: true,
				headerStyle: {
					backgroundColor: "#25292e",
				},
				headerTintColor: "#fff",
				headerShadowVisible: false,
			}}
		>
			<Stack.Screen name="login" options={{ headerShown: false }} />
			<Stack.Screen name="register" />
		</Stack>
	);
}
