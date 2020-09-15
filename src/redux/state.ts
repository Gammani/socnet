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

export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    addPost: (newText: string) => void
    _rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
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
    changeNewText(newText: string) {
        store._state.profilePage.messageForNewPost = newText;
        store._rerenderEntireTree();
    },
    addPost(newText: string) {
        const newPost: PostsType = {
            id: v1(),
            message: newText,
            likesCount: 0
        }
        store._state.profilePage.posts.push(newPost);
        store._rerenderEntireTree();
    },
    _rerenderEntireTree() {
        console.log("hello");
    },
    subscribe(callback) {
        store._rerenderEntireTree = callback;
    },
    getState() {
        return this._state;
    }
}

export default store;