import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';

import { sidebarItems } from '@/constants';
import styles from './styles.module.css';

import mobileLogo from '/fav.png';
import logo from '/logo.png';

const { Header, Sider, Content } = Layout;

function CustomLayout() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleNavigation: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={240} // Adjusted width when expanded
        collapsedWidth={80} // Adjusted width when collapsed
        style={{
          position: 'fixed', // Fix the Sider
          height: '100vh', // Full height
          background: colorBgContainer,
          left: 0,
        }}
      >
        <div className={styles.imageContainer}>
          {collapsed
            ? <img src={mobileLogo} width={72} height={64} alt="tgway-mobile-logo" className={styles.mobileLogo} />
            : <img src={logo} width={161} height={69} alt="tgway-logo" />}
        </div>
        <Menu
          onClick={handleNavigation}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={sidebarItems}
        />
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 240 }}>
        <Header style={{ padding: 0, background: colorBgContainer, position: 'fixed', width: '100vw', zIndex: '10' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              marginLeft: 15,
            }}
          />
        </Header>
        <Content
          style={{
            padding: 24,
            marginTop: 72,
            marginRight: 8,
            marginBottom: 12,
            minHeight: '99vh',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default CustomLayout;
