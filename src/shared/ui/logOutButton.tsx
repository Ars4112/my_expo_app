import { useLogOutMutation } from "@/src/api/auth/logOut.mutate";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

export const LogOutButton = () => {
	const { mutate } = useLogOutMutation();

	const logoutHandler = () => {
		mutate();
	};
    
	return (
		<TouchableOpacity onPress={logoutHandler}>
			<Ionicons name="exit-outline" size={24} color="#ffd33d" style={styles.icon} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	icon: {
		marginRight: 10,
	},
});
