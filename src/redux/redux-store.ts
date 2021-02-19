import {combineReducers, createStore} from "redux";
import profileReducer from "./propfile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

let store = createStore(reducers);

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof reducers>

export default store;