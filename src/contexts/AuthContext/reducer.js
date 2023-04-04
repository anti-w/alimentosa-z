import * as actionTypes from "./action-types";

export const reducer = (state, action) => {
	switch (actionTypes.type) {
		case actionTypes.SIGN_IN:
			return {
				...state,
				isSignout: false,
				userToken: action.token,
			};
		case actionTypes.SIGN_OUT:
			return {
				...state,
				isSignout: true,
				userToken: null,
			};
		case actionTypes.RESTORE_TOKEN:
			return {
				...state,
				userToken: action.token,
				isLoading: false,
			};
	}

	return {
		isLoading: true,
		isSignout: false,
		userToken: null,
	};
};
