import {v1} from "uuid";

type AddPostActionType = {
    type: "ADD-POST"
}
type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}

export type ProfileReducerActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>


let initialState = {
    posts: [
        {id: v1(), message: "Hello, it's my first post lol", likesCount: 777},
        {id: v1(), message: "hu a you man?", likesCount: 1327}
    ] as Array<PostsType>,
    messageForNewPost: ""
}

export type InitialStateType = typeof initialState

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        }
        case "CHANGE-NEW-TEXT":
            return {
                ...state,
                messageForNewPost: action.newText
            }
        default:
            return state;
    }
}

export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD-POST",
    } as const
}
export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText
    } as const
}

export default profileReducer;