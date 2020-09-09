import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePageType
    addPost: (newText: string) => void
    changeNewText: (newText: string) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     messageForNewPost={props.profilePage.messageForNewPost}
                     changeNewTextCallback={props.changeNewText}/>
        </div>
    )
}

export default Profile;