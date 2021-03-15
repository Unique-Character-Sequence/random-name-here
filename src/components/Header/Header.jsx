import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.Header}>
        <img src="https://www.onlinelogomaker.com/logomaker/img/cloud2.png" alt=""/>
        <div className={classes.item}>
            {/*Форма логина по адресу /login в разработке
            Отрисовывается хэдер, при этом делается запрос на сервер, из полученных данных достаём какой ник
            показать.
            */}

            <NavLink to={'/login'}>{props.login? props.login : 'Sign In'}</NavLink>
        </div>

    </header>
}

export default Header;