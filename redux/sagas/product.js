import { takeLatest } from 'redux-saga/effects';
import apiConfig from '../../constants/apiConfig';
import { productActionTypes } from "../actions";
import { processLoadingAction } from '../helper';

const {GET_DETAIL} = productActionTypes;

const getDetail = (payload) => {
    return processLoadingAction(apiConfig.product.getDetail, payload);
}

export default[
    takeLatest(GET_DETAIL, getDetail)
]