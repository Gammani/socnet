import React from "react";
import {UsersType} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    acceptFollow: (userId: string) => void
    acceptUnFollow: (userId: string) => void
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    setToggleFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: Array<string>
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

class UsersAPIContainer extends React.Component <PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                {this.props.isFetching === false ? <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                /> : ""}

            </>
        )
    }
}

export default UsersAPIContainer;