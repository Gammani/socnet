import React from 'react';
import Dialogs from "./Dialogs";
import {DialogsPageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage:DialogsPageType,
}

type MapDispatchPropsType = {
    sendMessageChange: (textBody: string) => void
    sendMessage: () => void
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessageChange: (textBody: string) => {dispatch(updateNewMessageBodyAC(textBody));},
        sendMessage: () => {dispatch(sendMessageAC());}
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);