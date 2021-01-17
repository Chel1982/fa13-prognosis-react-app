import {getLastPressConference, getForIdLastPressConferences} from "../api/PressConference";

const GET_LAST_ALL_PRESS_CONF = "GET_LAST_ALL_PRESS_CONF";
const GET_LAST_FOR_ID_PRESS_CONF = 'GET_LAST_FOR_ID_PRESS_CONF';
const COUNT_PRESS_CONF = 5;

let initialState = {}

const PressConferenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAST_ALL_PRESS_CONF :
            return {lastAllPressConferences: action.data};
        case GET_LAST_FOR_ID_PRESS_CONF :
            return {lastForIdAllPressConferences: action.data};
        default:
            return state;
    }
}

const getAllPressAction = (data) => ({type: GET_LAST_ALL_PRESS_CONF, data})
const getForIDPressAction = (data) => ({type: GET_LAST_FOR_ID_PRESS_CONF, data})

export const getForIdLastPressConferencesThunk = (data = '', tournamentId) => {
    return (dispatch) => {
        getForIdLastPressConferences(data, tournamentId, COUNT_PRESS_CONF)
            .then(response => {
                dispatch(getForIDPressAction(response.data))
            })
    }
}

export const getLastAllPressConferencesThunk = (data = '') => {
    return (dispatch) => {
        getLastPressConference(data, COUNT_PRESS_CONF)
            .then(response => {
                dispatch(getAllPressAction(response.data))
            })
    }
};

export default PressConferenceReducer;