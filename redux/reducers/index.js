import { createStore } from "redux";
import { actionType } from "../actions";

const initState = {
  count: 0
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case actionType.INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    case actionType.DECREASE:
      return {
        ...state,
        count: state.count - 1
      };
    case actionType.RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default counter;
