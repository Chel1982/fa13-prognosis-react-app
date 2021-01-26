import axios from "axios";

const VERSION_V1 = '/v1/';

export const getTournamentList = async (status) => {
    return await axios.get(VERSION_V1 + 'tournament-list/' + status)
}