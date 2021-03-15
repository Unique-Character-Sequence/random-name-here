import {combineReducers, createStore} from "redux";
import ContactsReducer from "./reducers/ContactsReducer";
import ChatsReducer from "./reducers/ChatsReducer";
import ProfileReducer from "./reducers/ProfileReducer";
import AuthReducer from "./reducers/AuthReducer";

let reducers = combineReducers({
    ProfileComponentStates: ProfileReducer, // Прописываем состояние стейта, которое равно значению возвращенному ProfileReducer
    ChatComponentStates: ChatsReducer,
    ContactsComponentStates: ContactsReducer,
    AuthReducer,
})

let store = createStore(reducers) // alt+enter для импорта

window.store = store

export default store