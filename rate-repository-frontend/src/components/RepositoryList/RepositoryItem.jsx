/* eslint-disable no-unused-vars */
import { Image, Pressable, StyleSheet, View } from "react-native";
import MainInfo from "./MainInfo";
import Stats from "./Stats";
import theme from "../theme";
import { useParams } from "react-router-native";
import Text from "../Text";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: theme.colors.white,
	},
	logo: {
		width: 55,
		height: 55,
		flexGrow: 0,
		borderRadius: 5,
		marginTop: 10,
	},
	statsContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	upperContainer: {
		flexDirection: "row",
	},
	githubButton: {
		backgroundColor: theme.colors.appBarBackground,
		borderRadius: 5,
		padding: 15,
	},
});

const RepositoryItem = ({ item }) => {
	const {
		fullName,
		description,
		language,
		forksCount,
		stargazersCount,
		ratingAverage,
		reviewCount,
		ownerAvatarUrl,
		url,
	} = item;
	const { id } = useParams();

	return (
		<View testID="repositoryItem" style={styles.container}>
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
			{id && (
				<Pressable style={styles.githubButton} onPress={() => Linking.openURL(url)}>
					<Text alignCenter fontWeight={"bold"} color={"pinkLight"}>
						Open in GitHub
					</Text>
				</Pressable>
			)}
		</View>
	);
};

export default RepositoryItem;
