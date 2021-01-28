import { ThunkAction } from "redux-thunk";

import { dialogApi } from "../../utils/api";
import { RootState } from "../store";
import { DialogActionTypes, IDialog, SET_DIALOGS } from "../types";

const actions = {
    fetchDialogs: (): ThunkAction<void, RootState, unknown, DialogActionTypes> => async dispatch => {
        const res = await dialogApi.getAll();
        dispatch(actions.setDialogs(res.data));
    },
    setDialogs: (dialogs: IDialog[]): DialogActionTypes => (
        {
            type: SET_DIALOGS,
            payload: dialogs
        }
    )
}

export default actions;