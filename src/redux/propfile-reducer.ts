import {ActionType} from "./store";
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

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsType = {
                id: v1(),
                message: state.messageForNewPost,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.unshift(newPost);
            return stateCopy;
        }
        case "CHANGE-NEW-TEXT": {
            let stateCopy = {...state};
            stateCopy.messageForNewPost = action.newText;
            return stateCopy;
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