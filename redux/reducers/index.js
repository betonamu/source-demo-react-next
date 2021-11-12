import { combineReducers } from "redux";

import home from "./home";
import main from "./main";
import product from "./product";
import category from "./category";

const rootReducer = combineReducers({
    home,
    main,
    product,
    category,
});

export default rootReducer;