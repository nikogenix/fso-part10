import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import theme from "../theme";
import TextInput from "../SignIn/TextInput";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
	dropdown: {
		backgroundColor: theme.colors.greyBackground,
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.subheading,
		marginVertical: 10,
		marginHorizontal: 20,
		padding: 15,
		borderWidth: 0,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, sorting, searching, onEndReach }) => {
	const navigate = useNavigate();

	const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

	const { setOrderBy, setOrderDirection } = sorting;
	const [orderSelection, setOrderSelection] = useState();

	const { search, setSearch } = searching;

	const handlePress = (id) => {
		navigate(`/${id}`);
	};

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => (
				<Pressable onPress={() => handlePress(item.id)}>
					<RepositoryItem item={item} />
				</Pressable>
			)}
			keyExtractor={(item) => item.id}
			onEndReached={onEndReach}
			onEndReachedThreshold={0.9}
			ListHeaderComponent={
				<>
					<TextInput placeholder="🔎" value={search} onChangeText={(value) => setSearch(value)}></TextInput>
					<Picker
						style={styles.dropdown}
						selectedValue={orderSelection}
						onValueChange={(itemValue) => {
							setOrderSelection(itemValue);
							itemValue === "latest" ? setOrderBy("CREATED_AT") : setOrderBy("RATING_AVERAGE");
							itemValue === "latest" || itemValue === "highest"
								? setOrderDirection("DESC")
								: setOrderDirection("ASC");
						}}
					>
						<Picker.Item label="Latest repositories" value="latest" />
						<Picker.Item label="Highest rated repositories" value="highest" />
						<Picker.Item label="Lowest rated repositories" value="lowest" />
					</Picker>
				</>
			}
		/>
	);
};

const RepositoryList = () => {
	const [orderBy, setOrderBy] = useState("CREATED_AT");
	const [orderDirection, setOrderDirection] = useState("DESC");

	const [search, setSearch] = useState("");
	const [debouncedSearch] = useDebounce(search, 500);

	const { repositories, fetchMore } = useRepositories({ orderBy, orderDirection, debouncedSearch, first: 10 });

	const onEndReach = () => {
		fetchMore();
	};

	return (
		<RepositoryListContainer
			repositories={repositories}
			sorting={{ setOrderBy, setOrderDirection }}
			searching={{ search, setSearch }}
			onEndReach={onEndReach}
		/>
	);
};

export default RepositoryList;
