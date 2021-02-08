import Profile__postList from "../../../components/Profile/Profile__postList/Profile__postList";
import {addPost_actionCreator, updateAddPostArea_actionCreator} from "../../../.store/reducers/ProfileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        PostsArray: state.ProfileComponentStates.PostsArray,
        PostAreaData: state.ProfileComponentStates.PostAreaData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPost_actionCreator()
            dispatch(action)
        },
        updateAddPostArea: (text) => {
            let action = updateAddPostArea_actionCreator(text)
            dispatch(action)
        }

    }
}

const ContainerProfile__postList = connect(mapStateToProps, mapDispatchToProps)(Profile__postList)

export default ContainerProfile__postList
