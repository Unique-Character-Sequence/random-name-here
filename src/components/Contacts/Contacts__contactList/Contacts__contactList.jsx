import classes from './Contacts__contactList.module.css'
import Contacts__contactList_nameplate from "./Contacts__contactList_nameplate/Contacts__contactList_nameplate";
import * as axios from "axios"
import * as react from "react";


class Contacts__contactList extends react.Component {
    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(
                response => {
                    this.props.addUserToState(response.data)
                })
    }

// Здесь мы передаём в компонент данные из пропсов
    contactsElements = this.props.UsersArray.map(p => <Contacts__contactList_nameplate id={p.id}
                                                                                       deleteContact={this.props.deleteContact}
                                                                                       addContact={this.props.addContact}
                                                                                       chatContact={this.props.chatContact}
                                                                                       user_name={p.name}
                                                                                       added={p.followed}
                                                                                       user_img={p.photos.small}/>);

    constructor(props) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(
                response => {
                    this.props.addUserToState(response.data)
                })
    }

    render() {
        return <div className={classes.general}>
            Search_form:
            <br/>
            Contacts:
            <br/>
            <br/>
            <button onClick={this.getUsers}>Get Users</button>
            <br/>
            <br/>
            {this.contactsElements}
        </div>
    }
}


export default Contacts__contactList;