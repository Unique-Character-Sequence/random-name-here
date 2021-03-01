const CHAT_CONTACT = 'CHAT_CONTACT'
const ADD_CONTACT = 'ADD_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE'

let InitialState = {
    UsersArray: []
    // UsersArray: [
    //     {
    //         id: 0,
    //         name: 'Georgo Biba',
    //         photos: 'https://i.pinimg.com/originals/12/fe/52/12fe5285187f896e3ed6feaba04894be.jpg',
    //         followed: false
    //     },
    //     {
    //         id: 1,
    //         name: 'Geo22rgo Biba',
    //         photos: 'https://modnica.info/wp-content/uploads/2016/02/0902-52.jpg',
    //         followed: true
    //     },
    //     {
    //         id: 2,
    //         name: 'Geor11g333o Biba',
    //         photos: 'https://ptel.cz/wp-content/uploads/2019/12/123.png',
    //         followed: true
    //     },
    //     {
    //         id: 3,
    //         name: 'Georg333o Biba',
    //         photos: 'https://img.pravda.com/images/doc/0/3/03b8519-755671822123025.jpeg.jpg',
    //         followed: false
    //     },
    //     {
    //         id: 4,
    //         name: 'Georg1333o Biba',
    //         photos: 'https://s0.rbk.ru/v6_top_pics/media/img/7/32/755879164960327.jpg',
    //         followed: true
    //     }
    // ],
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