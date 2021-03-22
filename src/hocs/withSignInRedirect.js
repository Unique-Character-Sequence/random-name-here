import {Redirect} from "react-router-dom";
import * as react from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isLoggedIn: state.AuthReducer.isLoggedIn
})

export const withSignInRedirect = (Component) => {
    class RedirectComponent extends react.Component {
        render() {
            if (!this.props.isLoggedIn) {
                return <Redirect to='/login'/>
            }
            return <Component {...this.props} /> // Не очень понимаю, что именно здесь this.props
        }
    }

    return connect(mapStateToProps)(RedirectComponent)
}