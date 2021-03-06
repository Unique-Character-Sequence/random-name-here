import classes from './Contacts__contactList_nameplate.module.css'
import Contacts__contactList_nameplate_image
    from "./Contacts__contactList_nameplate_image/Contacts__contactList_nameplate_image";
import Contacts__contactList_nameplate_text
    from "./Contacts__contactList_nameplate_text/Contacts__contactList_nameplate_text";
import * as react from "react";


class Contacts__contactList_nameplate extends react.Component {
    render() {
        return <div className={classes.general}>
            <Contacts__contactList_nameplate_image user_img={this.props.user_img}/>
            <Contacts__contactList_nameplate_text chatContact={this.props.chatContact}
                                                  deleteContact={this.props.deleteContact}
                                                  addContact={this.props.addContact}
                                                  user_name={this.props.user_name}
                                                  added={this.props.added}
                                                  id={this.props.id}/>
        </div>
    }
}


export default Contacts__contactList_nameplate;