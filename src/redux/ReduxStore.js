import {applyMiddleware, combineReducers, createStore} from "redux";
import pressConferenceReducer from "./PressConferenceReducer";
import thunk from "redux-thunk";
import tournamentListReducer from "./TournamentListReducer";
import authReducer from "./AuthReducer";
import { reducer as formReducer } from 'redux-form';
import gameReducer from "./GameReducer";
import commentReducer from "./CommentReducer";

let reducers = combineReducers({
    pressConferenceReducer,
    tournamentListReducer,
    authReducer,
    gameReducer,
    commentReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;