import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post"
import {createRef} from "react"
import {addPost_actionCreator, updateAddPostArea_actionCreator} from "../../../redux/ProfileReducer"


const Profile__postList = (props) => {
    let postsElements = props.PostsArray.map(p => <Profile__postList_post id={p.id}
                                                                          user_name={p.user_name}
                                                                          post_content={p.post_content}
                                                                          likesAmount={p.likesAmount}
    />)

    let newPostRef = createRef()

    let addPost = () => {
        let text = props.PostAreaData
        let action = addPost_actionCreator(text)
        props.dispatch(action)
    }

    //(2) в state.js уходит обновлённая информация о тексте внутри строки. (3) вносится изменение в БД затем перерисовывается страница
    let updateAddPostArea = () => {
        let action = updateAddPostArea_actionCreator(newPostRef.current.value)
        props.dispatch(action)
    }

    return <div className={classes.general}>
        My Posts
        <br/>
        <br/>
        <textarea onChange={updateAddPostArea}// (1) мы нажимаем что-то и вызывается updateTextAreaData
                  value={props.PostAreaData} // (0) и (4) отрисовывается страница с нынешними данными в textarea
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
