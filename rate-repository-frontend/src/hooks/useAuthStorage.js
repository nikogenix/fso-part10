import AuthStorageContext from "../contexts/AuthStorageContext";
import { useContext } from "react";

export const useAuthStorage = () => {
	return useContext(AuthStorageContext);
};

export default AuthStorageContext;
