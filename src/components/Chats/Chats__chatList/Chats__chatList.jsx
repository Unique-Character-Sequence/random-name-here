import classes from './Chats__chatList.module.css'
import Chats__chatList_nameplate from "./Chats__chatList_nameplate/Chats__chatList_nameplate";


const Chats__chatList = (props) => {
    let messagesElements = props.MsgNameplatesMassive.map(p => <Chats__chatList_nameplate id={p.id}
                                                                                          user_name={p.user_name}
                                                                                          lastMessage={p.lastMessage}/>);
    return <div className={classes.item}>
        {messagesElements}
    </div>
}


export default Chats__chatList;