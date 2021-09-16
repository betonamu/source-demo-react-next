import React from 'react';
import Form from '../Form' 
import { Breadcrumb, Layout, Menu, Row, PageHeader } from 'antd'
import { dataSider } from './data';
import { Dashboard } from '../../../asstes/icons';
const { Sider, Content } = Layout
function index() {
    return (
        <Layout>
            <Layout>
                <Row>
                    <Sider>
                        <Menu defaultSelectedKeys={['0']} mode="inline">
                            <Menu.Item key="Dashboard" icon={<Dashboard />}>
                                Dashboard
                            </Menu.Item>
                            {
                                dataSider.map((item, index) => (
                                    <Menu.Item key={index} icon={item.icon}>
                                        {item.title}
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    </Sider>
                </Row>
                <Layout>
                    <Content>
                        <Breadcrumb style={{ background: 'white', padding: '0px 20px' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">Dashboard</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <PageHeader style={{ padding: '20px 20px', background: 'white' }} className="site-page-header"
                            title="Đơn hàng"
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

                </Layout>
            </Layout>
        </Layout>
    );
}

export default index;