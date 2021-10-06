import { createAction } from 'redux-actions';

export const actionTypes = {
    GET_DATA: 'main/GET_DATA',
}
export const actions = {
    getData: createAction(actionTypes.GET_DATA),
}