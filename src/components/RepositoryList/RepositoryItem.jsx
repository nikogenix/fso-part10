import { Image, StyleSheet, View } from "react-native";
import MainInfo from "./MainInfo";
import Stats from "./Stats";
import theme from "../theme";

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: theme.colors.white,
	},
	logo: {
		width: 66,
		height: 58,
		flexGrow: 0,
		borderRadius: 5,
		alignSelf: "center",
	},
	statsContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	upperContainer: {
		flexDirection: "row",
	},
});

const RepositoryItem = ({ item }) => {
	// eslint-disable-next-line no-unused-vars
	const { fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl } =
		item;

	return (
		<View style={styles.container}>
			<View style={styles.upperContainer}>
				<Image
					style={styles.logo}
					source={{
						uri: ownerAvatarUrl,
					}}
				/>
				<MainInfo item={item} />
			</View>
			<Stats style={styles.statsContainer} item={item} />
		</View>
	);
};

export default RepositoryItem;
