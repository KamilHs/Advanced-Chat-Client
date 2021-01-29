import { IDialogState, DialogsActionTypes, SET_DIALOGS, SET_SELECTED_DIALOG_ID } from "../types";

const initialState: IDialogState = {
    dialogs: [],
    selectedDialogId: null
}

const reducer = (state: IDialogState = initialState, action: DialogsActionTypes): IDialogState => {
    switch (action.type) {
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.payload
            }
        case SET_SELECTED_DIALOG_ID:
            return {
                ...state,
                selectedDialogId: action.payload
            }
        default:
            return state;
    }
}

export default reducer;