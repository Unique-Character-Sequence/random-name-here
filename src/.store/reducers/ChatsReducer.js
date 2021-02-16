const SEND_MSG = 'SEND_MSG'
const UPDATE_MSG_INPUT_AREA = 'UPDATE_MSG_INPUT_AREA'

let InitialState = {
    MessagesArray: [
        {id: 0, user_name: 'Georgo Biba', messageContent: 'asd2133'},
        {id: 1, user_name: 'Geo22rgo Biba', messageContent: '2sad133'},
        {id: 2, user_name: 'Geor11g333o Biba', messageContent: '213asas3'},
        {id: 3, user_name: 'Georg333o Biba', messageContent: '2133ddsa'},
        {id: 4, user_name: 'Georg1333o Biba', messageContent: '22asdqqq133'}
    ],
    User1_User2_Chat: [
        {id: 0, user_name: 'User1', msg_content: 'Hello'},
        {id: 1, user_name: 'User1', msg_content: 'Hello?'},
        {id: 2, user_name: 'User2', msg_content: 'Hello'},
        {id: 3, user_name: 'User1', msg_content: 'Im gonna watch a movie. Wanna join?'},
        {id: 4, user_name: 'User1', msg_content: 'Yep, ill come asap'}
    ],
    MsgNameplatesArray: [
        {id: 0, user_name: 'Georgo Biba', lastMessage: 'asd2133'},
        {id: 1, user_name: 'Geo22rgo Biba', lastMessage: '2sad133'},
        {id: 2, user_name: 'Geor11g333o Biba', lastMessage: '213asas3'},
        {id: 3, user_name: 'Georg333o Biba', lastMessage: '2133ddsa'},
        {id: 4, user_name: 'Georg1333o Biba', lastMessage: '22asdqqq133'}
    ],
    MsgAreaData: ''
}

const ChatsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SEND_MSG:
            return {
                ...state,
                User1_User2_Chat: [...state.User1_User2_Chat, { // Создаём копию пред. диалога + новое сообщение
                    id: 999,
                    user_name: 'User1',
                    msg_content: state.MsgAreaData
                }],
                MsgAreaData: "" // Создаём MsgAreaData со значением из action
            }
        case UPDATE_MSG_INPUT_AREA:
            return {
                ...state,
                MsgAreaData: action.msgInputUpdatedText // Создаём MsgAreaData со значением из action
            }
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
    debugger
    return {
        type: UPDATE_MSG_INPUT_AREA,
        msgInputUpdatedText: text
    }
}

export default ChatsReducer