import reportWebVitals from './reportWebVitals';
import state from './redux/state.js'
import {rerender} from "./render";


rerender(state)

reportWebVitals()