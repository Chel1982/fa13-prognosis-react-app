import axios from "axios";

export const getLastPressConference = async (countPressConf) => {
    return await axios.get('http://api.fa13-prognosis.loc/api/v1/press-conferences/' + countPressConf)
        .then(response => response);
}

export const getLastPressConferencePagination = async (data, countPressConf) => {
    return await axios.get('http://api.fa13-prognosis.loc/api/v1/press-conferences/'
        + countPressConf + '?page=' + data.page)
        .then(response => response);
}
