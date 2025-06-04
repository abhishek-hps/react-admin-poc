// NeuronDrawer.tsx
import {
  MenuFoldOutlined,
  CloseOutlined,
  DashboardOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  TeamOutlined,
  AppstoreOutlined,
  DeploymentUnitOutlined,
  ThunderboltOutlined,
  ExperimentOutlined,
  CreditCardOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import { Drawer, Menu, Typography, Button } from 'antd';
import { useState } from 'react';

const { Title } = Typography;
const { SubMenu } = Menu;

export const NeuronDrawer = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);

  return (
    <div style={{background:'red'}}>
      {/* {!visible && (
        <Button
          type="text"
          icon={<MenuFoldOutlined style={{ color: '#fff', fontSize: 20 }} />}
          onClick={handleOpen}
          style={{
            position: 'fixed',
            top: 20,
            left: 20,
            zIndex: 1100,
            background: 'transparent',
            border: 'none',
          }}
        />
      )} */}
      <Drawer
        placement="left"
        closable={false}
        onClose={handleClose}
        visible={visible}
        bodyStyle={{
          padding: 0,
          backgroundColor: '#1b2430',
          height: '100%',
        }}
        width={260}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 20px',
            borderBottom: '1px solid #333',
          }}
        >
          <Title level={4} style={{ color: '#fff', margin: 0 }}>
            Husk Neuron
          </Title>
          <CloseOutlined
            onClick={handleClose}
            style={{ color: '#fff', fontSize: 18, cursor: 'pointer' }}
          />
        </div>

        <Menu
          mode="inline"
          theme="dark"
          defaultOpenKeys={['operations']}
          style={{
            backgroundColor: '#1b2430',
            color: '#fff',
            borderRight: 'none',
          }}
        >
          <Menu.Item
            key="dashboard"
            icon={<DashboardOutlined style={{ color: '#00ff66' }} />}
            style={{ color: '#00ff66', fontWeight: 'bold' }}
          >
            Dashboard
          </Menu.Item>

          <SubMenu
            key="operations"
            title="Operations"
            icon={<AppstoreOutlined style={{ color: '#00ff66' }} />}
            style={{ color: '#00ff66' }}
          >
            <Menu.Item key="customers" icon={<span style={{ color: '#00ff66' }}>🟢</span>}>
              Customers
            </Menu.Item>
            <Menu.Item key="plant360" icon={<DeploymentUnitOutlined />}>
              Plant 360
            </Menu.Item>
            <Menu.Item key="tariffs" icon={<CreditCardOutlined />}>
              Tariffs
            </Menu.Item>
            <Menu.Item key="health" icon={<ThunderboltOutlined />}>
              Plant Health
            </Menu.Item>
            <Menu.Item key="recharge" icon={<ExperimentOutlined />}>
              Recharge
            </Menu.Item>
            <Menu.Item key="meters" icon={<DatabaseOutlined />}>
              Meters
            </Menu.Item>
            <Menu.Item key="opsupdate" icon={<SettingOutlined />}>
              Operation Dasboard Update
            </Menu.Item>
          </SubMenu>

          <SubMenu key="finance" icon={<DollarOutlined />} title="Finance" />
          <SubMenu key="sales" icon={<ShoppingCartOutlined />} title="Sales" />
          <SubMenu key="admin" icon={<SettingOutlined />} title="Admin" />
          <SubMenu key="crm" icon={<TeamOutlined />} title="CRM" />
        </Menu>
      </Drawer>
    </div>
  );
};
