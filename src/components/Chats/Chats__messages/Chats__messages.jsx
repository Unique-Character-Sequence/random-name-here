import classes from './Chats__messages.module.css'
import Chats__messages_message from "./Chats_messages_message/Chats__messages_message";


const Chats__messages = (props) => {
    let messagesElements = props.MessagesArray.map(m => <Chats__messages_message id={m.id}
                                                                                   user_name={m.user_name}
                                                                                   messageContent={m.messageContent}/>);
    return <div className={classes.items}>
        {messagesElements}
    </div>
}


export default Chats__messages;