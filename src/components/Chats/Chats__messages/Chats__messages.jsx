import classes from './Chats__messages.module.css'
import Chats__messages_message from "./Chats_messages_message/Chats__messages_message";
import {Field, Form} from "react-final-form";


const Chats__messages = (props) => {
    let messagesElements = props.User1_User2_Chat.map(m => <Chats__messages_message id={m.id}
                                                                                    user_name={m.user_name}
                                                                                    msg_content={m.msg_content}
    />);

    return <div className={classes.items}>
        {messagesElements}
        <br/>
        <MessageInputForm onSubmit={props.onSubmit}/>
    </div>
}

const MessageInputForm = (props) => {
    return <Form
        onSubmit={props.onSubmit}
        initialValues={{msg: null}}
        render={({handleSubmit, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="msg"
                        component="textarea"
                        type="text"
                        placeholder="Input message"
                    />
                </div>
                <div>
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>)
        }
    />
}


export default Chats__messages;