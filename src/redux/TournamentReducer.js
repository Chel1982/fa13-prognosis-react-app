import {getTournament} from "../api/Tournament";

const GET_TOURNAMENT = 'GET_TOURNAMENT';

let initialState = {};

const TournamentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOURNAMENT :
            return {...state, tournament: action.data};
        default:
            return state;
    }
}

export default TournamentReducer;

const getTournamentAction = (data) => ({type: GET_TOURNAMENT, data});

export const getTournamentThunk = (id) => {
    return (dispatch) => {
        getTournament(id)
            .then(response => {
                dispatch(getTournamentAction(response.data))
            });
    };
}