import classes from './Profile__menu_topInfo.module.css'
import Profile__menu_topInfo_userpic from "./Profile__menu_topInfo_userpic/Profile__menu_topInfo_userpic"
import Profile__menu_topInfo_name from "./Profile__menu_topInfo_name/Profile__menu_topInfo_name"
import Profile__menu_topInfo_status from "./Profile__menu_topInfo_status/Profile__menu_topInfo_status";


const Profile__menu_topInfo = () => {
    return <div className={classes.item}>
        <Profile__menu_topInfo_name name='Name_here Surname_here'/>
        <Profile__menu_topInfo_userpic
            imgAddress='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>
        <Profile__menu_topInfo_status status_text='Here is the status'/>
    </div>
}

export default Profile__menu_topInfo;