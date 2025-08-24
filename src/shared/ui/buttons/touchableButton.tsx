import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { ButtonVariant, variantStyles } from "./variantStyles";

type Props = {
	children?: PropsWithChildren | string;
	onPress?: () => void;
	fullWidth?: boolean;
	variant?: ButtonVariant;
	style?: StyleProp<ViewStyle>;
} & TouchableOpacityProps;

export const TouchableButton = ({
	children,
	variant = "primary",
	fullWidth,
	onPress,
	style,
	...props
}: Props & { variant?: ButtonVariant }) => (
	<TouchableOpacity
		onPress={onPress}
		style={[styles.button, variantStyles[variant], fullWidth && styles.fullWidth, style]}
		{...props}
	>
		{typeof children === "string" ? <Text style={styles.text}>{children}</Text> : children}
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	fullWidth: {
		width: "100%",
	},
	text: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
});
