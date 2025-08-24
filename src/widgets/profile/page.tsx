import { ActionProfile } from "@/src/features/profile/actionProfile";
import { InfoUser } from "@/src/features/profile/infoUser";
import { ProfileHeader } from "@/src/features/profile/profileHeader";
import { TouchableButton } from "@/src/shared/ui/buttons/touchableButton";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export const ProfileScreen = () => {
	const user = {
		id: 1,
		name: "Иван Иванов",
		email: "ivan@example.com",
		phone: "+7 (999) 123-45-67",
		position: "Senior Developer",
		department: "IT Department",
	};
     const router = useRouter();

	return (
		<ScrollView contentContainerStyle={styles.content}>
			<ProfileHeader user={user} />

			<TouchableButton style={styles.editButton} onPress={() => router.push('/(edit)')}>
				<Ionicons name="pencil" size={20} color="#FFF" />
				<Text style={styles.editButtonText}>Редактировать профиль</Text>
			</TouchableButton>

			<InfoUser email={user.email} phone={user.phone} />

			<ActionProfile />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	content: {
		padding: 20,
		paddingBottom: 40,
		gap: 20,
	},
	editButton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	editButtonText: {
		color: "#FFF",
		fontWeight: "600",
		fontSize: 16,
		marginLeft: 8,
	},
	listSection: {
		backgroundColor: "#3e3f40",
		padding: 20,
		borderRadius: 16,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 16,
	},
	infoItem: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
	},
	infoIcon: {
		width: 24,
	},
	infoLabel: {
		fontSize: 14,
		color: "#999",
		marginBottom: 2,
	},
	infoValue: {
		fontSize: 16,
		color: "#fff",
		fontWeight: "500",
	},
	logoutText: {
		color: "#FF3B30",
	},
});
