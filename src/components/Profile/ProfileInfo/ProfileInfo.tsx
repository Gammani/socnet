import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.hat}>
                <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"/>
            </div>
            <div>
                <div>
                    <img src='https://ramonllullenglish4all.files.wordpress.com/2010/02/african_man.jpg'/>
                </div>
                <div>
                    ava + descritpion
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;