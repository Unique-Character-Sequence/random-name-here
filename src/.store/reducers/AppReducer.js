import {ProfileDA} from "../../DAL/DataAccess";
import {getMyDataThunk} from "./AuthReducer";


const SET_INITIALIZED_TRUE = 'SET_INITIALIZED_TRUE'

let InitialState = {
    initialized: false,
}

const AppReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED_TRUE:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const setInitializedTrue = () => {
    return {
        type: SET_INITIALIZED_TRUE
    }
}

export const initializeAppThunk = () => (dispatch) => {
    let getDataPromise = dispatch(getMyDataThunk())
    // then работает только с коллбэк функцией. getMyDataThunk возвращает промис, поэтому его надо dispatch'ить
        getDataPromise
        .then(
            () => {
                dispatch(setInitializedTrue())
            })
}

export default AppReducer