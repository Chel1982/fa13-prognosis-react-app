import {getLastPressConferencePagination, getLastPressConference, getForIdLastPressConferences} from "../api/PressConference";

const GET_LAST_ALL_PRESS_CONF = "GET_LAST_ALL_PRESS_CONF";
const GET_LAST_REGULAR_PRESS_CONF = 'GET_LAST_REGULAR_PRESS_CONF';
const COUNT_PRESS_CONF = 5;

let initialState = {}

const PressConferenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAST_ALL_PRESS_CONF :
            return {lastAllPressConferences: action.data};
        case GET_LAST_REGULAR_PRESS_CONF :
            return {lastAllPressConferences: action.data};
        default:
            return state;
    }
}

const getPressAction = (data) => ({type: GET_LAST_ALL_PRESS_CONF, data})

export const getForIdLastPressConferencesThunk = (tournamentId) => {
    return (dispatch) => {
        getForIdLastPressConferences(tournamentId, COUNT_PRESS_CONF)
            .then(response => {
                dispatch(getPressAction(response.data))
            })
    }
}

export const getLastAllPressConferencesThunk = (data = '') => {
    return (dispatch) => {
        getLastPressConference(data, COUNT_PRESS_CONF)
            .then(response => {
                dispatch(getPressAction(response.data))
            })
    }
};

export default PressConferenceReducer;