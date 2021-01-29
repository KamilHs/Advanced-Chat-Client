import { ThunkAction } from "redux-thunk";

import { messageApi } from "../../utils/api";
import { RootState } from "../store";
import { IMessage, SET_MESSAGES, MessagesActionTypes } from "../types";

const actions = {
    fetchMessagesById: (id: string | null): ThunkAction<void, RootState, unknown, MessagesActionTypes> => async dispatch => {
        const res = await messageApi.getAllMessagesById(id);
        dispatch(actions.setMessages(res.data));
    },
    setMessages: (messages: IMessage[]): MessagesActionTypes => (
        {
            type: SET_MESSAGES,
            payload: messages
        }
    )
}

export default actions;