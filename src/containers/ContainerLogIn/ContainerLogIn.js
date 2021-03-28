import {connect} from "react-redux";
import LogIn from "../../components/LogIn/LogIn";
import * as react from "react";
import {setAuthorizedThunk} from "../../.store/reducers/AuthReducer";


class ContainerLogIn extends react.Component {
    onSubmit = (values) => {
        console.log(values)
        this.props.setAuthorizedThunk(values.email, values.password, values.remember_me)
    }

    render() {
        return <LogIn {...this.props} onSubmit={this.onSubmit}/>
    }

}

let mapStateToProps = (state) => ({
    isLoggedIn: state.AuthReducer.isLoggedIn
})

let mapDispatchToProps = {
    setAuthorizedThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLogIn)