import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.appBarBackground,
		flexDirection: "row",
	},
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<AppBarTab path={"/"}>Repositories</AppBarTab>
				<AppBarTab path={"/signin"}>Sign In</AppBarTab>
			</ScrollView>
		</View>
	);
};

export default AppBar;
