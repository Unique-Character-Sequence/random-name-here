import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post";


let PostsMassive = [
    {id: 0, user_name: 'Georgo Biba', postContent: 'asd2133', likesAmount: 1023},
    {id: 1, user_name: 'Geo22rgo Biba', postContent: '2sad133', likesAmount: 3911},
    {id: 2, user_name: 'Geor11g333o Biba', postContent: '213asas3', likesAmount: 4911},
    {id: 3, user_name: 'Georg333o Biba', postContent: '2133ddsa', likesAmount: 5911},
    {id: 4, user_name: 'Georg1333o Biba', postContent: '22asdqqq133', likesAmount: 123911}
]

let postsElements = PostsMassive.map(p => <Profile__postList_post id={p.id}
                                                                  user_name={p.user_name}
                                                                  postContent={p.postContent}
                                                                  likesAmount={p.likesAmount}/>);


const Profile__postList = () => {
    return <div className={classes.posts}>
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