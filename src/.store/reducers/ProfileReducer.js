import {ProfileDA} from "../../DAL/DataAccess";

const ADD_POST = 'ADD_POST'
const IS_FETCHING_SWITCH = 'IS_FETCHING_SWITCH'
const SET_PROFILE_DATA = 'SET_PROFILE_DATA'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'

let InitialState = {
    PostsArray: [
        {id: 0, user_name: 'Georgo Biba', post_content: '123123', likesAmount: 1023},
        {id: 1, user_name: 'Geo22rgo Biba', post_content: '123123', likesAmount: 3911},
        {id: 2, user_name: 'Geor11g333o Biba', post_content: '123123123123', likesAmount: 4911},
        {id: 3, user_name: 'Georg333o Biba', post_content: '213123123', likesAmount: 5911},
        {id: 4, user_name: 'Georg1333o Biba', post_content: '123123', likesAmount: 123911}
    ],
    // Происходит ли загрузка
    isFetching: false,
    status: undefined
}

const ProfileReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                PostsArray: [...state.PostsArray, {
                    id: 5,
                    user_name: 'Name_here Surname_here',
                    post_content: action.postAreaData,
                    likesAmount: 0
                }]
            }
        case IS_FETCHING_SWITCH:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_PROFILE_DATA:
            return {
                ...state,
                fullName: action.fullName,
                user_img: action.user_img,
                userId: action.userId
            }
        case SET_PROFILE_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const addPost = (postAreaData) => {
    return {
        type: ADD_POST,
        postAreaData
    }
}

export const isFetchingSwitch = (isFetching) => {
    return {
        type: IS_FETCHING_SWITCH,
        isFetching
    }
}

export const setProfileData = (fullName, user_img, userId) => {
    return {
        type: SET_PROFILE_DATA,
        fullName,
        user_img,
        userId
    }
}

export const setProfileStatus = (status) => {
    return {
        type: SET_PROFILE_STATUS,
        status
    }
}

export const getProfileDataThunk = (id) => (dispatch) => {
    isFetchingSwitch(true)
    ProfileDA.getProfileData(id)
        .then(
            response => {
                isFetchingSwitch(false) // Данные УЖЕ пришли, а значит можно скрыть preloader
                dispatch(setProfileData(
                    response.fullName,
                    response.photos.large,
                    // response.status, // В json ответе нет такого параметра
                    response.userId
                ))

            })
}

export const getProfileStatusThunk = (id) => (dispatch) => {
    ProfileDA.getProfileStatus(id)
        .then(
            response => {
                dispatch(setProfileStatus(
                    response.data
                ))
            })
}

export const updateProfileStatusThunk = (status) => (dispatch) => {
    ProfileDA.updateProfileStatus(status)
        .then(
            response => {
                if (response.resultCode === 0) {
                    dispatch(setProfileStatus(
                        status
                    ))
                }
            })
}


export default ProfileReducer