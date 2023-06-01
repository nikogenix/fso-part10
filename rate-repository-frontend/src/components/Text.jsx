import { Text as NativeText, StyleSheet } from "react-native";

import theme from "./theme";

const styles = StyleSheet.create({
	text: {
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.normal,
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary,
	},
	colorPrimary: {
		color: theme.colors.primary,
	},
	colorWhite: {
		color: theme.colors.white,
	},
	colorPinkLight: {
		color: theme.colors.pinkLight,
	},
	colorAppBarBackground: {
		color: theme.colors.appBarBackground,
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading,
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold,
	},
	alignCenter: {
		textAlign: "center",
	},
});

const Text = ({ color, fontSize, fontWeight, style, alignCenter, ...props }) => {
	const textStyle = [
		styles.text,
		color === "textSecondary" && styles.colorTextSecondary,
		color === "primary" && styles.colorPrimary,
		color === "white" && styles.colorWhite,
		color === "pinkLight" && styles.colorPinkLight,
		color === "appBarBackground" && styles.colorAppBarBackground,
		fontSize === "subheading" && styles.fontSizeSubheading,
		fontWeight === "bold" && styles.fontWeightBold,
		alignCenter && styles.alignCenter,
		style,
	];

	return <NativeText style={textStyle} {...props} />;
};

export default Text;
