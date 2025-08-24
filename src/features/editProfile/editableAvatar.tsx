import { Avatar } from "@/src/shared/ui/avatar";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from "react-native";

type Props = {
	id: number;
	onAvatarChange?: (image: ImagePicker.ImagePickerResult) => void;
	isLoading?: boolean;
};

export const EditableAvatar = (props: Props) => {
	const { id, onAvatarChange, isLoading } = props;

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.avatarContainer} disabled={isLoading}>
				<Avatar userId={id} />

				<View style={styles.editOverlay}>
					{isLoading ? (
						<ActivityIndicator color="#fff" size="small" />
					) : (
						<Ionicons name="camera" size={15} color="#fff" />
					)}
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	avatarContainer: {
		position: "relative",
	},
	editOverlay: {
		position: "absolute",
		bottom: 0,
		right: 0,
		backgroundColor: "#007AFF",
		width: 30,
		height: 30,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#3e3f40",
	},
});
