import Profile__postList from "../../../components/Profile/Profile__postList/Profile__postList";
import {
    addPost, isFetchingSwitch,
    updateAddPostArea, setProfileData
} from "../../../.store/reducers/ProfileReducer";
import {connect} from "react-redux";
import * as react from "react";
import * as axios from "axios";
import Preloader from "../../../assets/Preloader";

class ContainerProfile__postList extends react.Component {
    componentDidMount() {
        this.props.isFetchingSwitch(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/6178`)
            .then(
                response => {
                    this.props.isFetchingSwitch(false) // Данные УЖЕ пришли, а значит можно скрыть preloader
                    this.props.setProfileData(
                        response.data.fullName,
                        response.data.photos.large,
                        response.data.lookingForAJobDescription
                    )
                })
    }

    render() {
        // Такая форма записи означает, что мы передаём все сущности внутри props, как одноимённые атрибуты.
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Profile__postList {...this.props}/>
            }
        </>
    }
}


let mapStateToProps = (state) => ({...state.ProfileComponentStates})

let mapDispatchToProps = {
    addPost,
    updateAddPostArea,
    isFetchingSwitch,
    setProfileData
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerProfile__postList)
