import {auth, login, logout, register} from "../api/Auth";

const SET_USER_DATA = "SET_USER_DATA";
const LOGOUT_USER = "LOGOUT_USER";

let initialState = {
    id : null,
    email : null,
    name : null,
    isAuth : false
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                    ...action.data,
                    isAuth:true
            };
        case LOGOUT_USER :
            return {
                    ...initialState
            }
        default:
            return state;
    }
}

export default AuthReducer;

const setUserDataAction = (data) => ({type: SET_USER_DATA, data});
const logoutUserAction = () => ({type: LOGOUT_USER})

export const getAuthDataThunk = () => {
    return (dispatch) => {
        auth()
            .then(response => {
                    dispatch(setUserDataAction(response.data))
                })
            .catch(
                error => {
                    console.log(error)
                }
            )
    }
}

export const loginThunk = (data) => {
    return (dispatch) => {
        login(data)
            .then(
                response => {
                    if (response.status === 200) {
                        localStorage.setItem('token', response.data.token);
                        dispatch(setUserDataAction(response.data.user))
                    }
                }
            )
            .catch(
                error => {
                    console.log(error.message)
                }
            )
    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        logout()
            .then(
                response => {
                    if (response.status === 200) {
                        localStorage.removeItem('token');
                        dispatch(logoutUserAction());
                    }
            })
    }
}

export const registerThunk = (data) => {
    return (dispatch) => {
        register(data)
            .then(
                response => {
                    if (response.status === 200) {
                        localStorage.setItem('token', response.data.token);
                        dispatch(setUserDataAction(response.data.user))
                    }
                }
            )
            .catch(
                error => {
                    console.log(error.message)
                }
            )
    }
}
