import { StyleSheet, Text, View } from "react-native";

export default function EditProfile() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>EditProfile</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
	},
    text: {
        color: "#fff",
    }
});
