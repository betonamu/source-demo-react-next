import React from 'react';
import { Breadcrumb, Layout, PageHeader } from 'antd';

import styles from "./scss/Dashboard.module.scss"

const { Content } = Layout

function index({ tab, children }) {
    console.log(styles)
    return (
        <Content>
            <Breadcrumb className={styles.antBreadcrumb}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    {tab}
                </Breadcrumb.Item>
            </Breadcrumb>
            <PageHeader className={styles.antPageLayout}
                title={tab}
                onBack={() => null}
            >
            </PageHeader>

            {children}

        </Content>
    );
}

export default index;