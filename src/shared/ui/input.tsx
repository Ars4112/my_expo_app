import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View, Text } from "react-native";

type Props = {
	onChangeText: (value: string) => void;
	onBlur: () => void;
	value: string;
	lable?: string;
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
		style,
		lable,
		...rest
	} = props;

	return (
		<View style={styles.container}>
			{lable && <Text style={styles.label}>{lable}</Text>}
			<TextInput
				style={[styles.input, style]}
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
		// marginBottom: 10,
	},
	label: {
		fontSize: 14,
		color: "#999",
		fontWeight: "500",
		marginBottom: 8,
	},
	input: {
		borderWidth: 1,
		borderColor: "#dddddd",
		padding: 10,
		color: "#dddddd",
		borderRadius: 12,
	},
	iconContainer: {
		position: "absolute",
		right: 10,
		top: "50%",
		transform: [{ translateY: "-50%" }],
	},
});
