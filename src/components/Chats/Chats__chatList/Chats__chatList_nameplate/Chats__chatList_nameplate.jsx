import classes from './Chats__chatList_nameplate.module.css'
import {NavLink} from "react-router-dom";
import Chats__chatList_nameplate_lastMessage
    from "./Chats__chatList_nameplate_lastMessage/Chats__chatList_nameplate_lastMessage";


const Chats__chatList_nameplate = (props) => {
    return <div className={classes.item}>
        <NavLink to={'/chats/' + props.id} activeClassName={classes.active}>{props.user_name}</NavLink>
        <Chats__chatList_nameplate_lastMessage lastMessage={props.lastMessage}/>
    </div>
}


export default Chats__chatList_nameplate;