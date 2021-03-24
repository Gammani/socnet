import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/propfile-reducer";


type PropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

type MapStatePropsType = {
    profile: ProfileType
}


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);