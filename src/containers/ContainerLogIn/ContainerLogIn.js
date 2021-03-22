import {connect} from "react-redux";
import LogIn from "../../components/LogIn/LogIn";
import * as react from "react";


class ContainerLogIn extends react.Component {
    render() {
        return <LogIn {...this.props}/>
    }

}

let mapStateToProps = (state) => ({
    isLoggedIn: state.AuthReducer.isLoggedIn
})

export default connect(mapStateToProps)(ContainerLogIn)