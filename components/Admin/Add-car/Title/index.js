import React from 'react';

import { Form} from 'antd';
import { Typography } from 'antd';

import styles from './scss/Form.module.scss'

const { Title } = Typography;

export default  function index() {

    return (
        <Form className={styles.antForm}>
            <Title level={4}>Xe vận chuyển</Title>
        </Form >
    );
}