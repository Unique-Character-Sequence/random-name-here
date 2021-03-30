import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post"
import {Field, Form} from "react-final-form";

const Profile__postList = (props) => {
    let postsElements = props.PostsArray.map(p => <Profile__postList_post id={p.id}
                                                                          user_name={p.user_name}
                                                                          post_content={p.post_content}
                                                                          likesAmount={p.likesAmount}
    />)
    return <div className={classes.general}>
        My Posts
        <br/>
        <br/>
        <PostInputForm onSubmit={props.onSubmit}/>
        <br/>
        {postsElements}
    </div>
}

const PostInputForm = (props) => {
    return <Form
        onSubmit={props.onSubmit}
        initialValues={{post_content: null}}
        render={({handleSubmit, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="post_content"
                        component="textarea"
                        type="text"
                        placeholder="What's new?"
                    />
                </div>
                <div>
                    <button type="submit" disabled={submitting || pristine}>
                        Post
                    </button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>)
        }
    />
}

export default Profile__postList
