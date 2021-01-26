import axios from "axios";

const MAIN_URL = 'http://api.fa13-prognosis.loc/api/v1/';

export const getTournamentList = async (status) => {
    return await axios.get(MAIN_URL + 'tournament-list/' + status)
}