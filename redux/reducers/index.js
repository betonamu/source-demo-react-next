import { combineReducers } from "redux";

import home from "./home";
import main from "./main";
import category from "./category";

const rootReducer = combineReducers({
    home,
    main,
    category,
});

export default rootReducer;