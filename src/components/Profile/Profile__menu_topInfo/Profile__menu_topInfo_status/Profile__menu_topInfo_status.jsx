import classes from './Profile__menu_topInfo_status.module.css'

const Profile__menu_topInfo_status = (props) => {
    return <div className={classes.text}>
        {props.status_text}
      </div>
}

export default Profile__menu_topInfo_status;