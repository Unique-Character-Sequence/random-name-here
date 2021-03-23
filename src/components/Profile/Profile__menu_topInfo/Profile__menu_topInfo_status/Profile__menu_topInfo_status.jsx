import classes from './Profile__menu_topInfo_status.module.css'
import * as react from "react";

class Profile__menu_topInfo_status extends react.Component {
    state = {
        status_editMode: false
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
    }

    render() {
        return <div className={classes.text}>
            {!this.state.status_editMode && <div>
                <span onClick={this.editModeEnable.bind(this)}>{this.props.status}</span>
            </div>}
            {this.state.status_editMode && <div>
                <input autoFocus={true} value={this.props.status} onBlur={this.editModeDisable.bind(this)}/>
            </div>}

            {/*{this.props.status}*/}
        </div>
    }
}

export default Profile__menu_topInfo_status;