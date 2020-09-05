type dialogsType = {
    id: string
    name: string
}

type messagesType = {
    id: string
    message: string
}

type postsType = {
    id: string
    message: string
    likesCount: number
}

export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

export type profilePageType = {
    posts: Array<postsType>
}

export type rootStateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
}

let state: rootStateType = {
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