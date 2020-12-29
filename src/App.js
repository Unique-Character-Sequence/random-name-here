import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import Profile from './components/Profile/Profile'
import Feed from './components/Feed/Feed'
import Chats from './components/Chats/Chats'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile" render={() => <Profile PostsMassive={props.PostsMassive}/>}/>
                    <Route path="/chats" render={() => <Chats MessagesMassive={props.MessagesMassive}
                                                              MsgNameplatesMassive={props.MsgNameplatesMassive}/>}/>
                    <Route path="/feed" render={() => <Feed/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;