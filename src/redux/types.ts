export const FETCH_DIALOGS = "FETCH_DIALOGS";
export const SET_DIALOGS = "SET_DIALOGS";
export const SET_DIALOGS_IS_LOADING = "SET_DIALOGS_IS_LOADING";
export const SET_SELECTED_DIALOG_ID = "SET_SELECTED_DIALOG_ID";

export const SET_MESSAGES = "SET_MESSAGES";
export const SET_MESSAGES_IS_LOADING = "SET_MESSAGES_IS_LOADING";

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

interface ISetDialogsIsLoading {
    type: typeof SET_DIALOGS_IS_LOADING,
    payload: boolean
}

export interface IDialogState {
    selectedDialogId: string | null,
    dialogs: IDialog[],
    isLoading: boolean
}

export type DialogsActionTypes = ISetDialogs | ISetSelectedDialogId | ISetDialogsIsLoading

interface ISetMessages {
    type: typeof SET_MESSAGES,
    payload: IMessage[]
}

interface ISetMessagesIsLoading {
    type: typeof SET_MESSAGES_IS_LOADING,
    payload: boolean
}

export interface IMessageState {
    messages: IMessage[],
    isLoading: boolean
}

export type MessagesActionTypes = ISetMessages | ISetMessagesIsLoading

