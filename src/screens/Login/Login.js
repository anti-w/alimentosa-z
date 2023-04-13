import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuthContext } from "../../contexts/AuthContext/useAuthContext";

const Login = () => {
  const [state, actions] = useAuthContext();
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button onPress={actions.signIn} title="Entrar" />
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

export default Login;
