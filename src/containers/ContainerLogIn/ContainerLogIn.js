import {connect} from "react-redux";
import LogIn from "../../components/LogIn/LogIn";
import * as react from "react";
import {sendAuthRequestThunk} from "../../.store/reducers/AuthReducer";
import {FORM_ERROR} from "final-form";


class ContainerLogIn extends react.Component {
    // authPromise = (email, password, remember_me) => new Promise((resolve) => {
    //     this.props.sendAuthRequestThunk(email, password, remember_me)
    //     resolve(
    //         {if (this.props.isLoggedIn === false)
    //     {
    //         return {[FORM_ERROR]: 'qweq'}
    //     }
    // }
    // )
    // })

    onSubmit = values => {
        //console.log(values)
        // this.authPromise(values.email, values.password, values.remember_me).then(
        //     () => console.log('Я ПОНЯЛ ПРОМИСЫ?')
        // )
        this.props.sendAuthRequestThunk(values.email, values.password, values.remember_me)

        // Далее мы задаём ошибку формы при сабмите. Условие взято без причины
        if (this.props.isLoggedIn === false) {
            return {[FORM_ERROR]: 'qweq'}
        }
    }

    render() {
        return <LogIn {...this.props} onSubmit={this.onSubmit}/>
    }
}

let mapStateToProps = (state) => ({
    isLoggedIn: state.AuthReducer.isLoggedIn
})

let mapDispatchToProps = {
    sendAuthRequestThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerLogIn)