const SET_USER_DATA = 'SET_USER_DATA';

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthDataType = {
    userId: number
    email: string
    login: string
}
type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    data: AuthDataType
}


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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): SetUserDataActionType => (
    {
        type: SET_USER_DATA,
        data: {userId, email, login}
    });


export default authReducer;