import { counterActionTypes } from "../actions";

const initState = {
  count: 0
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case counterActionTypes.INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    case counterActionTypes.DECREASE:
      return {
        ...state,
        count: state.count - 1
      };
    case counterActionTypes.RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default counter;
