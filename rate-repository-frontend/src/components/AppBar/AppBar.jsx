import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useLoggedUser from "../../hooks/useLoggedUser";

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBarBackground,
		flexDirection: "row",
	},
});

const AppBar = () => {
	const { user, loading } = useLoggedUser();

	if (loading) return null;

	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab path={"/"}>Repositories</AppBarTab>
				{user.me === null && <AppBarTab path={"/signin"}>Sign In</AppBarTab>}
				{user.me === null && <AppBarTab path={"/signup"}>Sign Up</AppBarTab>}
				{user.me?.username && <AppBarTab path={"/createreview"}>Create a review</AppBarTab>}
				{user.me?.username && <AppBarTab path={"/signout"}>Sign Out</AppBarTab>}
			</ScrollView>
		</View>
	);
};

export default AppBar;
