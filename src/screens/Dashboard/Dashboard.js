import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { useAuthContext } from "../../contexts/AuthContext/useAuthContext";

const Dashboard = () => {
  const [state, actions] = useAuthContext();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Sair" onPress={actions.signOut} />
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
