import classes from './Contacts__contactList.module.css'
import Contacts__contactList_nameplate from "./Contacts__contactList_nameplate/Contacts__contactList_nameplate";
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
                    this.props.addUserToState(response.data)
                })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) // Из контейнера получаем пропсы
        let pagesNumbersShown = [] // Список цифр, которые будут отображаться в баре переключения странице
        for (let i = 0; i <= pagesCount; i++) {
            pagesNumbersShown.push(i)
        }
        return <div className={classes.general}>
            {pagesNumbersShown.map(p=>)}
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
            {this.contactsElements}
        </div>
    }
}


export default Contacts__contactList;