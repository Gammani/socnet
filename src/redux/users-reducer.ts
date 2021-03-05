type FollowActionType = {
    type: "FOLLOW"
    userId: string
}
type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: string
}
type SetUsersActionType = {
    type: "SET-USERS"
    users: Array<UsersType>
}

export type UsersReducerActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>


let initialState = {
    users: [

    ] as Array<UsersType>
}

export type InitialStateType = typeof initialState

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId: string): FollowActionType => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unFollowAC = (userId: string): UnfollowActionType => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setUsersAC = (users: Array<UsersType>): SetUsersActionType => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export default usersReducer;