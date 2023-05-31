import * as yup from "yup";

import { Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
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
};

const validationSchema = yup.object().shape({
	username: yup.string().required("Username is required"),
	password: yup.string().required("Password is required"),
});

const SignInForm = ({ handleSubmit }) => {
	return (
		<View>
			<FormikTextInput name="username" placeholder="Username" />
			<FormikTextInput secureTextEntry name="password" placeholder="Password" />
			<Pressable style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Sign In</Text>
			</Pressable>
		</View>
	);
};

export const SignInContainer = ({ onSubmit }) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ handleSubmit }) => <SignInForm handleSubmit={handleSubmit} />}
		</Formik>
	);
};

const SignIn = () => {
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			// eslint-disable-next-line no-unused-vars
			const { data } = await signIn({ username, password });
			navigate("/");
		} catch (e) {
			console.log(e);
		}
	};
	return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
