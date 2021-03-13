import classes from './Profile.module.css'
import Profile__gallery from './Profile__gallery/Profile__gallery'
import Profile__menu_topInfo from "./Profile__menu_topInfo/Profile__menu_topInfo"
import ContainerProfile__postList
    from "../../containers/ContainerProfile/ContainerProfile__postList/ContainerProfile__postList";


const Profile = () => {
    return <div className={classes.general}>
        {/*<Profile__menu_topInfo/>*/}
        {/*<Profile__gallery/>*/}
        <ContainerProfile__postList/>
    </div>
}

export default Profile;