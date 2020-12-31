import classes from './Profile__postList_post.module.css'
import Profile__postList_post_likeCounter
    from "./Profile__postList_post_likeCounter/Profile__postList_post_likeCounter";


const Profile__postList_post = (props) => {
    return <div className={classes.general}>
        <div className={classes.item}>
            {props.id + ": "}
            {props.user_name}:
        </div>
        <br/>
        <div className={classes.item}>
            {props.post_content}
        </div>
        <Profile__postList_post_likeCounter likesAmount={props.likesAmount}/>
    </div>
}

export default Profile__postList_post;