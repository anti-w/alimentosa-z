import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useAuthContext } from "../../contexts/AuthContext/useAuthContext";
import { useEffect } from "react";

const Dashboard = () => {
	const [state, actions] = useAuthContext();

	useEffect(() => {
		actions.signIn();
	}, [actions]);

	return (
		<View style={styles.container}>
			<Text>{state.isLoading ? "teste" : "off"}</Text>
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

export default Dashboard;
