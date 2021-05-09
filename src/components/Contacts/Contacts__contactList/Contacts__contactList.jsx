import classes from './Contacts__contactList.module.css'
import defaultUserImage from "../../../assets/img/defaultpic_user.png";
import {NavLink} from "react-router-dom";
import {paginator} from "../../../utils/paginator";

let Contacts__contactList = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    console.log('pagination works weird.')
    return <div className={classes.general}>
        {paginator(props.pageSize, props.currentPage, pagesCount).map(p => {
            // 1. map проходит по списку элементов и сравнивает каждый элементы списка (где элемент p, а список pagesNumbersShown) с props.currentPage
            return <span
                // см. 1
                className={props.currentPage === p && classes.selectedPage}
                // При нажатии на размапленный элемент (p) диспатчим экшн с аргументом p
                onClick={() => props.onPageChange(p)}
            >{p + '\n'}
                </span>
        })}
        <div>Search_form:</div>
        <div>Contacts:</div>
        <div>
            <button onClick={props.getUsers}>Get Users</button>
        </div>

        {props.UsersArray.map(p => <div>
            <div className={classes.item}>
                <NavLink to={'/profile/' + p.id}>
                    <img src={p.photos.small ? p.photos.small : defaultUserImage} alt=""/>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/profile/' + p.id}
                         activeClassName={classes.active}>{p.name}</NavLink>
                <br/>
                {p.status ? <div> Status: {p.status}</div> : null}
                <br/>
                <button onClick={p.chatContact}>Chat</button>
                {
                    p.followed
                        ? <button
                            disabled={props.requestsInProgress.some(element => element === p.id)} // Если в массиве есть хотя бы 1 элемент равный p.id
                            onClick={() => {
                                props.deleteContactThunk(p.id)
                            }}>У Вас в друзьях</button>

                        : <button
                            disabled={props.requestsInProgress.some(element => element === p.id)} // Если в массиве есть хотя бы 1 элемент равный p.id
                            onClick={() => {
                                props.addContactThunk(p.id)
                            }}>Добавить</button>
                }
                <br/>
                <br/>
            </div>
        </div>)}
    </div>
}


export default Contacts__contactList;