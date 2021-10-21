import { takeLatest } from 'redux-saga/effects';
import apiConfig from '../../constants/apiConfig';
import { categoryActionTypes } from "../actions";
import { processLoadingAction } from '../helper';

const {GET_CATEGORY} = categoryActionTypes;

const getList = (payload) => {
    return processLoadingAction(apiConfig.category.getList, payload);
}

export default[
    takeLatest(GET_CATEGORY, getList)
]