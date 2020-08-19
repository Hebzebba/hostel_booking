import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import TableData from "./table";
import Post from "./post";
import UpdateProfile from "./updateprofile";
import EditHostels from "./editHostels";


const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
  state = {
    collapsed: false,
    conten: () => <TableData />,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  table = () => {
    return this.setState({ conten: () => <TableData /> });
  };

  post = () => {
    return this.setState({ conten: () => <Post /> });
  };

 edit = () => {
    return this.setState({ conten: () => <EditHostels /> });
  };

  updateprofile = () => {
    return this.setState({ conten: () => <UpdateProfile /> });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={this.table}>
              Booked
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              onClick={this.post}
            >
              Post
            </Menu.Item>

             <Menu.Item
              key="3"
              icon={<VideoCameraOutlined />}
              onClick={this.edit}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<UploadOutlined />}
              onClick={this.updateprofile}
            >
              Update profile
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <div className="content">{this.state.conten()}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
