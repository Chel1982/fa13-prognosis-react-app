import {getNotification, updateNotification} from "../api/Notification";

const GET_NOTIFICATION = 'GET_NOTIFICATION';

let initialState = {}

const NotificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATION :
            return {game: action.data}
        default :
            return state;
    }
}

const getNotificationAction = (data) => ({type: GET_NOTIFICATION, data});

export const getNotificationThunk = () => {
    return (dispatch) => {
        getNotification()
            .then(
                response => {
                    dispatch(getNotificationAction(response.data));
                }
            )
    }
}

export const updateNotificationThunk = () => {
    return (dispatch) => {
        updateNotification()
            .then()
    }
}

export default NotificationReducer;