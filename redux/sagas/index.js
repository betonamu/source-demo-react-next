import { all } from 'redux-saga/effects';
import home from "./home";
import main from './main';
import product from './product';

const sagas = [
    ...home,
    ...main,
    ...product,
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;