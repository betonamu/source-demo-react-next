import React from 'react';

import { Breadcrumb, Layout, PageHeader } from 'antd';

import { Button, Col, Row} from 'antd';

import styles from "./scss/Dashboard.module.scss"

const { Content } = Layout

function index({ tab, children }) {
    return (
        <Content>
            <Breadcrumb className={styles.antBreadcrumb}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    {tab}
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row className={styles.antPageLayout}>
                <Col span={12} className={styles.antCol}>
                    <PageHeader title={tab} onBack={() => null}></PageHeader>
                </Col>
                <Col span={12}>
                    <Button type="primary" className={styles.flRight}>Cập nhật xe</Button>
                </Col>
            </Row>
            {children}
        </Content>
    );
}

export default index;