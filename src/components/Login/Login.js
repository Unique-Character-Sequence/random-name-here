import {withSignInRedirect} from "../../hocs/withSignInRedirect";

const Login = (props) => {
    return <div>
        <h1>
            {props.isLoggedIn ? 'Logged In':'Not logged in'}
        </h1>
    </div>
}
let qwe =  withSignInRedirect(Login)
export default qwe