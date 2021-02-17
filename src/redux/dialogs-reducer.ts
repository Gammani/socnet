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

const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
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