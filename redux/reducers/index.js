import { combineReducers } from "redux";

import home from "./home";
import main from "./main";
import product from "./product";

const rootReducer = combineReducers({
    home,
    main,
    product,
});

export default rootReducer;