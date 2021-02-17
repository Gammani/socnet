import store, {ActionType, PostsType, ProfilePageType} from "./store";
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


const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType=> {
    switch(action.type) {
        case "ADD-POST": {
            const newPost: PostsType = {
                id: v1(),
                message: action.newText,
                likesCount: 0
            };
            store._state.profilePage.posts.unshift(newPost);
            store._callSubscriber();
            return {...state};
        }
        case "CHANGE-NEW-TEXT": {
            store._state.profilePage.messageForNewPost = action.newText;
            store._callSubscriber();
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