import classes from './Contacts__contactList_nameplate.module.css'
import {NavLink} from "react-router-dom";


const Contacts__contactList_nameplate = (props) => {
    return <div className={classes.item}>
        <img src={props.user_img} alt=""/>
        <NavLink to={'/contacts/' + props.id} activeClassName={classes.active}>{props.user_name}</NavLink>
        <br/>
        <button>Chat</button>
        <button>Delete</button>
    </div>
}


export default Contacts__contactList_nameplate;