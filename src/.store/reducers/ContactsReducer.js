const CHAT_CONTACT = 'CHAT_CONTACT'
const ADD_CONTACT = 'ADD_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'
const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE'

let InitialState = {
    UsersArray: [
        {
            id: 0,
            user_name: 'Georgo Biba',
            user_img: 'https://i.pinimg.com/originals/12/fe/52/12fe5285187f896e3ed6feaba04894be.jpg',
            added: false
        },
        {
            id: 1,
            user_name: 'Geo22rgo Biba',
            user_img: 'https://modnica.info/wp-content/uploads/2016/02/0902-52.jpg',
            added: true
        },
        {
            id: 2,
            user_name: 'Geor11g333o Biba',
            user_img: 'https://ptel.cz/wp-content/uploads/2019/12/123.png',
            added: true
        },
        {
            id: 3,
            user_name: 'Georg333o Biba',
            user_img: 'https://img.pravda.com/images/doc/0/3/03b8519-755671822123025.jpeg.jpg',
            added: false
        },
        {
            id: 4,
            user_name: 'Georg1333o Biba',
            user_img: 'https://s0.rbk.ru/v6_top_pics/media/img/7/32/755879164960327.jpg',
            added: true
        }
    ],
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
                        return {...m, added: false}
                    }
                    return m
                })
            }
        case ADD_CONTACT:
            return {
                ...state, UsersArray: state.UsersArray.map(m => {
                    if (m.id === action.contact_id) { // Находим скопированный объект с тем же id
                        return {...m, added: true} // Возвращаем скопированный объект с added: true
                    }
                    return m
                })
            }
        case ADD_USER_TO_STATE:
            return {
                ...state, UsersArray: [...state.UsersArray, ...action.UsersFromDB] // Склеиваем 2 массива
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