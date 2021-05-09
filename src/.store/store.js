import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import ContactsReducer from "./reducers/ContactsReducer";
import ChatsReducer from "./reducers/ChatsReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import AuthReducer from "./reducers/AuthReducer";
import thunkMiddleware from "redux-thunk";
import AppReducer from "./reducers/AppReducer";

let reducers = combineReducers({
    ProfileComponentStates: ProfileReducer, // Прописываем состояние стейта, которое равно значению возвращенному ProfileReducer
    ChatComponentStates: ChatsReducer,
    ContactsComponentStates: ContactsReducer,
    AuthReducer,
    AppReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))

// window.store = store

export default store