import {v1} from "uuid";

type UpdateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
type SendMessageActionType = {
    type: "SEND-MESSAGE"
}

export type DialogsReducerActionType = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateNewMessageBodyAC>

type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newPostBody: string
}

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


const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionType): DialogsPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newPostBody: action.body
            }
        case "SEND-MESSAGE":
            let body = state.newPostBody;
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}],
                newPostBody: ''
            }
        default:
            return state;
    }
}

export const sendMessageAC = (): SendMessageActionType => ({type: "SEND-MESSAGE"});
export const updateNewMessageBodyAC = (body: string): UpdateNewMessageBodyActionType => ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    body
});

export default dialogsReducer;