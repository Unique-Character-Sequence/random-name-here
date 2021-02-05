import classes from './Contacts__contactList_nameplate_text.module.css'
import {NavLink} from "react-router-dom";


const Contacts__contactList_nameplate_text = (props) => {
    return <div className={classes.item}>
        <NavLink to={'/contacts/' + props.id} activeClassName={classes.active}>{props.user_name}</NavLink>
        <br/>
        <button>Chat</button> {/*Переход по ссылке*/}
        <button>Delete</button> {/*Обращение к id*/}
        <br/>
        <br/>
    </div>
}


export default Contacts__contactList_nameplate_text;