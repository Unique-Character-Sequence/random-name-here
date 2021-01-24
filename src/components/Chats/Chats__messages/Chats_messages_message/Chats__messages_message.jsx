import classes from './Chats__messages_message.module.css'


const Chats__messages_message = (props) => {
    return <div className={classes.item}>
        {props.name}
        {props.msg_content}
    </div>
}


export default Chats__messages_message;