import {combineReducers, createStore} from "redux";
import ContactsReducer from "./ContactsReducer";
import ChatsReducer from "./ChatsReducer";
import ProfileReducer from "./ProfileReducer";

let reducers = combineReducers({
    ProfileComponentStates: ProfileReducer, // Прописываем состояние стейта, которое равно значению возвращенному ProfileReducer
    ChatComponentStates: ChatsReducer,
    ContactsComponentStates: ContactsReducer,
})

let store = createStore(reducers) // alt+enter для импорта

export default store