import React from 'react';
import 'antd/dist/antd.css';
import { Result, Layout,Icon,Spin } from 'antd';
const {  Content } = Layout;

class Experience extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Result icon={<Icon type="smile" theme="twoTone"/>} title="Work in progress"/>
                <Content style={{ textAlign: 'center', padding:'24px' }}>
                    <Spin size='large'/>
                </Content>
            </Layout>
        )
    }
}
export default Experience;