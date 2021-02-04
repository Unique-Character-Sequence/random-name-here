const SEND_MSG = 'SEND_MSG'
const UPDATE_MSG_INPUT_AREA = 'UPDATE_MSG_INPUT_AREA'

const ChatsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MSG:
            let newMsg = {
                id: 999, // тут задуман счётчик
                user_name: 'User1', // тут отслеживание id юзера
                msg_content: action.msg_content
            }
            state.User1_User2_Chat.push(newMsg)
            state.MsgAreaData = ""
            return state
        case UPDATE_MSG_INPUT_AREA:
            state.MsgAreaData = action.msgInputUpdatedText
            return state
        default:
            return state
    }
}

export const sendMsg_actionCreator = (text) => {
    return {
        type: SEND_MSG,
        msg_content: text
    }
}

export const updateMsgInputArea_actionCreator = (text) => {
    return {
        type: UPDATE_MSG_INPUT_AREA,
        msgInputUpdatedText: text
    }
}

export default ChatsReducer