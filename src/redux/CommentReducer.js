import {getComments, setComment} from "../api/Comment";

const SET_COMMENT = "SET_COMMENT";
const GET_COMMENTS = "GET_COMMENTS";
const TOGGLE_IS_FETCHED_COMMENT = "TOGGLE_IS_FETCHED_COMMENT";

let initialState = {};

const CommentReducer  = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENT :
            return {...state, data: [action.data, ...state.data]};
        case GET_COMMENTS :
            return {...action.data};
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

export const setCommentThunk = (comment, type, id) => {
    console.log()
    return (dispatch) => {
        setComment(comment, type, id)
            .then(response => {
                dispatch(setCommentAction(response.data))
            })
    }
}

export const getCommentsThunk = (data = '', type, id) => {
    return (dispatch) => {
        dispatch(setIsFetchedCommentAction(false));
        getComments(data, type, id)
            .then(response => {
                dispatch(getCommentsAction(response.data));
                dispatch(setIsFetchedCommentAction(true));
            })
    }
}