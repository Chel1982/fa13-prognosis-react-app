import {applyMiddleware, combineReducers, createStore} from "redux";
import pressConferenceReducer from "./PressConferenceReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    pressConferenceReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;