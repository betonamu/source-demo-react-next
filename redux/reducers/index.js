import { combineReducers } from "redux";

import home from "./home";
import main from "./main";
import detail from "./detail";
import category from "./category";

const rootReducer = combineReducers({
    home,
    main,
    detail,
    category,
});

export default rootReducer;