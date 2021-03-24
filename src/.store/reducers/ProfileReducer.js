import {ProfileDA, UsersDA} from "../../DAL/DataAccess";

const UPDATE_ADD_POST_AREA = 'UPDATE_ADD_POST_AREA'
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
    postAreaData: '',
    // Происходит ли загрузка
    isFetching: false,
    status: '',
    lookingForAJobDescription: ''
}

const ProfileReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                PostsArray: [...state.PostsArray, {
                    id: 5,
                    user_name: 'Name_here Surname_here',
                    post_content: state.postAreaData,
                    likesAmount: 0
                }],
                postAreaData: ''
            }
        case UPDATE_ADD_POST_AREA:
            return {
                ...state,
                postAreaData: action.postAreaData
            }
        case IS_FETCHING_SWITCH:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_PROFILE_DATA:
            return {
                ...state, fullName: action.fullName, lookingForAJobDescription: action.lookingForAJobDescription, user_img: action.user_img
            }
        case SET_PROFILE_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    }
}

export const updateAddPostArea = (postAreaData) => {
    return {
        type: UPDATE_ADD_POST_AREA,
        postAreaData
    }
}

export const isFetchingSwitch = (isFetching) => {
    return {
        type: IS_FETCHING_SWITCH,
        isFetching
    }
}

export const setProfileData = (fullName, user_img, lookingForAJobDescription) => {
    return {
        type: SET_PROFILE_DATA,
        fullName,
        user_img,
        lookingForAJobDescription
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
                    response.lookingForAJobDescription
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