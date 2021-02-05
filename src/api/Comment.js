import axios from "axios";
const VERSION_V1 = '/v1/';
const COUNT = 10;

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

export const getComments = async (game_id) => {
    return await axios.get(
        VERSION_V1
        + 'comments/game/'
        + game_id
        + '/count/'
        + COUNT
    )
}