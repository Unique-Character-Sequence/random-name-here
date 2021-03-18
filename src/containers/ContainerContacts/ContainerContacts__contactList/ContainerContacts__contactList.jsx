import Contacts__contactList from "../../../components/Contacts/Contacts__contactList/Contacts__contactList";
import {connect} from "react-redux";
import {
    addContactThunk,
    addUserToState,
    chatContact,
    deleteContactThunk,
    getUsersThunk,
    setCurrentPage,
} from "../../../.store/reducers/ContactsReducer";
import * as react from "react";
import Preloader from "../../../assets/Preloader"


class ContainerContacts__contactList extends react.Component {
    componentDidMount() {
        // (Делает определенные действия сразу после монтирования)
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        // Вызывается при нажатии пользователя на кнопку смены страницы. Отправляет в стейт цифру на которую нажали,
        this.props.setCurrentPage(pageNumber)
        // а также запрашивает с сервера и отправляет в стейт информацию со страницы под номером, на который нажали.
        // внизу не {this.props.currentPage}, а {pageNumber}, потому что инструкции сначала отработают с имеющимися пропсами
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render() {
        // Отрисовка функционального компонента.
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Contacts__contactList onPageChange={this.onPageChange} {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => ({...state.ContactsComponentStates})

let mapDispatchToProps = {
    chatContact,
    addUserToState,
    setCurrentPage,
    getUsersThunk,
    addContactThunk,
    deleteContactThunk,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerContacts__contactList)
