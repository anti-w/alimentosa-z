import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator, UserNavigator } from "./src/screens";

const Navigator = () => {
	const isAuth = true;

	return (
		<NavigationContainer>
			{isAuth ? <UserNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};
export default Navigator;
