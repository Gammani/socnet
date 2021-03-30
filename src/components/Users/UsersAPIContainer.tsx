import React from "react";
import {UsersType} from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios"
import Preloader from "../../common/Preloader/Preloader";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            }).then(response => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            }).then(response => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(response.data.items);
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