import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Foods = () => {
	return (
		<View style={styles.container}>
			<Text>Foods Page</Text>
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

export default Foods;
