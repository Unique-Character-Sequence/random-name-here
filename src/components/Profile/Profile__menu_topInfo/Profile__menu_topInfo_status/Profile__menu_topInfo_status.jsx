import classes from './Profile__menu_topInfo_status.module.css'
import {useEffect, useRef, useState} from "react";

const Profile__menu_topInfo_status = (props) => {
    // const mounted = useRef(false);
    // useEffect(() => {
    //     if (!mounted.current) {
    //         // do componentDidMount logic
    //         mounted.current = true;
    //     } else {
    //
    //         // do componentDidUpdate logic
    //     }
    // });

    let [status_editMode, setStatus_editMode] = useState(false)
    let [status, setStatus] = useState("")

    const switchEditMode = (bool) => {
        setStatus_editMode(bool)
        if (bool === false) {
            props.updateProfileStatusThunk(status)
        }
    }

    const onMyStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div className={classes.text}>
        {!status_editMode && props.id === props.userId && <div>
            <span onClick={() => {
                switchEditMode(true)
            }}>[+]{status}</span>
        </div>}
        {props.id !== props.userId && <div>
            <span>[non-editable]{status}</span>
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