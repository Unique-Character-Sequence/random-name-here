import classes from './Profile__menu_topInfo_status.module.css'
import * as react from "react";
import {useEffect, useRef, useState} from "react";

const  Profile__menu_topInfo_status = (props) => {
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
    const setEditModeTrue = () => {
        setStatus_editMode(true)
    }

    const onMyStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div className={classes.text}>
        {!status_editMode && props.id === props.userId && <div>
            <span onClick={setEditModeTrue}>[+]{status}</span>
        </div>}
        {props.id !== props.userId && <div>
            <span>[non-editable]{status}</span>
        </div>}
        {status_editMode && <div>
            <input onChange={onMyStatusChange} autoFocus={true} value={status}
                   onBlur={switchEditMode(false)}/>
        </div>}

        {/*{props.status}*/}
    </div>
}
//
// class OLD_Profile__menu_topInfo_status extends react.Component {
//     state = {
//         status_editMode: false,
//         status: props.status
//     }
//
//     editModeEnable = () => {
//         setState({
//             status_editMode: true
//         })
//     }
//     editModeDisable = () => {
//         setState({
//             status_editMode: false
//         })
//         props.updateProfileStatusThunk(state.status)
//     }
//     onMyStatusChange = (e) => {
//         setState({
//             status: e.currentTarget.value
//         })
//
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== props.status) {
//             setState({
//                 status: props.status
//             })
//         }
//         // console.log("prevprops:", prevProps);
//     }
//
//     render() {
//         console.log('id:', props.id, ' state.status: ', state.status);
//         return <div className={classes.text}>
//             {!state.status_editMode && props.id === props.userId && <div>
//                 <span onClick={editModeEnable}>[+]{state.status}</span>
//             </div>}
//             {props.id !== props.userId && <div>
//                 <span>[non-editable]{state.status}</span>
//             </div>}
//             {state.status_editMode && <div>
//                 <input onChange={onMyStatusChange} autoFocus={true} value={state.status}
//                        onBlur={editModeDisable}/>
//             </div>}
//
//             {/*{props.status}*/}
//         </div>
//     }
// }

export default Profile__menu_topInfo_status;