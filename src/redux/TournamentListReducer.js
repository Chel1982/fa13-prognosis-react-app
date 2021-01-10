import {getTournamentList} from "../api/PressConference";

const GET_REGULAR_LIST = 'GET_REGULAR_LIST';
const GET_CUP_LIST = 'GET_CUP_LIST';

let initialState = {};

const TournamentListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGULAR_LIST :
            return {regularList: action.data};
        case GET_CUP_LIST :
            return {cupList: action.data};
        default:
            return state;
    }
}

export default TournamentListReducer;

const getRegularTournamentListAction = (data) => ({type: GET_REGULAR_LIST, data});

const getCupTournamentListAction = (data) => ({type: GET_CUP_LIST, data});

export const getTournamentListThunk =  (status) => {
    switch (status) {
        case 'regular' :
            return (dispatch) => {
                getTournamentList(status)
                    .then(response => {
                        dispatch(getRegularTournamentListAction(response.data))
                    });
            };
        case 'cup' :
            return (dispatch) => {
                getTournamentList(status)
                    .then(response => {
                        dispatch(getCupTournamentListAction(response.data))
                    });
            };
        default:
            return {};
    }
}