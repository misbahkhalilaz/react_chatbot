import { GET_RESPONSE, CHANGE_IS_FETCHING } from "../actionCreaters";

export default function reducer(state, action) {
	switch (action.type) {
		case CHANGE_IS_FETCHING:
			return Object.assign({}, state, { isFetching: true });
		case GET_RESPONSE:
			return Object.assign({}, state, {
				isFetching: false,
				chat: [...state.chat, action.payload],
			});
		default:
			return state;
	}
}
