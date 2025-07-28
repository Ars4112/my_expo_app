import { QueryProvider } from "@/src/providers/queryProvider";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
	return (
		<QueryProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(tabs)" />
				<Stack.Screen name="(auth)" />
			</Stack>
		</QueryProvider>
	);
}
