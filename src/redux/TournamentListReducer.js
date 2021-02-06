import {getTournamentList} from "../api/TournamentList";

const GET_REGULAR_LIST = "GET_REGULAR_LIST";
const GET_CUP_LIST = "GET_CUP_LIST";
const TOGGLE_IS_FETCHED_REGULAR_LIST = "TOGGLE_IS_FETCHED_REGULAR_LIST";
const TOGGLE_IS_FETCHED_CUP_LIST = "TOGGLE_IS_FETCHED_CUP_LIST";

let initialState = {};

const TournamentListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGULAR_LIST :
            return {...state, regularListData: action.data};
        case GET_CUP_LIST :
            return {...state, cupListData: action.data};
        case TOGGLE_IS_FETCHED_REGULAR_LIST :
            return {...state, regularFetched:  action.isFetched};
        case TOGGLE_IS_FETCHED_CUP_LIST :
            return {...state, cupFetched:  action.isFetched};
        default:
            return state;
    }
}

export default TournamentListReducer;

const getRegularTournamentListAction = (data) => ({type: GET_REGULAR_LIST, data});
const getCupTournamentListAction = (data) => ({type: GET_CUP_LIST, data});
const setIsFetchedRegularListAction = (isFetched) => ({type: TOGGLE_IS_FETCHED_REGULAR_LIST, isFetched})
const setIsFetchedCupListAction = (isFetched) => ({type: TOGGLE_IS_FETCHED_CUP_LIST, isFetched})

export const getRegularListThunk = () => {
    return (dispatch) => {
        dispatch(setIsFetchedRegularListAction(false))
        getTournamentList("regular")
            .then(response => {
                dispatch(getRegularTournamentListAction(response.data))
                dispatch(setIsFetchedRegularListAction(true))
            });
    };
}

export const getCupListThunk = () => {
    return (dispatch) => {
        dispatch(setIsFetchedCupListAction(false))
        getTournamentList("cup")
            .then(response => {
                dispatch(getCupTournamentListAction(response.data))
                dispatch(setIsFetchedCupListAction(true))
            });
    };
}


// export const getTournamentListThunk =  (status) => {
//     switch (status) {
//         case 'regular' :
//             return (dispatch) => {
//                 dispatch(setIsFetchedRegularListAction(false))
//                 getTournamentList(status)
//                     .then(response => {
//                         dispatch(getRegularTournamentListAction(response.data))
//                         dispatch(setIsFetchedRegularListAction(true))
//                     });
//             };
//         case 'cup' :
//             return (dispatch) => {
//                 dispatch(setIsFetchedCupListAction(false))
//                 getTournamentList(status)
//                     .then(response => {
//                         dispatch(getCupTournamentListAction(response.data))
//                         dispatch(setIsFetchedCupListAction(true))
//                     });
//             };
//         default:
//             return {};
//     }
// }