import Chats__messages from "../../../components/Chats/Chats__messages/Chats__messages";
import {connect} from "react-redux";
import * as react from "react";
import {sendMsg} from "../../../.store/reducers/ChatsReducer";


class ContainerChats__messages extends react.Component {
    onSubmit = (values) => {
        this.props.sendMsg(values.msg)
    }

    render() {
        return <Chats__messages {...this.props} onSubmit={this.onSubmit}/>
    }
}

let mapStateToProps = (state) => ({
    ...state.ChatComponentStates
})

let mapDispatchToProps = {
    sendMsg
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerChats__messages)