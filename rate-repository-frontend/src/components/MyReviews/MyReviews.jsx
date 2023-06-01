import { useNavigate } from "react-router-native";
import useLoggedUser from "../../hooks/useLoggedUser";
import Text from "../Text";
import theme from "../theme";
import { Alert, FlatList, Pressable, StyleSheet, View } from "react-native";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
	containerMain: {
		padding: 20,
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
	repoButton: {
		backgroundColor: theme.colors.appBarBackground,
		borderRadius: 5,
		padding: 15,
		marginRight: 20,
	},
	deleteButton: {
		backgroundColor: theme.colors.pinkMid,
		borderRadius: 5,
		padding: 15,
	},
	containerButtons: {
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "center",
		paddingBottom: 20,
	},
	containerAll: { backgroundColor: theme.colors.white, flexDirection: "column" },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
	const navigate = useNavigate();
	const { text, rating, createdAt, user, repositoryId, id } = review;
	const { username } = user;

	const [deleteReview] = useDeleteReview();
	const handleDelete = () => {
		Alert.alert("Confirm deletion", "Are you sure you want to delete this review?", [
			{ text: "Cancel", style: "cancel" },
			{
				text: "Confirm",
				onPress: () => {
					deleteReview(id);
				},
			},
		]);
	};

	return (
		<View style={styles.containerAll}>
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
			<View style={styles.containerButtons}>
				<Pressable style={styles.repoButton} onPress={() => navigate(`/${repositoryId}`)}>
					<Text alignCenter fontWeight={"bold"} color={"pinkLight"}>
						View repository
					</Text>
				</Pressable>
				<Pressable style={styles.deleteButton} onPress={handleDelete}>
					<Text alignCenter fontWeight={"bold"} color={"appBarBackground"}>
						Delete review
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

const MyReviews = () => {
	const { user, loading } = useLoggedUser(true);

	if (loading) return null;

	const reviewNodes = user ? user.me.reviews.edges.map((edge) => edge.node) : [];

	return (
		<FlatList
			data={reviewNodes}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={(item) => item.id}
			ListHeaderComponent={() => <ItemSeparator />}
			ItemSeparatorComponent={ItemSeparator}
		/>
	);
};

export default MyReviews;
