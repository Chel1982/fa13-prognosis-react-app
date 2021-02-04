import {getGame} from "../api/Game";

const GET_GAME = "GET_GAME";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    isFetching: true
}

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAME :
            return {
                game: action.data
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        default :
            return state;
    }
}

const getGameAction = (data) => ({type: GET_GAME, data});
const setIsFetchingAction = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getGameThunk = (id) => {
    return (dispatch) => {
        getGame(id)
            .then(
                response => {
                    dispatch(getGameAction(response.data));
                    dispatch(setIsFetchingAction(false));
                }
            )
    }
}

export default GameReducer;