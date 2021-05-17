import React from "react";
import ReactDOM from "react-dom";

import "bootswatch/dist/minty/bootstrap.min.css";
import "./Components/CSS/Index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
//import store from "./store";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { userLoginReducer, userRegisterReducer } from "./store/userReducers";
import { postsReducer } from "./store/postsReducer";

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	postsReducer: postsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, middleware);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
