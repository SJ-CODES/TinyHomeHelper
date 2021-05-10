import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
	userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};
