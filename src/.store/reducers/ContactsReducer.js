const CHAT_CONTACT = 'CHAT_CONTACT'
const ADD_CONTACT = 'ADD_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const IS_FETCHING_SWITCH = 'IS_FETCHING_SWITCH'

let InitialState = {
    UsersArray: [],
    pageSize: 5, // Это значение возвращается с сервера, но так оно изначальноне зависит отя сервера
    // Свойство state. Общее количество юзеров в UsersArray
    totalUsersCount: 0,
    // Свойство state. Нынешняя открытая страница.
    currentPage: 1, // Потому это страница, которая подсвечивается в UI
    isFetching: false // Происходит ли загрузка
}

const ContactsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CHAT_CONTACT:
            return {
                ...state,
            }
        case DELETE_CONTACT:
            return {
                ...state, UsersArray: state.UsersArray.map(m => {
                    if (m.id === action.contact_id) {
                        return {...m, followed: false}
                    }
                    return m
                })
            }
        case ADD_CONTACT:
            return {
                ...state, UsersArray: state.UsersArray.map(m => {
                    if (m.id === action.contact_id) { // Находим скопированный объект с тем же id
                        return {...m, followed: true} // Возвращаем скопированный объект с followed: true
                    }
                    return m
                })
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case ADD_USER_TO_STATE:
            return {
                //...state, UsersArray: [...state.UsersArray, ...action.UsersFromDB.items] // Склеиваем 2 массива
                ...state, UsersArray: [...action.UsersFromDB.items] // Заменяем массив
            }
        case IS_FETCHING_SWITCH:
            return {
                //...state, UsersArray: [...state.UsersArray, ...action.UsersFromDB.items] // Склеиваем 2 массива
                ...state, isFetching: action.isFetching // Заменяем массив
            }
        default:
            return state
    }
}

export const addContact_actionCreator = (id) => {
    return {
        type: ADD_CONTACT,
        contact_id: id
    }
}

export const deleteContact_actionCreator = (id) => {
    return {
        type: DELETE_CONTACT,
        contact_id: id
    }
}

export const chatContact_actionCreator = (id) => {
    return {
        type: CHAT_CONTACT,
        contact_id: id
    }
}

export const addUserToState_actionCreator = (UsersFromDB) => {
    return {
        type: ADD_USER_TO_STATE,
        UsersFromDB // UsersFromDB: UsersFromDB
    }
}

export const setUsersCount_actionCreator = (totalUsersCount) => {
    return {
        type: SET_USERS_COUNT,
        totalUsersCount // totalUsersCount: totalUsersCount
    }
}

export const setCurrentPage_actionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage // currentPage: currentPage
    }
}

export const isFetchingSwitch_actionCreator = (isFetching) => {
    return {
        type: IS_FETCHING_SWITCH,
        isFetching
    }
}

export default ContactsReducer