import React from 'react';
import { Breadcrumb, Layout, PageHeader } from 'antd';

import Form from '../Form';

import styles from './scss/Dashboard.module.scss';


const { Content } = Layout

function index({ tab }) {
    return (
        <Content>
            <Breadcrumb className={styles.antBreadcrumb}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    {tab}
                </Breadcrumb.Item>
            </Breadcrumb>
            <PageHeader className={styles.sitePageHeader}
                title={tab}
                onBack={() => null}
            >
            </PageHeader>
            <Content>
                <Form />
            </Content>
            <Content>
                {/* table */}
            </Content>
        </Content>
    );
}

export default index;