import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Typography } from 'antd';
const { Content } = Layout;
const { Title, Paragraph } = Typography;

class ContentExperience extends React.Component {
    render() {
        return (
            <Layout>
                <Content style={{ textAlign: 'left', padding: '24px' }}>
                    <Row>
                        <Col span={18}>
                            <Typography>
                                <Paragraph>
                                    <Title level={4}>Groundhog Technologies</Title>
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