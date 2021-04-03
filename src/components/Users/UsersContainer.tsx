import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    acceptFollow,
    getUsers,
    setCurrentPage,
    setToggleFollowingProgress,
    acceptUnFollow,
    UsersType, follow, unFollow
} from "../../redux/users-reducer";
import UsersAPIContainer from "./UsersAPIContainer";


type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    acceptFollow,
    acceptUnFollow,
    setCurrentPage,
    setToggleFollowingProgress,
    getUsers,
    follow,
    unFollow
})(UsersAPIContainer);