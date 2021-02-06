import ContainerProfile__postList
    from "../../containers/ContainerProfile/ContainerProfile__postList/ContainerProfile__postList";
import Profile from "../../components/Profile/Profile";


const ContainerProfile = (props) => {
    return <div>
        {/*<Profile__menu_topInfo/>*/}
        {/*<Profile__gallery/>*/}
        <ContainerProfile__postList
            PostsArray={props.ProfileComponentStates.PostsArray}
            PostAreaData={props.ProfileComponentStates.PostAreaData}/>
    </div>
    return <Profile PostsArray = {props.ProfileComponentStates.PostsArray} PostAreaData={props.ProfileComponentStates.PostAreaData}/>
}


export default ContainerProfile