import classes from './Profile.module.css'
import Profile__gallery from './Profile__gallery/Profile__gallery'
import Profile__menu_topInfo from "./Profile__menu_topInfo/Profile__menu_topInfo";
import Profile__postList from "./Profile__postList/Profile__postList"


const Profile = () => {
    return <div className={classes.general}>
        <Profile__menu_topInfo />
        <Profile__gallery />
        <Profile__postList />
    </div>
}


export default Profile;