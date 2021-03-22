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
type SetCurrentPageActionType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
type SetTotalUsersCountActionType = {
    type: "SET-TOTAL-USER-COUNT"
    totalUsersCount: number
}
type setToggleIsFetchingActionCreator = {
    type: "TOGGLE-IS-FETCHING",
    isFetching: boolean
}

export type UsersReducerActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersCountAC>
    | ReturnType<typeof setToggleIsFetchingAC>


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export type InitialStateType = typeof initialState

export type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}

export type UsersType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
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
                users: [...action.users]
            }
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USER-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
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
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setUsersCountAC = (totalUsersCount: number): SetTotalUsersCountActionType => {
    return {
        type: "SET-TOTAL-USER-COUNT",
        totalUsersCount
    } as const
}
export const setToggleIsFetchingAC = (isFetching: boolean): setToggleIsFetchingActionCreator => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}

export default usersReducer;