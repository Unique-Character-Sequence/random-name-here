import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.Header}>
        <img src="https://www.onlinelogomaker.com/logomaker/img/cloud2.png" alt=""/>
        <div className={classes.item}>
            <NavLink to={'/login'}>{props.login ? props.login : 'Sign In'}</NavLink>
            {
                props.login && <div>
                    <button onClick={props.setDeauthorizedThunk}>Logout</button>
                </div>
            }
        </div>

    </header>
}

export default Header;