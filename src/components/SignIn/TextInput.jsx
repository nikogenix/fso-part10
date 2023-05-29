/* eslint-disable no-unused-vars */
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
	input: {
		backgroundColor: theme.colors.white,
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.subheading,
		margin: 10,
		padding: 15,
		borderRadius: 5,
	},
	error: {
		borderColor: theme.colors.redError,
		borderWidth: 2,
	},
});

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = [styles.input, error && styles.error, style];

	return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
