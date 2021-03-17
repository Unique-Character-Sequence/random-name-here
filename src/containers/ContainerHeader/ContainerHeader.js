import * as react from "react";
import * as axios from "axios";
import Header from "../../components/Header/Header";
import {connect} from "react-redux";
import {setAuthData} from "../../.store/reducers/AuthReducer";
import {UsersDA} from "../../DAL/DataAccess";


class ContainerHeader extends react.Component {
    componentDidMount() {
        UsersDA.getMyData()
            .then(
                //только с withCredentials делается кроссдоменный запрос. Негодую.
                response => {
                    // Чек на ошибку в data.resultCode
                    if (response.resultCode === 0) {
                        this.props.setAuthData(response.data)
                    }
                },
            )
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    login: state.AuthReducer.login
})

let mapDispatchToProps = {
    setAuthData

}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHeader);