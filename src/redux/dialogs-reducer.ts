import {v1} from "uuid";

type SendMessageActionType = {
    type: "SEND-MESSAGE"
    newMassageBody: string
}

export type DialogsReducerActionType = ReturnType<typeof sendMessageAC>

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
    ]
}


const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionType): DialogsPageType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let body = action.newMassageBody;
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}],
            }
        default:
            return state;
    }
}

export const sendMessageAC = (newMassageBody: string): SendMessageActionType => ({type: "SEND-MESSAGE", newMassageBody});


export default dialogsReducer;