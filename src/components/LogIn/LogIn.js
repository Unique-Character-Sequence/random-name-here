import {Field, Form} from "react-final-form";
import Styles from "./Styles";
import {required} from "../../utils/validators/validators";

const LogIn = (props) => {
    return <Styles>
        <div>
            <h1>
                {props.isLoggedIn ? 'Logged in' : 'Not logged in'}
            </h1>
            {props.isLoggedIn ? '' : <LogInForm onSubmit={props.onSubmit}/>}
        </div>
    </Styles>
}

const LogInForm = (props) => {
    return <Form
        onSubmit={props.onSubmit}
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

                {submitError && <div>{submitError}</div>}

                <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
        )}
    />
}

export default LogIn