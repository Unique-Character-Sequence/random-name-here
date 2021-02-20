import classes from './Contacts__contactList.module.css'
import Contacts__contactList_nameplate from "./Contacts__contactList_nameplate/Contacts__contactList_nameplate";


const Contacts__contactList = (props) => {
    let contactsElements = props.UsersArray.map(p => <Contacts__contactList_nameplate id={p.id}
                                                                                      deleteContact={props.deleteContact}
                                                                                      addContact={props.addContact}
                                                                                      chatContact={props.chatContact}
                                                                                      user_name={p.user_name}
                                                                                      added={p.added}
                                                                                      user_img={p.user_img}/>);
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