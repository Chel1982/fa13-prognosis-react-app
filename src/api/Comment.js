import axios from "axios";
const VERSION_V1 = '/v1/';

export const setComment = async (game_id, comment) => {
    return await axios.post(
        VERSION_V1
        + 'comment/game',
        {
            game_id: game_id,
            comment: comment
        }
    )
};