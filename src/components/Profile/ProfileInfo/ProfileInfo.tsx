import React from 'react';
import {ProfileType} from "../../../redux/propfile-reducer";
import Preloader from "../../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png';
import ProfileStatus from './ProfileStatus';

type PropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: PropsType) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div className={s.hat}>*/}
            {/*    <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg" alt={"заставка"}/>*/}
            {/*</div>*/}
            <div>
                <div>
                    <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt={"аватар пользователя"}/>
                    <ProfileStatus status={"Hello World!"}/>
                </div>
                <div>
                    Обо мне: {props.profile.aboutMe}
                </div>
                <div>
                    <h1>Мои контакты</h1>
                    <div>{props.profile.contacts?.facebook}</div>
                    <div>{props.profile.contacts?.website}</div>
                    <div>{props.profile.contacts?.vk}</div>
                    <div>{props.profile.contacts?.twitter}</div>
                    <div>{props.profile.contacts?.instagram}</div>
                    <div>{props.profile.contacts?.youtube}</div>
                    <div>{props.profile.contacts?.github}</div>
                    <div>{props.profile.contacts?.mainLink}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;