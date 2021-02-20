import Contacts__contactList from "../../../components/Contacts/Contacts__contactList/Contacts__contactList";
import {connect} from "react-redux";
import {chatContact_actionCreator, deleteContact_actionCreator} from "../../../.store/reducers/ContactsReducer";

let mapStateToProps = (state) => {
    return {
        AddedUsersArray: state.ContactsComponentStates.AddedUsersArray
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (id) => {
            let action = deleteContact_actionCreator(id)
            dispatch(action)
        },
        chatContact: (id) => {
            let action = chatContact_actionCreator(id)
            dispatch(action)
        }
    }
}

const ContainerChats__chatList = connect(mapStateToProps, mapDispatchToProps)(Contacts__contactList)

export default ContainerChats__chatList
