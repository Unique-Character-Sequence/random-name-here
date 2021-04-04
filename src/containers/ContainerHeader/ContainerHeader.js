import * as react from "react";
import Header from "../../components/Header/Header";
import {connect} from "react-redux";
import {getMyDataThunk, setDeauthorizedThunk} from "../../.store/reducers/AuthReducer";


class ContainerHeader extends react.Component {
    componentDidMount() {
        this.props.getMyDataThunk()
    }

    rerender = () => {
        // Не робит форсапдейт. Я чего-то недопонимаю.
        this.props.setDeauthorizedThunk()
        this.forceUpdate()
    }

    render() {
        //this.props.getMyDataThunk()
        this.props.getMyDataThunk()
        return <Header {...this.props} rerender={this.rerender}/>
    }
}

let mapStateToProps = (state) => ({
    login: state.AuthReducer.login,
    isLoggedIn: state.AuthReducer.isLoggedIn
})

let mapDispatchToProps = {
    getMyDataThunk,
    setDeauthorizedThunk

}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHeader);