import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { HorizontalMenu } from "./components/HorizontalMenu";
import { HomePage } from "./pages/HomePage";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <HamburgerMenu />
        </Sider>
        <Layout>
          <Header className='header_nav'>
            <HorizontalMenu />
          </Header>
          <Content style={{ padding: "20px" }}>
            <Routes>
              <Route path="/User-Viewer" element={<HomePage />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
