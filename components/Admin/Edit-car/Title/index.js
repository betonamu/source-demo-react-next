import React from 'react';

import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';

import { EditOutlined } from '@ant-design/icons';

import { Typography } from 'antd';

import styles from './scss/Form.module.scss'

const { Title } = Typography;

export default  function index() {

    return (
        <Form className={styles.antForm}>
            <Row>
                <Col span={12} className={styles.antCol}>
                    <Title level={4}>Xe tải 1.5 tấn</Title>
                </Col>
                <Col span={12} className={styles.antCol}>
                    <EditOutlined className={styles.flRight}/>
                </Col>
            </Row>
            
        </Form >
    );
}