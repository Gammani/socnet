import React, {ComponentType} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./common/Preloader/Preloader";
import {AppStateType} from "./redux/redux-store";


type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<PropsType, AppStateType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})
const mapDispatchToProps = {
    initializeApp
}

export default compose<ComponentType>(
    withRouter,
    connect(mapStateToProps,mapDispatchToProps),)(App);