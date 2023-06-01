import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";

const useSignUp = () => {
	const [mutate, result] = useMutation(SIGN_UP);

	const signUp = async ({ username, password }) => {
		const data = await mutate({ variables: { user: { username, password } } });
		const id = data.data.createUser.id;

		return id;
	};

	return [signUp, result];
};

export default useSignUp;
