import React from 'react';

import { Button, Col, Row, Table, Tag } from 'antd';
import { CopyOutlined, DeleteOutlined, PlusOutlined, RedoOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { dataTable } from './data/dataTable';
import { Circle } from '../../../../asstes/icons'

import styles from './scss/Table.module.scss'

const { Title } = Typography;

const columns = [
    {
        title: 'Mã đơn hàng',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Mã đơn ghép',
        dataIndex: 'compoundCode',
        key: 'compoundCode',
        sorter: (item1, item2) => {
            return item1.compoundCode > item2.compoundCode
        }
    },
    {
        title: 'Khách hàng',
        dataIndex: 'customer',
        key: 'customer',
    },
    {
        title: 'Tổng chi phí',
        dataIndex: 'totalExpenses',
        key: 'totalExpenses',
        sorter: (item1, item2) => {
            return item1.totalExpenses > item2.totalExpenses
        }
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
        render: status => (
            <>
                {status.map(tag => {
                    let color = 'default';
                    if (tag === 'Đơn mới') {
                        color = 'grey';
                    }
                    else if (tag === 'Đang vận chuyển') {
                        color = 'cyan'
                    }
                    else if (tag === 'Hoàn tất') {
                        color = '#4cd137'
                    }
                    else if (tag === 'Đã giao') {
                        color = 'red'
                    }

                    return (
                        <div key={tag} className={styles.status}>
                            <Circle style={{ fill: color }} className={styles.circle} />
                            {tag}
                        </div>

                    );
                })}
            </>
        ),
    },
    {
        title: 'Thời gian tạo',
        dataIndex: 'creationTime',
        key: 'creationTime',
        sorter: (item1, item2) => {
            return item1.creationTime > item2.creationTime
        }
    },
    {
        title: 'Thanh toán',
        dataIndex: 'abate',
        key: 'abate',
    },
];

function index() {
    return (
        <Content className={styles.antLayoutContent}>
            <Row className={styles.antRow}>
                <Col span={14}>
                    <Title level={5} className={styles.antTypography}>Tất cả</Title>
                </Col>
                <Col span={10} className={styles.antCol12}>
                    <Button type="primary" htmlType="submit" className={styles.antBtn} icon={<CopyOutlined />}>
                        Ghép đơn hàng
                    </Button>
                    <Button type="primary" htmlType="submit" icon={<PlusOutlined />} className={styles.antBtn}>
                        Tạo đơn hàng
                    </Button>

                    <RedoOutlined className={styles.antBtn} />
                    <DeleteOutlined />
                </Col>
            </Row>
            <Table pagination={{ pageSize: 10 }} columns={columns} rowSelection={true} dataSource={dataTable}>

            </Table>
        </Content>
    );
}

export default index;