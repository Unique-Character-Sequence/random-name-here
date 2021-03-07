const CHAT_CONTACT = 'CHAT_CONTACT'
const ADD_CONTACT = 'ADD_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE'

let InitialState = {
    UsersArray: [],
    pageSize: 5, // Это значение возвращается с сервера, но так оно изначальноне зависит отя сервера
    totalUsersCount: 0,
    currentPage: 1 // Потому это страница, которая подсвечивается в UI
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
        case ADD_USER_TO_STATE:
            return {
                ...state, UsersArray: [...state.UsersArray, ...action.UsersFromDB.items] // Склеиваем 2 массива
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
        UsersFromDB: UsersFromDB
    }
}

export default ContactsReducer