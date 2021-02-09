import axios from "axios";

const VERSION_V1 = '/v1/';
const COUNT_PRESS_CONF = 15;

export const getLastPressConference = async (data = '') => {
    if (data) {
        return await axios.get(VERSION_V1 + 'press-conferences/count/'
            + COUNT_PRESS_CONF + '?page=' + data.page);
    }
    return await axios.get(VERSION_V1 + 'press-conferences/count/' + COUNT_PRESS_CONF);
}

export const getForIdLastPressConferences = async (data = '', tournamentId) => {
    if (data) {
        return await axios.get(VERSION_V1
            + 'press-conferences/tournament_id/'
            + data.tournament_id
            + '/count/'
            + COUNT_PRESS_CONF
            + '?page='
            + data.page);
    }
    return await axios.get(VERSION_V1
        + 'press-conferences/tournament_id/'
        + tournamentId
        + '/count/'
        + COUNT_PRESS_CONF);
}
