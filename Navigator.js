import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigator, UserNavigator } from "./src/screens";
import { useEffect } from "react";
import { useAuthContext } from "./src/contexts/AuthContext/useAuthContext";
import { Loading } from "./src/screens/Loading";

const Navigator = () => {
  const [state, actions] = useAuthContext();

  useEffect(() => {
    actions.restoreToken();
  }, []);

  if (state.isLoading) return <Loading />;

  return (
    <NavigationContainer>
      {state.userToken != null ? <UserNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default Navigator;
