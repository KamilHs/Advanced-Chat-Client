export const FETCH_DIALOGS = "FETCH_DIALOGS";
export const SET_DIALOGS = "SET_DIALOGS";

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

interface SetDialogs {
    type: typeof SET_DIALOGS,
    payload: IDialog[]
}

export type DialogActionTypes = SetDialogs


