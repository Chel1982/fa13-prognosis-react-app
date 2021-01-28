import axios from "axios";

const VERSION_V1 = '/v1/';

export const getLastPressConference = async (data = '', countPressConf) => {
    if (data) {
        return await axios.get(VERSION_V1 + 'press-conferences/count/'
            + countPressConf + '?page=' + data.page);
    }
    return await axios.get(VERSION_V1 + 'press-conferences/count/' + countPressConf);
}

export const getForIdLastPressConferences = async (data = '', tournamentId, countPressConf) => {
    if (data) {
        return await axios.get(VERSION_V1
            + 'press-conferences/tournament_id/'
            + data.tournament_id
            + '/count/'
            + countPressConf
            + '?page='
            + data.page);
    }
    return await axios.get(VERSION_V1
        + 'press-conferences/tournament_id/'
        + tournamentId
        + '/count/'
        + countPressConf);
}
