import React from 'react';
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";
import {DialogsPageType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

type PropsType = {}

const DialogsContainer: React.FC<PropsType> = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    let state: DialogsPageType = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageAC());
                    }
                    let onSendMessageChange = (textBody: string) => {
                        store.dispatch(updateNewMessageBodyAC(textBody));
                    }

                    return (
                        <Dialogs
                            dialogsPage={state}
                            sendMessage={onSendMessageClick}
                            sendMessageChange={onSendMessageChange}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;