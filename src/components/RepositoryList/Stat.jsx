import Text from "../Text";
import { convertIntToK } from "../../utils";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
	statContainer: {
		flexDirection: "column",
		justifyContent: "center",
		padding: 10,
		minWidth: 90,
	},
	statText: {
		textAlign: "center",
	},
});

const Stat = ({ text, stat }) => {
	return (
		<View style={styles.statContainer}>
			<Text style={styles.statText} color={"textSecondary"}>
				{convertIntToK(stat)}
			</Text>
			<Text style={styles.statText}>{text}</Text>
		</View>
	);
};

export default Stat;
