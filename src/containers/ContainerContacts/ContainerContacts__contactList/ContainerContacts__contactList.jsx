import Contacts__contactList from "../../../components/Contacts/Contacts__contactList/Contacts__contactList";
import {connect} from "react-redux";
import {
    addContact_actionCreator, addUserToState_actionCreator,
    chatContact_actionCreator,
    deleteContact_actionCreator
} from "../../../.store/reducers/ContactsReducer";

let mapStateToProps = (state) => {
    //console.log('state:::',state) // отслеживаем state
    return {
        UsersArray: state.ContactsComponentStates.UsersArray,
        pageSize: state.ContactsComponentStates.pageSize, // Свойство state. Количество элементов на странице
        totalUsersCount: state.ContactsComponentStates.totalUsersCount, // Свойство state. Общее количество юзеров в UsersArray
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addContact: (id) => {
            let action = addContact_actionCreator(id)
            dispatch(action)
        },
        deleteContact: (id) => {
            let action = deleteContact_actionCreator(id)
            dispatch(action)
        },
        chatContact: (id) => {
            let action = chatContact_actionCreator(id)
            dispatch(action)
        },
        addUserToState: (id) => {
            let action = addUserToState_actionCreator(id)
            dispatch(action)
        }
    }
}

const ContainerContacts__contactList = connect(mapStateToProps, mapDispatchToProps)(Contacts__contactList) // В контакт лист передаётся пропс и методы для диспатча экшнов

export default ContainerContacts__contactList
