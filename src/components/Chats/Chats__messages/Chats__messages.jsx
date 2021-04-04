import classes from './Chats__messages.module.css'
import Chats__messages_message from "./Chats_messages_message/Chats__messages_message";
import {Field, Form} from "react-final-form";
import {required} from "../../../utils/validators/validators";


const Chats__messages = (props) => {
    let messagesElements = props.User1_User2_Chat.map(m => <Chats__messages_message id={m.id}
                                                                                    user_name={m.user_name}
                                                                                    msg_content={m.msg_content}
    />);

    return <div className={classes.items}>
        {messagesElements}
        <br/>
        <MessageInputForm required={props.required} onSubmit={props.onSubmit}/>
    </div>
}

const MessageInputForm = (props) => {
    return <Form
        onSubmit={props.onSubmit}
        initialValues={{msg: null}}
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={event => {
                handleSubmit(event).then(form.reset)
            }}>
                <div>
                    <Field name="msg" type="text" validate={required}>
                        {({input, meta}) => (
                            <div className={classes.error}>
                                <input {...input} type="text" placeholder="Input message"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                </div>
                <div>
                    <button type="submit" disabled={submitting || pristine}>
                        Send
                    </button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>)
        }
    />
}


export default Chats__messages;