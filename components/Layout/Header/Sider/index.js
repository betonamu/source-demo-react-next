import React from 'react';
import { Layout, Menu } from 'antd';

import { Dashboard } from '../../../../asstes/icons';

import { dataSider } from './data';

import styles from '../scss/Admin.module.scss'

const { Sider } = Layout

function index({ handleGetTab }) {

    const handleGetSider = (title) => {
        handleGetTab(title);
    }

    return (
        <Sider className={styles.antLayoutSiderChildren}>
            <Menu defaultSelectedKeys={['0']} mode="inline">
                <Menu.Item key="Dashboard" icon={<Dashboard />}>
                    Dashboard
                </Menu.Item>
                {
                    dataSider.map((item, index) => (
                        <Menu.Item key={index} icon={item.icon} onClick={() => handleGetSider(item.title)}>
                            {item.title}
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
    );
}

export default index;