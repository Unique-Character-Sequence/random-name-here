import classes from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return <nav className={classes.Sidebar}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/feed" activeClassName={classes.active}>Feed</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/chats" activeClassName={classes.active}>Chats</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Sidebar;