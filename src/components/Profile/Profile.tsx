import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.header}>
                <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"/>
            </div>
            <div>
                <img src='https://ramonllullenglish4all.files.wordpress.com/2010/02/african_man.jpg'/>
            </div>
            <div>
                ava + descritpion
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;