import { IMessageState, MessagesActionTypes, SET_MESSAGES, SET_MESSAGES_IS_LOADING } from "../types";

const initialState: IMessageState = {
    messages: [],
    isLoading: false
}

const reducer = (state: IMessageState = initialState, action: MessagesActionTypes): IMessageState => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                isLoading: false,
                messages: action.payload
            }
        case SET_MESSAGES_IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;