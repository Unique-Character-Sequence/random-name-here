import classes from './Chats.module.css'
import Chats__searchForm from "./Chats__searchForm/Chats__searchForm";
import ContainerChats__messages
    from "../../containers/ContainerChats/ContainerChats__messages/ContainerChats__messages";
import ContainerChats__chatList from "../../containers/ContainerChats/ContainerChats__chatList/Chats__chatList";


const Chats = () => {
    return <div className={classes.general}>
        <Chats__searchForm/>
        <ContainerChats__chatList/>
        <ContainerChats__messages/>
    </div>

}


export default Chats;