export const FETCH_DIALOGS = "FETCH_DIALOGS";
export const SET_DIALOGS = "SET_DIALOGS";
export const FETCH_MESSAGES_BY_ID = "FETCH_MESSAGES_BY_ID";
export const SET_MESSAGES = "SET_MESSAGES";
export const SET_SELECTED_DIALOG_ID = "SET_SELECTED_DIALOG_ID";

export enum MessageStatus {
    sent = "Sent",
    received = "Received",
    seen = "Seen",
}

export interface IAuthor {
    id: string,
    avatar: string | null,
    username: string,
    isAuthorOnline: boolean

}

export interface IMessage {
    id: string,
    author: IAuthor,
    date: Date,
    dialogId: string,
    content: string | File,
    status: MessageStatus
}

export interface IDialog {
    id: string,
    lastMessage: IMessage,
}

interface ISetDialogs {
    type: typeof SET_DIALOGS,
    payload: IDialog[]
}

interface ISetSelectedDialogId {
    type: typeof SET_SELECTED_DIALOG_ID,
    payload: string | null
}

export interface IDialogState {
    selectedDialogId: string | null,
    dialogs: IDialog[]
}

export type DialogsActionTypes = ISetDialogs | ISetSelectedDialogId

export interface ISetMessages {
    type: typeof SET_MESSAGES,
    payload: IMessage[]
}

export interface IMessageState {
    messages: IMessage[]
}

export type MessagesActionTypes = ISetMessages

