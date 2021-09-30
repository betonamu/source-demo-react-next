import { combineReducers } from "redux";

import counter from "./count";
import home from "./home";

const rootReducer = combineReducers({
    counter,
    home
});

export default rootReducer;