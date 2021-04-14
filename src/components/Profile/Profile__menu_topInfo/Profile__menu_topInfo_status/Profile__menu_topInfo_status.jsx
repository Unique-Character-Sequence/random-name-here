import classes from './Profile__menu_topInfo_status.module.css'
import * as react from "react";

class Profile__menu_topInfo_status extends react.Component {
    state = {
        status_editMode: false,
        status: this.props.status
    }

    editModeEnable = () => {
        this.setState({
            status_editMode: true
        })
    }
    editModeDisable = () => {
        this.setState({
            status_editMode: false
        })
        this.props.updateProfileStatusThunk(this.state.status)
    }
    onMyStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        // console.log("prevprops:", prevProps);
    }

    render() {
        console.log('id:', this.props.id, ' this.state.status: ', this.state.status);
        return <div className={classes.text}>
            {!this.state.status_editMode && this.props.id === this.props.userId && <div>
                <span onClick={this.editModeEnable}>[+]{this.state.status}</span>
            </div>}
            {this.props.id !== this.props.userId && <div>
                <span>[non-editable]{this.state.status}</span>
            </div>}
            {this.state.status_editMode && <div>
                <input onChange={this.onMyStatusChange} autoFocus={true} value={this.state.status}
                       onBlur={this.editModeDisable}/>
            </div>}

            {/*{this.props.status}*/}
        </div>
    }
}

export default Profile__menu_topInfo_status;