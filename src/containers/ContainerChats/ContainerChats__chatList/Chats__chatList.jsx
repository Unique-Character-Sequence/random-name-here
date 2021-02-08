import Chats__chatList from "../../../components/Chats/Chats__chatList/Chats__chatList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        MsgNameplatesArray: state.ChatComponentStates.MsgNameplatesArray
    }
}

const ContainerChats__chatList = connect(mapStateToProps)(Chats__chatList)

export default ContainerChats__chatList
