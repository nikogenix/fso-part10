import { Platform } from "react-native";

const theme = {
	colors: {
		textPrimary: "#24292e",
		textSecondary: "#586069",
		primary: "#865DFF",
		pinkMid: "#E384FF",
		pinkLight: "#FFA3FD",
		appBarBackground: "#191825",
		white: "#ffffff",
		greyBackground: "#e1e4e8",
		redError: "#d73a4a",
	},
	fontSizes: {
		body: 18,
		subheading: 22,
		appBar: 20,
	},
	fonts: {
		main: Platform.select({ android: "Roboto", ios: "Arial", default: "System" }),
	},
	fontWeights: {
		normal: "400",
		bold: "700",
	},
	padding: {
		appBarVertical: 20,
		appBarHorizontal: 5,
	},
};

export default theme;
