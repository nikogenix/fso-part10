import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useLoggedUser from "../../hooks/useLoggedUser";
import { useEffect, useRef } from "react";

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBarBackground,
		flexDirection: "row",
	},
	contentContainer: {
		flexGrow: 1,
		justifyContent: "flex-start",
	},
});

const AppBar = () => {
	const { user, loading } = useLoggedUser();

	const scrollViewRef = useRef(null);

	useEffect(() => {
		scrollViewRef.current?.scrollTo({ x: 0, animated: true });
	}, [user]);

	if (loading) return null;

	return (
		<View style={styles.container}>
			<ScrollView horizontal ref={scrollViewRef} contentContainerStyle={styles.contentContainer}>
				<AppBarTab path={"/"}>Repositories</AppBarTab>
				{user.me === null && <AppBarTab path={"/signin"}>Sign in</AppBarTab>}
				{user.me === null && <AppBarTab path={"/signup"}>Sign up</AppBarTab>}
				{user.me?.username && <AppBarTab path={"/createreview"}>Create a review</AppBarTab>}
				{user.me?.username && <AppBarTab path={"/myreviews"}>My reviews</AppBarTab>}
				{user.me?.username && <AppBarTab path={"/signout"}>Sign out</AppBarTab>}
			</ScrollView>
		</View>
	);
};

export default AppBar;
