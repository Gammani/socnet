import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    login: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    debugger
                    this.props.setAuthUserData(id, email, login);
                    debugger
                }
            })
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
    setAuthUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);