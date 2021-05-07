import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatusProfile, ProfileType, updateStatusProfile, userProfile} from "../../redux/propfile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
    status: string
    isAuth: boolean
    authorizedUserId: number | null

}
type MapDispatchPropsType = {
    userProfile: (userId: string) => void
    getStatusProfile: (userId: string) => void
    updateStatusProfile: (status: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = String(this.props.authorizedUserId);
        }
        this.props.userProfile(userId);
        this.props.getStatusProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {userProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);