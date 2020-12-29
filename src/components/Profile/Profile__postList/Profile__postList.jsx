import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post";
import PostsMassive from "../../../index.js"


let postsElements = PostsMassive.map(p => <Profile__postList_post id={p.id}
                                                                  user_name={p.user_name}
                                                                  post_сontent={p.post_content}
                                                                  likesAmount={p.likesAmount}/>);


const Profile__postList = (props) => {
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
