import Profile__postList from "../../../components/Profile/Profile__postList/Profile__postList";
import {addPost_actionCreator, updateAddPostArea_actionCreator} from "../../../redux/ProfileReducer";


const ContainerProfile__postList = (props) => {
    let addPost = () => {
        let text = props.PostAreaData
        let action = addPost_actionCreator(text)
        props.dispatch(action)
    }

    let updateAddPostArea = (text) => {
        let action = updateAddPostArea_actionCreator(text)
        props.dispatch(action)
    }

    return <Profile__postList updateAddPostArea={updateAddPostArea} addPost={addPost} posts = {props.posts}/>
}

export default ContainerProfile__postList
