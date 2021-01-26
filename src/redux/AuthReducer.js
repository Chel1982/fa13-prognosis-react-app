import {auth, login} from "../api/Auth";

const SET_USER_DATA = "SET_USER_DATA";

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
        default:
            return state;
    }
}

export default AuthReducer;

const setUserDataAction = (data) => ({type: SET_USER_DATA, data});

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

export const setLoginThunk = (data) => {
    return (dispatch) => {
        login(data)
            .then(
                response => {
                    localStorage.setItem('token', response.data.token);
                    dispatch(setUserDataAction(response.data.user))
                }
            )
            .catch(
                error => {
                    console.log(error.message)
                }
            )
    }
}
