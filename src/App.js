import React, { useState, useLayoutEffect } from "react";
import { Layout, message } from "antd";


import NavHeader from "./components/NavHeader";


import { useDispatch } from "react-redux";


import "./css/App.css";
import Graph from "./pages/Graph";
import Tools from "./pages/Tools";

const { Header,  Content, Sider } = Layout;

const siderStyle = {
  // color: '#fff',
  backgroundColor: '#fff',
};

function App() {
  
  return (
    <div className="App">
      <Layout>
        {/* 头部 */}
        <Header className="header">
          <NavHeader />
        </Header>
        {/* 内容区域 */}
        <Content className="content">
         <Graph></Graph>
        </Content>
        <Sider width="25%" style={siderStyle} className="sider">
          <Tools></Tools>
        </Sider>
      </Layout>

    </div>
  );
}

export default App;
