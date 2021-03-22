import {connect} from "react-redux";

const LogIn = (props) => {
    return <div>
        <h1>
            {props.isLoggedIn ? 'Logged in' : 'Not logged in'}
        </h1>
    </div>
}

let mapStateToProps = (state) => ({
    isLoggedIn: state.AuthReducer.isLoggedIn
})

export default connect(mapStateToProps)(LogIn)