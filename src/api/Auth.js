import axios from "axios";

const VERSION_V1 = '/v1/';

export const login = (data) => {
    return axios.post(
        VERSION_V1
        + 'login',
        {
            email : data.email,
            password : data.password
        });
}

export const register = async (data) => {
    return await axios.post(
        VERSION_V1
        + 'register',
        {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation : data.password_confirmation
        }
    )
}

export const logout = async () => {
    let config = {
        headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token')
        }
    }
    return await axios.delete(
        VERSION_V1
        + 'logout',
        config
    )
}

export const auth = async () => {
    return await axios.get(
        VERSION_V1
        + 'user'
    )
}