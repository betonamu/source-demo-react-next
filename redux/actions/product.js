import { createAction } from 'redux-actions';

export const actionTypes = {
    GET_DETAIL: 'product/GET_DETAIL',
}
export const actions = {
    getDetail: createAction(actionTypes.GET_DETAIL),
}