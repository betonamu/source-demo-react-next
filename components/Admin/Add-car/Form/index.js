import React from 'react';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { FilterOutlined } from "@ant-design/icons"

import { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import { Typography } from 'antd';
import styles from './scss/Form.module.scss'

const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
      
export default  function index() {
    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields()
    }
 
    const [fileList, setFileList] = useState([]);
    const [fileList1, setFileList1] = useState([]);
    const [fileList2, setFileList2] = useState([]);
    const [fileList3, setFileList3] = useState([]);
      
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onChange1 = ({ fileList: newFileList1 }) => {
        setFileList1(newFileList1);
    };
    const onChange2 = ({ fileList: newFileList2 }) => {
        setFileList2(newFileList2);
    };
    const onChange3 = ({ fileList: newFileList3 }) => {
        setFileList3(newFileList3);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
        };

    return (
        <Form form={form} className={styles.antForm}>
            <Row>
                <Col span={8} className={styles.antCol}>
                    <Form.Item className={styles.antMr} label="Loại xe" name="code"></Form.Item>
                    <Input placeholder="Please enter" />
                </Col>
                <Col span={8} className={styles.antCol}>
                    <Form.Item className={styles.antMr} label="Hiệu xe" name="code"></Form.Item>
                        <Input placeholder="Please enter" />
                </Col>
                <Col span={8} className={styles.antCol}>
                    <Form.Item className={styles.antMr} label="Biển số xe" name="code"></Form.Item>
                        <Input placeholder="Please enter" />
                </Col>
            </Row>
            <Row >
                <Col span={8} className={styles.antCol}>
                    <Form.Item className={styles.antMr} label="Ngày kiểm định" name="code"></Form.Item>
                    <DatePicker className={styles.antPicker}/>
                </Col>
                <Col span={8}>
                    <Form.Item className={styles.antMr} label="Ngày hết hạn kiểm định" name="code"></Form.Item>
                    <DatePicker className={styles.antPicker}/>
                </Col>
            </Row>
            <Row>
                <Col span={16} className={styles.antMrb}>
                    <Form.Item className={styles.antMr} label="Ghi chú" name="code"></Form.Item>
                    <Input.TextArea/>
                </Col>
            </Row>
            <Row >
                <Col span={14} className={styles.antCol}>
                    <Form.Item className={styles.antMr} label="Hình ảnh chứng từ kiểm định" name="code"></Form.Item>
                    <ImgCrop rotate>
                        <Upload listType="picture-card" fileList={fileList} onChange={onChange} onPreview={onPreview}>
                        {fileList.length < 5 && '+'}
                        </Upload>
                    </ImgCrop>
                </Col>
                <Col span={5} offset={5}>
                    <Form.Item className={styles.flRight} name="code">Tải hình ảnh</Form.Item>
                </Col>
            </Row>
            <Row >
                <Col span={4} className={styles.antCol}>
                    <Form.Item className={styles.antMr} label="Hình ảnh xe" name="code"></Form.Item>
                    <ImgCrop rotate>
                        <Upload listType="picture-card" fileList={fileList1} onChange={onChange1} onPreview={onPreview}>
                        {fileList.length < 5 && '+'}
                        </Upload>
                    </ImgCrop>
                </Col>
                <Col span={4} className={styles.antCol}>
                    <Form.Item className={styles.antMr} label="" name="code"></Form.Item>
                    <ImgCrop rotate>
                        <Upload listType="picture-card" fileList={fileList2} onChange={onChange2} onPreview={onPreview}>
                        {fileList.length < 5 && '+'}
                        </Upload>
                    </ImgCrop>
                </Col>
                <Col span={4} className={styles.antCol}>
                    <Form.Item className={styles.antMr} label="" name="code"></Form.Item>
                    <ImgCrop rotate>
                        <Upload listType="picture-card" fileList={fileList3} onChange={onChange3} onPreview={onPreview}>
                        {fileList.length < 5 && '+'}
                        </Upload>
                    </ImgCrop>
                </Col>
                <Col span={7} offset={5}>
                    <Form.Item className={styles.flRight} name="code">Tải hình ảnh</Form.Item>
                </Col>
            </Row>
        </Form >
    );
};