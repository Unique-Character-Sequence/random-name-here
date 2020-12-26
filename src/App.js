import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import Profile from './components/Profile/Profile'
import Feed from './components/Feed/Feed'
import Chats from './components/Chats/Chats'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/chats" component={Chats}/>
                    <Route path="/feed" component={Feed}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;