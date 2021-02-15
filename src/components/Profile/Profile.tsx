import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     messageForNewPost={props.profilePage.messageForNewPost}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;