import classes from './Chats__messages.module.css'
import Chats__messages_message from "./Chats_messages_message/Chats__messages_message";
import {createRef} from "react";


const Chats__messages = (props) => {
    let messagesElements = props.User1_User2_Chat.map(m => <Chats__messages_message id={m.id}
                                                                                 user_name={m.user_name}
                                                                                 msg_content={m.msg_content}
    />);

    let newMsgRef = createRef();

    return <div className={classes.items}>
        {messagesElements}
        <textarea onChange={props.updateTextAreaData}
                  placeholder={'Enter message'}
                  rows="1"
                  ref={newMsgRef}
                  value={props.MsgAreaData}/>
        <br/>
        <button onClick={props.sendMsg}>Send</button>
    </div>
}


export default Chats__messages;