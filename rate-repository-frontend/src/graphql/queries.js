import { gql } from "@apollo/client";

import { REPOSITORY_INFO } from "./fragments";

export const GET_REPOSITORIES = gql`
	query {
		repositories {
			edges {
				node {
					...RepositoryInfo
				}
			}
		}
	}
	${REPOSITORY_INFO}
`;

export const GET_USER = gql`
	query {
		me {
			id
			username
		}
	}
`;
