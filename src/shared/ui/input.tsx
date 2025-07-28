import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

type Props = {
	onChangeText: (value: string) => void;
	onBlur: () => void;
	value: string;
	placeholder?: string;
	keyboardType?: TextInputProps["keyboardType"];
	autoCapitalize?: TextInputProps["autoCapitalize"];
} & Omit<TextInputProps, "onChangeText" | "onBlur" | "value">;

export const Input = (props: Props) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const {
		onChangeText,
		onBlur,
		value,
		placeholder = "",
		keyboardType = "default",
		autoCapitalize = "none",
		secureTextEntry = false,
		...rest
	} = props;

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor="#999"
				onChangeText={onChangeText}
				onBlur={onBlur}
				value={value}
				keyboardType={keyboardType}
				autoCapitalize={autoCapitalize}
				secureTextEntry={!isPasswordVisible && secureTextEntry}
				{...rest}
			/>
			{value && secureTextEntry && (
				<TouchableOpacity style={styles.iconContainer} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
					<Ionicons name={!isPasswordVisible ? "eye-off" : "eye"} size={24} color="#999" />
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: "relative",
		marginBottom: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: "#dddddd",
		padding: 10,
		color: "#dddddd",
	},
	iconContainer: {
		position: "absolute",
		right: 10,
		top: "50%",
		transform: [{ translateY: "-50%" }],
	},
});
