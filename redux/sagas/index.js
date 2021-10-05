import { all } from 'redux-saga/effects';
import home from "./home";
import main from './main';

const sagas = [
    ...home,
    ...main,
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;