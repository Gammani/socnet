import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import { Redirect } from 'react-router-dom';


type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    sendMessageChange: (text: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>)
    let newMessageBody = state.newPostBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onSendMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textBody = e.target.value;
        props.sendMessageChange(textBody);
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div><textarea onChange={onSendMessageChange} value={newMessageBody}
                               placeholder={'Enter your message'}></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;