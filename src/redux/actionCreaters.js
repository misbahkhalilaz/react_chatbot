import post from "./api.ai";
export const GET_RESPONSE = "getResponse";
export const CHANGE_IS_FETCHING = "changeIsFetching";

export const sendQuery = (query, dispatch) => {
	post(query)
		.then((res) =>
			dispatch({
				type: GET_RESPONSE,
				payload: {
					query: res.query,
					response: res.resp,
				},
			})
		)
		.catch((err) => console.log(err));
	return {
		type: "changeIsFetching",
		payload: {
			isFetching: true,
		},
	};
};
