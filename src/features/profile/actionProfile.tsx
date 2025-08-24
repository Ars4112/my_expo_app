import { CardSection } from "@/src/shared/ui/cardSection";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ActionProfile = () => {
	return (
		<CardSection>
			<TouchableOpacity style={styles.item}>
				<Ionicons name="settings-outline" size={22} color="#007AFF" />
				<Text style={styles.value}>Настройки</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.item}>
				<Ionicons name="document-outline" size={22} color="#007AFF" />
				<Text style={styles.value}>Мои документы</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.item}>
				<Ionicons name="exit-outline" size={22} color="#FF3B30" />
				<Text style={[styles.value, styles.logoutText]}>Выйти</Text>
			</TouchableOpacity>
		</CardSection>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#F0F0F0",
	},
	value: {
		fontSize: 16,
		color: "#fff",
		fontWeight: "500",
	},
	logoutText: {
		color: "#FF3B30",
	},
});
