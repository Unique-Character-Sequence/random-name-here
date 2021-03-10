import classes from './Contacts__contactList.module.css'
import defaultUserImage from "../../../assets/img/defaultpic_user.png";
import {NavLink} from "react-router-dom";

// Should i write a note here
let Contacts__contactList = (props) => {
    // Количество необходимых для отображения цифр
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // Список цифр, которые будут отображаться в баре переключения странице
    let pagesNumbersShown = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesNumbersShown.push(i)
    }

    return <div className={classes.general}>
        {pagesNumbersShown.map(p => {
            // 1. map проходит по списку элементов и сравнивает каждый элементы списка (где элемент p, а список pagesNumbersShown) с props.currentPage
            return <span
                // см. 1
                className={props.currentPage === p && classes.selectedPage}
                // При нажатии на размапленный элемент (p) диспатчим экшн с аргументом p
                onClick={() => props.onPageChange(p)}
            >{p + '\n'}
                </span>
        })}
        <br/>
        Search_form:
        <br/>
        Contacts:
        <br/>
        <br/>
        <button onClick={props.getUsers}>Get Users</button>
        <br/>
        <br/>

        {props.UsersArray.map(p => <div>
            <div className={classes.item}>
                <NavLink to={'/contacts/' + p.id}
                         activeClassName={classes.active}>{p.name}</NavLink>
                <br/>
                <button onClick={p.chatContact}>Chat</button>
                {
                    p.followed ?
                        <button onClick={() => props.deleteContact(p.id)}>У Вас в друзьях</button> :
                        <button onClick={() => props.addContact(p.id)}>Добавить</button>
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


export default Contacts__contactList;