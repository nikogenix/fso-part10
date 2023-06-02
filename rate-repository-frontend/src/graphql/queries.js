import { gql } from "@apollo/client";

import { REPOSITORY_INFO } from "./fragments";
import { REVIEW_INFO } from "./fragments";

export const GET_REPOSITORIES = gql`
	query (
		$orderDirection: OrderDirection
		$orderBy: AllRepositoriesOrderBy
		$searchKeyword: String
		$first: Int
		$after: String
	) {
		repositories(
			orderDirection: $orderDirection
			orderBy: $orderBy
			searchKeyword: $searchKeyword
			first: $first
			after: $after
		) {
			edges {
				node {
					...RepositoryInfo
				}
				cursor
			}
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
		}
	}
	${REPOSITORY_INFO}
`;

export const GET_REPOSITORY = gql`
	query Repository($id: ID!, $first: Int, $after: String) {
		repository(id: $id) {
			...RepositoryInfo
			reviews(first: $first, after: $after) {
				edges {
					node {
						...ReviewInfo
					}
					cursor
				}
				pageInfo {
					endCursor
					startCursor
					hasNextPage
				}
			}
		}
	}
	${REPOSITORY_INFO}
	${REVIEW_INFO}
`;

export const GET_USER = gql`
	query getCurrentUser($includeReviews: Boolean = false) {
		me {
			id
			username
			reviews @include(if: $includeReviews) {
				edges {
					node {
						...ReviewInfo
					}
				}
			}
		}
	}
	${REVIEW_INFO}
`;
