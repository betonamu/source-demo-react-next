import { all } from 'redux-saga/effects';
import home from "./home";
import main from './main';
import category from './category';

const sagas = [
    ...home,
    ...main,
    ...category,
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;