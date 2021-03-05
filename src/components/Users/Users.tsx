import React from "react";
import {UsersType} from "../../redux/users-reducer";
import style from './users.module.css';
import {v1} from "uuid";

type PropsType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
}

let Users = (props: PropsType) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                followed: true,
                fullName: "Leha",
                status: "Yo",
                location: {city: "Devyatkino", country: "Russia"}
            },
            {
                id: v1(),
                photoUrl: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                followed: true,
                fullName: "Suzi",
                status: "I'm fine",
                location: {city: "New York", country: "USA"}
            },
            {
                id: v1(),
                photoUrl: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                followed: true,
                fullName: "Fai",
                status: "Hi hi",
                location: {city: "Pattaya", country: "Thailand"}
            },
            {
                id: v1(),
                photoUrl: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                followed: true,
                fullName: "Daenerys",
                status: "Where is my Dragons?",
                location: {city: "Royal Harbor", country: "Seven Kingdoms"}
            },
            {
                id: v1(),
                photoUrl: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                followed: false,
                fullName: "name",
                status: "online",
                location: {city: "city", country: "country"}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={style.userPhoto} alt={"аватар"}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {props.unFollow(u.id)}}>UnFollow</button> :
                                <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;