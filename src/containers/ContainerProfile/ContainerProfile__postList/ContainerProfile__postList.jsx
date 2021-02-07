import Profile__postList from "../../../components/Profile/Profile__postList/Profile__postList";
import {addPost_actionCreator, updateAddPostArea_actionCreator} from "../../../.store/reducers/ProfileReducer";

const ContainerProfile__postList = (props) => {
    let addPost = () => {
        let text = props.store.ProfileComponentStates.PostAreaData
        let action = addPost_actionCreator(text)
        props.store.dispatch(action)
    }
    let updateAddPostArea = (text) => {
        let action = updateAddPostArea_actionCreator(text)

        props.store.dispatch(action)
    }

    return <Profile__postList updateAddPostArea={updateAddPostArea}
                              addPost={addPost}
                              PostsArray={props.store.ProfileComponentStates.PostsArray}
                              PostAreaData={props.store.ProfileComponentStates.PostAreaData}
    />
}

export default ContainerProfile__postList
