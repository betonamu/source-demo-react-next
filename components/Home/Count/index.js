import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrease, increase, reset } from '../../../redux/actions/count';

import styles from "./Index.module.scss"

function index() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const increaseCount = () => {
        dispatch(increase())
    }

    const decreaseCount = () => {
        dispatch(decrease())
    }

    const resetCount = () => {
        dispatch(reset())
    }


    return (
        <div className={styles.wrapperCount}>
            <div>
                {count}
            </div>
            <button type="button" onClick={decreaseCount}>-</button>
            <button type="button" onClick={increaseCount}>+</button>
            <button type="button" onClick={resetCount}>Reset</button>
        </div>
    );
}

export default index;