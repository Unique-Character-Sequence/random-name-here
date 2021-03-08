import classes from './Contacts__contactList.module.css'
import * as axios from "axios"
import * as react from "react";
import defaultUserImage from "../../../assets/img/defaultpic_user.png";
import {NavLink} from "react-router-dom";

class Contacts__contactList extends react.Component {
    componentDidMount() {
        // Запрашиваем определенное количество элементов
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsersCount(response.data.totalCount)
                    console.log(response.data)
                    this.props.addUserToState(response.data)
                })
    }

    onPageChange(pageNumber) {
        // данные уходят в стейт, но функция свой цикл продолжает работать с теми пропасами что уже в ней есть
        this.props.setCurrentPage(pageNumber)
        // не {this.props.currentPage}, а {pageNumber}, потому что инструкции сначала отработают с имеющимися пропсами
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.addUserToState(response.data)
                })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) // Из контейнера получаем пропсы
        let pagesNumbersShown = [] // Список цифр, которые будут отображаться в баре переключения странице
        for (let i = 1; i <= pagesCount; i++) {
            pagesNumbersShown.push(i)
        }

        return <div className={classes.general}>
            {pagesNumbersShown.map(p => {
                // 1. map проходит по списку элементов и сравнивает каждый элементы списка (где элемент p, а список pagesNumbersShown) с this.props.currentPage
                return <span
                    className={this.props.currentPage === p && classes.selectedPage} // см. 1
                    onClick={() => this.onPageChange(p)} // При нажатии на размапленный элемент (p) диспатчим экшн с аргументом p
                >{p+'\n'}
                </span>
            })}
            <br/>
            Search_form:
            <br/>
            Contacts:
            <br/>
            <br/>
            <button onClick={this.getUsers}>Get Users</button>
            <br/>
            <br/>

            {this.props.UsersArray.map(p => <div>
                <div className={classes.item}>
                    <NavLink to={'/contacts/' + p.id}
                             activeClassName={classes.active}>{p.name}</NavLink>
                    <br/>
                    <button onClick={p.chatContact}>Chat</button>
                    {
                        p.followed ?
                            <button onClick={() => this.props.deleteContact(p.id)}>У Вас в друзьях</button> :
                            <button onClick={() => this.props.addContact(p.id)}>Добавить</button>
                    }
                    <br/>
                    <br/>
                </div>
                <div className={classes.item}>
                    <img src={p.photos.small != null ? p.user_img : defaultUserImage} alt=""/>
                </div>
            </div>)}
        </div>
    }
}


export default Contacts__contactList;