import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogsPageType} from "../../redux/state";

type propsType = {
    dialogsPage: dialogsPageType
}

const Dialogs = (props: propsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;