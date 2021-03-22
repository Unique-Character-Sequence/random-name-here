import Chats__chatList from "../../../components/Chats/Chats__chatList/Chats__chatList";
import {connect} from "react-redux";
import {withSignInRedirect} from "../../../hocs/withSignInRedirect";

let mapStateToProps = (state) => {
    return {
        MsgNameplatesArray: state.ChatComponentStates.MsgNameplatesArray
    }
}

const ContainerChats__chatList = withSignInRedirect(connect(mapStateToProps)(Chats__chatList))

export default ContainerChats__chatList
