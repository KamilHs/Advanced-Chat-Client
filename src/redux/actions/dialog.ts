import { ThunkAction } from "redux-thunk";

import { dialogApi } from "../../utils/api";
import { RootState } from "../store";
import { DialogsActionTypes, IDialog, SET_DIALOGS, SET_SELECTED_DIALOG_ID, SET_DIALOGS_IS_LOADING } from "../types";

const actions = {
    fetchDialogs: (): ThunkAction<void, RootState, unknown, DialogsActionTypes> => dispatch => {
        dispatch(actions.setDialogsIsLoading(true));
        dialogApi
            .getAll()
            .then(res => {
                dispatch(actions.setDialogs(res.data));
            })
            .catch(err => {
                dispatch(actions.setDialogsIsLoading(false));
            });
    },
    setSelectedDialogId: (id: string | null): DialogsActionTypes => (
        {
            type: SET_SELECTED_DIALOG_ID,
            payload: id
        }
    ),
    setDialogsIsLoading: (isLoading: boolean): DialogsActionTypes => (
        {
            type: SET_DIALOGS_IS_LOADING,
            payload: isLoading
        }
    ),
    setDialogs: (dialogs: IDialog[]): DialogsActionTypes => (
        {
            type: SET_DIALOGS,
            payload: dialogs
        }
    )
}

export default actions;