import {applyMiddleware, combineReducers, createStore} from "redux";
import pressConferenceReducer from "./PressConferenceReducer";
import thunk from "redux-thunk";
import tournamentListReducer from "./TournamentListReducer";

let reducers = combineReducers({
    pressConferenceReducer,
    tournamentListReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;