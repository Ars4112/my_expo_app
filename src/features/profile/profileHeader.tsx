import { Avatar } from "@/src/shared/ui/avatar";
import { CardSection } from "@/src/shared/ui/cardSection";
import { StyleSheet, Text, View } from "react-native";
type UserType = {
	id: number;
	name: string;
	position: string;
	department: string;
	email: string;
	phone: string;
};
type Props = {
	user: UserType;
};

export const ProfileHeader = ({ user }: Props) => {
	const { id, name, position, department } = user;
	return (
		<CardSection style={styles.header}>
			<Avatar userId={id} />
			<View style={styles.userInfo}>
				<Text style={styles.userName}>{name}</Text>
				<Text style={styles.userPosition}>{position}</Text>
				<Text style={styles.userDepartment}>{department}</Text>
			</View>
		</CardSection>
	);
};
const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
	},
	userInfo: {
		marginLeft: 16,
		flex: 1,
	},
	userName: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 4,
	},
	userPosition: {
		fontSize: 16,
		color: "#007AFF",
		fontWeight: "600",
		marginBottom: 2,
	},
	userDepartment: {
		fontSize: 14,
		color: "#fff",
		opacity: 0.5,
	},
});
