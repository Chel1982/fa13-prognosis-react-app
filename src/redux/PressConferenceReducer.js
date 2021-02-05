import {getLastPressConference, getForIdLastPressConferences} from "../api/PressConference";

const GET_LAST_ALL_PRESS_CONF = "GET_LAST_ALL_PRESS_CONF";
const GET_LAST_FOR_ID_PRESS_CONF = 'GET_LAST_FOR_ID_PRESS_CONF';
const TOGGLE_IS_FETCHED_LAST_PRESS = "TOGGLE_IS_FETCHED_LAST_PRESS";
const COUNT_PRESS_CONF = 5;

let initialState = {}

const PressConferenceReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case GET_LAST_ALL_PRESS_CONF :
            return {...state, lastAllPressConferences: action.data};
        case GET_LAST_FOR_ID_PRESS_CONF :
            return {...state, lastForIdAllPressConferences: action.data};
        case TOGGLE_IS_FETCHED_LAST_PRESS :
            return {...state, isFetched: action.isFetched}
        default:
            return state;
    }
}

const getAllPressAction = (data) => ({type: GET_LAST_ALL_PRESS_CONF, data})
const getForIDPressAction = (data) => ({type: GET_LAST_FOR_ID_PRESS_CONF, data})
const setIsFetchedLastPressAction = (isFetched) => ({type: TOGGLE_IS_FETCHED_LAST_PRESS, isFetched})

export const getForIdLastPressConferencesThunk = (data = '', tournamentId) => {
    return (dispatch) => {
        dispatch(setIsFetchedLastPressAction(false))
        getForIdLastPressConferences(data, tournamentId, COUNT_PRESS_CONF)
            .then(response => {
                dispatch(getForIDPressAction(response.data));
                dispatch(setIsFetchedLastPressAction(true));
            })
    }
}

export const getLastAllPressConferencesThunk = (data = '') => {
    return (dispatch) => {
        dispatch(setIsFetchedLastPressAction(false));
        getLastPressConference(data, COUNT_PRESS_CONF)
            .then(response => {
                dispatch(getAllPressAction(response.data))
                dispatch(setIsFetchedLastPressAction(true));
            })
    }
};

export default PressConferenceReducer;