import React from 'react';
import s from './Message.module.css'

type MessagePropsType = {
    id: string
    message: string
}


const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


export default Message;