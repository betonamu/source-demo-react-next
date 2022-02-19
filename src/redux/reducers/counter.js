import { counterActionTypes } from "../actions";

const initialState = {
    count: 0,
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case counterActionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
    }
    return state;
}

export default counter;