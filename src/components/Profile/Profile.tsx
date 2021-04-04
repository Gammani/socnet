import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/propfile-reducer";
import {Redirect} from "react-router-dom";


type PropsType = {
    profile: ProfileType
    isAuth: boolean
}

const Profile: React.FC<PropsType> = (props) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;