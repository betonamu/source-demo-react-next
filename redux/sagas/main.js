import { takeLatest } from 'redux-saga/effects';
import apiConfig from '../../constants/apiConfig';
import { mainActionTypes } from "../actions";
import { processLoadingAction } from '../helper';

const {GET_DATA} = mainActionTypes;

const getData = (payload) => {
    return processLoadingAction(apiConfig.main.getData, payload);
}

export default[
    takeLatest(GET_DATA, getData)
]