import classes from './Contacts.module.css'
import ContainerContacts__contactList
    from "../../containers/ContainerContacts/ContainerContacts__contactList/ContainerContacts__contactList";


const Contacts = () => {
    return <div className={classes.general}>
        <ContainerContacts__contactList/>
    </div>
}

export default Contacts;