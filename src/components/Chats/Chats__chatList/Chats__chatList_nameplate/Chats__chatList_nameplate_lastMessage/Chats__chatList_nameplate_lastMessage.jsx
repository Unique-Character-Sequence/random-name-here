import classes from './Chats__chatList_nameplate_lastMessage.module.css'


const Chats__chatList_nameplate_lastMessage = (props) => {
    return <div className={classes.item}>
        {props.lastMessage}
    </div>
}


export default Chats__chatList_nameplate_lastMessage;