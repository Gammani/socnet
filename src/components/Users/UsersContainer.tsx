import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setUsers,
    setUsersCount,
    unFollow,
    UsersType
} from "../../redux/users-reducer";
import UsersAPIContainer from "./UsersAPIContainer";


type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}



// type MapDispatchPropsType = {
//     follow: (userId: string) => void
//     unFollow: (userId: string) => void
//     setUsers: (users: Array<UsersType>) => void
//     setCurrentPage: (pageNumber: number) => void
//     setUsersCount: (totalCount: number) => void
//     setToggleIsFetching: (isFetching: boolean) => void
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId));
//         },
//         unFollow: (userId: string) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setUsersCount: (totalCount: number) => {
//             dispatch(setUsersCountAC(totalCount));
//         },
//         setToggleIsFetching: (isFetching: boolean) => {
//             dispatch(setToggleIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersCount,
    setToggleIsFetching
})(UsersAPIContainer);