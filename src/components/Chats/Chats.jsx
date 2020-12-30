import classes from './Chats.module.css'
import Chats__chatList from "./Chats__chatList/Chats__chatList";
import Chats__searchForm from "./Chats__searchForm/Chats__searchForm";
import Chats__messages from "./Chats__messages/Chats__messages";


const Chats = (props) => {
    return <div className={classes.general}>
        <Chats__searchForm/>
        <Chats__chatList MsgNameplatesMassive={props.ChatComponentStates.MsgNameplatesMassive}/>
        <Chats__messages MessagesMassive={props.ChatComponentStates.MessagesMassive}/>
    </div>
}


export default Chats;