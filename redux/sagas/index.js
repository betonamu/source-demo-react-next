import { all } from 'redux-saga/effects';
import home from "./home";

const sagas = [
    ...home,
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;