const initialState = 0

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            state = state + 1
            return state;

        case "DECREASE":
            state = state - 1
            return state;

        case "RESET":
            state = 0
            return state;

        default:
            return state;
    }
}
export default countReducer