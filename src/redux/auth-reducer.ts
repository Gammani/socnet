import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: AuthDataType
}

type ThunkType = ThunkAction<void, AppStateType,
    Dispatch<AuthReducerActionsType>, AuthReducerActionsType>

let initialState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
export type AuthReducerActionsType = ReturnType<typeof setAuthUserData>

const authReducer = (state: AuthType = initialState, action: AuthReducerActionsType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => (
    {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    });

export const getAuthUserData = (): ThunkType => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}
export const login = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}

export const logout = (): ThunkType => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}


export default authReducer;