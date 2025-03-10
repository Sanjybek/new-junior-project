// @ts-ignore
import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// eslint-disable-next-line import/order
import { Layout, Menu } from 'antd';

// @ts-ignore
import Orders from "@components/Orders/index.jsx";
// @ts-ignore
import Product from "@components/Product/index.jsx";

import styles from './layout.module.scss'
const { Content, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const Layoud = () => {

  return (
    <Layout>
      <Sider>
        <Menu className={styles.layoud} theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Content>
          <Orders></Orders>
          <Product></Product>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Layoud;
