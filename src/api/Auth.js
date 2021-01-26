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

export const logout = async () => {
    return await axios.get(
        VERSION_V1
        + 'logout'
    )
}

export const auth = async () => {
    return await axios.get(
        '/user'
    )
}