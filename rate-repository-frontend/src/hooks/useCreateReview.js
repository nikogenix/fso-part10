import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
	const [mutate, result] = useMutation(CREATE_REVIEW);

	const createReview = async ({ ownerName, repositoryName, rating, text }) => {
		const ratingToNum = Number(rating);
		const data = await mutate({ variables: { review: { ownerName, repositoryName, rating: ratingToNum, text } } });

		const repositoryId = data.data.createReview.repositoryId;

		return repositoryId;
	};

	return [createReview, result];
};

export default useCreateReview;
