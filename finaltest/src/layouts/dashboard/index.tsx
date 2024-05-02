import React, { useState } from 'react';
import Requirement1 from '../../components/Requirement1';
import Requirement3 from '../../components/Requirement3';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    UserOutlined,
    LeftCircleOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const App1: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(''); // Mặc định chọn menu "Giới thiệu bản thân"

    const handleMenuClick = (key: string) => {
        setSelectedMenu(key);
    };
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    selectedKeys={[selectedMenu]}
                    onClick={({ key }) => handleMenuClick(key.toString())}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Giới thiệu bản thân',

                        },
                        {
                            key: '2',
                            icon: <LeftCircleOutlined />,
                            label: 'Lĩnh vực chuyên môn',
                        },
                        {
                            key: '3',
                            icon: <LogoutOutlined />,
                            label: 'Đăng xuất',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {selectedMenu == '1' ? <Requirement1 /> : null}
                    {selectedMenu == '2' ? <Requirement3 /> : null}
                </Content>
            </Layout>
        </Layout>
    );
};

export default App1;