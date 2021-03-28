import {ProfileDA} from "../../DAL/DataAccess";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_AUTHORIZED_TRUE = 'SET_AUTHORIZED_TRUE'

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
        case SET_AUTHORIZED_TRUE:
            return {
                ...state,
                isLoggedIn: true,
                id: action.id
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

export const setAuthorizedTrue = (id) => {
    return {
        type: SET_AUTHORIZED_TRUE,
        id
    }
}

export const getMyDataThunk = () => (dispatch) => {
    ProfileDA.getMyData()
        .then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthData(response.data))
                }
            })
}

export const setAuthorizedThunk = (email, password, remember_me) => (dispatch) => {
    ProfileDA.sendAuthRequest(email, password, remember_me)
        .then(
            response => {
                console.log(response)
                if (response.resultCode === 0) {
                    dispatch(setAuthorizedTrue(response.data.userId))
                }
            })
        .then(
            () => {
                getMyDataThunk()
            }
        )
}

export default AuthReducer