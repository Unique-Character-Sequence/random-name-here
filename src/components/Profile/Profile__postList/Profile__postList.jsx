import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post";


const Profile__postList = (props) => {
    let postsElements = props.PostsArray.map(p => <Profile__postList_post id={p.id}
                                                                            user_name={p.user_name}
                                                                            post_сontent={p.post_content}
                                                                            likesAmount={p.likesAmount}/>);
    return <div className={classes.general}>
        My Posts
        <br/>
        <br/>
        <textarea rows="1"></textarea>
        <br/>
        <button>Add post</button>
        {postsElements}
    </div>
}

export default Profile__postList;
