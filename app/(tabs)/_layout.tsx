import { AuthWrapper } from "@/src/features/authWrapper";
import { LogOutButton } from "@/src/shared/ui/buttons/logOutButton";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

export default function TabsLayout() {
	return (
		<AuthWrapper>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: "#ffd33d",
					headerStyle: {
						backgroundColor: "#25292e",
						height: Platform.select({
							ios: 110,
							android: 110,
							default: 64, 
						}),
					},
					headerShadowVisible: false,
					headerTintColor: "#fff",
					tabBarStyle: {
						backgroundColor: "#25292e",
						borderTopColor: "#7c7c7d",
						borderTopWidth: 1,
					},
					headerRight: () => <LogOutButton />,
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: "Home",
						tabBarIcon: ({ color, focused }) => (
							<Ionicons name={focused ? "home" : "home-outline"} size={25} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Мой профиль",
						tabBarIcon: ({ color, focused }) => (
							<Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24} />
						),
					}}
				/>
			</Tabs>
		</AuthWrapper>
	);
}
