import Profile__postList from "../../../components/Profile/Profile__postList/Profile__postList";
import {
    addPost,
    updateAddPostArea,
    getProfileDataThunk
} from "../../../.store/reducers/ProfileReducer";
import {connect} from "react-redux";
import * as react from "react";
import Preloader from "../../../assets/Preloader";
import {withRouter} from "react-router-dom";

class ContainerProfile__postList extends react.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = this.props.id
            // Заглушка, если хедеру ещё не успел придти ответ. Нужен промис, наверное
            if (!this.props.id) {
                userID = 6768
            }

        }
        this.props.getProfileDataThunk(userID)
    }

    render() {
        // Такая форма записи означает, что мы передаём все сущности внутри props, как одноимённые атрибуты.
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Profile__postList {...this.props}/>
            }
        </>
    }
}


let mapStateToProps = (state) => ({
    ...state.ProfileComponentStates,
    login: state.AuthReducer.login,
    id: state.AuthReducer.id
})

let mapDispatchToProps = {
    addPost,
    updateAddPostArea,
    getProfileDataThunk
}


let WithURIDataContainerComponent = withRouter(ContainerProfile__postList)

export default connect(mapStateToProps, mapDispatchToProps)(WithURIDataContainerComponent)
