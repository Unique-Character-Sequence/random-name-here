import * as react from "react";
import Header from "../../components/Header/Header";
import {connect} from "react-redux";
import {getMyDataThunk} from "../../.store/reducers/AuthReducer";


class ContainerHeader extends react.Component {
    componentDidMount() {
        this.props.getMyDataThunk()
    }

    render() {
        //this.props.getMyDataThunk()
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    login: state.AuthReducer.login
})

let mapDispatchToProps = {
    getMyDataThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHeader);