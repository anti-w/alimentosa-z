import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Register = () => {
	return (
		<View style={styles.container}>
			<Text>Register Page</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Register;
