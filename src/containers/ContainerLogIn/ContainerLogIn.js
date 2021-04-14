import {connect} from "react-redux";
import LogIn from "../../components/LogIn/LogIn";
import * as react from "react";
import {getCaptchaThunk, sendAuthRequestThunk} from "../../.store/reducers/AuthReducer";
import {FORM_ERROR} from "final-form";
import {getAuthError, getCaptchaUrl, getIsLoggedIn} from "../../.store/selectors/usersSelectors";


class ContainerLogIn extends react.Component {
    onSubmit = async values => {
        await this.props.sendAuthRequestThunk(values.email, values.password, values.remember_me)
        // await приостанавливает работу функции до тех пор, пока код после await не доработает
        // И sendAuthRequestThunk не простая функция, открой её код, там есть микрофишка важнейшая
        if (this.props.authError) {
            return {[FORM_ERROR]: this.props.authError}
        }
        this.props.getCaptchaThunk()
    }

    render() {
        if (!this.props.captchaUrl) { // Корявый костыль. Можно допилить диспатч, который будет затирать капчу после ввода. Но лучше просто урок посмотреть
            this.props.getCaptchaThunk()
        }
        //this.props.getCaptchaThunk() // Каждый раз получаем новые, поэтому цикл не прерывается
        console.log(this.props.captchaUrl)
        return <LogIn {...this.props} onSubmit={this.onSubmit}/>
    }
}

let mapStateToProps = (state) => ({
    isLoggedIn: getIsLoggedIn(state),
    authError: getAuthError(state),
    captchaUrl: getCaptchaUrl(state)
})

let mapDispatchToProps = {
    sendAuthRequestThunk,
    getCaptchaThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLogIn)