import {combineReducers, createStore} from "redux";
import profileReducer from "./propfile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>