import * as yup from "yup";

import { Pressable, StyleSheet, View } from "react-native";
import Text from "../Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";

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

const onSubmit = (values) => {
	console.log(values);
};

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

const SignIn = () => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ handleSubmit }) => <SignInForm handleSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;
