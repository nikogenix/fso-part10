import { gql } from "@apollo/client";

import { REPOSITORY_INFO } from "./fragments";
import { REVIEW_INFO } from "./fragments";

export const GET_REPOSITORIES = gql`
	query ($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
		repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
			edges {
				node {
					...RepositoryInfo
				}
			}
		}
	}
	${REPOSITORY_INFO}
`;

export const GET_REPOSITORY = gql`
	query Repository($id: ID!) {
		repository(id: $id) {
			...RepositoryInfo
			reviews {
				edges {
					node {
						...ReviewInfo
					}
				}
			}
		}
	}
	${REPOSITORY_INFO}
	${REVIEW_INFO}
`;

export const GET_USER = gql`
	query {
		me {
			id
			username
		}
	}
`;
