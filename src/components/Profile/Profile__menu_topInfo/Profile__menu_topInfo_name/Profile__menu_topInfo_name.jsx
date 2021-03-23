import classes from './Profile__menu_topInfo_name.module.css'

const Profile__menu_topInfo_name = (props) => {
    return <div className={classes.text}>
        {props.fullName}
      </div>
}

export default Profile__menu_topInfo_name;