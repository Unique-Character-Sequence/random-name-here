import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post"
import {createRef} from "react"


const Profile__postList = (props) => {
    let postsElements = props.PostsArray.map(p => <Profile__postList_post id={p.id}
                                                                          user_name={p.user_name}
                                                                          post_content={p.post_content}
                                                                          likesAmount={p.likesAmount}
    />)

    let newPostRef = createRef()

    return <div className={classes.general}>
        My Posts
        <br/>
        <br/>
        <textarea
            onChange={() => props.updateAddPostArea(newPostRef.current.value)} // Если не прописать () => ..., то это не callback, а вызов сразу при отрисовке
            // (1) мы нажимаем что-то и вызывается метод контейнера ContainerProfile__postList updateAddPostArea
            // (2) в store.js уходит обновлённая информация о тексте внутри строки.
            // (3) вносится изменение в БД затем перерисовывается страница
            value={props.PostAreaData} // (0) и (4) отрисовывается страница с нынешними данными в textarea
            rows="1"
            ref={newPostRef}/>
        <br/>
        <button onClick={() => props.addPost()}>Add post</button>
        {/*addPost импортируем из контейнера. Там же и делаем addPost(props.PostAreaData)*/}
        <br/>
        <br/>
        {postsElements}
    </div>
}

export default Profile__postList
