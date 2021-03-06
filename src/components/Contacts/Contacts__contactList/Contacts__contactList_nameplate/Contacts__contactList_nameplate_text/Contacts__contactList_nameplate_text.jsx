import classes from './Contacts__contactList_nameplate_text.module.css'
import {NavLink} from "react-router-dom";
import * as react from "react";

class Contacts__contactList_nameplate_text extends react.Component {
    render() {
        return <div className={classes.item}>
            <NavLink to={'/contacts/' + this.props.id} activeClassName={classes.active}>{this.props.user_name}</NavLink>
            <br/>
            <button onClick={this.props.chatContact}>Chat</button>
            {
                this.props.added ? <button onClick={() => this.props.deleteContact(this.props.id)}>У Вас в друзьях</button> :
                    <button onClick={() => this.props.addContact(this.props.id)}>Добавить</button>
            }
            <br/>
            <br/>
        </div>
    }
}


export default Contacts__contactList_nameplate_text;