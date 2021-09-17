import React, { useState } from 'react';
import { Layout, Row } from 'antd';

import Container from '../Common/Container';
import Dashboards from './Dashboard';
import Sider from './Sider';

import styles from './scss/Admin.module.scss';




function index() {

    const [tab, setTab] = useState('Đơn hàng')

    const handleGetTab = (title) => {
        setTab(title)
    }

    return (
        <Container >
            <Layout className={styles.antLayout}>
                <Layout>
                    <Row>
                        <Sider handleGetTab={handleGetTab} />
                    </Row>
                    <Layout>
                        <Dashboards tab={tab} />
                    </Layout>
                </Layout>
            </Layout>
        </Container>
    );
}

export default index;