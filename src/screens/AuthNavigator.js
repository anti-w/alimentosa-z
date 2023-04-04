import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login, Register } from ".";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Login} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	);
};
export default AuthNavigator;
