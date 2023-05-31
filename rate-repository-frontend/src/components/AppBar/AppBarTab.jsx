import { Text as NativeText, Pressable, StyleSheet } from "react-native";

import theme from "../theme";
import { Link, useNavigate } from "react-router-native";
import useSignOut from "../../hooks/useSignOut";

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

	if (path === "/signout") {
		const signOut = useSignOut();
		const navigate = useNavigate();
		const onSignOut = async () => {
			await signOut();
			navigate("/");
		};
		return (
			<Pressable style={styles.button} onPress={onSignOut}>
				<NativeText style={textStyle} {...props} />
			</Pressable>
		);
	}
	return (
		<Pressable style={styles.button}>
			<Link to={path}>
				<NativeText style={textStyle} {...props} />
			</Link>
		</Pressable>
	);
};

export default AppBarTab;
