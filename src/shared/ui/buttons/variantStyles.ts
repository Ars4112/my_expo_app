import { StyleProp, ViewStyle } from "react-native";

export type ButtonVariant = "bordered" | "primary" | "secondary" | "transparent";

type VariantStyleConfig = {
	[key in ButtonVariant]: StyleProp<ViewStyle>;
};

export const variantStyles: VariantStyleConfig = {
	primary: {
		backgroundColor: "#007AFF",
	},
	secondary: {
		backgroundColor: "#ffd33d",
	},
	bordered: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "#007AFF",
	},
	transparent: {
		backgroundColor: "transparent",
	},
} as const;