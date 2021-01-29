import { IDialogState, DialogsActionTypes, SET_DIALOGS, SET_SELECTED_DIALOG_ID, SET_DIALOGS_IS_LOADING } from "../types";

const initialState: IDialogState = {
    dialogs: [],
    selectedDialogId: null,
    isLoading: false,
}

const reducer = (state: IDialogState = initialState, action: DialogsActionTypes): IDialogState => {
    switch (action.type) {
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.payload,
                isLoading: false
            }
        case SET_SELECTED_DIALOG_ID:
            return {
                ...state,
                selectedDialogId: action.payload,
            }
        case SET_DIALOGS_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export default reducer;