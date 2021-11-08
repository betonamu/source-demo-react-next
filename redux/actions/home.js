import { createAction } from 'redux-actions';

export const actionTypes = {
    FLASH_SALE: 'home/FLASH_SALE',
    GET_COLLECTION_BY_ID: 'home/GET_COLLECTION_BY_ID',
    GET_LIST: 'home/GET_LIST',
}

export const actions = {
    getFlashSale: createAction(actionTypes.FLASH_SALE),
    getCollectionById: createAction(actionTypes.GET_COLLECTION_BY_ID),
    getList: createAction(actionTypes.GET_LIST),
}