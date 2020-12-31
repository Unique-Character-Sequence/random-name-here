import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state.js';
import {areaUpdate} from "./redux/state";


export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost} areaUpdate={areaUpdate}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}