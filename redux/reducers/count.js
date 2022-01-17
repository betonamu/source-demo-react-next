import { counterActionTypes } from "../actions";

const initState = {
  count: 0
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case counterActionTypes.INCREASE:
      console.log(action);
      return {
        ...state,
        count: state.count + 1
      };
    case counterActionTypes.DECREASE:
      console.log(action);

      return {
        ...state,
        count: state.count - 1
      };
    case counterActionTypes.RESET:
      console.log(action);

      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default counter;
