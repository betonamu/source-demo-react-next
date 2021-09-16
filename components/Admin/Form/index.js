import React from 'react';

import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { FilterOutlined } from "@ant-design/icons"


const { Option } = Select;
const { RangePicker } = DatePicker;

function index() {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields()
    }

    return (
        <Form form={form} labelCol={{ span: 10 }} style={{ background: 'white', margin: '20px 20px', padding: '20px 20px' }}>
            <Row>
                <Col span={7}>
                    <Form.Item label="Mã đơn hàng" name="code">
                        <Input placeholder="Please enter" />
                    </Form.Item>
                    <Form.Item label="Khách hàng" name="custom">
                        <Input placeholder="Please enter" />
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item label="Trạng thái" name="status">
                        <Select defaultValue="item-1">
                            <Option value="item-1">Đơn mới</Option>
                            <Option value="item-2">Item 2</Option>
                            <Option value="item-3">Item 3</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Thanh toán" name="payMethod">
                        <Select defaultValue="item-1">
                            <Option value="item-1">Chuyển khoản</Option>
                            <Option value="item-2">Item 2</Option>
                            <Option value="item-3">Item 3</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row >
                <Col span={14}>
                    <Form.Item labelCol={{ span: 5 }} label="Thời gian tạo" name="datePicker">
                        <RangePicker showTime placeholder={["From", "to"]} />
                    </Form.Item>
                </Col>
                <Col span={5} offset={5}>
                    <Form.Item>
                        <Button
                            htmlType="button"
                            style={{ margin: '0 8px' }}
                            onClick={onReset}
                        >
                            Xóa
                        </Button>
                        <Button type="primary" htmlType="submit" icon={< FilterOutlined />}>
                            Lọc
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form >
    );
}

export default index;