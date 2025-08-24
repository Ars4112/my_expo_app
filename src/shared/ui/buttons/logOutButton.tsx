import { useLogOutMutation } from "@/src/api/auth/logOut.mutate";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TouchableButton } from "./touchableButton";

export const LogOutButton = () => {
	const { mutate } = useLogOutMutation();

	const logoutHandler = () => {
		mutate();
	};
    
	return (
		<TouchableButton onPress={logoutHandler} variant={'transparent'} style={styles.button}>
			<Ionicons name="exit-outline" size={24} color="#ffd33d"  />
		</TouchableButton>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 10,
	},
});
