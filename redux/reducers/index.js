import { combineReducers } from "redux";

import home from "./home";
import main from "./main";

const rootReducer = combineReducers({
    home,
    main,
});

export default rootReducer;