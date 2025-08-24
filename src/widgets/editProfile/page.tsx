import { EditableAvatar } from "@/src/features/editProfile/editableAvatar";
import { TouchableButton } from "@/src/shared/ui/buttons/touchableButton";
import { CardSection } from "@/src/shared/ui/cardSection";
import { Input } from "@/src/shared/ui/input";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export const EditProfileScreen = () => {
	const user = {
		id: 1,
		name: "Иван Иванов",
		email: "ivan@example.com",
		phone: "+7 (999) 123-45-67",
		position: "Senior Developer",
		department: "IT Department",
	};

	const [notificationsEnabled, setNotificationsEnabled] = useState(true);
	const [emailNotifications, setEmailNotifications] = useState(true);

	return (
		<ScrollView contentContainerStyle={styles.content}>
			<CardSection title="Основная информация">
				<EditableAvatar id={user.id} />
				<View style={styles.inputGroupContainer}>
					<Input
						style={styles.input}
						value={user.name}
						placeholder="Введите ваше имя"
						lable="ФИО"
						onChangeText={() => {}}
						onBlur={() => {}}
					/>
					<Input
						style={styles.input}
						value={user.position}
						placeholder="Введите должность"
						lable="Должность"
						onChangeText={() => {}}
						onBlur={() => {}}
					/>

					<Input
						style={styles.input}
						value={user.department}
						placeholder="Введите отдел"
						lable="Отдел"
						onChangeText={() => {}}
						onBlur={() => {}}
					/>
				</View>
			</CardSection>

			<CardSection title="Контактная информация">
				<View style={styles.inputGroupContainer}>
					<Input
						style={styles.input}
						value={user.email}
						placeholder="Введите email"
						lable="Email"
						onChangeText={() => {}}
						onBlur={() => {}}
					/>

					<Input
						style={styles.input}
						value={user.phone}
						placeholder="Введите телефон"
						lable="Телефон"
						onChangeText={() => {}}
						onBlur={() => {}}
					/>
				</View>
			</CardSection>

			<View style={styles.actionsContainer}>
				<TouchableButton style={styles.button}>
					<Ionicons name="checkmark" size={20} color="#FFF" />
					<Text style={styles.buttonText}>Сохранить изменения</Text>
				</TouchableButton>

				<TouchableButton variant="bordered" style={styles.button}>
					<Text style={styles.buttonText}>Отменить</Text>
				</TouchableButton>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	inputGroupContainer: {
		gap: 8,
	},
	content: {
		padding: 20,
		paddingBottom: 40,
		gap: 20,
	},
	input: {
		backgroundColor: "#2c2d2e",
		padding: 16,
		color: "#fff",
		fontSize: 16,
		borderColor: "#404142",
	},
	actionsContainer: {
		gap: 12,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	buttonText: {
		color: "#FFF",
		fontWeight: "600",
		fontSize: 16,
		marginLeft: 8,
	},
});
