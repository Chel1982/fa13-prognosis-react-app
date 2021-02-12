import {getAuthDataThunk} from "./AuthReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized : false
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED :
            return {
                ...state,
                initialized : action.initialized
            };
        default:
            return state;
    }
}

export default AppReducer;

const setInitializedAction = (initialized) => ({type: SET_INITIALIZED, initialized});

export const initializeThunk = () => (dispatch) => {
    let promiseAuth = dispatch(getAuthDataThunk());
    promiseAuth.then(() => {
            dispatch(setInitializedAction(true))
    })
        .catch(() => {
            dispatch(setInitializedAction(true));
        })
}