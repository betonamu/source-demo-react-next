import React, { useState } from 'react';
import { Layout } from 'antd';

import Container from '../../Common/Container';
import Dashboards from './Dashboard';
import Sider from './Sider';

import styles from './scss/Admin.module.scss';




function index({ children }) {

    const [tab, setTab] = useState('Danh sách xe')

    const handleGetTab = (title) => {
        setTab(title)
    }

    return (
        <Container >
            <Layout className={styles.antBack}>
                <Sider handleGetTab={handleGetTab} />
                <Dashboards tab={tab} children={children} />
            </Layout>
        </Container>
    );
}

export default index;