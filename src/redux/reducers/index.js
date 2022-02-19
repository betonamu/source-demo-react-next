import { combineReducers } from "redux";

import loading from "./loading";
import counter from "./counter";

const rootReducer = combineReducers({
    loading,
    counter,
});

export default rootReducer;