export const actionTypes = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET"
};

export const actions = {
  increment: () => {
    return { type: actionTypes.INCREASE }
  },
  decrement: () => {
    return { type: actionTypes.DECREASE }
  },
  reset: () => {
    return { type: actionTypes.RESET }
  },
}
