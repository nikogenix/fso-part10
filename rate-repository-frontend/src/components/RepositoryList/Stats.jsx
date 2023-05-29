import { View } from "react-native";
import Stat from "./Stat";

const Stats = ({ style, item }) => {
	const { forksCount, stargazersCount, ratingAverage, reviewCount } = item;
	return (
		<View style={style}>
			<Stat text={"Stars"} stat={stargazersCount} />
			<Stat text={"Forks"} stat={forksCount} />
			<Stat text={"Reviews"} stat={reviewCount} />
			<Stat text={"Rating"} stat={ratingAverage} />
		</View>
	);
};

export default Stats;
