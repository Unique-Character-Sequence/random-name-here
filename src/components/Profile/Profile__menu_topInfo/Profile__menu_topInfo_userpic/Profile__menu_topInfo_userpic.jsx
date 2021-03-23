import classes from './Profile__menu_topInfo_userpic.module.css'

const Profile__menu_topInfo_userpic = (props) => {
    return <div className={classes.menu}>
        user_pic:
        <img src={props.user_img} alt=""/>
        +description
      </div>
}

export default Profile__menu_topInfo_userpic;