import classes from './Contacts.module.css'
import Contacts__contactList from "./Contacts__contactList/Contacts__contactList";


const Contacts = (props) => {
    return <div className={classes.general}>
        <Contacts__contactList AddedUsersArray={props.ContactsComponentStates.AddedUsersArray}/>
    </div>
}


export default Contacts;