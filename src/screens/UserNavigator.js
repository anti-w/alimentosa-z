import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Dashboard } from "./Dashboard";
import { Foods } from "./Foods";

const Tab = createMaterialBottomTabNavigator();

const UserNavigator = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Dashboard" component={Dashboard} />
			<Tab.Screen name="Foods" component={Foods} />
		</Tab.Navigator>
	);
};

export default UserNavigator;
