import { combineReducers } from "redux";
import authReducer from "./auth";
import chanelReducers from "./chanel";
import currentUserReducer from "./currentUser";

export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducers,
})