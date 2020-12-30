import {getLastPressConference} from "../api/PressConference";

const GET_PRESS_CONF = "GET_PRESS_CONF";

const PressConferenceReducer = (state = null, action) => {
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
        getLastPressConference(10)
            .then(response => {
                dispatch(getPressAction(response.data))
            })
    }
};

export default PressConferenceReducer;