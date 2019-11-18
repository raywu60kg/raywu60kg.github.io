import React from 'react';
import { Layout, Typography } from 'antd';
import ContentAboutMe from './contents/ContentAboutMe'
import ContentExperience from './contents/ContentExperience'
import ContentEducation from './contents/ContentEducation'
import ContentSkills from './contents/ContentSkills'
import ContentProjects from './contents/ContentProjects'
const { Title } = Typography;

const { Header, Content} = Layout;

class HandleMenuItemStatus extends React.Component {
    constructor(props) {
        super(props);
        this.MenuItemMappingObject = {
            'aboutMe': {
                'displayName': 'About Wu Hao Hsiang',
                'return': <ContentAboutMe/>},
            'experience': {
                'displayName': 'Experience',
                'return': <ContentExperience/>},
            'education': {
                'displayName': 'Education',
                'return': <ContentEducation/>    
            },
            'skills': {
                'displayName': 'Skills',
                'return': <ContentSkills/>    
            },
            'projects': {
                'displayName': 'Projects',
                'return': <ContentProjects/>
            }
        }
    }

    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: '24px 16px 64px',textAlign:'center' }}>
                    <Title level={3}>{this.MenuItemMappingObject[this.props.menuItemKey]["displayName"]}</Title>
                </Header>
                <Content>
                    {this.MenuItemMappingObject[this.props.menuItemKey]["return"]}
                </Content>
            </Layout>
        )
    }
}
  

export default HandleMenuItemStatus;
