import {applyMiddleware, combineReducers, createStore} from "redux";
import pressConferenceReducer from "./PressConferenceReducer";
import thunk from "redux-thunk";
import tournamentListReducer from "./TournamentListReducer";
import authReducer from "./AuthReducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    pressConferenceReducer,
    tournamentListReducer,
    authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;