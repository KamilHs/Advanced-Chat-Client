import { IMessageState, MessagesActionTypes, SET_MESSAGES, } from "../types";

const initialState: IMessageState = {
    messages: []
}

const reducer = (state: IMessageState = initialState, action: MessagesActionTypes): IMessageState => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                messages: action.payload
            }
        default:
            return state;
    }
}

export default reducer;