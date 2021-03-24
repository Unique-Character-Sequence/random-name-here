import {
    addPost,
    updateAddPostArea,
    getProfileDataThunk, getProfileStatusThunk, updateProfileStatusThunk
} from "../../.store/reducers/ProfileReducer";
import {connect} from "react-redux";
import * as react from "react";
import Preloader from "../../assets/Preloader";
import {Redirect, withRouter} from "react-router-dom";
import {withSignInRedirect} from "../../hocs/withSignInRedirect";
import {compose} from "redux";
import Profile from "../../components/Profile/Profile";

class ContainerProfile extends react.Component {
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
        this.props.getProfileStatusThunk(userID)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Profile {...this.props}/>
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
    getProfileDataThunk,
    getProfileStatusThunk,
    updateProfileStatusThunk
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withSignInRedirect
)(ContainerProfile)
