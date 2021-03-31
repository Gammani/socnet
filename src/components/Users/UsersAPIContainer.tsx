import React from "react";
import {UsersType} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setUsersCount: (totalCount: number) => void
    isFetching: boolean
    setToggleIsFetching: (isFetching: boolean) => void
}

class UsersAPIContainer extends React.Component <PropsType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(data.items);
        })
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
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onPageChanged={this.onPageChanged}
                /> : ""}

            </>
        )
    }
}

export default UsersAPIContainer;