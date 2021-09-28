export const actionType = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  RESET: "RESET"
};

export const actions = {
  increment: () => {
    return { type: actionType.INCREASE }
  },
  decrement: () => {
    return { type: actionType.DECREASE }
  },
  reset: () => {
    return { type: actionType.RESET }
  },
}
