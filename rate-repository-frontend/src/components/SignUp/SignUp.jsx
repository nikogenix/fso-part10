import * as yup from "yup";

import { Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";
import FormikTextInput from "../SignIn/FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import useSignUp from "../../hooks/useSignUp";
import useSignIn from "../../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.colors.primary,
		margin: 10,
		padding: 15,
		borderRadius: 5,
	},
	buttonText: {
		color: theme.colors.white,
		fontSize: theme.fontSizes.subheading,
		textAlign: "center",
	},
});

const initialValues = {
	username: "",
	password: "",
	passwordConfirmation: "",
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required("Username is required")
		.min(5, `Username must have at least 5 characters`)
		.max(30, `Username must have less than 30 characters`),
	password: yup
		.string()
		.required("Password is required")
		.min(5, `Password must have at least 5 characters`)
		.max(30, `Password must have less than 30 characters`),
	passwordConfirmation: yup
		.string()
		.required("Password confirmation is required")
		.oneOf([yup.ref("password"), null], "Passwords don't match"),
});

const SignUpForm = ({ handleSubmit }) => {
	return (
		<View>
			<FormikTextInput name="username" placeholder="Username" />
			<FormikTextInput secureTextEntry name="password" placeholder="Password" />
			<FormikTextInput secureTextEntry name="passwordConfirmation" placeholder="Password confirmation" />

			<Pressable style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Sign Up</Text>
			</Pressable>
		</View>
	);
};

export const SignUpContainer = ({ onSubmit }) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ handleSubmit }) => <SignUpForm handleSubmit={handleSubmit} />}
		</Formik>
	);
};

const SignUp = () => {
	const [signUp] = useSignUp();
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			await signUp({ username, password });
			await signIn({ username, password });
			navigate("/");
		} catch (e) {
			console.log(e);
		}
	};
	return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
