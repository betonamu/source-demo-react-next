import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { decrease, increase, reset } from '../../../redux/actions/count';

import { Button } from 'antd';
import { Typography } from 'antd';

import styles from "./Index.module.scss"

const { Title } = Typography;

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
        <div className={styles.textCenter}>
            <Title level={3}>{count}</Title>
            <Button type="danger" onClick={resetCount}>Làm mới</Button>
            <Button type="primary" onClick={decreaseCount}>Giảm</Button>
            <Button type="primary" onClick={increaseCount}>Tăng</Button>
        </div>
    );
}

export default index; 