import React from 'react';
import Dialogs from "./Dialogs";
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage:DialogsPageType,
    isAuth: boolean
}

type MapDispatchPropsType = {
    sendMessageChange: (textBody: string) => void
    sendMessage: () => void
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessageChange: (textBody: string) => {dispatch(updateNewMessageBodyAC(textBody));},
        sendMessage: () => {dispatch(sendMessageAC());}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;