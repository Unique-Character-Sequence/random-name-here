export const getProfileComponentStates = (state) => {
    return state.ProfileComponentStates
}

export const getLogin = (state) => {
    return state.AuthReducer.login
}

export const getId = (state) => {
    // my id
    return state.AuthReducer.id
}

 export const getUserId = (state) => {
    // opened page id
    return state.ProfileComponentStates.userId
 }

export const getIsLoggedIn = (state) => {
    return state.AuthReducer.isLoggedIn
}

export const getAuthError = (state) => {
    return state.AuthReducer.authError
}

export const getCaptchaUrl = (state) => {
    return state.AuthReducer.captchaUrl
}
//
// export const getLogin = (state) => {
//     return state.AuthReducer.login
// }
//
// export const getLogin = (state) => {
//     return state.AuthReducer.login
// }
//
