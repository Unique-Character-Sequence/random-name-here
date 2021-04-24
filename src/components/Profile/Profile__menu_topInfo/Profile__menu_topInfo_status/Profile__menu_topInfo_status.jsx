import classes from './Profile__menu_topInfo_status.module.css'
import {useEffect, useState} from "react";

const Profile__menu_topInfo_status = (props) => {
    let [status_editMode, setStatus_editMode] = useState(false)
    let [status, setStatus] = useState("")

    useEffect(() => {
        // Переписывает значение status из local state на значение status из state
        setStatus(props.status)
    }, [props.status]) // Если изменится значение в скобках, то сработает effect

    const switchEditMode = (bool) => {
        setStatus_editMode(bool)
        if (bool === false) {
            props.updateProfileStatusThunk(status)
        }
    }

    const onMyStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    console.log('local status:', status, '\nserver status:', props.status);

    return <div className={classes.text}>
        {!status_editMode && props.myId === props.userId && <div>
            <span onClick={() => {
                switchEditMode(true)
            }}>
                {`[editable] ${status}`}
            </span>
        </div>}
        {props.myId !== props.userId && props.userId && <div>
            <span>
                {`[non-editable] ${status}`}
            </span>
        </div>}
        {status_editMode && <div>
            <input onChange={onMyStatusChange} autoFocus={true} value={status}
                   onBlur={() => {
                       switchEditMode(false)
                   }}/>
        </div>}

        {/*{props.status}*/}
    </div>
}

export default Profile__menu_topInfo_status;