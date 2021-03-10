import Contacts__contactList from "../../../components/Contacts/Contacts__contactList/Contacts__contactList";
import {connect} from "react-redux";
import {
    addContact_actionCreator,
    addUserToState_actionCreator,
    chatContact_actionCreator,
    deleteContact_actionCreator,
    isFetchingSwitch_actionCreator,
    setCurrentPage_actionCreator,
    setUsersCount_actionCreator
} from "../../../.store/reducers/ContactsReducer";
import * as axios from "axios";
import * as react from "react";
import preloader from "../../../assets/svg/preloader_200px.svg"


class ContainerContacts__contactList extends react.Component {
    componentDidMount() {
        this.props.isFetchingSwitch(true)
        // (Делает определенные действия сразу после монтирования)
        // Запрашиваем с сервера определенное количество элементов, а затем отправляем их в стейт
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsersCount(response.data.totalCount)
                    this.props.addUserToState(response.data)
                })
        this.props.isFetchingSwitch(false)
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
                    this.props.addUserToState(response.data)
                })
        this.props.isFetchingSwitch(false)
    }

    render() {
        // Отрисовка функционального компонента.
        return <>
            {this.props.isFetching ? <img src={preloader} alt=""/> : null}
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

let mapStateToProps = (state) => {
    //console.log('state:::',state) // отслеживаем state
    return {
        // Свойство state. Массив отображаемых пользователей
        UsersArray: state.ContactsComponentStates.UsersArray,
        // Свойство state. Количество элементов на странице
        pageSize: state.ContactsComponentStates.pageSize,
        // Свойство state. Общее количество юзеров в UsersArray
        totalUsersCount: state.ContactsComponentStates.totalUsersCount,
        currentPage: state.ContactsComponentStates.currentPage,
        isFetching: state.ContactsComponentStates.isFetching,
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
        },
        setCurrentPage: (id) => {
            let action = setCurrentPage_actionCreator(id)
            dispatch(action)
        },
        setUsersCount: (id) => {
            let action = setUsersCount_actionCreator(id)
            dispatch(action)
        },
        isFetchingSwitch: (id) => {
            let action = isFetchingSwitch_actionCreator(id)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerContacts__contactList)
