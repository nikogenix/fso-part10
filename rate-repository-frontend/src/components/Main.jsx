import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import { Dimensions } from "react-native";

import RepositoryList from "./RepositoryList/RepositoryList";
import AppBar from "./AppBar/AppBar";
import theme from "./theme";
import SignIn from "./SignIn/SignIn";
import RepositoryView from "./RepositoryList/RepositoryView";
import CreateReview from "./CreateReview/CreateReview";
import SignUp from "./SignUp/SignUp";
import MyReviews from "./MyReviews/MyReviews";

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.greyBackground,
	},
});

const Main = () => {
	const windowHeight = Dimensions.get("window").height;

	return (
		<View style={{ ...styles.container, height: windowHeight }}>
			<AppBar />
			<Routes>
				<Route path="/" element={<RepositoryList />} exact />
				<Route path="/signin" element={<SignIn />} exact />
				<Route path="/:id" element={<RepositoryView />} exact />
				<Route path="/createreview" element={<CreateReview />} exact />
				<Route path="/signup" element={<SignUp />} exact />
				<Route path="/myreviews" element={<MyReviews />} exact />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</View>
	);
};

export default Main;
