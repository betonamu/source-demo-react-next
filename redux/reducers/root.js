import { combineReducers } from "redux";
import countReducer from "./count";

const root = combineReducers({
    count: countReducer
})

export default root;