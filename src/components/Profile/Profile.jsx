import classes from './Profile.module.css'
import Profile__gallery from './Profile__gallery/Profile__gallery'
import Profile__menu_topInfo from "./Profile__menu_topInfo/Profile__menu_topInfo"
import Profile__postList from "./Profile__postList/Profile__postList";


const Profile = (props) => {
    return <div className={classes.general}>
        <Profile__menu_topInfo fullName={props.fullName}
                               id={props.id}
                               userId={props.userId}
                               user_img={props.user_img}
                               status={props.status}
                               updateProfileStatusThunk={props.updateProfileStatusThunk}/>
        {/*<Profile__gallery/>*/}
        <Profile__postList PostsArray={props.PostsArray}
                                    postAreaData={props.postAreaData}
                                    addPost={props.addPost}
                                    onSubmit={props.onSubmit}
                                    required={props.required}
                                    maxSymAmount={props.maxSymAmount}
        />
    </div>
}

export default Profile;