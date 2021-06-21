import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
    InfoReducer
  
} from "./Redux/Reducer";

const reducer = combineReducers({
  InfoTime: InfoReducer,
  
});
const InfoLocalStorage = localStorage.getItem("InfoTIme")
  ? JSON.parse(localStorage.getItem("InfoTIme"))
  : null;


let initialState = {
    InfoTime: { Info: InfoLocalStorage },
  
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
