import {Field, Form} from "react-final-form";
import Styles from "./Styles";


const LogIn = (props) => {
    return <Styles>
        <div>
            <h1>
                {props.isLoggedIn ? 'Logged in' : 'Not logged in'}
            </h1>
            {props.isLoggedIn? '': <LogInForm onSubmitFunc={props.onSubmit}/>}

        </div>
    </Styles>
}

const LogInForm = (onSubmit) => {
    return <Form
        onSubmit={onSubmit.onSubmitFunc}
        initialValues={{email: null, password: null, remember_me: false}}
        render={({handleSubmit, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <Field
                        name="email"
                        component="input"
                        type="text"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <Field
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Password"
                    />
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
                <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
        )}
    />
}

export default LogIn