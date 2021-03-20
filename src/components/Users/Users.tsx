import React from "react";
import {UsersType} from "../../redux/users-reducer";
import styles from './users.module.css';
import axios from "axios"
import userPhoto from '../../assets/images/user.png';

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
}

class Users extends React.Component <PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersCount(response.data.totalCount);
        })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        let pageCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i: number = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span className={ this.props.currentPage === p ? styles.selectedPage : ''}
                            onClick={(e) => this.onPageChanged(p)}> {p}</span>
                        })
                    }
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                                 alt={"аватар"}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;