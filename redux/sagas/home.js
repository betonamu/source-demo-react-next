import { takeLatest } from 'redux-saga/effects';
import apiConfig from '../../constants/apiConfig';
import { homeActionTypes } from '../actions';
import { processLoadingAction } from '../helper';

const { FLASH_SALE, GET_COLLECTION_BY_ID} = homeActionTypes;

const getFlashSale = (payload) => {
    return processLoadingAction(apiConfig.home.getFlashSale, payload);
}

const getCollectionById = (payload) => {
    return processLoadingAction(apiConfig.home.getCollectionFlashSale, payload);
}

export default [
    takeLatest(FLASH_SALE, getFlashSale),
    takeLatest(GET_COLLECTION_BY_ID, getCollectionById),
];