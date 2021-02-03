import {setComment} from "../api/Comment";

const SET_COMMENT = "SET_COMMENT";

let initialState = {};

const CommentReducer  = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENT :
            return {
                comment : action.data.comment,
                user: action.data.user
            };
        default:
            return state;
    }
}

export default CommentReducer;

const setCommentAction = (comment) => ({type: SET_COMMENT, comment})

export const setCommentThunk = (game_id, comment) => {
    return (dispatch) => {
        setComment(game_id, comment)
            .then(response => {
                dispatch(setCommentAction(response.data))
            })
            .catch(error => {
                console.log(error.message)
            })
    }
}