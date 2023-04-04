import { useReducer, useRef } from "react";
import { AuthContext } from "./AuthContext";
import { reducer } from "./reducer";
import { buildActions } from "./build-actions";

const initialState = {
	isLoading: true,
	isSignout: false,
	userToken: null,
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const actions = useRef(buildActions(dispatch));

	return (
		<AuthContext.Provider value={[state, actions.current]}>
			{children}
		</AuthContext.Provider>
	);
};
