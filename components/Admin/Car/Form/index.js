import React from 'react';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { FilterOutlined } from "@ant-design/icons"
import styles from './scss/Form.module.scss'

const { Option } = Select;
const { RangePicker } = DatePicker;

export default  function index() {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields()
    }

    return (
        <Form form={form} labelCol={{ span: 10 }} className={styles.antForm}>
            <Row >
                <Col span={6}>
                    <Form.Item label="Loại xe" name="code">
                        <Input placeholder="Please enter" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Hiệu xe" name="code">
                        <Input placeholder="Please enter" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Biển số xe" name="code">
                        <Input placeholder="Please enter" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item className={styles.flRight}>
                        <Button htmlType="button" onClick={onReset}>Xóa</Button>
                        <Button type="primary" htmlType="submit" icon={< FilterOutlined />} className={styles.antBtn}>Lọc</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form >
    );
}