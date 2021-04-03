import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    authMe: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.authMe();
    }

    render() {

        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});
const mapDispatchToProps = {
    authMe
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);