import logo from './svgs/twitter.svg';
import './App.css';
import ButtonPanel from './ButtonPanel.js'
import Banner from './Banner.js'
import BannerDao from './BannerDao.js'
import Home from './Timeline'
import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <Layout>
      <Header className="Header">
	  	<BannerDao />
	  </Header>
      <Footer className="Footer">
	  	<Home />
	  </Footer>
    </Layout>
      </header>
    </div>
  );
}

export default App;
