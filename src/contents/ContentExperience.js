import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Typography } from 'antd';
const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

class ContentExperience extends React.Component {
    render() {
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: '24px 16px 64px', textAlign: 'center' }}>
                    <Title level={3}>Experience</Title>
                </Header>
                <Content style={{ textAlign: 'left', padding: '24px' }}>
                    <Row>
                        <Col span={18}>
                            <Typography>
                                <Paragraph>
                                    <Title level={4}>Groundhog Technologies 2018/09-</Title>
                                    Data Scientist
                                </Paragraph>
                            </Typography>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}
export default ContentExperience;