import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post";


let PostsMassive = [
    {id: 0, user_name: 'Georgo Biba', post_content: 'asd2133', likesAmount: 1023},
    {id: 1, user_name: 'Geo22rgo Biba', post_content: '2sad133', likesAmount: 3911},
    {id: 2, user_name: 'Geor11g333o Biba', post_content: '213asas3', likesAmount: 4911},
    {id: 3, user_name: 'Georg333o Biba', post_content: '2133ddsa', likesAmount: 5911},
    {id: 4, user_name: 'Georg1333o Biba', post_content: '22asdqqq133', likesAmount: 123911}
]

let postsElements = PostsMassive.map(p => <Profile__postList_post id={p.id}
                                                                  user_name={p.user_name}
                                                                  post_сontent={p.post_content}
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