import Contacts__contactList from "../../../components/Contacts/Contacts__contactList/Contacts__contactList";
import {connect} from "react-redux";
import {
    addContact,
    addUserToState,
    chatContact,
    deleteContact,
    isFetchingSwitch, isRequestInProgress,
    setCurrentPage,
    setUsersCount
} from "../../../.store/reducers/ContactsReducer";
import * as react from "react";
import Preloader from "../../../assets/Preloader"
import {UsersDA} from "../../../DAL/DataAccess";


class ContainerContacts__contactList extends react.Component {
    componentDidMount() {
        this.props.isFetchingSwitch(true)
        // (Делает определенные действия сразу после монтирования)
        // Запрашиваем с сервера определенное количество элементов, а затем отправляем их в стейт
        UsersDA.getUsers(this.props.currentPage, this.props.pageSize)
            .then(
                response => {
                    this.props.isFetchingSwitch(false) // Данные УЖЕ пришли, а значит можно скрыть
                    this.props.setUsersCount(response.totalCount)
                    this.props.addUserToState(response)
                })
    }

    onPageChange = (pageNumber) => {
        this.props.isFetchingSwitch(true)
        // Вызывается при нажатии пользователя на кнопку смены страницы. Отправляет в стейт цифру на которую нажали,
        // а также запрашивает с сервера и отправляет в стейт информацию со страницы под номером, на который нажали.
        this.props.setCurrentPage(pageNumber)
        // внизу не {this.props.currentPage}, а {pageNumber}, потому что инструкции сначала отработают с имеющимися пропсами
        UsersDA.getUsers(pageNumber, this.props.pageSize)
            .then(
                response => {
                    console.log(response)
                    this.props.isFetchingSwitch(false)
                    this.props.addUserToState(response)
                })
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
    addContact,
    deleteContact,
    chatContact,
    addUserToState,
    setCurrentPage,
    setUsersCount,
    isFetchingSwitch,
    isRequestInProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerContacts__contactList)
