import { combineReducers } from "redux";

import dialogReducer from "./dialog";

export default combineReducers({
    dialog: dialogReducer,
})