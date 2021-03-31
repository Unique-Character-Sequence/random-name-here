import classes from './Profile__postList.module.css'
import Profile__postList_post from "./Profile__postList_post/Profile__postList_post"
import {Field, Form} from "react-final-form";

const required = value => (value ? undefined : 'Required')
const maxSymAmount = max => value =>
    value.length <= max ? undefined : `Should be less than ${max} symbols`

const Reminder = () => {
    return <h2>[error] input many characters in form below and post</h2>
}

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const Profile__postList = (props) => {
    let postsElements = props.PostsArray.map(p => <Profile__postList_post id={p.id}
                                                                          user_name={p.user_name}
                                                                          post_content={p.post_content}
                                                                          likesAmount={p.likesAmount}
    />)
    return <div className={classes.general}>
        <Reminder/>
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
        render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={event => {
                handleSubmit(event).then(form.reset)
            }}>
                <div>
                    <Field name="post_content" type="text" validate={composeValidators(required, maxSymAmount(12))}>
                        {({input, meta}) => (
                            <div className={classes.error}>
                                <textarea {...input} placeholder="What's new?"/>
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
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
