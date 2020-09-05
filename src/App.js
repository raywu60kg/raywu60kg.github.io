import React from 'react';
// import './App.css';
import HandleMenuItemStatus from './HandleMenuItemStatus'
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Typography } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContentAboutMe from './contents/ContentAboutMe'
import ContentExperience from './contents/ContentExperience'
import ContentEducation from './contents/ContentEducation'
import ContentSkills from './contents/ContentSkills'
import ContentProjects from './contents/ContentProjects'
const { Content, Sider } = Layout;
const { Title } = Typography;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuItemKey: "aboutMe", collapsed: false };

  }

  handleMenuItemOnClick = (menuObj) => {
    console.log(`menuObj.key`, menuObj.key, this.state.menuItemKey)
    this.setState({
      menuItemKey: menuObj.key
    })
    this.handleSiderCollapsed()
  };
  handleSiderCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <Router>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            theme='light'
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={this.handleSiderCollapsed}
          >
            <Content style={{ padding: '24px 16px' }}>
              <Title level={4}>Wu Hao Hsiang</Title>
            </Content>
            <Menu
              theme="light"
              mode="vertical"
              defaultSelectedKeys={['aboutMe']}>
              <Menu.Item key="aboutMe">
                <Icon type="user" />
                <span className="aboutMe"><Link to="/about">About Me</Link></span>
              </Menu.Item>
              <Menu.Item key="experience">
                <Icon type="rise" />
                <span className="experience"><Link to="/experience">Experience</Link></span>
              </Menu.Item>
              <Menu.Item key="education">
                <Icon type="read" />
                <span className="education"><Link to="/education">Education</Link></span>
              </Menu.Item>
              <Menu.Item key="skills">
                <Icon type="tool" />
                <span className="skills"><Link to="/skills">Skills</Link></span>
              </Menu.Item>
              <Menu.Item key="projects">
                <Icon type="project" />
                <span className="projects"><Link to="/projects">Projects</Link></span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px 0' }}>
              <Switch>
                <Route exact path="/">
                  <ContentAboutMe />
                </Route>
                <Route exact path="/about">
                  <ContentAboutMe />
                </Route>
                <Route exact path="/education">
                  <ContentEducation />
                </Route>
                <Route exact path="/experience">
                  <ContentExperience />
                </Route>
                <Route  exact path="/projects">
                  <ContentProjects/>
                </Route>
                <Route exact path="/skills">
                  <ContentSkills />
                </Route>
              </Switch>
              {/* <HandleMenuItemStatus menuItemKey={this.state.menuItemKey} /> */}
            </Content>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App;
