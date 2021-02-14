import Chats__messages from "../../../components/Chats/Chats__messages/Chats__messages";
import {sendMsg_actionCreator, updateMsgInputArea_actionCreator} from "../../../.store/reducers/ChatsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        MessagesArray: state.ChatComponentStates.MessagesArray,
        MsgAreaData: state.ChatComponentStates.MsgAreaData,
        User1_User2_Chat: state.ChatComponentStates.User1_User2_Chat
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: () => {
            let action = sendMsg_actionCreator()
            dispatch(action)
        },
        updateTextAreaData: (text) => {
            let action = updateMsgInputArea_actionCreator(text)
            dispatch(action)
        }
    }
}

const ContainerChats__messages = connect(mapStateToProps, mapDispatchToProps)(Chats__messages)

export default ContainerChats__messages