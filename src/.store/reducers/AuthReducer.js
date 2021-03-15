const SET_AUTH_DATA = 'SET_AUTH_DATA'

let InitialState = {
    login: null,
    id: null,
    email: null
}

const AuthReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.authData
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


export default AuthReducer