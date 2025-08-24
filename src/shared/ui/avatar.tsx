import { useAvatarQuery } from "@/src/api/profile/avatar.query";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export const Avatar = (props: { userId: number }) => {
	const { data, isLoading } = useAvatarQuery(props.userId);

	if (isLoading) {
		return (
			<View style={[styles.container, styles.center]}>
				<ActivityIndicator size="small" color="#0000ff" />
			</View>
		);
	}

	if (!data?.imageUrl) {
		return (
			<View style={[styles.container, styles.center]}>
				<Text>No Avatar</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Image
				source={{ uri: data.imageUrl }}
				style={styles.image}
				onError={(e) => console.log("Image loading error:", e.nativeEvent.error)}
				resizeMode="cover"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 80,
		height: 80,
		borderRadius: 50,
		backgroundColor: "#dddddd",
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 50,
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
});
