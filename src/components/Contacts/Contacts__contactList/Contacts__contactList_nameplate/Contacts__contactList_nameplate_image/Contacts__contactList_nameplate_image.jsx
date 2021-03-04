import classes from './Contacts__contactList_nameplate_image.module.css'
import defaultUserImage from '../../../../../assets/img/defaultpic_user.png'


// Дефолтная пикча, если авы нет
const Contacts__contactList_nameplate_image = (props) => {
    return <div className={classes.item}>
        <img src={props.user_img != null ? props.user_img : defaultUserImage} alt=""/>
    </div>
}


export default Contacts__contactList_nameplate_image;