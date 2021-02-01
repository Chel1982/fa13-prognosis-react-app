import axios from "axios";
const VERSION_V1 = '/v1/';

export const getGame = async (id) => {
    return await axios.get(
        VERSION_V1
        + 'game/id/'
        + id
    )
}