import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post"
import {createRef} from "react"


const Profile__postList = (props) => {
    let postsElements = props.PostsArray.map(p => <Profile__postList_post id={p.id}
                                                                          user_name={p.user_name}
                                                                          post_content={p.post_content}
                                                                          likesAmount={p.likesAmount}/>)
    let newPostRef = createRef()
    let addPost = () => {
        let text = newPostRef.current.value
        props.addPost(text)
    }
    return <div className={classes.general}>
        My Posts
        <br/>
        <br/>
        <textarea rows="1" ref={newPostRef}></textarea>
        <br/>
        <button onClick={addPost}>Add post</button>
        <br/>
        <br/>
        {postsElements}
    </div>
}

export default Profile__postList
