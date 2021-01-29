import { ThunkAction } from "redux-thunk";

import { messageApi } from "../../utils/api";
import { RootState } from "../store";
import { IMessage, SET_MESSAGES, MessagesActionTypes, SET_MESSAGES_IS_LOADING } from "../types";

const actions = {
    fetchMessagesById: (id: string | null): ThunkAction<void, RootState, unknown, MessagesActionTypes> => dispatch => {
        dispatch(actions.setMessagesIsLoading(true));
        messageApi
            .getAllMessagesById(id)
            .then(res => {
                dispatch(actions.setMessages(res.data));
            })
            .catch(err => {
                dispatch(actions.setMessagesIsLoading(false));
            })
    },
    setMessagesIsLoading: (isLoading: boolean): MessagesActionTypes => (
        {
            type: SET_MESSAGES_IS_LOADING,
            payload: isLoading
        }
    ),
    setMessages: (messages: IMessage[]): MessagesActionTypes => (
        {
            type: SET_MESSAGES,
            payload: messages
        }
    )
}

export default actions;