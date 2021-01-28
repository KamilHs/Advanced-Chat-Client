import { combineReducers } from "redux";

import dialogsReducer from "./dialog";

export default combineReducers({
    dialogs: dialogsReducer
})