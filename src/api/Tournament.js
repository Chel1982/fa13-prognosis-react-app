import axios from "axios";

const VERSION_V1 = '/v1/';

export const getTournament = async (id) => {
    return await axios.get(VERSION_V1 + 'tournament/' + id);
}