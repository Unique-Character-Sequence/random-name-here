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
        let text = props.TextAreaData
        props.dispatch({type: 'ADD-POST', post_content: text})
    }
    //(2) в state.js уходит обновлённая информация о тексте внутри строки. (3) вносится изменение в БД затем перерисовывается страница
    let updateTextAreaData = () => props.dispatch({type: 'AREA-UPDATE', updatedText: newPostRef.current.value})

    return <div className={classes.general}>
        My Posts
        <br/>
        <br/>
        <textarea onChange={updateTextAreaData}// (1) мы нажимаем что-то и вызывается updateTextAreaData
                  value={props.TextAreaData} // (0) и (4) отрисовывается страница с нынешними данными в textarea
                  rows="1"
                  ref={newPostRef}/>
        <br/>
        <button onClick={addPost}>Add post</button>
        <br/>
        <br/>
        {postsElements}
    </div>
}

export default Profile__postList
