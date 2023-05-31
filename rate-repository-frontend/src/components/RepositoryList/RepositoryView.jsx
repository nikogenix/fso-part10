import { FlatList, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../../hooks/useRepository";
import { useParams } from "react-router-native";
import Text from "../Text";
import theme from "../theme";

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
	containerMain: {
		padding: 20,
		backgroundColor: theme.colors.white,
		flexDirection: "row",
	},
	containerRight: {
		flexShrink: 1,
	},
	rating: {
		width: 55,
		height: 55,
		borderColor: theme.colors.primary,
		borderWidth: 2,
		borderRadius: 55 / 2,
		marginRight: 15,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryInfo = ({ repository }) => {
	return (
		<View>
			<RepositoryItem item={repository} />
		</View>
	);
};

const ReviewItem = ({ review }) => {
	const { text, rating, createdAt, user } = review;
	const { username } = user;

	return (
		<View style={styles.containerMain}>
			<View style={styles.rating}>
				<Text fontWeight={"bold"} fontSize={"subheading"}>
					{rating}
				</Text>
			</View>

			<View style={styles.containerRight}>
				<Text fontWeight={"bold"} fontSize={"subheading"}>
					{username}
				</Text>
				<Text color={"textSecondary"}>{createdAt.substring(0, 10)}</Text>
				<View>
					<Text>{text}</Text>
				</View>
			</View>
		</View>
	);
};

const RepositoryView = () => {
	const { id } = useParams();
	const { repository, loading } = useRepository(id);

	if (loading) return null;

	const reviewNodes = repository ? repository.reviews.edges.map((edge) => edge.node) : [];

	return (
		<FlatList
			data={reviewNodes}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={(item) => item.id}
			ListHeaderComponent={() => (
				<>
					<RepositoryInfo repository={repository} />
					<ItemSeparator />
				</>
			)}
			ItemSeparatorComponent={ItemSeparator}
		/>
	);
};

export default RepositoryView;
