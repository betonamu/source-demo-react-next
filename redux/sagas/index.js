import { all } from 'redux-saga/effects';
import count from './count';
import home from "./home";

const sagas = [
    ...count,
    ...home,
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;