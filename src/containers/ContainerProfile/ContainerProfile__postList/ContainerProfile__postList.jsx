import Profile__postList from "../../../components/Profile/Profile__postList/Profile__postList";
import {
    addPost, isFetchingSwitch,
    updateAddPostArea, setProfileData
} from "../../../.store/reducers/ProfileReducer";
import {connect} from "react-redux";
import * as react from "react";
import * as axios from "axios";
import Preloader from "../../../assets/Preloader";
import {withRouter} from "react-router-dom";

class ContainerProfile__postList extends react.Component {
    componentDidMount() {
        //debugger чтоб прочекать пропсы
        this.props.isFetchingSwitch(true)
        let userID = this.props.match.params.userID
        if (!userID){
            // Очевидно, что вместо 6768 нужно будет брать параметры залогиненного юзера
            userID = 6768;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
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


let WithURIDataContainerComponent = withRouter(ContainerProfile__postList)

export default connect(mapStateToProps, mapDispatchToProps)(WithURIDataContainerComponent)
