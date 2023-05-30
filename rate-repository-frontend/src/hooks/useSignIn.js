import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import { useAuthStorage } from "../hooks/useAuthStorage";

const useSignIn = () => {
	const apolloClient = useApolloClient();
	const authStorage = useAuthStorage();

	const [mutate, result] = useMutation(AUTHENTICATE);

	const signIn = async ({ username, password }) => {
		const data = await mutate({ variables: { credentials: { username, password } } });
		const accessToken = data.data.authenticate.accessToken;
		await authStorage.setAccessToken(accessToken);
		apolloClient.resetStore();

		return data;
	};

	return [signIn, result];
};

export default useSignIn;
