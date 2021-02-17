import {v1} from "uuid";

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
}
export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

type AddPostActionType = {
    type: "ADD-POST"
    newText: string
}
type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}
export type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}


export const addPostAC = (newText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newText
    } as const
}
export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText
    } as const
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
            ]
        },
        profilePage: {
            posts: [
                {id: v1(), message: "Hello, it's my first post lol", likesCount: 777},
                {id: v1(), message: "hu a you man?", likesCount: 1327}
            ],
            messageForNewPost: ""
        }
    },
    _rerenderEntireTree() {
        console.log("hello");
    },

    subscribe(observer) {
        store._rerenderEntireTree = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: v1(),
                message: action.newText,
                likesCount: 0
            }
            store._state.profilePage.posts.unshift(newPost);
            store._rerenderEntireTree();
        } else if (action.type === "CHANGE-NEW-TEXT") {
            store._state.profilePage.messageForNewPost = action.newText;
            store._rerenderEntireTree();
        }
    }
}

export default store;