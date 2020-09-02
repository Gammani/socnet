import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}

type MessagePropsType = {
    id: string
    message: string
}

type DialogsDataType = {
    id: string
    name: string
}

type MessagesDataType = {
    id: string
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {

    let dialogsData: Array<DialogsDataType> = [
        {id: "1", name: "Kleo"},
        {id: "2", name: "Hiperion"},
        {id: "3", name: "Suzi"},
        {id: "4", name: "Gektar"},
        {id: "5", name: "Chuck"}
    ]

    let messagesData: Array<MessagesDataType> = [
        {id: "1", message: "Hey"},
        {id: "2", message: "Yo man"},
        {id: "3", message: "hu you piople?"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name} />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name} />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name} />
            </div>

            <div className={s.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message} />
                <Message id={messagesData[1].id} message={messagesData[1].message} />
                <Message id={messagesData[2].id} message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;