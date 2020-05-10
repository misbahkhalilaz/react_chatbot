import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducers/reducer";

const logger = createLogger();

const initState = {
	isFetching: false,
	chat: [
		// {
		// 	query: "",
		// 	response: "",
		// },
	],
};

const store = createStore(reducer, initState, applyMiddleware(logger));

export default store;
