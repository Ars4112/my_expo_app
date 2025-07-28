import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function NotFound() {
	return (
		<>
			<Stack.Screen options={{ title: "Not Found" }} />
            <View style={styles.container}>
                <Text style={styles.text}>404 Not Found</Text>
                <Link style={styles.link} href="/">Go to Home Page</Link>
            </View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
	},
    link: {
        color: "#fff",
    }
});
