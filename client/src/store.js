// import { userLoginReducer } from "./reducers/userReducers";

// const reducer = combineReducers({
// 	userLogin: userLoginReducer,
// });

// const userInfoFromStorage = localStorage.getItem("userInfo")
// 	? JSON.parse(localStorage.getItem("userInfo"))
// 	: null;

// const initialState = {
// 	userLogin: { userInfo: userInfoFromStorage },
// };

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { userLoginReducer } from "./reducers/userReducers";
import { postsReducer } from "./reducers/postsReducer";
import thunk from 'redux-thunk';

const reducer = combineReducers({
	userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(
  thunk
))

const store = createStore(
	postsReducer,
	middleware,
  );

export default store