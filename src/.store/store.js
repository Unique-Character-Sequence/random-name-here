import {combineReducers, createStore} from "redux";
import ContactsReducer from "./reducers/ContactsReducer";
import ChatsReducer from "./reducers/ChatsReducer";
import ProfileReducer from "./reducers/ProfileReducer";

let reducers = combineReducers({
    ProfileComponentStates: ProfileReducer, // Прописываем состояние стейта, которое равно значению возвращенному ProfileReducer
    ChatComponentStates: ChatsReducer,
    ContactsComponentStates: ContactsReducer,
})

let store = createStore(reducers) // alt+enter для импорта

window.store = store

export default store