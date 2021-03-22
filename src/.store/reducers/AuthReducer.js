import {UsersDA} from "../../DAL/DataAccess";

const SET_AUTH_DATA = 'SET_AUTH_DATA'

let InitialState = {
    login: null,
    id: null,
    email: null,
    isLoggedIn: false
}

const AuthReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.authData,
                isLoggedIn: true
            }
        default:
            return state
    }
}


export const setAuthData = (authData) => {
    return {
        type: SET_AUTH_DATA,
        authData
    }
}

export const getMyDataThunk = () => (dispatch) => {
    UsersDA.getMyData()
        .then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthData(response.data))
                }
            })
}

export default AuthReducer