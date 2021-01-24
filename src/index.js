import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/state.js'


let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={state}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerender(store.getState())

store.subscribe(rerender)

reportWebVitals()