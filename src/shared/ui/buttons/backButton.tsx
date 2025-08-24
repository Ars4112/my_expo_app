import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Href } from "expo-router/build/types";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
	path?: Href;
};

export const BackButton = ({ path }: Props) => {
	const router = useRouter();
	const handlePress = () => {
		if (path) {
			router.replace(path);
		} else {
			router.back();
		}
	};
	return (
		<TouchableOpacity onPress={handlePress} style={styles.button}>
			<Ionicons name="arrow-back" size={24} color="#fff" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		marginLeft: 15,
	},
});
