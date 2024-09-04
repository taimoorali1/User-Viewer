import React from 'react';
import { Menu } from 'antd';

export const HorizontalMenu = () => {
  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} >
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">Contact</Menu.Item>
    </Menu>
  );
};

