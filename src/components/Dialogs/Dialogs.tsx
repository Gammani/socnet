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

    let dialogs: Array<DialogsDataType> = [
        {id: "1", name: "Kleo"},
        {id: "2", name: "Hiperion"},
        {id: "3", name: "Suzi"},
        {id: "4", name: "Gektar"},
        {id: "5", name: "Chuck"}
    ]

    let messages: Array<MessagesDataType> = [
        {id: "1", message: "Hey"},
        {id: "2", message: "Yo man"},
        {id: "3", message: "hu you piople?"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} />)
    let messagesElements = messages.map(m => <Message id={m.id} message={m.message} />)

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