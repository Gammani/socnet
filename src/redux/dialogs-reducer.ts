import store, {ActionType, DialogsPageType} from "./store";
import {v1} from "uuid";

type UpdateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
type SendMessageActionType = {
    type: "SEND-MESSAGE"
}
export type DialogsReducerActionType = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageBodyAC>


let initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: "Kleo"},
        {id: v1(), name: "Hiperion"},
        {id: v1(), name: "Susan"},
        {id: v1(), name: "Gektar"},
        {id: v1(), name: "Chuck"}
    ],
    messages: [
        {id: v1(), message: "Hey"},
        {id: v1(), message: "Yo man"},
        {id: v1(), message: "hu you piople?"}
    ],
    newPostBody: ""
}


const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            store._state.dialogsPage.newPostBody = action.body;
            store._callSubscriber();
            return {...state};
        }
        case "SEND-MESSAGE": {
            let body = state.newPostBody;
            state.messages.push({id: v1(), message: body});
            state.newPostBody = '';
            store._callSubscriber();
            return state;
        }
        default:
            return {...state};
    }
}

export const sendMessageAC = (): SendMessageActionType => ({type: "SEND-MESSAGE"});
export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyActionType => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    body
});

export default dialogsReducer;