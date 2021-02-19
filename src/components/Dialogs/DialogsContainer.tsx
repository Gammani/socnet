import React from 'react';
import {DialogsPageType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<PropsType> = (props) => {

    let state: DialogsPageType = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }
    let onSendMessageChange = (textBody: string) => {
        props.store.dispatch(updateNewMessageBodyAC(textBody));
    }


    return (
       <Dialogs
           dialogsPage={state}
       sendMessage={onSendMessageClick}
       sendMessageChange={onSendMessageChange}
       />
    )
}

export default DialogsContainer;