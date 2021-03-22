import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/users-reducer";


type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: PropsType) => {

    let pageCount: number = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i: number = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                     onClick={(e) => props.onPageChanged(p)}> {p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                                 alt={"аватар"}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>UnFollow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
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

export default Users;