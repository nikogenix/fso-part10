import { useQuery } from "@apollo/client";

import { GET_USER } from "../graphql/queries";

const useLoggedUser = () => {
	const { data, error, loading } = useQuery(GET_USER);

	const user = data;

	return { user, loading, error };
};

export default useLoggedUser;
