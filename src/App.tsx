import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Setting from "./components/Setting/Setting";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType
    addPost: (newText: string) => void
    changeNewText: (newText: string) => void
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        changeNewText={props.changeNewText}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsPage={props.state.dialogsPage}
                    />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
