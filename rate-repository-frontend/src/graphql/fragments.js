import { gql } from "@apollo/client";

export const REPOSITORY_INFO = gql`
	fragment RepositoryInfo on Repository {
		forksCount
		fullName
		description
		id
		language
		ownerAvatarUrl
		ratingAverage
		reviewCount
		stargazersCount
	}
`;
