import { HYDRATE } from 'next-redux-wrapper'
import { handleActions } from 'redux-actions';
import { homeActionTypes } from '../actions';
import { createSuccessActionType } from '../helper'

const { FLASH_SALE, GET_COLLECTION_BY_ID } = homeActionTypes;

const initialState = {
    flashSale: [],
    flashSaleProduct: {},
};

const home = handleActions(
    {
        [HYDRATE]: (state, action) => {
            return { ...state, ...action.payload.home }
        },
        [createSuccessActionType(FLASH_SALE)]: (state, action) => {
            return {
                ...state,
                flashSale: action.payload.data
            };
        },
        [createSuccessActionType(GET_COLLECTION_BY_ID)]: (state, action) => {
            return {
                ...state,
                flashSaleProduct: action.payload.data
            };
        }
    },
    initialState
);

export default home;