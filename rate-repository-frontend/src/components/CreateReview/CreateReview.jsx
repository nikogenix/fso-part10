import * as yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import { Pressable, StyleSheet, View } from "react-native";

import theme from "../theme";

import Text from "../Text";
import FormikTextInput from "../SignIn/FormikTextInput";
import useCreateReview from "../../hooks/useCreateReview";

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
	ownerName: "",
	repositoryName: "",
	rating: "",
	text: "",
};

const validationSchema = yup.object().shape({
	ownerName: yup.string().required("Repository owner name is required"),
	repositoryName: yup.string().required("Repository name is required"),
	rating: yup
		.string()
		.required("Rating is required")
		.transform((value) => parseFloat(value))
		.test("is-valid-rating", "Invalid rating value", (value, ctx) => {
			return value >= 0 && value <= 100
				? true
				: ctx.createError({ message: "Rating must be a valid number between 0 and 100" });
		})
		.transform((value) => String(value)),
	text: yup.string().optional(),
});

const CreateReviewForm = ({ handleSubmit }) => {
	return (
		<View>
			<FormikTextInput name="ownerName" placeholder="Repository owner name" />
			<FormikTextInput name="repositoryName" placeholder="Repository name" />
			<FormikTextInput name="rating" placeholder="Rating" />
			<FormikTextInput multiline textAlignVertical="top" name="text" placeholder="Review" />

			<Pressable style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Create a review</Text>
			</Pressable>
		</View>
	);
};

export const CreateReviewContainer = ({ onSubmit }) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ handleSubmit }) => <CreateReviewForm handleSubmit={handleSubmit} />}
		</Formik>
	);
};

const CreateReview = () => {
	const [createReview] = useCreateReview();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { ownerName, repositoryName, rating, text } = values;

		try {
			const repositoryId = await createReview({ ownerName, repositoryName, rating, text });

			navigate(`/${repositoryId}`);
		} catch (e) {
			console.log(e);
		}
	};
	return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
