import classes from './Chats__chatList.module.css'
import Chats__chatList_nameplate from "./Chats__chatList_nameplate/Chats__chatList_nameplate";


let MsgMassive = [
    {id: 0, user_name: 'Georgo Biba', lastMessage: 'asd2133'},
    {id: 1, user_name: 'Geo22rgo Biba', lastMessage: '2sad133'},
    {id: 2, user_name: 'Geor11g333o Biba', lastMessage: '213asas3'},
    {id: 3, user_name: 'Georg333o Biba', lastMessage: '2133ddsa'},
    {id: 4, user_name: 'Georg1333o Biba', lastMessage: '22asdqqq133'}
]

let messagesElements = MsgMassive.map(p => <Chats__chatList_nameplate id={p.id}
                                                                      user_name={p.user_name}
                                                                      lastMessage={p.lastMessage}/>);

const Chats__chatList = (props) => {
    return <div className={classes.item}>
        {messagesElements}
    </div>
}


export default Chats__chatList;