import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, userProfile} from "../../redux/propfile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    userProfile: (userId: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = "6734";
        }
        this.props.userProfile(userId);
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

export default withAuthRedirect(withRouter(connect(mapStateToProps, {userProfile})(ProfileContainer)));