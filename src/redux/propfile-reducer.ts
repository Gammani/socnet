import {v1} from "uuid";
import {PhotosType} from "./users-reducer";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD_POST";
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}

type ContactsType = {
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
    mainLink: null | string
}

export type ProfType = {
    aboutMe: null | string
    contacts: ContactsType
    lookingForAJob: null | boolean
    lookingForAJobDescription: null | string
    fullName: null | string
    userId: null | number
    photos: PhotosType
}

type AddPostActionType = {
    type: typeof ADD_POST
}
type ChangeNewTextActionType = {
    type: typeof CHANGE_NEW_TEXT
    newText: string
}
export type ProfileType = ProfType | null

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export type ProfilePageType = {
    posts: Array<PostsType>
    messageForNewPost: string
    profile: ProfileType
    status: string
}
export type setStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export type ProfileReducerActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof changeNewText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>


let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: "Hello, it's my first post lol", likesCount: 777},
        {id: v1(), message: "How are you?", likesCount: 1327}
    ] as Array<PostsType>,
    messageForNewPost: "",
    profile: null,
    status: ""
}


const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
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
        case CHANGE_NEW_TEXT:
            return {
                ...state,
                messageForNewPost: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPost = (): AddPostActionType => {
    return {
        type: ADD_POST,
    } as const
}
export const changeNewText = (newText: string): ChangeNewTextActionType => {
    return {
        type: CHANGE_NEW_TEXT,
        newText
    } as const
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setStatus = (status: string): setStatusActionType => {
    return {
        type: SET_STATUS,
        status
    }
}

export const userProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}
export const getStatusProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
}
export const updateStatusProfile = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCod === 0) {
                    dispatch(setStatus(data));
                }
            })
    }
}

export default profileReducer;