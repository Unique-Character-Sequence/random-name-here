import {Field, Form} from "react-final-form";
import Styles, {ErrorForm} from "./Styles";
import {required} from "../../utils/validators/validators";

const LogIn = (props) => {
    return <Styles>
        <div>
            <h1>
                {props.isLoggedIn ? 'Logged in' : 'Not logged in'}
            </h1>
            {props.isLoggedIn ? '' : <LogInForm onSubmit={props.onSubmit} captchaUrl={props.captchaUrl}/> /* Не забывай сюда пропсы кидать*/}
        </div>
    </Styles>
}

const LogInForm = (propsFromAbove) => {
    return <Form
        onSubmit={propsFromAbove.onSubmit}
        initialValues={{email: null, password: null, remember_me: false}}
        render={({submitError, handleSubmit, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <Field
                        name="email"
                        component="input"
                        type="text"
                        validate={required}
                    >
                        {({input, meta}) => (
                            <div>
                                <input {...input} placeholder="Email"/>
                                {meta.error && meta.touched && <label>{meta.error}</label>}
                            </div>
                        )}
                    </Field>
                </div>
                <div>
                    <label>Password</label>
                    <Field
                        name="password"
                        component="input"
                        type="password"
                        validate={required}
                    >
                        {({input, meta}) => (
                            <div>
                                <input {...input} placeholder="Password"/>
                                {meta.error && meta.touched && <label>{meta.error}</label>}
                            </div>
                        )}
                    </Field>
                </div>
                <div>
                    <label>Remember me</label>
                    <Field name="remember_me" component="input" type="checkbox"/>
                </div>
                <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                </div>
                {submitError && <ErrorForm>{submitError}</ErrorForm>}
                <img src={propsFromAbove.captchaUrl} alt=""/>
            </form>
        )}
    />
}

export default LogIn