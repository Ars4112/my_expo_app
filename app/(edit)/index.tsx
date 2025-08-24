import { EditProfileScreen } from "@/src/widgets/editProfile/page";
import { View, StyleSheet } from "react-native";

export default function EditProfile() {
    return (
        <View style={styles.container}>
            <EditProfileScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
    },
});