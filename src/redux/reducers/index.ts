import { combineReducers } from "redux";

import dialogReducer from "./dialog";
import messageReducer from "./message";


export default combineReducers({
    dialog: dialogReducer,
    message: messageReducer,
})