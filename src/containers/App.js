import './App.css'
import Sidebar from '../components/Sidebar/Sidebar'
import ContainerHeader from '../containers/ContainerHeader/ContainerHeader'

import Login from "../components/Login/Login";
import Profile from '../components/Profile/Profile'
import Feed from '../components/Feed/Feed'
import Contacts from "../components/Contacts/Contacts";
import Chats from '../components/Chats/Chats'
import Music from '../components/Music/Music'
import Settings from '../components/Settings/Settings'

import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <ContainerHeader/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile/:userID?"
                           render={() => <Profile/>}/>
                    <Route path="/login"
                           render={() => <Login/>}/>
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
    );
}
export default App;