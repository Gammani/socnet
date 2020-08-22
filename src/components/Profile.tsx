import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.header}>
                <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"/>
            </div>
            <div>
                <img src='https://ramonllullenglish4all.files.wordpress.com/2010/02/african_man.jpg'/>
            </div>
            <div>
                ava + descritpion
            </div>
            <div>
                My posts
                <div>
                    New post
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;