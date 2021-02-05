import {getComments, setComment} from "../api/Comment";

const SET_COMMENT = "SET_COMMENT";
const GET_COMMENTS = "GET_COMMENTS";
const TOGGLE_IS_FETCHED_COMMENT = "TOGGLE_IS_FETCHED_COMMENT";

let initialState = {};

const CommentReducer  = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENT :
            return {...state, comments: [action.data, ...state.comments]};
        case GET_COMMENTS :
            return {comments: action.data};
        case TOGGLE_IS_FETCHED_COMMENT :
            return {...state, isFetched: action.isFetched}
        default:
            return state;
    }
}

export default CommentReducer;

const setCommentAction = (data) => ({type: SET_COMMENT, data})
const getCommentsAction = (data) => ({type: GET_COMMENTS, data})
const setIsFetchedCommentAction = (isFetched) => ({type: TOGGLE_IS_FETCHED_COMMENT, isFetched})

export const setCommentThunk = (game_id, comment) => {
    return (dispatch) => {
        setComment(game_id, comment)
            .then(response => {
                dispatch(setCommentAction(response.data))
            })
    }
}

export const getCommentsThunk = (game_id) => {
    setIsFetchedCommentAction(false)
    return (dispatch) => {
        getComments(game_id)
            .then(response => {
                console.log(response.data)
                dispatch(getCommentsAction(response.data));
                dispatch(setIsFetchedCommentAction(true));
            })
    }
}