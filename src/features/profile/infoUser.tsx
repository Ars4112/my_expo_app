import { CardSection } from "@/src/shared/ui/cardSection";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
	email: string;
	phone: string;
};

export const InfoUser = ({ email, phone }: Props) => {
	return (
		<CardSection title="Контактная информация">

			<View style={styles.infoItem}>
				<Ionicons name="mail-outline" size={24} color="#fff" style={styles.infoIcon} />
				<View>
					<Text style={styles.infoLabel}>Email</Text>
					<Text style={styles.infoValue}>{email}</Text>
				</View>
			</View>

			<View style={styles.infoItem}>
				<Ionicons name="call-outline" size={24} color="#fff" style={styles.infoIcon} />
				<View>
					<Text style={styles.infoLabel}>Телефон</Text>
					<Text style={styles.infoValue}>{phone}</Text>
				</View>
			</View>
		</CardSection>
	);
};

const styles = StyleSheet.create({
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
});
