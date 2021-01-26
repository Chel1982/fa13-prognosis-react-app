import axios from "axios";

const MAIN_URL = 'http://api.fa13-prognosis.loc/api/v1/';

export const getLastPressConference = async (data = '', countPressConf) => {
    if (data) {
        return await axios.get(MAIN_URL + 'press-conferences/'
            + countPressConf + '?page=' + data.page);
    }
    return await axios.get(MAIN_URL + 'press-conferences/' + countPressConf);
}

export const getForIdLastPressConferences = async (data = '', tournamentId, countPressConf) => {
    if (data) {
        return await axios.get(MAIN_URL
            + 'press-conferences/tournament_id/'
            + data.tournament_id
            + '/count/'
            + countPressConf
            + '?page='
            + data.page);
    }
    return await axios.get(MAIN_URL
        + 'press-conferences/tournament_id/'
        + tournamentId
        + '/count/'
        + countPressConf);
}
