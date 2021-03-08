import axios from "axios";
const VERSION_V1 = '/v1/';

export const getNotification = async () => {
    return await axios.get(
        VERSION_V1
        + 'notifications'
    )
}

export const updateNotification = async () => {
    return await axios.put(
        VERSION_V1
        + 'notifications'
    )
}