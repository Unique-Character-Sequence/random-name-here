import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import store from "./.store/store";
import {Provider} from "./StoreContext"

let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerender(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerender(state)
})

reportWebVitals()