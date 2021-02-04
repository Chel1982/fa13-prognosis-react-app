import {getGame} from "../api/Game";

const GET_GAME = "GET_GAME";
const TOGGLE_IS_FETCHED_GAME = "TOGGLE_IS_FETCHING_GAME";

let initialState = {}

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAME :
            return {game: action.data}
        case TOGGLE_IS_FETCHED_GAME :
            return {...state, isFetched: action.isFetched}
        default :
            return state;
    }
}

const getGameAction = (data) => ({type: GET_GAME, data});
const setIsFetchedGameAction = (isFetched) => ({type: TOGGLE_IS_FETCHED_GAME, isFetched})

export const getGameThunk = (id) => {
    setIsFetchedGameAction(false)
    return (dispatch) => {
        getGame(id)
            .then(
                response => {
                    dispatch(getGameAction(response.data));
                    dispatch(setIsFetchedGameAction(true));
                }
            )
    }
}

export default GameReducer;