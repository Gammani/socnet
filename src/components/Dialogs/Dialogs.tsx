import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: (newMassageBody: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message} key={m.id}/>)


    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMassageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type AddMessageFormType = {
    newMassageBody: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMassageBody"} placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;