const LogIn = (props) => {
    return <div>
        <h1>
            {props.isLoggedIn ? 'Logged in' : 'Not logged in'}
        </h1>
    </div>
}

export default LogIn