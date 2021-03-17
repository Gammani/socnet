import React from "react";
import {UsersType} from "../../redux/users-reducer";
import style from './users.module.css';
import axios from "axios"
import userPhoto from '../../assets/images/user.png';

type PropsType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void

}

let Users = (props: PropsType) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={style.userPhoto} alt={"аватар"}/>
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