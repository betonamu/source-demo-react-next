import { createAction } from 'redux-actions';

export const actionTypes = {
    GET_CATEGORY: 'category/GET_CATEGORY',
}
export const actions = {
    getList: createAction(actionTypes.GET_CATEGORY),
}