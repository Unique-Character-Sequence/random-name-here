const CHAT_CONTACT = 'CHAT_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'

let InitialState = {
    AddedUsersArray: [
        {
            id: 0,
            user_name: 'Georgo Biba',
            user_img: 'https://i.pinimg.com/originals/12/fe/52/12fe5285187f896e3ed6feaba04894be.jpg'
        },
        {
            id: 1,
            user_name: 'Geo22rgo Biba',
            user_img: 'https://modnica.info/wp-content/uploads/2016/02/0902-52.jpg'
        },
        {
            id: 2,
            user_name: 'Geor11g333o Biba',
            user_img: 'https://ptel.cz/wp-content/uploads/2019/12/123.png'
        },
        {
            id: 3,
            user_name: 'Georg333o Biba',
            user_img: 'https://img.pravda.com/images/doc/0/3/03b8519-755671822123025.jpeg.jpg'
        },
        {
            id: 4,
            user_name: 'Georg1333o Biba',
            user_img: 'https://s0.rbk.ru/v6_top_pics/media/img/7/32/755879164960327.jpg'
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
            //
            // let stateCopy = {...state}
            // stateCopy.AddedUsersArray.splice(action.contact_id, 1)
            // return stateCopy
            return {
                ...state,
                AddedUsersArray: [...state.AddedUsersArray].splice(action.contact_id, 1) // Не меняем поступивший стейт, а его копию, ибо иммьютабельность
            }
        default:
            return state
    }
}

export const chatContact_actionCreator = (id) => {
    return {
        type: CHAT_CONTACT,
        contact_id: id
    }
}

export const deleteContact_actionCreator = (id) => {
    return {
        type: DELETE_CONTACT,
        contact_id: id
    }
}

export default ContactsReducer