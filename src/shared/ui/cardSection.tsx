import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle, Text } from "react-native";

type Props = {
	children: ReactNode;
	style?: ViewStyle;
	title?: string;
};

export const CardSection = (props: Props) => {
	const { children, style, title } = props;
	return <View style={[styles.container, style]}>
        {title && <Text style={styles.title}>{title}</Text>}
        {children}
        </View>;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3e3f40",
		padding: 20,
		borderRadius: 16,
	},
    title: {
        fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
        marginBottom: 16,
    }
});
