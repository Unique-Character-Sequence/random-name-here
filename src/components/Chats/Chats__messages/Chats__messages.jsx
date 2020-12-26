import classes from './Chats__messages.module.css'
import Chats__messages_message from "./Chats_messages_message/Chats__messages_message";


let MessagesMassive = [
    {id: 0, user_name: 'Georgo Biba', messageContent: 'asd2133'},
    {id: 1, user_name: 'Geo22rgo Biba', messageContent: '2sad133'},
    {id: 2, user_name: 'Geor11g333o Biba', messageContent: '213asas3'},
    {id: 3, user_name: 'Georg333o Biba', messageContent: '2133ddsa'},
    {id: 4, user_name: 'Georg1333o Biba', messageContent: '22asdqqq133'}
]

let messagesElements = MessagesMassive.map(m => <Chats__messages_message id={m.id}
                                                                         user_name={m.user_name}
                                                                         messageContent={m.messageContent}/>);

const Chats__messages = (props) => {
    return <div className={classes.items}>
        {messagesElements}
    </div>
}


export default Chats__messages;