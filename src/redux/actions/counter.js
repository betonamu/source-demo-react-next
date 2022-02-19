import { createAction } from "redux-actions"

export const actionTypes = {
    RESET: 'counter/RESET',
    INCREMENT: 'counter/INCREMENT',
    DECREMENT: 'counter/DECREMENT',
}

export const actions = {
    reset : createAction(actionTypes.RESET),
    increment : createAction(actionTypes.INCREMENT),
    decrement : createAction(actionTypes.DECREMENT),
}