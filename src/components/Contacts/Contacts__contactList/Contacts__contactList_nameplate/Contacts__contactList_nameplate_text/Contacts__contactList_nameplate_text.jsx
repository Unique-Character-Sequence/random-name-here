import classes from './Contacts__contactList_nameplate_text.module.css'
import {NavLink} from "react-router-dom";


const Contacts__contactList_nameplate_text = (props) => {
    return <div className={classes.item}>
        <NavLink to={'/contacts/' + props.id} activeClassName={classes.active}>{props.user_name}</NavLink>
        <br/>
        <button onClick={props.chatContact}>Chat</button>
        {
            props.added ? <button onClick={() => props.deleteContact(props.id)}>У Вас в друзьях</button> :
                <button onClick={() => props.addContact(props.id)}>Добавить</button>
        }
        <br/>
        <br/>
    </div>
}


export default Contacts__contactList_nameplate_text;