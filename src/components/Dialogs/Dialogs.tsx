import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}

type MessagePropsType = {
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id={"1"} name={"Kleo"} />
                <DialogItem id={"2"} name={"Hiperion"} />
                <DialogItem id={"3"} name={"Suzi"} />
                <DialogItem id={"4"} name={"Gektar"} />
                <DialogItem id={"5"} name={"Chuck"} />
            </div>
            <div className={s.messages}>
                <Message message={"Hey"} />
                <Message message={"Yo man"} />
                <Message message={"hu you piople?"} />
            </div>
        </div>
    )
}

export default Dialogs;