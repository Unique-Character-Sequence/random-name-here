import classes from './Chats__messages.module.css'
import Chats__messages_message from "./Chats_messages_message/Chats__messages_message";
import {createRef} from "react";


const Chats__messages = (props) => {
    let messagesElements = props.MessagesArray.map(m => <Chats__messages_message id={m.id}
                                                                                 user_name={m.user_name}
                                                                                 messageContent={m.messageContent}/>);
    let newMessageRef = createRef();
    let addMessage = () => {
        let text = newMessageRef.current.value;
        alert(text)
    }
    return <div className={classes.items}>
        {messagesElements}
        <textarea rows="1" ref={newMessageRef}></textarea>
        <br/>
        <button onClick={addMessage}>Send</button>
    </div>
}


export default Chats__messages;