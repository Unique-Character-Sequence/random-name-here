import './App.css'
import Sidebar from '../components/Sidebar/Sidebar'
import ContainerHeader from '../containers/ContainerHeader/ContainerHeader'


import Feed from '../components/Feed/Feed'
import Contacts from "../components/Contacts/Contacts"
import Chats from '../components/Chats/Chats'
import Music from '../components/Music/Music'
import Settings from '../components/Settings/Settings'

import {BrowserRouter, Route} from "react-router-dom"
import ContainerLogIn from "./ContainerLogIn/ContainerLogIn"
import ContainerProfile from "./ContainerProfile/ContainerProfile"
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeAppThunk} from "../.store/reducers/AppReducer";
import Preloader from "../assets/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeAppThunk()
    }

    render() {
        if (!this.props.initialized) {return <Preloader/>}
        console.log(this.props.initialized);
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <ContainerHeader/>
                    <Sidebar/>
                    <div className='app-wrapper-content'>
                        <Route path="/profile/:userID?"
                               render={() => <ContainerProfile/>}/>
                        <Route path="/login"
                               render={() => <ContainerLogIn/>}/>
                        <Route path="/chats"
                               render={() => <Chats/>}/>
                        <Route path="/feed"
                               render={() => <Feed/>}/>
                        <Route path="/contacts"
                               render={() => <Contacts/>}/>
                        <Route path="/music"
                               render={() => <Music/>}/>
                        <Route path="/settings"
                               render={() => <Settings/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.AppReducer.initialized
})

let mapDispatchToProps = {
    initializeAppThunk
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps))(App)