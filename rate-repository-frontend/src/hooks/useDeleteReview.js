import { useMutation, useQuery } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { GET_USER } from "../graphql/queries";

const useDeleteReview = () => {
	const [mutate, result] = useMutation(DELETE_REVIEW);
	// eslint-disable-next-line no-unused-vars
	const { loading, error, data, refetch } = useQuery(GET_USER, { variables: { includeReviews: true } });

	const deleteReview = async (id) => {
		await mutate({ variables: { deleteReviewId: id } });
		refetch();
	};

	return [deleteReview, result];
};

export default useDeleteReview;
