import React from "react";
import {Link, withRouter} from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './css/main-layout.css';

const { Header, Content, Footer } = Layout;

const breadcrumbNameMap = {
  '/login' : 'Login',
  '/register' : 'Register',
  '/booking' : 'Booking',  
}
const Home = withRouter(props => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="/">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="crumb">
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
});

const Location = withRouter(props => {
  const { location } = props;
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/"><a href="/">Home</a></Menu.Item>
      <Menu.Item key="/login"><a href="/login">Login</a></Menu.Item>
      <Menu.Item key="/register"><a href="/register">Register</a></Menu.Item>
    </Menu>
  )
})
class MainLayout extends React.Component{
  render() {
    return (
      <div>
        <Layout className="layout">
        <Header>
          <div className="logo">
            <h1>POOLIIIT</h1>
          </div>
          <Location/>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Home/>
          {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div> */}
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
          {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.location.pathname}</div> */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Made by Zense</Footer>
      </Layout>
      </div>
    );
  }
}

export default MainLayout; 

