import Contacts__contactList from "../../../components/Contacts/Contacts__contactList/Contacts__contactList";
import {connect} from "react-redux";
import {
    addContact_actionCreator, addUserToState_actionCreator,
    chatContact_actionCreator,
    deleteContact_actionCreator
} from "../../../.store/reducers/ContactsReducer";

let mapStateToProps = (state) => {
    return {
        UsersArray: state.ContactsComponentStates.UsersArray
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

const ContainerContacts__contactList = connect(mapStateToProps, mapDispatchToProps)(Contacts__contactList)

export default ContainerContacts__contactList
