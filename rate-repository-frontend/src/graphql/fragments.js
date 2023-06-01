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
		url
	}
`;

export const REVIEW_INFO = gql`
	fragment ReviewInfo on Review {
		id
		text
		rating
		createdAt
		user {
			id
			username
		}
		repositoryId
	}
`;
