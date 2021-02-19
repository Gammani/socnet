import {ActionType, PostsType, ProfilePageType} from "./store";
import {v1} from "uuid";

type AddPostActionType = {
    type: "ADD-POST"
    newText: string
}
type ChangeNewTextActionType = {
    type: "CHANGE-NEW-TEXT"
    newText: string
}
export type ProfileReducerActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>


let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hello, it's my first post lol", likesCount: 777},
        {id: v1(), message: "hu a you man?", likesCount: 1327}
    ],
    messageForNewPost: ""
}


const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsType = {
                id: v1(),
                message: action.newText,
                likesCount: 0
            };
            state.posts.unshift(newPost);
            return {...state};
        }
        case "CHANGE-NEW-TEXT": {
            state.messageForNewPost = action.newText;
            return {...state};
        }
        default:
            return {...state};
    }
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

export default profileReducer;