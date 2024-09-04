import React from "react";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export const HamburgerMenu = () => {
  return (
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Students">
        <Menu.Item key="2">All Students</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};
