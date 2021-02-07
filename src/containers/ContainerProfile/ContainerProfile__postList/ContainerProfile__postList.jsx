import Profile__postList from "../../../components/Profile/Profile__postList/Profile__postList";
import {addPost_actionCreator, updateAddPostArea_actionCreator} from "../../../.store/reducers/ProfileReducer";
import StoreContext from '../../../StoreContext'

const ContainerProfile__postList = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().ProfileComponentStates
                    let addPost = () => {
                        let text = state.PostAreaData
                        let action = addPost_actionCreator(text)
                        store.dispatch(action)
                    }
                    let updateAddPostArea = (text) => {
                        let action = updateAddPostArea_actionCreator(text)
                        store.dispatch(action)
                    }
                    return <Profile__postList updateAddPostArea={updateAddPostArea}
                                              addPost={addPost}
                                              PostsArray={state.PostsArray}
                                              PostAreaData={state.PostAreaData}
                    />
                }
            }
        </StoreContext.Consumer>)
}

export default ContainerProfile__postList
