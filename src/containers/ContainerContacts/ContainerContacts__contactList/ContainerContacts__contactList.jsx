import Contacts__contactList from "../../../components/Contacts/Contacts__contactList/Contacts__contactList";
import {connect} from "react-redux";
import {
    addContact,
    addUserToState,
    chatContact,
    deleteContact,
    isFetchingSwitch,
    setCurrentPage,
    setUsersCount
} from "../../../.store/reducers/ContactsReducer";
import * as axios from "axios";
import * as react from "react";
import Preloader from "../../../assets/Preloader"
import {withRouter} from "react-router-dom";


class ContainerContacts__contactList extends react.Component {
    componentDidMount() {
        this.props.isFetchingSwitch(true)
        // (Делает определенные действия сразу после монтирования)
        // Запрашиваем с сервера определенное количество элементов, а затем отправляем их в стейт
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.isFetchingSwitch(false) // Данные УЖЕ пришли, а значит можно скрыть
                    this.props.setUsersCount(response.data.totalCount)
                    this.props.addUserToState(response.data)
                })
    }

    onPageChange = (pageNumber) => {
        this.props.isFetchingSwitch(true)
        // Вызывается при нажатии пользователя на кнопку смены страницы. Отправляет в стейт цифру на которую нажали,
        // а также запрашивает с сервера и отправляет в стейт информацию со страницы под номером, на который нажали.
        this.props.setCurrentPage(pageNumber)
        // внизу не {this.props.currentPage}, а {pageNumber}, потому что инструкции сначала отработают с имеющимися пропсами
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    console.log(response.data)
                    this.props.isFetchingSwitch(false)
                    this.props.addUserToState(response.data)
                })
    }

    render() {
        // Отрисовка функционального компонента.
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Contacts__contactList UsersArray={this.props.UsersArray}
                                   onPageChange={this.onPageChange}
                                   totalUsersCount={this.props.totalUsersCount}
                                   pageSize={this.props.pageSize}
                                   addContact={this.props.addContact}
                                   deleteContact={this.props.deleteContact}
                                   chatContact={this.props.chatContact}
                                   addUserToState={this.props.addUserToState}
                                   setCurrentPage={this.props.setCurrentPage}
                                   setUsersCount={this.props.setUsersCount}
                                   currentPage={this.props.currentPage}
            />
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
    isFetchingSwitch
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerContacts__contactList)
