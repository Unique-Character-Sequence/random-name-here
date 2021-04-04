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


const App = () => {
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
export default App