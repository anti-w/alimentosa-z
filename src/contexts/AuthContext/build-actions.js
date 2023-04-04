import * as actionTypes from "./action-types";

export const buildActions = (dispatch) => {
	return {
		signIn: () => dispatch({ type: actionTypes.SIGN_IN, token: "tokentest" }),
	};
};
