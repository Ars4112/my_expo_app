import { RegistrationForm } from "@/src/features/form/registrationForm";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";

export default function Registration() {
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<RegistrationForm />
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
	},
	scrollContainer: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
	},
});
