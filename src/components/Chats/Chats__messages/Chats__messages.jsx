import classes from './Chats__messages.module.css'
import Chats__messages_message from "./Chats_messages_message/Chats__messages_message";
import {createRef} from "react";
import {sendMsg_actionCreator, updateMsgInputArea_actionCreator} from "../../../.store/reducers/ChatsReducer";


const Chats__messages = (props) => {
    let messagesElements = props.MessagesArray.map(m => <Chats__messages_message id={m.id}
                                                                                 user_name={m.user_name}
                                                                                 msg_content={m.msg_content}
    />);

    let newMsgRef = createRef();

    let sendMsg = () => {
        let text = props.MsgAreaData
        let action = sendMsg_actionCreator(text)
        props.dispatch(action)
    }

    let updateTextAreaData = () => {
        let action = updateMsgInputArea_actionCreator(newMsgRef.current.value)
        props.dispatch(action)
    }

    return <div className={classes.items}>
        {messagesElements}
        <textarea onChange={updateTextAreaData}
                  placeholder={'Enter message'}
                  rows="1"
                  ref={newMsgRef}
                  value={props.MsgAreaData}/>
        <br/>
        <button onClick={sendMsg}>Send</button>
    </div>
}


export default Chats__messages;