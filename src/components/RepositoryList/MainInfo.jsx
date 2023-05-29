import { StyleSheet, View } from "react-native";
import Text from "../Text";
import theme from "../theme";

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		marginLeft: 20,
		flexShrink: 1,
	},
	language: {
		borderRadius: 5,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		flexGrow: 0,
		paddingHorizontal: 5,
		alignSelf: "flex-start",
	},
});
const MainInfo = ({ item }) => {
	const { fullName, description, language } = item;
	return (
		<View style={styles.container}>
			<View>
				<Text fontWeight={"bold"} fontSize={"subheading"}>
					{fullName}
				</Text>
			</View>
			<View>
				<Text color={"textSecondary"}>{description}</Text>
			</View>
			<View style={styles.language}>
				<Text style={styles.language}>{language}</Text>
			</View>
		</View>
	);
};

export default MainInfo;
