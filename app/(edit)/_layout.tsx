import { BackButton } from "@/src/shared/ui/buttons/backButton";
import { Stack } from "expo-router";

export default function ProfileLayout() {
	return (
		<Stack
			screenOptions={{
				headerBackVisible: true,
				headerStyle: {
					backgroundColor: "#25292e",
				},
				headerTintColor: "#fff",

				headerShadowVisible: false,
			}}
		>
			<Stack.Screen
				name="index"
				options={{
					title: "Редактирование",
					headerTitleAlign: "center",
					headerLeft: () => <BackButton path="/(tabs)/profile" />,
				}}
			/>
		</Stack>
	);
}
