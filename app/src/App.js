import React from 'react';
// import './App.css';
import HandleMenuItemStatus from './HandleMenuItemStatus'
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Typography } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuItemKey: "aboutMe"};
  }

  handleMenuItemOnClick = (menuObj) => {
    console.log(`menuObj.key`, menuObj.key, this.state.menuItemKey)
    this.setState({ menuItemKey: menuObj.key })
  };

  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          theme='light'
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Content style={{padding:'24px 16px'}}>
            <Title level={4}>Hao Hsiang, Wu</Title>
          </Content>
          <Menu 
            theme="light" 
            mode="vertical" 
            defaultSelectedKeys={['aboutMe']}
            onClick={this.handleMenuItemOnClick}>
            <Menu.Item key="aboutMe">
              <Icon type="user" />
              <span className="aboutMe">About Me</span>
            </Menu.Item>
            <Menu.Item key="experience">
              <Icon type="rise" />
              <span className="experience">Experience</span>
            </Menu.Item>
            <Menu.Item key="education">
              <Icon type="read" />
              <span className="education">Education</span>
            </Menu.Item>
            <Menu.Item key="skills">
              <Icon type="tool" />
              <span className="skills">Skills</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content style={{ margin: '24px 16px 0' }}>
            <HandleMenuItemStatus menuItemKey={this.state.menuItemKey} />
          </Content>
          {/* <Footer style={{ textAlign: 'right' }}>True mastery of any skill takes a lifetime.</Footer> */}
        </Layout>
      </Layout>
    )
  }
}

export default App;
