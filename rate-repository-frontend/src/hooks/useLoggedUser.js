import { useQuery } from "@apollo/client";

import { GET_USER } from "../graphql/queries";

const useLoggedUser = (includeReviews = false) => {
	const { data, error, loading } = useQuery(GET_USER, { variables: { includeReviews } });

	const user = data;

	return { user, loading, error };
};

export default useLoggedUser;
