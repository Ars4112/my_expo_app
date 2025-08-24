import { ProfileScreen } from "@/src/widgets/profile/page";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Profile() {
	const router = useRouter();

	return (
		<View style={styles.container}>
			<ProfileScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
	},
});