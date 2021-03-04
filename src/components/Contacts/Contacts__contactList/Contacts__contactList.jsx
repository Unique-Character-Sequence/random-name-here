import classes from './Contacts__contactList.module.css'
import Contacts__contactList_nameplate from "./Contacts__contactList_nameplate/Contacts__contactList_nameplate";
import * as axios from "axios"


const Contacts__contactList = (props) => {
    if (props.UsersArray.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(
                response => {
                    props.addUserToState(response.data)
                    })
                }
// Здесь мы передаём в компонент данные из пропсов
    let contactsElements = props.UsersArray.map(p => <Contacts__contactList_nameplate id={p.id}
                                                                                      deleteContact={props.deleteContact}
                                                                                      addContact={props.addContact}
                                                                                      chatContact={props.chatContact}
                                                                                      user_name={p.name}
                                                                                      added={p.followed}
                                                                                      user_img={p.photos.small}/>);

    return <div className={classes.general}>
        Search_form:
        <br/>
        Contacts:
        <br/>
        <br/>
        {contactsElements}
    </div>
}


export default Contacts__contactList;