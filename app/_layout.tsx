import { useAuth } from "@/src/hooks/useAuth";
import { QueryProvider } from "@/src/providers/queryProvider";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
	const { isAuthenticated } = useAuth();
	return (
		<QueryProvider>
			<Stack screenOptions={{ headerShown: false }}>
				{isAuthenticated ? (
					<>
						<Stack.Screen name="(tabs)" />
						<Stack.Screen name="(edit)" />
					</>
				) : (
					<Stack.Screen name="(auth)" />
				)}
			</Stack>
		</QueryProvider>
	);
}
