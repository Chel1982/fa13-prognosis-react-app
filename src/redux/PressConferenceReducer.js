import {getLastPressConferencePagination, getLastPressConference} from "../api/PressConference";

const GET_PRESS_CONF = "GET_PRESS_CONF";
const COUNT_PRESS_CONF = 5;

let initialState = {}

const PressConferenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRESS_CONF :
            return {...action.data};
        default:
            return state;
    }
}

const getPressAction = (data) => ({type: GET_PRESS_CONF, data})

export const getLastPressConferencesThunk = () => {

    return (dispatch) => {
        getLastPressConference(COUNT_PRESS_CONF)
            .then(response => {
                dispatch(getPressAction(response.data))
            })
    }
};

export const getLastPressConferencesPaginationThunk =  (data) => {
    return (dispatch) => {
        getLastPressConferencePagination(data, COUNT_PRESS_CONF)
            .then(response => {
                dispatch(getPressAction(response.data))
            })
    }
}

export default PressConferenceReducer;