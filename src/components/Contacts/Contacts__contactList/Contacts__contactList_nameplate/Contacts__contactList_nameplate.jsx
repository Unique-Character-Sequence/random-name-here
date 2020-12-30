import classes from './Contacts__contactList_nameplate.module.css'
import Contacts__contactList_nameplate_image
    from "./Contacts__contactList_nameplate_image/Contacts__contactList_nameplate_image";
import Contacts__contactList_nameplate_text
    from "./Contacts__contactList_nameplate_text/Contacts__contactList_nameplate_text";


const Contacts__contactList_nameplate = (props) => {
    return <div className={classes.general}>
        <Contacts__contactList_nameplate_image user_img={props.user_img}/>
        <Contacts__contactList_nameplate_text user_name={props.user_name} id={props.id}/>
    </div>
}


export default Contacts__contactList_nameplate;