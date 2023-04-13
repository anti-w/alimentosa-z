import * as SecureStore from "expo-secure-store";
import * as actionTypes from "./action-types";

export const buildActions = (dispatch) => {
  return {
    signIn: async () => {
      await SecureStore.setItemAsync("userToken", "tokentest");
      dispatch({ type: actionTypes.SIGN_IN, token: "tokentest" });
    },
    signOut: async () => {
      await SecureStore.deleteItemAsync("userToken");
      dispatch({ type: actionTypes.SIGN_OUT });
    },
    restoreToken: async () => {
      let userToken = await SecureStore.getItemAsync("userToken");
      dispatch({ type: actionTypes.RESTORE_TOKEN, token: userToken });
    },
  };
};
