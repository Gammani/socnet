import {v1} from "uuid";
import profileReducer, {ProfileReducerActionsType} from "./propfile-reducer";
import dialogsReducer, {DialogsReducerActionType} from "./dialogs-reducer";

type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newPostBody: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type ActionType = ProfileReducerActionsType | DialogsReducerActionType

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}


const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Kleo"},
                {id: v1(), name: "Hiperion"},
                {id: v1(), name: "Susan"},
                {id: v1(), name: "Gektar"},
                {id: v1(), name: "Chuck"}
            ],
            messages: [
                {id: v1(), message: "Hey"},
                {id: v1(), message: "Yo man"},
                {id: v1(), message: "hu you piople?"}
            ],
            newPostBody: ""
        },
        profilePage: {
            posts: [
                {id: v1(), message: "Hello, it's my first post lol", likesCount: 777},
                {id: v1(), message: "hu a you man?", likesCount: 1327}
            ],
            messageForNewPost: ""
        }
    },
    _callSubscriber() {
        console.log("hello");
    },

    subscribe(observer) {
        store._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}

export default store;