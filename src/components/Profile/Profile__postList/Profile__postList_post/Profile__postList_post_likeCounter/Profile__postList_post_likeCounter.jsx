import classes from './Profile__postList_post_likeCounter.module.css'

const Profile__postList_post_likeCounter = (props) => {
    return <div className={classes.item}>
        Like: {props.likesAmount}
    </div>
}

export default Profile__postList_post_likeCounter;