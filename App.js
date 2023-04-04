import Navigator from "./Navigator";
import { AuthContextProvider } from "./src/contexts/AuthContext/AuthContextProvider";

export default function App() {
	return (
		<AuthContextProvider>
			<Navigator />
		</AuthContextProvider>
	);
}
