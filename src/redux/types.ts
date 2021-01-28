export const FETCH_DIALOGS = "FETCH_DIALOGS";
export const SET_DIALOGS = "SET_DIALOGS";
export const SET_SELECTED_DIALOG = "SET_SELECTED_DIALOG";

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

interface ISetSelectedDialog {
    type: typeof SET_SELECTED_DIALOG,
    payload: string
}

export interface IDialogState {
    selectedDialog: string | null,
    dialogs: IDialog[]
}

export type DialogsActionTypes = ISetDialogs | ISetSelectedDialog


