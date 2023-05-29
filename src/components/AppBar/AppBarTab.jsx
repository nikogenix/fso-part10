import { Text as NativeText, Pressable, StyleSheet } from "react-native";

import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
	tab: {
		color: theme.colors.pinkLight,
		fontSize: theme.fontSizes.appBar,
		fontFamily: theme.fonts.main,
		fontWeight: theme.fontWeights.bold,
		textAlign: "center",
	},
	current: {
		color: theme.colors.textSecondary,
	},
	button: {
		width: 130,
		paddingLeft: theme.padding.appBarHorizontal,
		paddingRight: theme.padding.appBarHorizontal,
		paddingTop: theme.padding.appBarVertical,
		paddingBottom: theme.padding.appBarVertical,
	},
});

const AppBarTab = ({ style, ...props }) => {
	const textStyle = [
		styles.tab,
		// selected && styles.current,
		style,
	];
	const { path } = props;
	return (
		<Pressable style={styles.button}>
			<Link to={path}>
				<NativeText style={textStyle} {...props} />
			</Link>
		</Pressable>
	);
};

export default AppBarTab;
