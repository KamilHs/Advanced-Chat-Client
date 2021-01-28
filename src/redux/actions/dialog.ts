import { ThunkAction } from "redux-thunk";

import { dialogApi } from "../../utils/api";
import { RootState } from "../store";
import { DialogsActionTypes, IDialog, SET_DIALOGS } from "../types";

const actions = {
    fetchDialogs: (): ThunkAction<void, RootState, unknown, DialogsActionTypes> => async dispatch => {
        const res = await dialogApi.getAll();
        dispatch(actions.setDialogs(res.data));
    },
    setDialogs: (dialogs: IDialog[]): DialogsActionTypes => (
        {
            type: SET_DIALOGS,
            payload: dialogs
        }
    )
}

export default actions;