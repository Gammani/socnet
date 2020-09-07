type DialogsType = {
    id: string
    name: string
}

type MessagesType = {
    id: string
    message: string
}

type PostsType = {
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
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

let state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: "1", name: "Kleo"},
            {id: "2", name: "Hiperion"},
            {id: "3", name: "Suzi"},
            {id: "4", name: "Gektar"},
            {id: "5", name: "Chuck"}
        ],
        messages: [
            {id: "1", message: "Hey"},
            {id: "2", message: "Yo man"},
            {id: "3", message: "hu you piople?"}
        ]
    },
    profilePage: {
        posts: [
            {id: "1", message: "Hello, it's my first post lol", likesCount: 777},
            {id: "2", message: "hu a you man?", likesCount: 1327}
        ]
    }
}

export default state;