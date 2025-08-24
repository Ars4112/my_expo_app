import { Link, LinkProps } from "expo-router";
import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ButtonVariant, variantStyles } from "./variantStyles";

type Props = {
	children?: PropsWithChildren | string;
	onPress?: () => void;
	fullWidth?: boolean;
	variant?: ButtonVariant;
	style?: StyleProp<ViewStyle>;
} & Omit<LinkProps, "style">;

export const LinkButton = ({ children, variant = 'transparent', style, ...props }: Props & { variant?: ButtonVariant }) => {
	const buttonStyle = [styles.button, variantStyles[variant], style] as StyleProp<TextStyle>;

	return (
		<Link style={buttonStyle} {...props}>
			{children}
		</Link>
	);
};

const styles = StyleSheet.create({
	button: {
		color: "#dddddd",
		marginVertical: 15,
		textAlign: "center",
		textDecorationLine: "underline",
	},
});
