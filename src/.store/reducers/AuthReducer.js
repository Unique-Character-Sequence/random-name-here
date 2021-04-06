import {ProfileDA} from "../../DAL/DataAccess";

const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_AUTH_ERROR = 'SET_AUTH_ERROR'
const SET_AUTHORIZED_TRUE = 'SET_AUTHORIZED_TRUE'
const SET_AUTHORIZED_FALSE = 'SET_AUTHORIZED_FALSE'

let InitialState = {
    login: null,
    id: null,
    email: null,
    isLoggedIn: false,
    authError: 'qweqwe'
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
        case SET_AUTHORIZED_FALSE:
            return {
                ...state,
                login: null,
                isLoggedIn: false,
                id: null
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                authError: action.authError.join()
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

export const setAuthError = (authError) => {
    return {
        type: SET_AUTH_ERROR,
        authError
    }
}

export const setAuthorizedTrue = (id) => {
    return {
        type: SET_AUTHORIZED_TRUE,
        id
    }
}

export const setAuthorizedFalse = () => {
    return {
        type: SET_AUTHORIZED_FALSE
    }
}

export const getMyDataThunk = () => (dispatch) => {
    ProfileDA.getMyData()
        .then(
            response => {
                if (response.resultCode === 0) {
                    //console.log(response.data)
                    dispatch(setAuthData(response.data))
                }
            })
}

export const sendAuthRequestThunk = (email, password, remember_me) => (dispatch) => {
    ProfileDA.sendAuthRequest(email, password, remember_me)
        .then(
            response => {
                //console.log(response)
                if (response.resultCode === 0) {
                    dispatch(setAuthorizedTrue(response.data.userId))
                } else {
                    console.log(response.messages)
                    dispatch(setAuthError(response.messages))
                }
            })
        .then(
            () => {
                console.log('getMyDataThunk runs here')
                getMyDataThunk()
            }
        )
}

export const setDeauthorizedThunk = () => (dispatch) => {
    ProfileDA.logout()
        .then(
            response => {
                console.log(response)
                if (response.resultCode === 0) {
                    dispatch(setAuthorizedFalse())
                }
            })
}

export default AuthReducer