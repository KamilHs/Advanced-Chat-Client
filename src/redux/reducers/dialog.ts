import { DialogActionTypes, SET_DIALOGS, IDialog } from "../types";

const initialState: IDialog[] = [];

const reducer = (state: IDialog[] = initialState, action: DialogActionTypes): IDialog[] => {
    switch (action.type) {
        case SET_DIALOGS:
            return [...action.payload];
        default:
            return state;
    }
}

export default reducer;