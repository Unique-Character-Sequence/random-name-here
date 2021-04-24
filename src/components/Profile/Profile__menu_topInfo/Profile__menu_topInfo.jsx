import classes from './Profile__menu_topInfo.module.css'
import Profile__menu_topInfo_userpic from "./Profile__menu_topInfo_userpic/Profile__menu_topInfo_userpic"
import Profile__menu_topInfo_name from "./Profile__menu_topInfo_name/Profile__menu_topInfo_name"
import Profile__menu_topInfo_status from "./Profile__menu_topInfo_status/Profile__menu_topInfo_status";


const Profile__menu_topInfo = (props) => {
    return <div className={classes.item}>

        <Profile__menu_topInfo_name fullName={props.fullName}/>
        <Profile__menu_topInfo_userpic
            user_img={props.user_img}/>
        <Profile__menu_topInfo_status status={props.status}
                                      myId={props.id}
                                      userId={props.userId}
                                      updateProfileStatusThunk={props.updateProfileStatusThunk}/>
    </div>
}

export default Profile__menu_topInfo;