import axios from "axios";

const MAIN_URL = 'http://api.fa13-prognosis.loc/api/v1/';

export const getLastPressConference = async (data = '', countPressConf) => {
    if (data) {
        return await axios.get(MAIN_URL + 'press-conferences/'
            + countPressConf + '?page=' + data.page)
            .then(response => response);
    }
    return await axios.get(MAIN_URL + 'press-conferences/' + countPressConf)
        .then(response => response);
}

export const getTournamentList = async (status) => {
    return await axios.get(MAIN_URL + 'tournament-list/' + status)
        .then(response => response)
}

export const getForIdLastPressConferences = async (tournamentId, countPressConf) => {
    return await axios.get(MAIN_URL
        + 'press-conferences/tournament_id/'
        + tournamentId
        + '/count/'
        + countPressConf)
        .then(response => response);
}
