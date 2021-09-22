import React from 'react';
import { Button, Col, Row, Table, Tag, Typography, Pagination, Image } from 'antd';
import { CopyOutlined, DeleteOutlined, PlusOutlined, RedoOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import { dataTable } from './data/dataTable';
import styles from './scss/Table.module.scss'
const { Title } = Typography;

const columns = [
    {
        title: 'Hình ảnh xe',
        dataIndex: 'src',
        key: 'src',
        render: src =>{
            return <img src={src}></img>
        }
    },
    {
        title: 'Xe vận chuyển',
        dataIndex: 'compoundCode',
        key: 'compoundCode'
    },
    {
        title: 'Hiệu xe',
        dataIndex: 'customer',
        key: 'customer',
    },
    {
        title: 'Biển số xe',
        dataIndex: 'totalExpenses',
        key: 'totalExpenses'
    },
    {
        title: 'Ngày hết hạn kiểm định',
        dataIndex: 'creationTime',
        key: 'creationTime'
    },
    {
        title: 'Cập nhật',
        dataIndex: 'status',
        key: 'status',
        render: status =>{
            return <a className={styles.color}>{status}</a>
        }
    },
];

export default function index() {
    return (
        <Content className={styles.antLayoutContent}>
            <Row className={styles.antRow}>
                <Col span={14}>
                    <Title level={5} className={styles.antTypography}>Tất cả</Title>
                </Col>
                <Col span={10} className={styles.antCol12}>
                    <Button type="primary" htmlType="submit" icon={<PlusOutlined />} className={styles.antBtn}>
                        Tạo mới xe
                    </Button>
                    <RedoOutlined className={styles.antBtn} />
                    <DeleteOutlined />
                </Col>
            </Row>
            <Table pagination={false} columns={columns} rowSelection={true} dataSource={dataTable}></Table>
            <Pagination className={styles.antPagination} defaultCurrent={4} total={100}/>
        </Content>
    );
}