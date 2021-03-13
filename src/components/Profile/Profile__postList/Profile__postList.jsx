import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post"
import {createRef} from "react"
import Profile__menu_topInfo_name from "../Profile__menu_topInfo/Profile__menu_topInfo_name/Profile__menu_topInfo_name";
import Profile__menu_topInfo_userpic
    from "../Profile__menu_topInfo/Profile__menu_topInfo_userpic/Profile__menu_topInfo_userpic";
import Profile__menu_topInfo_status
    from "../Profile__menu_topInfo/Profile__menu_topInfo_status/Profile__menu_topInfo_status";


const Profile__postList = (props) => {
    let postsElements = props.PostsArray.map(p => <Profile__postList_post id={p.id}
                                                                          user_name={p.user_name}
                                                                          post_content={p.post_content}
                                                                          likesAmount={p.likesAmount}
    />)
    let newPostRef = createRef()
    return <div className={classes.general}>
        <div className={classes.item}>
            <Profile__menu_topInfo_name name={props.fullName}/>
            <Profile__menu_topInfo_userpic
                imgAddress={props.user_img}/>
            <Profile__menu_topInfo_status status_text={props.status}/>
        </div>
        My Posts
        <br/>
        <br/>
        <textarea
            onChange={() => props.updateAddPostArea(newPostRef.current.value)} // Если не прописать () => ..., то это не callback, а вызов сразу при отрисовке
            // (1) мы нажимаем что-то и вызывается метод контейнера ContainerProfile__postList updateAddPostArea
            // (2) в store.js уходит обновлённая информация о тексте внутри строки.
            // (3) вносится изменение в state затем перерисовывается страница
            value={props.PostAreaData}
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
