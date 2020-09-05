import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type propsType = {
    profilePage: profilePageType
}

const Profile = (props: propsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;